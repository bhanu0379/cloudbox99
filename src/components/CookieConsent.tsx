"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = { essential: true, analytics: false, marketing: false };
    localStorage.setItem("cookieConsent", JSON.stringify(onlyEssential));
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowModal(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-background/95 backdrop-blur-md border-t border-white/[0.06] shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted max-w-3xl">
            We use cookies to enhance your experience, serve personalized ads, and analyze our traffic. By clicking &ldquo;Accept All,&rdquo; you consent to our use of cookies.{" "}
            <Link href="/cookie-policy" className="text-white underline hover:no-underline" target="_blank">
              Learn more
            </Link>.
          </p>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              Customize
            </button>
            <button
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-background bg-white rounded-lg hover:bg-white/90 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 bg-[#0a0a0a] border border-white/[0.06] rounded-2xl shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-muted hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-display font-semibold text-white mb-2">Cookie Settings</h3>
            <p className="text-sm text-muted mb-6">Select the types of cookies you want to allow:</p>
            
            <div className="space-y-4 mb-8">
              <label className="flex items-start gap-3 cursor-not-allowed opacity-70">
                <input
                  type="checkbox"
                  disabled
                  checked
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-white"
                />
                <div>
                  <span className="block text-sm font-medium text-white">Essential Cookies</span>
                  <span className="block text-xs text-muted">Required for site functionality</span>
                </div>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-accent-violet focus:ring-accent-violet focus:ring-offset-background"
                />
                <div>
                  <span className="block text-sm font-medium text-white group-hover:text-accent-violet transition-colors">Analytics Cookies</span>
                  <span className="block text-xs text-muted">For traffic analysis</span>
                </div>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-accent-violet focus:ring-accent-violet focus:ring-offset-background"
                />
                <div>
                  <span className="block text-sm font-medium text-white group-hover:text-accent-violet transition-colors">Marketing Cookies</span>
                  <span className="block text-xs text-muted">For personalized ads</span>
                </div>
              </label>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 text-sm font-medium text-background bg-white rounded-lg hover:bg-white/90 transition-colors"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
