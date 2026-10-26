/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { Home } from './components/Home.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Contact } from './components/Contact.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Contact form pre-fill states
  const [contactPrefillServices, setContactPrefillServices] = useState<string[]>(['AI Video Creation']);
  const [contactPrefillBudget, setContactPrefillBudget] = useState<string>('$15k - $30k');
  const [contactPrefillNote, setContactPrefillNote] = useState<string>('');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceToQuote = (serviceIds: string[], budget?: string) => {
    setContactPrefillServices(serviceIds);
    if (budget) setContactPrefillBudget(budget);
    setContactPrefillNote(`Inquiry generated from the Arves Scope Configurator for: ${serviceIds.join(', ')}.`);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTierToQuote = (tierName: string, serviceName?: string) => {
    if (serviceName) {
      setContactPrefillServices([serviceName]);
      setContactPrefillNote(`Interested in discussing custom scope for ${serviceName} (${tierName}).`);
    } else {
      setContactPrefillNote(`Selected engagement model: ${tierName}. Requesting formal scoping brief.`);
      if (tierName === 'Production Sprint') {
        setContactPrefillBudget('$5k - $15k');
      } else if (tierName === 'Dedicated AI Studio') {
        setContactPrefillBudget('$15k - $30k');
        setContactPrefillServices(['AI Video Creation', 'AI Website Building', 'AI Workflow Automations']);
      } else {
        setContactPrefillBudget('$30k - $75k');
      }
    }
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-neutral-100 selection:bg-amber-400 selection:text-neutral-950">
      {/* 1-Row 3-Zone Top Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Viewport */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectServiceToQuote={handleSelectServiceToQuote}
          />
        )}

        {currentPage === 'about' && (
          <About onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <Services
            onNavigate={handleNavigate}
            onSelectTierToQuote={handleSelectTierToQuote}
          />
        )}

        {currentPage === 'contact' && (
          <Contact
            initialServices={contactPrefillServices}
            initialBudget={contactPrefillBudget}
            initialNote={contactPrefillNote}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Quiet Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
