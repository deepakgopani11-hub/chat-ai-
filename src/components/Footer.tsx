import React from 'react';
import { PageId } from '../types/index.ts';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06080d] text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Thesis */}
          <div className="md:col-span-1 space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-display font-extrabold tracking-tight text-white hover:text-neutral-200 transition-colors focus:outline-none cursor-pointer"
            >
              arves<span className="text-amber-400">.</span>
            </button>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Arves is a specialized AI agency engineering commercial generative video, high-converting digital platforms, and autonomous multi-agent pipelines.
            </p>
            <div className="text-xs text-neutral-500">
              San Francisco, CA · Global Remote Studio
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Video Creation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Website Building
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Workflow Automations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Enterprise Multi-Agent Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 tracking-wider uppercase mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Briefing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Inquiries */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-neutral-200 tracking-wider uppercase">
              Direct Consultation
            </h4>
            <p className="text-xs text-neutral-400">
              Need to explore an urgent project or custom integration? Speak directly with our founding engineering team.
            </p>
            <div>
              <a
                href="mailto:contact@arves.ai"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
              >
                contact@arves.ai
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="text-xs text-neutral-500">
              Response SLA: Under 4 business hours
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Arves Studio Inc. All rights reserved. Full commercial IP rights transferred upon project completion.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Security & Zero-Data-Leakage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
