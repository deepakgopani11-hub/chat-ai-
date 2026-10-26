import React, { useState } from 'react';
import { PageId, ServiceId } from '../types/index.ts';
import { SERVICES, PRICING_TIERS } from '../data/content.ts';
import {
  ArrowUpRight,
  CheckCircle2,
  Clapperboard,
  Globe,
  Cpu,
  Layers,
  Sparkles,
  Play,
  RotateCcw,
  Zap,
  Sliders,
  Check
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  onSelectTierToQuote?: (tierName: string, serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, onSelectTierToQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | ServiceId>('all');

  // Interactive Sample Reel Format Explorer (for AI Video)
  const [selectedVideoFormat, setSelectedVideoFormat] = useState<number>(0);
  const videoFormats = [
    {
      name: 'Cinematic Commercial Cut',
      aspect: '16:9 Landscape',
      duration: '30–60 Seconds',
      resolution: '4K Ultra-HD (3840x2160)',
      idealFor: 'YouTube Pre-Roll, Broadcast TV, Investor Showcases, Keynote Drops',
      features: ['Multi-scene narrative continuity', 'Spatial audio & licensed commercial score', 'Custom color grade matching brand LUTs']
    },
    {
      name: 'High-Velocity Social Reels',
      aspect: '9:16 Vertical',
      duration: '15–30 Seconds',
      resolution: '1080x1920 Mobile-Optimized',
      idealFor: 'TikTok, Instagram Reels, YouTube Shorts, Paid Meta Ad Campaigns',
      features: ['Dynamic burned-in subtitle motion', 'High-hook retention pacing', 'A/B tested creative variant batches']
    },
    {
      name: '3D Photorealistic Product Stage',
      aspect: '1:1 Square & 16:9',
      duration: '15–45 Seconds',
      resolution: '4K Cinema DCI',
      idealFor: 'E-Commerce storefronts, Hardware announcements, Luxury goods',
      features: ['Zero physical studio shoot required', 'Sub-millimeter texture fidelity', 'Exploded-view component animations']
    },
    {
      name: 'Multilingual Digital Spokesperson',
      aspect: '16:9 or 9:16',
      duration: '1–3 Minutes',
      resolution: '4K UHD',
      idealFor: 'Global product onboarding, SaaS feature walkthroughs, Training',
      features: ['Photorealistic lip-sync in 28+ languages', 'Custom brand avatar cloning', 'Expressive micro-gestures']
    }
  ];

  // Interactive Personalization Simulator (for AI Website)
  const [visitorPersona, setVisitorPersona] = useState<'enterprise' | 'growth' | 'developer'>('enterprise');

  // Interactive Automation Pipeline Simulator (for AI Automations)
  const [automationSimState, setAutomationSimState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [simStep, setSimStep] = useState<number>(0);

  const runAutomationSimulation = () => {
    setAutomationSimState('running');
    setSimStep(1);

    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1500);
    setTimeout(() => {
      setSimStep(4);
      setAutomationSimState('completed');
    }, 2300);
  };

  const resetAutomationSimulation = () => {
    setAutomationSimState('idle');
    setSimStep(0);
  };

  const handleSelectPricingPlan = (tierName: string) => {
    if (onSelectTierToQuote) {
      onSelectTierToQuote(tierName);
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookServiceDirect = (serviceTitle: string) => {
    if (onSelectTierToQuote) {
      onSelectTierToQuote('Custom Scope', serviceTitle);
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredServices = activeTab === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.id === activeTab);

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HEADER */}
      <section className="pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wide uppercase">
            <span>Specialized Offerings</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise SLAs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white text-balance leading-tight">
            Comprehensive AI Production Services.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            From high-converting visual storytelling to bespoke web infrastructure and self-healing agent workflows, discover how our three core competencies accelerate your growth.
          </p>

          {/* Interactive filter tabs */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              All Capabilities
            </button>
            <button
              onClick={() => setActiveTab('ai-video')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'ai-video'
                  ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              AI Video Creation
            </button>
            <button
              onClick={() => setActiveTab('ai-website')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'ai-website'
                  ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              AI Website Building
            </button>
            <button
              onClick={() => setActiveTab('ai-automation')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'ai-automation'
                  ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                  : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              AI Automations
            </button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES DEEP DIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="rounded-3xl bg-neutral-900/40 border border-white/10 p-6 sm:p-10 lg:p-12 space-y-12"
          >
            {/* Top Row: Service Intro & Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  0{index + 1}. Core Competency
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-balance">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {service.fullDesc}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {service.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-xl sm:text-2xl font-display font-bold text-white tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs text-neutral-400 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleBookServiceDirect(service.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
                  >
                    Request Scope for {service.title}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Service Visual */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-xl relative aspect-16/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Deliverables & Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-4">
                <h3 className="text-base font-display font-bold text-white">
                  Technical Specifications & Capabilities
                </h3>
                <div className="space-y-2.5">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-display font-bold text-white">
                  Formal Deliverables & Asset Handover
                </h3>
                <div className="space-y-2.5">
                  {service.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* INTERACTIVE COMPONENT PER SERVICE */}
            {service.id === 'ai-video' && (
              <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Interactive Format Selector
                    </span>
                    <h4 className="text-lg font-display font-bold text-white mt-1">
                      Explore Video Output Architectures
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-lg border border-white/10 overflow-x-auto">
                    {videoFormats.map((fmt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedVideoFormat(idx)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          selectedVideoFormat === idx
                            ? 'bg-white text-neutral-950 font-semibold'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {fmt.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="space-y-2">
                    <div className="text-xs text-neutral-400">Aspect Ratio & Specs</div>
                    <div className="text-base font-semibold text-white">
                      {videoFormats[selectedVideoFormat].aspect}
                    </div>
                    <div className="text-xs text-neutral-400">
                      Resolution: {videoFormats[selectedVideoFormat].resolution}
                    </div>
                    <div className="text-xs text-neutral-400">
                      Target Duration: {videoFormats[selectedVideoFormat].duration}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-neutral-400">Primary Channel Deployment</div>
                    <div className="text-sm font-medium text-amber-300">
                      {videoFormats[selectedVideoFormat].idealFor}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-neutral-400">Key Neural Enhancements</div>
                    <ul className="space-y-1">
                      {videoFormats[selectedVideoFormat].features.map((f, fi) => (
                        <li key={fi} className="text-xs text-neutral-300 flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {service.id === 'ai-website' && (
              <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Dynamic Personalization Demo
                    </span>
                    <h4 className="text-lg font-display font-bold text-white mt-1">
                      Context-Aware Edge Rendering Simulation
                    </h4>
                  </div>

                  {/* Persona Tabs */}
                  <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-lg border border-white/10">
                    <button
                      onClick={() => setVisitorPersona('enterprise')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        visitorPersona === 'enterprise'
                          ? 'bg-white text-neutral-950 font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Enterprise Buyer
                    </button>
                    <button
                      onClick={() => setVisitorPersona('growth')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        visitorPersona === 'growth'
                          ? 'bg-white text-neutral-950 font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Growth Marketer
                    </button>
                    <button
                      onClick={() => setVisitorPersona('developer')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        visitorPersona === 'developer'
                          ? 'bg-white text-neutral-950 font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Tech Architect
                    </button>
                  </div>
                </div>

                {/* Simulated Personalized Preview */}
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-white/5">
                    <span>Inbound Visitor Persona: <strong className="text-white capitalize">{visitorPersona}</strong></span>
                    <span className="text-emerald-400 font-mono">Simulated TTFB: 18ms (Edge Cache Hit)</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-amber-400 font-mono">
                      {visitorPersona === 'enterprise' && '// Adapted for Compliance & Security Requirements'}
                      {visitorPersona === 'growth' && '// Adapted for Conversion Velocity & CAC Reduction'}
                      {visitorPersona === 'developer' && '// Adapted for API Schemas & Microservice Architecture'}
                    </div>

                    <h5 className="text-lg font-display font-bold text-white">
                      {visitorPersona === 'enterprise' && 'Enterprise-Grade Security and Deterministic AI SLAs'}
                      {visitorPersona === 'growth' && 'Accelerate Inbound Pipeline Velocity by 3.4x with Zero Drag'}
                      {visitorPersona === 'developer' && 'Clean Modular React Architecture with Edge Serverless Functions'}
                    </h5>

                    <p className="text-xs text-neutral-300">
                      {visitorPersona === 'enterprise' && 'SOC2 compliant pipelines, isolated private cloud tenancies, and zero training data retention guarantees for Fortune 500 deployments.'}
                      {visitorPersona === 'growth' && 'Sub-second page loading paired with autonomous behavioral personalization drives immediate conversion gains on paid and organic acquisition.'}
                      {visitorPersona === 'developer' && 'Strict TypeScript types, headless API-first CMS schemas, edge SSR, and automated GitHub CI/CD deployments.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5 text-white">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Lighthouse Score: 99/100
                    </span>
                    <span className="flex items-center gap-1.5 text-white">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Core Web Vitals: Passing
                    </span>
                  </div>
                </div>
              </div>
            )}

            {service.id === 'ai-automation' && (
              <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Live Multi-Agent Pipeline Simulator
                    </span>
                    <h4 className="text-lg font-display font-bold text-white mt-1">
                      Autonomous Inbound Lead & Document Extraction
                    </h4>
                  </div>

                  <div className="flex items-center gap-3">
                    {automationSimState === 'idle' && (
                      <button
                        onClick={runAutomationSimulation}
                        className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Run Live Simulation
                      </button>
                    )}

                    {automationSimState === 'running' && (
                      <span className="px-3 py-1.5 text-xs font-medium text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-lg animate-pulse">
                        Executing Pipeline...
                      </span>
                    )}

                    {automationSimState === 'completed' && (
                      <button
                        onClick={resetAutomationSimulation}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                {/* Simulation Execution Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {/* Step 1 */}
                  <div
                    className={`p-4 rounded-xl border transition-all ${
                      simStep >= 1
                        ? 'bg-neutral-900 border-amber-400/40 text-white'
                        : 'bg-white/[0.02] border-white/5 text-neutral-500'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-mono mb-1">Node 1: Webhook</div>
                    <div className="text-xs font-semibold">Incoming Request Ingested</div>
                    <div className="text-[11px] text-neutral-400 mt-2">
                      Payload parsed & authenticated across TLS.
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div
                    className={`p-4 rounded-xl border transition-all ${
                      simStep >= 2
                        ? 'bg-neutral-900 border-amber-400/40 text-white'
                        : 'bg-white/[0.02] border-white/5 text-neutral-500'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-mono mb-1">Node 2: Enrichment</div>
                    <div className="text-xs font-semibold">Autonomous Profile Mining</div>
                    <div className="text-[11px] text-neutral-400 mt-2">
                      Company tech stack, headcount & revenue matched.
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div
                    className={`p-4 rounded-xl border transition-all ${
                      simStep >= 3
                        ? 'bg-neutral-900 border-amber-400/40 text-white'
                        : 'bg-white/[0.02] border-white/5 text-neutral-500'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-mono mb-1">Node 3: Intelligence</div>
                    <div className="text-xs font-semibold">Deterministic Scoring</div>
                    <div className="text-[11px] text-neutral-400 mt-2">
                      Score computed: 98/100 (Tier-1 Enterprise).
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div
                    className={`p-4 rounded-xl border transition-all ${
                      simStep >= 4
                        ? 'bg-neutral-900 border-emerald-400/50 text-white'
                        : 'bg-white/[0.02] border-white/5 text-neutral-500'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-mono mb-1 text-emerald-400">Node 4: Dispatch</div>
                    <div className="text-xs font-semibold text-emerald-300">Sales Brief & Calendar Synced</div>
                    <div className="text-[11px] text-neutral-400 mt-2">
                      Slack alert sent; CRM updated in 1.4s.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 3. ENGAGEMENT MODELS & PRICING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Investment Structure
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-balance">
            Transparent Engagement Tiers
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Whether you need a rapid production sprint or a dedicated monthly AI studio retainer, choose the model tailored to your operational velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                tier.highlighted
                  ? 'bg-neutral-900 border-2 border-amber-400/60 shadow-xl'
                  : 'bg-neutral-900/50 border border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-white">
                    {tier.name}
                  </h3>
                  {tier.highlighted && (
                    <span className="text-[11px] font-semibold text-amber-300 bg-amber-400/20 px-2.5 py-1 rounded-full border border-amber-400/30">
                      Most Selected
                    </span>
                  )}
                </div>

                <p className="text-xs text-neutral-400 mb-6 min-h-8">
                  {tier.bestFor}
                </p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tabular-nums">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-xs text-neutral-400">{tier.period}</span>
                  )}
                </div>

                <div className="text-xs text-amber-400 mb-8">
                  Timeline: {tier.timeline}
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="text-xs font-semibold text-neutral-300 mb-2">
                    Scope Inclusions:
                  </div>
                  {tier.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectPricingPlan(tier.name)}
                  className={`w-full py-3 px-4 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98] ${
                    tier.highlighted
                      ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300 font-bold shadow-md'
                      : 'bg-white text-neutral-950 hover:bg-neutral-200'
                  }`}
                >
                  Select {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Need a bespoke scope not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              We frequently architect custom hybrid engagements spanning dedicated on-premise model fine-tuning and proprietary multi-agent workflows.
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Custom Project Inquiry
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
