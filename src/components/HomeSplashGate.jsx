"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";

export default function HomeSplashGate() {
    const pathname = usePathname();
    const hasSeenSplash = useRef(false);
    const [showSplash, setShowSplash] = useState(pathname === "/");

    useEffect(() => {
        if (pathname === "/" && !hasSeenSplash.current) {
            hasSeenSplash.current = true;
            setShowSplash(true);
            return;
        }

        hasSeenSplash.current = true;
        setShowSplash(false);
    }, [pathname]);

    if (!showSplash) return null;

    return <SplashScreen onDismiss={() => setShowSplash(false)} />;
}