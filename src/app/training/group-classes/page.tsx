"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import Footer from "@/components/Footer";

export default function GroupClasses() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    } as any;

    return (
        <main className="bg-black text-white min-h-screen selection:bg-accent selection:text-white">
            {/* 1️⃣ HERO SECTION */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/DSC_0259.jpeg"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-40 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-anton uppercase leading-none tracking-tighter mb-4">
                            BOXING GROUP CLASS & OPEN GYM
                        </h1>
                        <p className="text-lg md:text-xl font-light uppercase tracking-[0.2em] text-white/80 mb-3">
                            Group class and open gym: boxing only for now.
                        </p>
                        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-accent mb-10">
                            See Boxing Group Class and Open Gym Pricing below.
                        </p>
                        <TransitionLink href="/pricing#enroll">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#000000" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent text-black px-10 md:px-14 py-5 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all shadow-[0_0_30px_rgba(29,194,193,0.3)]"
                            >
                                VIEW PRICING
                            </motion.button>
                        </TransitionLink>
                    </motion.div>
                </div>
            </section>


            {/* 2.5️⃣ MORE THAN A WORKOUT SECTION */}
            <section className="py-24 md:py-40 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
                {/* Background Decorative Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[20vw] font-anton uppercase leading-none whitespace-nowrap">EXPERIENCE</span>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
                        <span className="text-accent text-[10px] md:text-xs font-black tracking-[0.6em] uppercase mb-6 block">
                            BOXING ONLY
                        </span>
                        <h2 className="text-5xl md:text-8xl font-anton uppercase mb-10 tracking-tighter leading-none">
                            BOXING GROUP CLASS & <span className="text-accent underline decoration-1 underline-offset-8">OPEN GYM</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed uppercase tracking-wide italic">
                            For group class and open gym we offer boxing only. See Boxing Group Class and Open Gym Pricing on our pricing page.</p>
                    </motion.div>

                    {/* Split Blocks */}
                    <div className="space-y-32 md:space-y-48">
                        {/* 🔹 BLOCK 1 – BOXING */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/WhatsApp Image 2026-02-25 at 11.59.48 AM.jpeg"
                                    alt="Boxing Training"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Empowerment</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">BOXING</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    Learn boxing from real fighters. Our coaches will give you knowledge as well as professional techniques in every session. The feeling of empowerment and motivation will keep you coming back for more.
                                    <br /><br />
                                    <span className="text-accent font-bold italic border-l-2 border-accent pl-4 block mt-4">
                                        Please bring your wraps or purchase them at the reception.
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ FINAL CTA SECTION */}
            <section className="py-32 md:py-48 px-6 bg-[radial-gradient(circle_at_bottom,rgba(29,194,193,0.1)_0%,transparent_70%)] text-center border-t border-white/5 overflow-hidden">
                <div className="container mx-auto">
                    <motion.div {...fadeIn}>
                        <h2 className="text-5xl md:text-[6rem] lg:text-[7.5rem] font-anton uppercase mb-12 leading-[0.9] tracking-tighter text-white">
                            READY TO TRAIN <br />
                            LIKE AN <span className="text-accent">ATHLETE?</span>
                        </h2>
                        <p className="text-white/40 text-sm md:text-lg uppercase tracking-[0.6em] mb-16">
                            Discipline. Structure. Results.
                        </p>
                        <TransitionLink
                            href="/pricing#enroll"
                            className="inline-block"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#D40000",
                                    color: "#ffffff",
                                    boxShadow: "0 0 40px rgba(212,0,0,0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent text-black px-12 md:px-16 py-6 md:py-7 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs transition-all"
                            >
                                BOXING GROUP CLASS & OPEN GYM PRICING
                            </motion.button>
                        </TransitionLink>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
