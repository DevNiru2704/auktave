"use client";
import { useState } from "react";
import GlitchText from "@/components/GlitchText";
import { events } from "@/lib/data";
import { CheckCircle2, AlertTriangle, QrCode } from "lucide-react";

export default function RegisterPage() {

  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="register-page">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow mb-4">/ Player Registration</p>
        <GlitchText as="h1" className="text-5xl lg:text-7xl mb-4">Enter the Game</GlitchText>
        <p className="text-bone/70 text-lg max-w-2xl mb-3">
          Use the Google Form below to register for AUKTAVE 2K26. We will send confirmation to your email once your entry is processed.
        </p>
        {/* Google Forms Custom UI Section */}
        <div className="card-upside p-7 lg:p-10 mt-8 space-y-6" data-testid="register-form">
          {/* QR Code Placeholder */}
          <div>
            <label className="upside">Registration QR Code</label>
            <div className="bg-midnight/50 border border-ember/30 rounded p-8 flex flex-col items-center justify-center min-h-[300px] gap-4" data-testid="qr-placeholder">
              <QrCode className="text-bone/40" size={64} />
              <p className="font-mono text-xs text-bone/50 text-center uppercase tracking-wider">
                Scan to access the registration form
              </p>
              <p className="text-xs text-bone/30 text-center">
                [QR Code will be displayed here]
              </p>
            </div>
          </div>

          {/* Google Forms Embed Section */}
          <div className="border-t border-bone/10 pt-6">
            <label className="upside mb-4 block">Fill the Form</label>
            <p className="text-bone/70 text-sm mb-4">
              Click the QR code or link below to open the registration form in a new window.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-signal inline-block"
              data-testid="register-submit"
            >
              Open Registration Form
            </a>
            <p className="text-xs font-mono text-bone/40 mt-4 uppercase tracking-[0.18em]">
              By submitting you agree to our terms. A confirmation email follows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
