"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function EmotionalCTA() {
    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden border-t border-b border-white/5">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <span className="text-accent uppercase tracking-[0.5em] text-[10px] md:text-xs font-black mb-8 block">
                        READY TO TRANSFORM — JOIN NOW
                    </span>

                    <h2 className="text-4xl sm:text-6xl lg:text-8xl font-anton uppercase leading-[1.05] tracking-tight mb-8 flex flex-col items-center">
                        <span className="text-white">YOUR LAST</span>
                        <span className="text-accent">RESORT</span>
                        <span className="text-white">STARTS HERE</span>
                    </h2>

                    <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-12">
                        WE ARE NOT A <span className="text-white underline decoration-accent/40 decoration-wavy underline-offset-4">GYM</span>. WE ARE A TRANSFORMATION CENTER.
                    </p>

                    <div className="w-16 h-[2px] bg-accent/30 mx-auto mb-16" />

                    <Button
                        text="BOOK YOUR TRIAL"
                        href="/#contact"
                        className="min-w-[280px] md:min-w-[350px] px-12 md:px-20 py-5 md:py-7 tracking-[0.4em] text-sm md:text-base font-black"
                        hoverScale={1.02}
                    />
                </motion.div>
            </div>

            {/* Background Texture / Subtle Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,194,193,0.04)_0%,transparent_70%)]" />

            {/* Decorative Side Word */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.02] select-none pointer-events-none">
                <span className="text-[12vw] font-anton uppercase [writing-mode:vertical-rl] leading-none">
                    DISCIPLINE
                </span>
            </div>
        </section>
    );
}
