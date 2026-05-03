import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioController from "@/components/AudioController";
import LenisProvider from "@/components/LenisProvider";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Script from "next/script";

export const metadata = {
  title: "AUKTAVE 2K26 - Enter the Upside Down of Innovation",
  description: "AUKTAVE 2K26, the first edition TechFest of Amity University Kolkata. 48 hours, 7 games, infinite parallel realities. Hackathon, Robotics, IEEE Session and more.",
  keywords: ["AUKTAVE", "Amity University Kolkata", "TechFest 2026", "Hackathon", "IEEE", "Stranger Things"],
  openGraph: {
    title: "AUKTAVE 2K26 - Enter the Upside Down of Innovation",
    description: "Not all experiments stay in the lab. 48 hours, 7 games, infinite parallel realities.",
    type: "website",
    url: "https://auktave.in"
  },
  twitter: {
    card: "summary_large_image",
    title: "AUKTAVE 2K26",
    description: "Not all experiments stay in the lab."
  }
};

export const viewport = { themeColor: "#050505" };

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <body className="bg-ink text-bone grain vignette" data-testid="root-body">
        <LenisProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <AudioController />
          {/* <StickyMobileCTA /> */}
        </LenisProvider>
        {gaId && gaId !== "G-XXXXXXXXXX" && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
