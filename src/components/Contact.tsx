import React, { useState, useEffect } from 'react';
import { PageId, ContactSubmission } from '../types/index.ts';
import { FAQS } from '../data/content.ts';
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  Sparkles,
  RotateCcw,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface ContactProps {
  initialServices?: string[];
  initialBudget?: string;
  initialNote?: string;
  onNavigate?: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({
  initialServices = [],
  initialBudget = '',
  initialNote = '',
  onNavigate
}) => {
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServices.length > 0 ? initialServices : ['AI Video Creation']
  );
  const [budget, setBudget] = useState(initialBudget || '$15k - $30k');
  const [timeline, setTimeline] = useState('2–4 Weeks');
  const [details, setDetails] = useState(initialNote || '');

  // Validation & status states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState<ContactSubmission | null>(null);

  // Stored submissions history in localStorage
  const [pastSubmissions, setPastSubmissions] = useState<ContactSubmission[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Update fields if initial props change
  useEffect(() => {
    if (initialServices && initialServices.length > 0) {
      setSelectedServices(initialServices);
    }
    if (initialBudget) {
      setBudget(initialBudget);
    }
    if (initialNote) {
      setDetails(initialNote);
    }
  }, [initialServices, initialBudget, initialNote]);

  // Load past submissions from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('arves_inquiries');
      if (stored) {
        setPastSubmissions(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const availableServices = [
    'AI Video Creation',
    'AI Website Building',
    'AI Workflow Automations',
    'Dedicated AI Studio Retainer',
    'Custom Enterprise Architecture'
  ];

  const budgetOptions = [
    '$5k - $15k',
    '$15k - $30k',
    '$30k - $75k',
    '$75k+'
  ];

  const timelineOptions = [
    'Immediate (48h Fast-Track)',
    '2–4 Weeks',
    '1–3 Months',
    'Exploratory / Planning'
  ];

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) {
      errs.fullName = 'Please enter your name.';
    }
    if (!email.trim()) {
      errs.email = 'Please provide your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid work email address.';
    }
    if (!company.trim()) {
      errs.company = 'Please enter your company or project name.';
    }
    if (selectedServices.length === 0) {
      errs.services = 'Please select at least one service.';
    }
    if (!details.trim() || details.trim().length < 15) {
      errs.details = 'Please briefly describe your objectives or questions (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & reference generation
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: `ARV-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName,
        email,
        company,
        selectedServices,
        budget,
        timeline,
        details,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' })
      };

      try {
        const updated = [newSubmission, ...pastSubmissions];
        setPastSubmissions(updated);
        localStorage.setItem('arves_inquiries', JSON.stringify(updated));
      } catch {
        // Fallback
      }

      setSubmittedBrief(newSubmission);
      setIsSubmitting(false);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedBrief(null);
    setFullName('');
    setEmail('');
    setCompany('');
    setDetails('');
    setErrors({});
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HEADER */}
      <section className="pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wide uppercase">
            <span>Client Consultation & Discovery</span>
            <span aria-hidden="true">·</span>
            <span>Response In &lt; 4 Hours</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white text-balance leading-tight">
            Initiate Your Project Brief.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Tell us about your production goals across AI video creation, intelligent web platforms, or enterprise automations. You will consult directly with an Arves partner, not a high-pressure sales rep.
          </p>
        </div>
      </section>

      {/* 2. FORM & STUDIO DETAILS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form or Submission Confirmation */}
          <div className="lg:col-span-7">
            {submittedBrief ? (
              /* SUBMISSION SUCCESS STATE */
              <div className="rounded-3xl bg-neutral-900 border border-emerald-500/30 p-8 sm:p-10 space-y-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Inquiry Confirmed · Dispatch Successful</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Brief Received, {submittedBrief.fullName.split(' ')[0]}.
                  </h2>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Our lead architect is reviewing your specifications for <strong className="text-white">{submittedBrief.company}</strong>. We will return an initial feasibility brief and calendar link within 4 business hours.
                  </p>
                </div>

                {/* Summary Box */}
                <div className="p-5 rounded-2xl bg-neutral-950 border border-white/10 space-y-4 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-neutral-400">Reference Tracking Code</span>
                    <span className="font-mono font-bold text-amber-400">{submittedBrief.id}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-neutral-400 block mb-1">Target Services</span>
                      <span className="text-white font-medium">{submittedBrief.selectedServices.join(', ')}</span>
                    </div>

                    <div>
                      <span className="text-neutral-400 block mb-1">Budget Allocation</span>
                      <span className="text-white font-medium">{submittedBrief.budget}</span>
                    </div>

                    <div>
                      <span className="text-neutral-400 block mb-1">Desired Timeline</span>
                      <span className="text-white font-medium">{submittedBrief.timeline}</span>
                    </div>

                    <div>
                      <span className="text-neutral-400 block mb-1">Contact Email</span>
                      <span className="text-white font-medium">{submittedBrief.email}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-neutral-400 block mb-1">Project Objectives:</span>
                    <p className="text-neutral-300 italic">{submittedBrief.details}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="mailto:contact@arves.ai?subject=Follow-up on Brief ${submittedBrief.id}"
                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-colors"
                  >
                    Direct Email Follow-up
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={handleResetForm}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              /* THE INTEGRATED CONTACT FORM */
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 sm:p-10 space-y-8"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    Project Discovery Brief
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill in your details below to receive a personalized scope and consultation invite.
                  </p>
                </div>

                {/* Personal & Company Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Deepak Gopani"
                      className={`w-full px-4 py-3 rounded-lg bg-white/[0.03] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all ${
                        errors.fullName ? 'border-rose-500/70' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Work Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-lg bg-white/[0.03] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all ${
                        errors.email ? 'border-rose-500/70' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    Company or Organization Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Arves Innovations or Brand Name"
                    className={`w-full px-4 py-3 rounded-lg bg-white/[0.03] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all ${
                      errors.company ? 'border-rose-500/70' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.company && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Service Selection Chips */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="block text-xs font-semibold text-neutral-300">
                      Services of Interest <span className="text-amber-400">*</span>
                    </label>
                    <span className="text-[11px] text-neutral-400">Select all that apply</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((svc) => {
                      const isSelected = selectedServices.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer whitespace-nowrap active:scale-[0.98] ${
                            isSelected
                              ? 'bg-amber-400/20 border-amber-400/60 text-amber-300 font-semibold shadow-xs'
                              : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {isSelected && '✓ '}
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.services}
                    </p>
                  )}
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Estimated Budget Bracket
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setBudget(opt)}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                            budget === opt
                              ? 'bg-white text-neutral-950 font-semibold'
                              : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Target Launch / Timeline
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timelineOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setTimeline(opt)}
                          className={`py-2 px-2 text-[11px] font-medium rounded-lg border text-center transition-colors cursor-pointer truncate ${
                            timeline === opt
                              ? 'bg-white text-neutral-950 font-semibold'
                              : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white'
                          }`}
                          title={opt}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details Description */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    Project Goals & Specific Requirements <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your current challenge, target audience, preferred video styles, website features, or systems you want to automate..."
                    className={`w-full px-4 py-3 rounded-lg bg-white/[0.03] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all ${
                      errors.details ? 'border-rose-500/70' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.details && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.details}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-all shadow-md active:scale-[0.98] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 mt-3 px-1">
                    <span>NDA & confidentiality guaranteed by default.</span>
                    {pastSubmissions.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setShowHistoryModal(true)}
                        className="text-amber-400 hover:underline cursor-pointer"
                      >
                        View Past Briefs ({pastSubmissions.length})
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Studio Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Studio Card */}
            <div className="rounded-3xl bg-neutral-900/60 border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-display font-bold text-white">
                Direct Studio Contacts
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Direct Inquiries</div>
                    <a
                      href="mailto:contact@arves.ai"
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      contact@arves.ai
                    </a>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      Response SLA: Under 4 business hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Studio Headquarters</div>
                    <div className="text-sm font-semibold text-white">
                      580 Howard Street, Suite 400
                    </div>
                    <div className="text-xs text-neutral-400">
                      San Francisco, CA 94105 & Global Remote
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Operational Hours</div>
                    <div className="text-sm font-semibold text-white">
                      Monday – Friday: 9:00 AM – 7:00 PM (EST / PST)
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      Weekend emergency production on active retainers
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Booking calendar banner */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  Need Immediate Face-to-Face Strategy?
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Book directly into our calendar for a 30-minute architectural scoping session with an Arves partner.
                </p>
                <a
                  href="mailto:contact@arves.ai?subject=Request Direct Partner Scoping Call"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  Request Meeting Invite
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Client Protection Callout */}
            <div className="rounded-2xl bg-neutral-900/30 border border-white/5 p-6 space-y-3 text-xs text-neutral-400">
              <div className="text-xs font-semibold text-white">
                Zero AI Hallucination & Security Standard
              </div>
              <p>
                Every client brief and proprietary asset is protected under strict bilateral non-disclosure agreements. We never feed client data into public model training corpuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Clarifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Everything you need to know about partnering with Arves.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/60 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm font-semibold text-white">
                    {faq.question}
                  </span>
                  <span className="text-neutral-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-white/5 pt-3">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] text-neutral-500">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Past Submissions Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-white/15 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-display font-bold text-white">
                Stored Inquiry Briefs
              </h3>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="text-xs text-neutral-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto">
              {pastSubmissions.map((sub) => (
                <div key={sub.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs space-y-1">
                  <div className="flex items-center justify-between font-mono text-amber-400">
                    <span>{sub.id}</span>
                    <span className="text-neutral-500 text-[10px]">{sub.createdAt}</span>
                  </div>
                  <div className="text-white font-medium">{sub.fullName} ({sub.company})</div>
                  <div className="text-neutral-400">{sub.selectedServices.join(', ')} · {sub.budget}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-between items-center text-xs">
              <button
                onClick={() => {
                  localStorage.removeItem('arves_inquiries');
                  setPastSubmissions([]);
                  setShowHistoryModal(false);
                }}
                className="text-rose-400 hover:underline cursor-pointer"
              >
                Clear History
              </button>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="px-4 py-2 bg-white text-neutral-950 font-semibold rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
