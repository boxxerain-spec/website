"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { TransitionLink } from "@/components/transitions/TransitionLink";

interface ButtonProps {
    text: string;
    href: string;
    variant?: "primary" | "outline";
    className?: string;
    showIcon?: boolean;
    hoverScale?: number;
}

export default function Button({ text, href, variant = "primary", className = "", showIcon = true, hoverScale = 1.03 }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-black uppercase tracking-widest text-xs md:text-sm transition-all relative overflow-hidden rounded-none";

    const variants = {
        primary: "bg-accent text-black px-10 md:px-14 py-4 md:py-6 shadow-[0_0_30px_rgba(29,194,193,0.2)]",
        outline: "border-2 border-accent text-accent px-10 md:px-14 py-4 md:py-6 bg-transparent hover:bg-accent hover:text-black"
    };

    return (
        <TransitionLink href={href}>
            <motion.button
                whileHover={{
                    scale: hoverScale,
                    filter: variant === "primary" ? "brightness(1.15)" : "none",
                    backgroundColor: variant === "outline" ? "var(--accent)" : undefined,
                    color: variant === "outline" ? "#000000" : undefined
                }}
                whileTap={{ scale: 0.98 }}
                className={`${baseStyles} ${variants[variant]} ${className}`}
            >
                <span className="relative z-10 flex items-center gap-4">
                    {text} {showIcon && <MoveRight size={18} />}
                </span>
            </motion.button>
        </TransitionLink>
    );
}
