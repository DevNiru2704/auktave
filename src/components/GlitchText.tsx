"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlitchTextProps = {
  children: ReactNode;
  className?: string;
  as?: keyof typeof motion;
};

export default function GlitchText({ children, className = "", as = "h2" }: GlitchTextProps) {
  const Tag = motion[as as keyof typeof motion] as React.ComponentType<{
    initial?: unknown;
    whileInView?: unknown;
    viewport?: unknown;
    transition?: unknown;
    className?: string;
    "data-text"?: string;
    children: ReactNode;
  }>;
  return (
    <Tag
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`headline glitch-text ${className}`}
      data-text={typeof children === "string" ? children : ""}
    >
      {children}
    </Tag>
  );
}
