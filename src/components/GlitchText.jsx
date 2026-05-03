"use client";
import { motion } from "framer-motion";

export default function GlitchText({ children, className = "", as = "h2" }) {
  const Tag = motion[as];
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
