import GlitchText from "@/components/GlitchText";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="privacy-page">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-4">/ Legal</p>
        <GlitchText as="h1" className="text-5xl lg:text-7xl mb-8">Privacy Policy</GlitchText>
        <div className="prose prose-invert max-w-none space-y-5 text-bone/75 leading-relaxed">
          <p>Last updated: February 2026.</p>
          <p>This Privacy Policy describes how AUKTAVE, hosted by ASETK at Amity University Kolkata, collects and uses your data when you register for and participate in AUKTAVE 2K26.</p>
          <h3 className="headline text-2xl text-bone mt-8">Information we collect</h3>
          <p>Name, college, email, phone number, payment screenshots, and any other details you submit through the registration or contact forms. Forms are processed via Web3Forms which delivers responses to our official inbox.</p>
          <h3 className="headline text-2xl text-bone mt-8">How we use it</h3>
          <p>To verify and confirm your registration, send event updates, share schedules, and contact you for prize related logistics.</p>
          <h3 className="headline text-2xl text-bone mt-8">Sharing</h3>
          <p>We do not sell your data. We share with sponsors only when you opt in, and with our partner IEEE SB AUK chapter for IEEE SB AUK certified sessions.</p>
          <h3 className="headline text-2xl text-bone mt-8">Cookies</h3>
          <p>We use minimal local storage to remember your audio preferences and to dismiss the announcement banner. No tracking cookies beyond Google Analytics if enabled.</p>
          <h3 className="headline text-2xl text-bone mt-8">Your rights</h3>
          <p>You can request deletion of your data at any time by emailing privacy@auktave.in.</p>
        </div>
      </div>
    </div>
  );
}
