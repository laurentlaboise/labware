'use client';

import { useState } from 'react';
import { Hero } from '../src/components/Hero';
import { Features } from '../src/components/Features';
import { Pricing } from '../src/components/Pricing';
import { OrganizationPreview } from '../src/components/OrganizationPreview';

export default function LandingPage() {
  const [showOrgChart, setShowOrgChart] = useState(false);

  const handleGetStarted = () => {
    // Redirect to app.labware.icu
    window.location.href = 'https://app.labware.icu';
  };

  const handleMeetTeam = () => {
    setShowOrgChart(true);
  };

  const handleViewFullChart = () => {
    // Redirect to app to see full organization
    window.location.href = 'https://app.labware.icu';
  };

  const handlePricingTier = (tier: string) => {
    // Redirect based on tier
    if (tier === 'free') {
      window.location.href = 'https://app.labware.icu';
    } else if (tier === 'professional') {
      window.location.href = 'https://app.labware.icu/signup';
    }
  };

  const handleContactSales = () => {
    // Open email client
    window.location.href = 'mailto:sales@labware.icu?subject=Enterprise Plan Inquiry';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero onGetStarted={handleGetStarted} onMeetTeam={handleMeetTeam} />

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <Features />
      </section>

      {/* Organization Preview Section */}
      <section id="team" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Your <span className="text-gradient">AI Organization</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              64 specialized agents organized in 3 layers, each with unique expertise and personality
            </p>
          </div>
          <OrganizationPreview onViewFullChart={handleViewFullChart} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <Pricing
          onGetStarted={handlePricingTier}
          onContactSales={handleContactSales}
        />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Labware.icu</h3>
              <p className="text-slate-400">
                Dignity Through Utility
              </p>
              <p className="text-slate-400 mt-2">
                AI agents serving schools and hospitals
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://app.labware.icu" className="hover:text-white transition-colors">Launch App</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Compliance</h4>
              <ul className="space-y-2 text-slate-400">
                <li><span className="text-white">HIPAA Compliant</span></li>
                <li><span className="text-white">FERPA Compliant</span></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="mailto:support@labware.icu" className="hover:text-white transition-colors">support@labware.icu</a></li>
                <li><a href="mailto:sales@labware.icu" className="hover:text-white transition-colors">sales@labware.icu</a></li>
                <li><a href="https://github.com/laurentlaboise/labware" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Labware.icu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
