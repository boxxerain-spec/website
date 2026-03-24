"use client";

import { motion } from "framer-motion";
import { MoveRight, Check, Target, Zap, Shield, Calendar, Clock, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import Footer from "@/components/Footer";
import { PAYMENT_LINK_DBS } from "@/lib/payment-links";

const dbsCriteria = [
    "An Athlete's mindset is strongly needed. No excuses, a lot of discipline, and willingness to achieve your goals.",
    "Do and follow all instructions given by Coach.",
    "Do not suggest or make excuses for the Coach, trust the process.",
    "This series is for people looking for strict coaching styles with the goal to transform. It is not for people who are looking just for fun fitness classes.",
    "Be punctual, log in no further than 7:15am. Late entry = no attendance.",
    "Be regular, do not skip any class and the rest days will be decided by the Coach.",
    "All DBS athletes should not perform any other training or workout simultaneously without Coach's permission.",
    "Everyone will be required to follow the diet plan very strictly.",
    "If you don't show up for any class for any reason or any excuse, you will not be allowed in the next class.",
    "If you miss any class, or if the expert doesn't find that you are fulfilling the above criteria you will be asked to leave the program.",
    "The fees for this series are non-refundable, non-freezable and non-transferable.",
    "You will have to share a picture, your measurements, and your weight on the first day as well as your new measurements, weight, or pictures at the end of every month and whenever asked. This is compulsory.",
];

export default function DreamBodySeriesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    } as any;

    return (
        <main className="bg-black text-white min-h-screen selection:bg-accent selection:text-white">
            {/* 1️⃣ HERO SECTION */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/WhatsApp Image 2026-02-25 at 12.25.01 PM.jpeg"
                        alt="DBS Hero"
                        fill
                        className="object-cover opacity-30 grayscale scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center flex items-center justify-center min-h-[70vh]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Top Label */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.6em] mb-6 md:mb-8 block"
                        >
                            ELITE TRANSFORMATION PROGRAM
                        </motion.span>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[clamp(2.5rem,10vw,7.5rem)] font-anton uppercase leading-[1.0] tracking-tighter mb-8 md:mb-10"
                        >
                            <span className="block mb-2 md:mb-4">DREAM BODY</span>
                            <span className="text-accent block">SERIES</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-sm md:text-lg lg:text-xl font-light uppercase tracking-[0.25em] text-white/60 max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed px-4"
                        >
                            A 51-Day Physiological & Mental Transformation<br className="hidden sm:block" /> Designed For The Dedicated.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
                        >
                            <motion.a
                                href={PAYMENT_LINK_DBS}
                                whileHover={{ scale: 1.05, backgroundColor: "#D40000", color: "#ffffff", boxShadow: "0 0 50px rgba(212,0,0,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent text-black px-12 md:px-16 py-5 md:py-6 font-black uppercase tracking-[0.35em] text-[10px] md:text-xs transition-all duration-500"
                            >
                                START YOUR TRANSFORMATION
                            </motion.a>
                            <Link
                                href="#criteria"
                                className="text-white/50 hover:text-white text-[10px] md:text-xs font-black uppercase tracking-[0.35em] border-b-2 border-white/20 hover:border-accent pb-2 transition-all duration-300"
                            >
                                VIEW REQUIREMENTS
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] origin-center rotate-90 mb-8 text-white/40">SCROLL</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-accent/60 to-transparent" />
                </motion.div>
            </section>

            {/* 2️⃣ THE NUMBERS SECTION */}
            <section className="py-24 bg-[#050505] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {[
                            { icon: <Calendar className="w-8 h-8 text-accent" />, label: "DURATION", value: "51 DAYS" },
                            { icon: <Clock className="w-8 h-8 text-accent" />, label: "TIME", value: "7:00 AM" },
                            { icon: <Target className="w-8 h-8 text-accent" />, label: "FOCUS", value: "HOLISTIC" },
                            { icon: <Trophy className="w-8 h-8 text-accent" />, label: "GOAL", value: "PEAK PERF" },
                            { icon: <Zap className="w-8 h-8 text-accent" />, label: "MODE", value: "ONLINE/OFFLINE" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center p-8 lg:p-6 border border-white/5 bg-black hover:border-accent/40 transition-colors"
                            >
                                <div className="mb-6">{stat.icon}</div>
                                <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{stat.label}</span>
                                <span className="text-2xl lg:text-3xl font-anton uppercase text-white tracking-tight leading-tight">{stat.value}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ PROGRAM BREAKDOWN */}
            <section className="py-32 md:py-48 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-center mb-32 md:mb-48">
                        <motion.div {...fadeIn} className="lg:w-1/2">
                            <h2 className="text-5xl md:text-8xl font-anton uppercase leading-[0.9] mb-12 tracking-tighter">
                                THE <span className="text-accent underline decoration-1 underline-offset-8">PROGRAM</span> <br /> ARCHITECTURE
                            </h2>

                            <div className="space-y-8">
                                {[
                                    { title: "Personalized Protocol", text: "Every body is different. Your transformation begins with an individual assessment to identify weak points and leverage your strengths." },
                                    { title: "Metabolic Conditioning", text: "High intensity and strength based workout designed to strip body fat while building muscle mass." },
                                    { title: "Clinical Nutrition", text: "Science-backed meal protocols that fuel performance and maximize aesthetic results." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-[1px] bg-accent-red mt-4 group-hover:w-16 transition-all" />
                                        <div>
                                            <h4 className="text-xl font-anton uppercase text-white mb-3 tracking-wider">{item.title}</h4>
                                            <p className="text-sm text-white/40 leading-relaxed font-bold uppercase tracking-widest">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 grid grid-cols-2 gap-4 w-full lg:max-w-xl group relative pr-4"
                        >
                            <div className="relative aspect-[2/3] overflow-hidden border border-white/5">
                                <Image
                                    src="/WhatsApp Image 2026-03-23 at 5.18.59 PM.jpeg"
                                    alt="DBS Training 1"
                                    fill
                                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-110 object-[30%_center]"
                                />
                            </div>
                            <div className="relative aspect-[2/3] overflow-hidden border border-white/5 mt-12 shadow-2xl">
                                <Image
                                    src="/WhatsApp Image 2026-03-23 at 5.19.44 PM.jpeg"
                                    alt="DBS Training 2"
                                    fill
                                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-110 object-left"
                                />
                            </div>
                            <div className="absolute -inset-4 border border-accent/10 -z-1 translate-x-4 translate-y-4 pointer-events-none" />
                        </motion.div>
                    </div>

                    {/* PRICING BLOCK */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div
                            {...fadeIn}
                            className="p-10 md:p-16 bg-[#0e0e0e] border border-white/5 flex flex-col items-center text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4">IN-STUDIO EXPERIENCE</span>
                            <h3 className="text-4xl md:text-6xl font-anton uppercase text-white mb-8 tracking-tighter">STUDIO ACCESS</h3>
                            <div className="mb-12">
                                <span className="text-5xl md:text-7xl font-black text-white">₹24,000</span>
                                <span className="text-white/40 block text-xs font-bold uppercase tracking-[0.2em] mt-2">TOTAL PROGRAM COST</span>
                            </div>
                            <motion.a
                                href={PAYMENT_LINK_DBS}
                                className="w-full bg-accent text-black py-5 font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all"
                            >
                                RESERVE STUDIO SLOT
                            </motion.a>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            className="p-10 md:p-16 bg-black border-2 border-accent/20 flex flex-col items-center text-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-accent/[0.02]" />
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4">REMOTE TRANSFORMATION</span>
                            <h3 className="text-4xl md:text-6xl font-anton uppercase text-white mb-8 tracking-tighter">ONLINE ACCESS</h3>
                            <div className="mb-12">
                                <span className="text-5xl md:text-7xl font-black text-white">₹21,000</span>
                                <span className="text-white/40 block text-xs font-bold uppercase tracking-[0.2em] mt-2">TOTAL PROGRAM COST</span>
                            </div>
                            <motion.a
                                href={PAYMENT_LINK_DBS}
                                className="w-full bg-accent text-black py-5 font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all"
                            >
                                START ONLINE PROGRAM
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ CRITERIA SECTION */}
            <section id="criteria" className="py-32 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 text-[20vw] font-anton text-white/[0.02] -translate-y-1/2 leading-none pointer-events-none select-none">DISCIPLINE</div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-20 md:mb-32">
                        <span className="text-accent text-[10px] md:text-xs font-black tracking-[0.6em] uppercase mb-6 block">ATHLETE REQUIREMENTS</span>
                        <h2 className="text-5xl md:text-8xl font-anton uppercase text-white leading-none tracking-tighter mb-10">THE <span className="text-accent">CODE.</span></h2>
                        <p className="text-xl md:text-2xl font-light text-white/50 leading-relaxed uppercase tracking-wide">
                            DBS is not for everyone. We only accept those ready to commit 100%. Review our non-negotiable standards before joining.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl mx-auto">
                        {dbsCriteria.map((criterion, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-6 group"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center group-hover:bg-accent-red group-hover:border-accent-red transition-all duration-500">
                                    <Check size={14} className="text-accent group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-sm md:text-base font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors leading-relaxed pt-1">
                                    {criterion}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        {...fadeIn}
                        className="mt-32 p-8 md:p-12 border border-accent/20 bg-accent/5 backdrop-blur-sm text-center max-w-4xl mx-auto relative group overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                        <Shield className="mx-auto mb-6 text-accent opacity-50" size={40} />
                        <p className="text-accent font-black uppercase tracking-[0.3em] text-xs md:text-sm leading-loose">
                            FAILURE TO COMPLY WITH THE CODE MAY RESULT IN IMMEDIATE REMOVAL FROM THE PROGRAM.fees are non-refundable, non-freezable, non-transferable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5️⃣ FINAL CTA */}
            <section className="py-32 md:py-64 relative overflow-hidden flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/WhatsApp Image 2026-03-23 at 5.14.12 PM.jpeg"
                        alt="CTA BG"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-radial-gradient from-accent/20 via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div {...fadeIn}>
                        <h2 className="text-5xl md:text-[8rem] font-anton uppercase leading-[0.9] tracking-tighter text-white mb-16">
                            YOUR <span className="text-accent">ERA</span> <br /> STARTS NOW
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                            <motion.a
                                href={PAYMENT_LINK_DBS}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(29,194,193,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent text-black px-16 py-7 font-black uppercase tracking-[0.5em] text-xs transition-all w-full sm:w-auto"
                            >
                                APPLY FOR DBS
                            </motion.a>
                            <TransitionLink
                                href="/#contact"
                                className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
                            >
                                CONTACT COACHES <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-accent" />
                            </TransitionLink>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
