export type PageId = 'home' | 'about' | 'services' | 'contact';

export type ServiceId = 'ai-video' | 'ai-website' | 'ai-automation';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  processSteps: { title: string; description: string }[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  service: string;
  serviceId: ServiceId;
  headline: string;
  challenge: string;
  solution: string;
  impactMetrics: { value: string; label: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  company: string;
  selectedServices: string[];
  budget: string;
  timeline: string;
  details: string;
  createdAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Services' | 'Process' | 'Ownership & Security';
}
