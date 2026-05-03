"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 9 + 2;
        if (next >= 100) { clearInterval(id); return 100; }
        return next;
      });
    }, 80);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setShow(false), 600);
      return () => clearTimeout(t);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
          data-testid="splash-screen"
        >
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
          <div className="absolute inset-0 vines-bg pointer-events-none" />
          <div className="relative text-center px-6">
            <p className="eyebrow mb-4 animate-flicker">Transmission Incoming</p>
            <h1 className="headline glitch-text text-4xl sm:text-6xl lg:text-7xl mb-3" data-text="ENTER THE UPSIDE DOWN">
              ENTER THE UPSIDE DOWN
            </h1>
            <p className="headline text-2xl sm:text-3xl text-ember mb-10">OF INNOVATION</p>

            <div className="w-72 sm:w-96 mx-auto">
              <div className="h-[2px] bg-ember/20 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-signal shadow-signal transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between font-mono text-[10px] mt-3 tracking-[0.2em] text-bone/50">
                <span>SYNC {Math.floor(progress)}%</span>
                <span className="text-ember">HAWKINS LAB - 1986</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
