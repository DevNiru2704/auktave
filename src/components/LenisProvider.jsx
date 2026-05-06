"use client";
import { useEffect, createContext, useContext, useRef, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

export function useLenis() {
  const [lenis] = useContext(LenisContext) || [null];
  return lenis;
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={[lenis]}>
      {children}
    </LenisContext.Provider>
  );
}
