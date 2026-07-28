"use client";

import { useState, type FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, X } from "lucide-react";

export function ContactModal({
  isOpen,
  onClose,
  defaultNeed = "",
}: {
  isOpen: boolean;
  onClose: () => void;
  defaultNeed?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // Reset status when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
    }
  }, [isOpen]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="glass relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl pointer-events-auto"
            >
              <button
                onClick={onClose}
                className="absolute right-5 top-5 rounded-full p-2 text-muted transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-white">Get a quote</h3>
                <p className="mt-1.5 text-sm text-muted">
                  Tell us what you need. Our team replies with a plan, not a sales pitch.
                </p>
              </div>

              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] py-12 text-center">
                  <CheckCircle2 className="h-10 w-10 text-accent-cyan" />
                  <h3 className="font-display text-lg font-semibold text-white">Request received</h3>
                  <p className="text-sm text-muted">
                    Thanks — a member of our team will follow up shortly.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Doe" required />
                    <Field label="Company" name="company" placeholder="Acme Inc." />
                  </div>
                  <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                  <Field label="What do you need?" name="need" placeholder="VPS, dedicated servers..." defaultValue={defaultNeed} />
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Tell us about your infrastructure needs"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-accent-cyan/50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send request"}
                    {status !== "sending" && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={`modal-${name}`} className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </label>
      <input
        id={`modal-${name}`}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-accent-cyan/50"
      />
    </div>
  );
}
