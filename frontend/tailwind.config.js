/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        midnight: "#0a0a0c",
        bone: "#f5f1e8",
        rust: "#b91c1c",
        ember: "#ff1f3d",
        glow: "#ff3355",
        signal: "#ffe600",
        signalDim: "#ccb800",
        moss: "#1a2e1a",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "Impact", "sans-serif"],
        body: ['"Manrope"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 20% 30%, rgba(255, 31, 61, 0.06), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 230, 0, 0.04), transparent 60%)",
      },
      boxShadow: {
        signal: "0 0 24px rgba(255, 230, 0, 0.55), 0 0 60px rgba(255, 230, 0, 0.25)",
        ember: "0 0 24px rgba(255, 31, 61, 0.55), 0 0 60px rgba(255, 31, 61, 0.2)",
        innerGlow: "inset 0 0 30px rgba(255, 31, 61, 0.18)",
      },
      keyframes: {
        glitch: {
          "0%,100%": { transform: "translate(0)", textShadow: "1px 0 #ff1f3d,-1px 0 #ffe600" },
          "20%": { transform: "translate(-1px,1px)", textShadow: "2px 0 #ff1f3d,-2px 0 #ffe600" },
          "40%": { transform: "translate(1px,-1px)", textShadow: "-2px 0 #ff1f3d,2px 0 #ffe600" },
          "60%": { transform: "translate(-2px,1px)", textShadow: "1px 0 #ff1f3d,-1px 0 #ffe600" },
          "80%": { transform: "translate(2px,-1px)", textShadow: "-1px 0 #ff1f3d,1px 0 #ffe600" },
        },
        flicker: {
          "0%,19%,21%,23%,25%,54%,56%,100%": { opacity: 1 },
          "20%,24%,55%": { opacity: 0.4 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        crawl: {
          "0%,100%": { transform: "translate(0,0) rotate(0)" },
          "50%": { transform: "translate(2px,-2px) rotate(0.3deg)" },
        },
      },
      animation: {
        glitch: "glitch 2.4s infinite steps(2)",
        flicker: "flicker 4s infinite",
        scanline: "scanline 8s linear infinite",
        crawl: "crawl 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
