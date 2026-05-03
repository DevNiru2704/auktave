"use client";
import { useState } from "react";
import GlitchText from "@/components/GlitchText";
import { events } from "@/lib/data";
// import { incrementScoreboard } from "@/components/PlayerScoreboard"; // [scoreboard] disabled until approved
import { CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function RegisterPage() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    form.append("access_key", WEB3FORMS_KEY);
    form.append("subject", "AUKTAVE 2K26 - New Player Registration");
    form.append("from_name", "AUKTAVE Portal");

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        // incrementScoreboard(); // [scoreboard] disabled until approved
        e.target.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network failure. The portal flickered. Try again.");
    }
  }

  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="register-page">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow mb-4">/ Player Registration</p>
        <GlitchText as="h1" className="text-5xl lg:text-7xl mb-4">Enter the Game</GlitchText>
        <p className="text-bone/70 text-lg max-w-2xl mb-3">
          Fill the form below to register for AUKTAVE 2K26. We will send confirmation to your email once the lab logs your entry.
        </p>
        {!WEB3FORMS_KEY || WEB3FORMS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE" ? (
          <div className="mt-4 mb-8 border border-ember/40 bg-ember/10 p-4 flex items-start gap-3" data-testid="web3forms-warning">
            <AlertTriangle className="text-ember shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-bone/80">
              Add your Web3Forms access key to <code className="font-mono text-signal">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code> in <code className="font-mono">frontend/.env</code> for live submissions. Form is in demo mode.
            </p>
          </div>
        ) : null}

        {status === "success" ? (
          <div className="card-upside p-10 text-center" data-testid="register-success">
            <CheckCircle2 className="text-signal mx-auto mb-4" size={48} />
            <h2 className="headline text-4xl mb-3">Transmission received</h2>
            <p className="text-bone/70">A confirmation has been sent to your inbox. Check your spam folder if it does not show in 5 minutes. The lab will be in touch with payment confirmation shortly.</p>
            <button onClick={() => setStatus("idle")} className="btn-ghost mt-6" data-testid="register-another">Register another player</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-upside p-7 lg:p-10 mt-8 space-y-6" data-testid="register-form">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required testid="field-name" />
              <Field label="Email" name="email" type="email" required testid="field-email" />
              <Field label="WhatsApp Number" name="whatsapp" required testid="field-whatsapp" />
              <Field label="College / University" name="college" required testid="field-college" />
            </div>

            <div>
              <label className="upside">Event (Game)</label>
              <select name="event" required className="upside" data-testid="field-event">
                <option value="">Pick a game</option>
                {events.map((e) => <option key={e.slug} value={e.name}>{e.name}</option>)}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Team Name" name="team_name" testid="field-team-name" />
              <Field label="Team Members (comma separated)" name="team_members" testid="field-team-members" />
            </div>

            <Field label="Registration Fee Paid (Rs.)" name="fee" type="number" required testid="field-fee" />

            <div>
              <label className="upside">QR Payment Screenshot</label>
              <input type="file" name="payment_proof" accept="image/*,.pdf" required className="upside file:mr-4 file:bg-ember file:text-bone file:border-0 file:px-4 file:py-2 file:font-mono file:text-xs file:uppercase file:tracking-wider hover:file:bg-ember-deep" data-testid="field-payment-proof" />
              <p className="font-mono text-[10px] text-bone/40 mt-2 uppercase tracking-[0.18em]">Max 4 MB. PNG / JPG / PDF</p>
            </div>

            <div>
              <label className="upside">Additional Proof / ID Card (optional)</label>
              <input type="file" name="id_card" accept="image/*,.pdf" className="upside file:mr-4 file:bg-midnight file:text-bone file:border file:border-ember/30 file:px-4 file:py-2 file:font-mono file:text-xs file:uppercase file:tracking-wider" data-testid="field-id-card" />
            </div>

            <div>
              <label className="upside">Anything else we should know?</label>
              <textarea name="message" rows={4} className="upside" placeholder="Allergies, accommodation, dietary preferences, etc." data-testid="field-message" />
            </div>

            <input type="hidden" name="redirect" value="false" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {status === "error" && (
              <div className="border border-ember/50 bg-ember/10 p-4 flex items-start gap-3" data-testid="register-error">
                <AlertTriangle className="text-ember shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-bone">{errorMsg}</p>
              </div>
            )}

            <button type="submit" disabled={status === "loading"} className="btn-signal w-full flex items-center justify-center gap-2 disabled:opacity-60" data-testid="register-submit">
              {status === "loading" ? <><Loader2 className="animate-spin" size={16} /> Transmitting...</> : "Enter the Game"}
            </button>
            <p className="text-xs font-mono text-center text-bone/40 uppercase tracking-[0.18em]">By submitting you agree to our terms. A confirmation email follows.</p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required, testid }) {
  return (
    <div>
      <label className="upside">{label}{required ? " *" : ""}</label>
      <input type={type} name={name} required={required} className="upside" data-testid={testid} />
    </div>
  );
}
