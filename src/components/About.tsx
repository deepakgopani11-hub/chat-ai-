import React from 'react';
import { PageId } from '../types/index.ts';
import { ABOUT_TEAM_IMAGE, TEAM_MEMBERS } from '../data/content.ts';
import { ArrowUpRight, ShieldCheck, Zap, Lock, Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const operatingStages = [
    {
      step: '01',
      title: 'Diagnostic & Systems Mapping',
      desc: 'We analyze your brand guidelines, existing production pipelines, and operational bottlenecks to define exact input/output schemas and quality criteria.'
    },
    {
      step: '02',
      title: 'Rapid Prototyping & Custom LoRA Synthesis',
      desc: 'We train custom style weights and agent test harnesses on your proprietary visual assets and historical data, proving quality in days rather than months.'
    },
    {
      step: '03',
      title: 'Enterprise Pipeline Integration',
      desc: 'We deploy the synthesized assets or autonomous agent systems directly into your web environments, CRMs, and marketing workflows with deterministic validation.'
    },
    {
      step: '04',
      title: 'Continuous Optimization & Governance',
      desc: 'Every system is monitored with human-in-the-loop oversight gates, model drift detection, and weekly performance reviews to guarantee peak ROI.'
    }
  ];

  const principles = [
    {
      icon: ShieldCheck,
      title: 'Deterministic Quality Over AI Slop',
      description: 'Raw foundation models hallucinate and default to generic tropes. We combine custom fine-tuned weights, strict prompt engineering, and human editorial finishing so every output is broadcast-ready.'
    },
    {
      icon: Lock,
      title: '100% Commercial IP Ownership',
      description: 'You retain all copyrights, source files, trained LoRA checkpoints, code repositories, and automation blueprints unconditionally. We never lock clients into proprietary black boxes.'
    },
    {
      icon: Zap,
      title: 'Sub-Second Execution & Speed',
      description: 'We measure velocity in hours, not quarters. Whether cutting 20 video ads in 48 hours or loading web pages in 380 milliseconds, speed is our core architectural discipline.'
    },
    {
      icon: Award,
      title: 'Enterprise Privacy & Zero Leakage',
      description: 'Your proprietary datasets, commercial briefs, and customer transcripts are processed in isolated virtual environments with zero-retention enterprise API guarantees.'
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO HEADER */}
      <section className="pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wide uppercase">
            <span>About Arves Studio</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2024</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white text-balance leading-tight">
            Bridging frontier generative intelligence with production-grade execution.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Arves was founded on a simple observation: foundation AI models possess transformative power, but raw generative outputs without human taste, engineering discipline, and system integration fail to deliver enterprise results.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            We operate as an integrated hybrid studio—combining commercial creative directors, machine learning practitioners, and full-stack web architects to deliver video, web platforms, and automated pipelines that drive quantifiable growth.
          </p>
        </div>

        {/* Studio Editorial Photo */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl relative">
          <img
            src={ABOUT_TEAM_IMAGE}
            alt="Arves Engineering & Creative Team Collaborating in San Francisco Studio"
            referrerPolicy="no-referrer"
            className="w-full aspect-16/9 lg:aspect-21/9 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-300 p-4 bg-neutral-950/80 backdrop-blur-md rounded-xl border border-white/10">
            <span className="font-semibold text-white">Arves Synthesis Lab</span>
            <span>Cross-disciplinary ideation across neural rendering, edge computing, and agentic systems</span>
          </div>
        </div>
      </section>

      {/* 2. THE ARVES 4-STAGE OPERATING SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-balance">
            The Arves Delivery Framework
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-2xl">
            A disciplined, four-phase engineering approach that eliminates trial-and-error guesswork and delivers predictable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operatingStages.map((stage) => (
            <div
              key={stage.step}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-display font-extrabold text-amber-400 mb-4 tabular-nums">
                  {stage.step}.
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-1.5 text-[11px] text-neutral-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Deterministic milestone</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STUDIO PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-900/40 border border-white/10 p-8 sm:p-12">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Our Standard
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-balance">
              How We Protect Client Quality & Intellectual Property
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & SPECIALISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Core Specialists
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-balance">
            Craftsmanship Meets Machine Learning
          </h2>
          <p className="text-sm text-neutral-400 mt-2 max-w-xl">
            Our team brings together leaders from top commercial production studios, AI labs, and high-growth technology companies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center font-display font-bold text-white text-sm mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-base font-display font-bold text-white">
                  {member.name}
                </h3>
                <div className="text-xs text-amber-400 mb-3">
                  {member.role}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/15 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-balance">
            Let’s discuss your AI strategy with no fluff.
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
            Book a 30-minute discovery session with our founding partners. We review your current workflows and specify exact opportunities for video, web, or automated acceleration.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              Schedule Partner Consultation
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
