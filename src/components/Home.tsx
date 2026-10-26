import React, { useState } from 'react';
import { PageId, ServiceId } from '../types/index.ts';
import { HERO_IMAGE, SERVICES, CASE_STUDIES, TESTIMONIALS } from '../data/content.ts';
import { ArrowUpRight, CheckCircle2, Clapperboard, Globe, Cpu, Sparkles, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceToQuote?: (serviceIds: string[], budget?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onSelectServiceToQuote }) => {
  // Interactive Project Scope Estimator state
  const [selectedVideoTier, setSelectedVideoTier] = useState<'none' | 'starter' | 'growth'>('starter');
  const [selectedWebTier, setSelectedWebTier] = useState<'none' | 'landing' | 'full'>('full');
  const [selectedAutoTier, setSelectedAutoTier] = useState<'none' | 'workflow' | 'multi-agent'>('workflow');

  // Calculate scope summary
  const calculateEstimates = () => {
    let days = 0;
    let minPrice = 0;
    let maxPrice = 0;
    const deliverables: string[] = [];
    const activeServices: string[] = [];

    if (selectedVideoTier === 'starter') {
      days += 3;
      minPrice += 3500;
      maxPrice += 5500;
      deliverables.push('5x 4K Cinematic Commercial / Social Video Ads');
      deliverables.push('Dynamic Multilingual Voice Synthesis');
      activeServices.push('AI Video Creation');
    } else if (selectedVideoTier === 'growth') {
      days += 5;
      minPrice += 7500;
      maxPrice += 11000;
      deliverables.push('15x Multi-format High-Velocity Video Pipeline');
      deliverables.push('Custom 3D Product Integration & LoRA Style Model');
      activeServices.push('AI Video Creation');
    }

    if (selectedWebTier === 'landing') {
      days += 7;
      minPrice += 4500;
      maxPrice += 7000;
      deliverables.push('Ultra-fast High-Conversion Landing Page (<400ms)');
      deliverables.push('Autonomous SEO Structured Schema Deployment');
      activeServices.push('AI Website Building');
    } else if (selectedWebTier === 'full') {
      days += 14;
      minPrice += 9500;
      maxPrice += 16000;
      deliverables.push('Complete Corporate Web Architecture & AI Headless CMS');
      deliverables.push('Dynamic Visitor Personalization Engine & Analytics');
      activeServices.push('AI Website Building');
    }

    if (selectedAutoTier === 'workflow') {
      days += 5;
      minPrice += 3800;
      maxPrice += 6200;
      deliverables.push('Autonomous Inbound Lead Qualification & CRM Sync');
      deliverables.push('Slack/Email Intelligence Routing & Human Gates');
      activeServices.push('AI Workflow Automations');
    } else if (selectedAutoTier === 'multi-agent') {
      days += 10;
      minPrice += 8000;
      maxPrice += 14500;
      deliverables.push('Multi-Agent Document & Invoice Processing Engine');
      deliverables.push('Custom API Webhooks & 99.8% Verified Accuracy Gate');
      activeServices.push('AI Workflow Automations');
    }

    if (deliverables.length === 0) {
      return {
        timeline: 'Select services below',
        priceRange: '$0',
        budgetTier: '$5k - $15k',
        deliverables: ['Select at least one service to compute estimated scope.'],
        activeServices: []
      };
    }

    // Determine budget tier string for contact prefill
    let budgetTier = '$5k - $15k';
    if (minPrice >= 20000) budgetTier = '$30k - $75k';
    else if (minPrice >= 12000) budgetTier = '$15k - $30k';

    return {
      timeline: `${Math.max(3, Math.round(days * 0.75))}–${days + 2} Business Days`,
      priceRange: `$${minPrice.toLocaleString()} – $${maxPrice.toLocaleString()}`,
      budgetTier,
      deliverables,
      activeServices
    };
  };

  const scope = calculateEstimates();

  const handleProceedWithScope = () => {
    if (onSelectServiceToQuote) {
      onSelectServiceToQuote(
        scope.activeServices.length > 0 ? scope.activeServices : ['AI Video Creation', 'AI Website Building'],
        scope.budgetTier
      );
    }
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceIcons = {
    'ai-video': Clapperboard,
    'ai-website': Globe,
    'ai-automation': Cpu
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wide uppercase">
              <span>Next-Generation AI Agency</span>
              <span aria-hidden="true">·</span>
              <span>Production-Grade Delivery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white text-balance leading-[1.12]">
              Frontier AI Video, High-Impact Websites, and Enterprise Automations.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
              Arves engineers commercial-grade generative video campaigns, sub-second web platforms, and autonomous multi-agent workflows. We turn generative AI breakthroughs into high-performing enterprise assets.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-all shadow-md active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
              >
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
              >
                Explore Capabilities
              </button>
            </div>

            {/* Quiet metadata line */}
            <div className="flex items-center gap-3 text-xs text-neutral-400 pt-2">
              <span>100% Commercial IP Transfer</span>
              <span aria-hidden="true">·</span>
              <span>Zero Model Data Leakage</span>
              <span aria-hidden="true">·</span>
              <span>48h Fast-Track Available</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl group">
              <img
                src={HERO_IMAGE}
                alt="Arves Creative and AI Engineering Studio in San Francisco"
                referrerPolicy="no-referrer"
                className="w-full aspect-16/9 lg:aspect-4/3 object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-neutral-950/80 backdrop-blur-md rounded-xl border border-white/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-white">Arves Headquarters</span>
                  <span className="text-neutral-400">San Francisco & Remote Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width proof strip below hero split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
              48 Hours
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">
              Average Commercial Video Delivery
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
              380 ms
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">
              Median Edge Web Load Latency
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
              99.8%
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">
              Deterministic Automation Precision
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
              +240%
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 mt-1">
              Average Inbound Pipeline Expansion
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (3 PILLARS BENTO GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-balance">
              Engineered for Enterprise Impact
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            We don’t produce conceptual toys. Every asset, web platform, and automated pipeline is architected to increase speed, conversion, and operational margin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[service.id];
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-2xl bg-neutral-900/60 border border-white/10 overflow-hidden hover:border-white/20 transition-all group"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-neutral-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 p-2 bg-neutral-950/80 backdrop-blur-md rounded-lg border border-white/10 text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-neutral-400 mb-2">
                      0{index + 1}. Capability
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 border-t border-white/5 pt-4">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE PROJECT SCOPE ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-900/80 border border-white/15 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Interactive Scope Configurator
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-balance">
              Configure Your AI Production Scope
            </h2>
            <p className="text-sm text-neutral-300 mt-2">
              Select your organization’s immediate needs across video, web, and automation to preview turnaround timelines, deliverables, and estimated budget ranges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Configuration Selectors */}
            <div className="lg:col-span-7 space-y-6">
              {/* Service 1: AI Video */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <Clapperboard className="w-4 h-4 text-amber-400" />
                    AI Video Creation
                  </span>
                  <span className="text-xs text-neutral-400">Commercial & Social Content</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedVideoTier('none')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedVideoTier === 'none'
                        ? 'bg-white/15 border-white/30 text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    None
                  </button>
                  <button
                    onClick={() => setSelectedVideoTier('starter')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedVideoTier === 'starter'
                        ? 'bg-amber-400/20 border-amber-400/50 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    5x Ads Sprint
                  </button>
                  <button
                    onClick={() => setSelectedVideoTier('growth')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedVideoTier === 'growth'
                        ? 'bg-amber-400/20 border-amber-400/50 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    15x High-Velocity
                  </button>
                </div>
              </div>

              {/* Service 2: AI Website */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-amber-400" />
                    AI Website Building
                  </span>
                  <span className="text-xs text-neutral-400">High-Performance Web Platforms</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedWebTier('none')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedWebTier === 'none'
                        ? 'bg-white/15 border-white/30 text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    None
                  </button>
                  <button
                    onClick={() => setSelectedWebTier('landing')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedWebTier === 'landing'
                        ? 'bg-amber-400/20 border-amber-400/50 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Landing Funnel
                  </button>
                  <button
                    onClick={() => setSelectedWebTier('full')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedWebTier === 'full'
                        ? 'bg-amber-400/20 border-amber-400/50 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Full Corporate Web
                  </button>
                </div>
              </div>

              {/* Service 3: AI Automations */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-amber-400" />
                    AI Workflow Automations
                  </span>
                  <span className="text-xs text-neutral-400">Operations & Multi-Agent Pipelines</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedAutoTier('none')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedAutoTier === 'none'
                        ? 'bg-white/15 border-white/30 text-white font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    None
                  </button>
                  <button
                    onClick={() => setSelectedAutoTier('workflow')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedAutoTier === 'workflow'
                        ? 'bg-amber-400/20 border-amber-400/50 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Lead Triage Pipeline
                  </button>
                  <button
                    onClick={() => setSelectedAutoTier('multi-agent')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedAutoTier === 'multi-agent'
                        ? 'bg-amber-400/20 border-amber-400/50 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Multi-Agent Suite
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Summary Card */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-neutral-950 border border-white/10 space-y-6">
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Estimated Scope Summary
                </span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                    {scope.priceRange}
                  </span>
                  <span className="text-xs text-amber-400 font-medium">
                    {scope.timeline}
                  </span>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <span className="text-xs font-semibold text-neutral-300">
                  Included In This Scope:
                </span>
                <div className="space-y-2">
                  {scope.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <button
                  onClick={handleProceedWithScope}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-all shadow-sm cursor-pointer whitespace-nowrap active:scale-[0.98]"
                >
                  Book Discovery With This Scope
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-center text-neutral-500">
                  No obligation · Initial quote pre-populates the consultation form
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUANTIFIED CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Verified Client Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white text-balance">
              Real Performance Data
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Every engagement is measured against quantitative business benchmarks: qualified pipeline, production speed, and operational hour reduction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-white/5">
                  <span className="font-semibold text-white">{study.client}</span>
                  <span>{study.industry}</span>
                </div>

                <div className="text-xs font-medium text-amber-400">
                  {study.service}
                </div>

                <h3 className="text-lg font-display font-bold text-white leading-snug">
                  {study.headline}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {study.challenge}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  <strong className="text-neutral-200">Arves Solution: </strong>
                  {study.solution}
                </p>
              </div>

              {/* Impact stats */}
              <div className="grid grid-cols-3 gap-2 mt-8 pt-4 border-t border-white/10 text-center">
                {study.impactMetrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-base font-display font-bold text-white tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-neutral-400 leading-tight mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-900/40 border border-white/10 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Leadership Endorsements
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-balance">
              Trusted by Ambitious Founders and Operators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
              >
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">{t.author}</div>
                    <div className="text-[11px] text-neutral-400">{t.role}, {t.company}</div>
                  </div>
                  <div className="text-xs font-display font-bold text-amber-400 tabular-nums">
                    {t.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white text-balance">
              Ready to accelerate your production with Arves?
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              We consult directly on your current pipeline, demonstrate real generative models, and outline guaranteed delivery timelines in your discovery session.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              Start Discovery Consultation
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Review Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
