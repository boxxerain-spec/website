"use client";

import { motion } from "framer-motion";
import { MoveRight, Check, Zap, Target, Flame, Users, Layout, MapPin, Search, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import { PAYMENT_LINK_BOXING_OPEN_GYM, PAYMENT_LINK_DBS, PAYMENT_LINK_CONSULTATION } from "@/lib/payment-links";

// Animation Variants
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            {/* SECTION 1: HERO */}
            <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden pt-20 md:pt-24">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero.png" // Using existing hero image
                        alt="Boxx Era Gym"
                        fill
                        className="object-cover grayscale opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
                </div>

                <div className="container relative z-10 px-6 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="font-anton text-[clamp(2.5rem,10vw,7rem)] leading-none uppercase tracking-tighter mb-4">
                            Pricing & <span className="text-accent">Programs</span>
                        </h1>
                        <p className="text-[clamp(0.8rem,2vw,1.1rem)] font-medium text-white/60 tracking-[0.2em] uppercase max-w-2xl mx-auto mb-10">
                            Customized plans to turn effort into proven results.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="#enroll"
                                className="inline-flex items-center gap-4 bg-accent text-black px-10 py-5 text-xs font-black uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-black shadow-[0_0_30px_rgba(29,194,193,0.3)]"
                            >
                                JOIN THE ERA NOW <MoveRight size={18} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </section>

            {/* SECTION 2: BOXING GROUP CLASS & OPEN GYM PRICING */}
            <section id="enroll" className="py-24 md:py-32 container mx-auto px-6">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <motion.h2 variants={fadeIn} className="font-anton text-4xl md:text-6xl uppercase tracking-tighter mb-6">
                        GROUP CLASS & <span className="text-accent">OPEN GYM</span> PRICING
                    </motion.h2>

                    <motion.div variants={fadeIn} className="w-24 h-[2px] bg-accent mx-auto" />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {groupClasses.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn}
                            whileHover={{
                                y: -10,
                                borderColor: "rgba(29, 194, 193, 0.3)",
                                backgroundColor: "rgba(29, 194, 193, 0.02)"
                            }}
                            className="bg-zinc-900/20 border border-white/5 p-10 flex flex-col h-full transition-all duration-300 relative group overflow-hidden"
                        >
                            {/* Accent indicator on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-accent transform translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500" />

                            <h3 className="font-anton text-2xl uppercase tracking-tighter mb-8 text-white/90 group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>

                            <div className="mb-12 flex flex-col items-start gap-1">
                                <span className="text-5xl lg:text-6xl font-anton text-white tracking-tighter">
                                    ₹{item.price.toLocaleString()}
                                </span>
                                {item.duration && (
                                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                                        {item.duration}
                                    </span>
                                )}
                            </div>
                            <div className="mt-auto pt-8 border-t border-white/5">
                                <Link
                                    href="/#contact"
                                    className="w-full inline-flex justify-center items-center bg-accent text-black py-4.5 text-[11px] font-black uppercase tracking-[0.3em] transition-all text-center shadow-[0_10px_30px_rgba(29,194,193,0.15)] hover:bg-red-600 hover:text-white"
                                >
                                    ENROLL NOW
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Thin Separator */}
            <div className="container mx-auto px-6">
                <div className="w-full h-[1px] bg-white/5" />
            </div>

            {/* SECTION 3: PERSONAL TRAINING */}
            {/* SECTION 3: PERSONAL TRAINING */}
            <section className="py-24 md:py-32 container mx-auto px-6">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <motion.h2 variants={fadeIn} className="font-anton text-4xl md:text-6xl uppercase tracking-tighter mb-6">
                        PERSONAL <span className="text-accent">TRAINING</span>
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-white/50 text-sm uppercase tracking-[0.2em] mb-4">
                        Achieve ur personal goals Online/offline
                    </motion.p>
                    <motion.div variants={fadeIn} className="w-24 h-[2px] bg-accent mx-auto" />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10"
                >

                    {/* PT Package 1 */}
                    <motion.div
                        variants={fadeIn}
                        whileHover={{ y: -5, borderColor: "rgba(29, 194, 193, 0.2)" }}
                        className="group relative bg-zinc-900/20 border border-white/5 p-10 flex flex-col items-start transition-all duration-300"
                    >
                        <div className="mb-10 w-full">
                            <div className="flex justify-between items-start mb-6">
                                <Zap className="text-accent" size={32} />
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                                    Package 01
                                </span>
                            </div>

                            <h3 className="font-anton text-3xl uppercase tracking-tighter">
                                Standard Package
                            </h3>
                        </div>

                        <div className="space-y-6 w-full mb-12">
                            <div className="flex justify-between items-end pb-4 border-b border-white/5">
                                <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">
                                    1 Session
                                </span>
                                <span className="text-2xl font-anton">₹2,500</span>
                            </div>

                            <div className="flex justify-between items-end pb-4 border-b border-white/5">
                                <div>
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block line-through decoration-accent/30 opacity-40">
                                        ₹30,000
                                    </span>
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block">
                                        12 Sessions
                                    </span>
                                    <span className="text-[9px] text-accent font-black uppercase tracking-widest">
                                        Validity 1 Month
                                    </span>
                                </div>

                                <span className="text-2xl font-anton text-accent">
                                    ₹27,500
                                </span>
                            </div>

                            <div className="flex justify-between items-end pb-4 border-b border-white/5">
                                <div>
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block line-through decoration-accent/30 opacity-40">
                                        ₹90,000
                                    </span>

                                    <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block">
                                        36 Sessions
                                    </span>

                                    <span className="text-[9px] text-accent font-black uppercase tracking-widest">
                                        Validity 3 Months
                                    </span>
                                </div>

                                <span className="text-2xl font-anton text-accent">
                                    ₹60,000
                                </span>
                            </div>
                        </div>
                    </motion.div>


                    {/* PT Package 2 */}
                    <motion.div
                        variants={fadeIn}
                        whileHover={{ y: -5, borderColor: "rgba(29, 194, 193, 0.2)" }}
                        className="group relative bg-zinc-900/20 border border-white/5 p-10 flex flex-col items-start transition-all duration-300"
                    >
                        <div className="mb-10 w-full">
                            <div className="flex justify-between items-start mb-6">
                                <Flame className="text-accent" size={32} />

                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                                    Package 02
                                </span>
                            </div>

                            <h3 className="font-anton text-3xl uppercase tracking-tighter">
                                Premium Package with Coach Shivani
                            </h3>

                            <p className="text-[11px] text-accent font-bold uppercase tracking-[0.2em] mt-2">
                                With Nutrition Plan and Complete Accountability
                            </p>
                        </div>

                        <div className="space-y-6 w-full mb-12">
                            <div className="flex justify-between items-end pb-4 border-b border-white/5">
                                <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">
                                    1 Session
                                </span>

                                <span className="text-2xl font-anton">
                                    ₹3,500
                                </span>
                            </div>

                            <div className="flex justify-between items-end pb-4 border-b border-white/5">
                                <div>
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block line-through decoration-accent/30 opacity-40">
                                        ₹42,000
                                    </span>
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block">12 Sessions</span>
                                    <span className="text-[9px] text-accent font-black uppercase tracking-widest">Validity 1 Month</span>
                                </div>
                                <span className="text-2xl font-anton text-accent">
                                    ₹36,000
                                </span>
                            </div>

                            <div className="flex justify-between items-end pb-4 border-b border-white/5">
                                <div>
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block line-through decoration-accent/30 opacity-40">
                                        ₹1,26,000
                                    </span>
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] block">36 Sessions</span>
                                    <span className="text-[9px] text-accent font-black uppercase tracking-widest">Validity 3 Months</span>
                                </div>
                                <span className="text-2xl font-anton text-accent">
                                    ₹99,000
                                </span>
                            </div>
                        </div>
                    </motion.div>


                    {/* PT Package 3 */}
                    <motion.div
                        variants={fadeIn}
                        className="group relative bg-black border-2 border-accent p-10 flex flex-col items-start shadow-[0_0_40px_rgba(29,194,193,0.15)] scale-105 lg:scale-110 z-10"
                    >
                        <div className="absolute top-0 right-0 bg-accent-red text-white px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em]">
                            EXCLUSIVE
                        </div>

                        <div className="mb-8">
                            <Target className="text-accent mb-4" size={32} />

                            <h3 className="font-anton text-2xl md:text-3xl tracking-tight leading-tight">
                                Personal Training with  Coach Jeeth Sanghavi
                            </h3>

                            <p className="text-[11px] text-accent font-bold uppercase tracking-[0.2em] mt-2">
                                Elite one-on-one training with exclusive nutrition plan and complete accountability
                            </p>
                        </div>

                        <div className="space-y-6 w-full mb-12">
                            <div className="pb-4 border-b border-white/10">
                                <p className="text-white/60 text-sm font-medium mb-2 leading-relaxed">
                                    Train Directly with coach Jeeth Sanghavi and unlock your full potential
                                </p>

                                <div className="flex flex-col items-start mt-6 gap-2">
                                    <span className="text-5xl font-anton text-accent tracking-tighter">
                                        ₹1,95,000
                                    </span>

                                    <div className="flex items-center gap-4">
                                        <span className="text-white/40 font-bold uppercase tracking-widest text-[10px]">
                                            36 Sessions
                                        </span>

                                        <span className="w-1 h-1 bg-accent/40 rounded-full" />

                                        <span className="text-[10px] text-accent/60 font-black uppercase tracking-widest">
                                            Validity 3 Months
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </section>

            {/* Thin Separator */}
            <div className="container mx-auto px-6">
                <div className="w-full h-[1px] bg-white/5" />
            </div>

            {/* SECTION 3.5: CONSULTATION WITH TRANSFORMATION EXPERT */}
            <section className="py-24 md:py-32 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">
                        Transformation Expert
                    </span>
                    <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter mb-6">
                        Book a consultation with <span className="text-accent">Jeeth Sanghavi</span>
                    </h2>
                    <div className="w-24 h-[2px] bg-accent mx-auto mb-8" />
                    <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed mb-10">
                        Ready to make real progress? Our paid consultation with a transformation expert offers personalized guidance for individuals with medical conditions, past injuries, or unmet goals. Take the first step today.
                    </p>
                    <motion.a
                        href={PAYMENT_LINK_CONSULTATION}
                        whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000", boxShadow: "0 0 30px rgba(29, 194, 193, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-4 bg-accent text-black px-10 md:px-14 py-5 text-xs font-black uppercase tracking-[0.3em] transition-all shadow-[0_0_30px_rgba(29,194,193,0.25)]"
                    >
                        BOOK CONSULTATION <MoveRight size={18} />
                    </motion.a>
                </motion.div>
            </section>

            {/* Thin Separator */}
            <div className="container mx-auto px-6">
                <div className="w-full h-[1px] bg-white/5" />
            </div>

            {/* SECTION 4: DBS PROGRAM */}
            <section className="py-24 md:py-32 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">Group Transformation Program</span>
                            <h2 className="font-anton text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-none">
                                DREAM BODY <br className="hidden md:block" /> <span className="text-accent">SERIES (DBS)</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl font-medium tracking-wide mb-10 max-w-xl">
                                A 51-day group transformation program with personalized nutrition plans and complete accountability, designed to transform your physique—suitable for all fitness levels.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">Duration</span>
                                    <span className="text-2xl font-anton uppercase tracking-tight">51 Days</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">Daily Time</span>
                                    <span className="text-2xl font-anton uppercase tracking-tight">7:00 AM</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">Studio Cost</span>
                                    <span className="text-2xl font-anton text-accent uppercase tracking-tight">₹24,000</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">Online Cost</span>
                                    <span className="text-2xl font-anton text-accent uppercase tracking-tight">₹21,000</span>
                                </div>
                            </div>

                            <motion.a
                                href={PAYMENT_LINK_DBS}
                                whileHover={{ scale: 1.05, backgroundColor: "#D40000", boxShadow: "0 0 30px rgba(212, 0, 0, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-4 bg-accent text-black px-12 py-6 text-xs font-black uppercase tracking-[0.3em] transition-all shadow-[0_15px_40px_rgba(29,194,193,0.1)]"
                            >
                                APPLY FOR DBS <MoveRight size={18} />
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative aspect-square w-full max-w-lg"
                        >
                            <div className="absolute inset-0 border-2 border-accent/20 translate-x-6 translate-y-6 -z-1" />
                            <Image
                                src="/WhatsApp Image 2026-03-23 at 5.17.17 PM.jpeg"
                                alt="DBS Elite Training"
                                fill
                                className="object-cover grayscale object-[0%_15%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: DBS CRITERIA */}
            <section className="py-24 md:py-32 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="font-anton text-4xl md:text-6xl uppercase tracking-tighter mb-4">
                            DBS ATHLETE <span className="text-accent">REQUIREMENTS</span>
                        </h2>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Read carefully before applying. Elite discipline is non-negotiable.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
                    >
                        {dbsCriteria.map((criterion, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn}
                                className="flex items-start gap-4 p-4 border-l border-white/5 hover:border-accent transition-colors group"
                            >
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-5 h-5 flex items-center justify-center border border-accent/30 rounded-full group-hover:bg-accent/10 transition-colors">
                                        <Check size={12} className="text-accent" />
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-white/70 leading-relaxed group-hover:text-white transition-colors">
                                    {criterion}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 p-8 border border-accent/20 bg-accent/5 text-center"
                    >
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-xs">
                            Failure to comply with any of the above may result in immediate removal from the program.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final Sections */}
            <Marquee />
            <PreFooter />
            <Footer />
        </main>
    );
}

const groupClasses = [
    {
        title: "Drop-In Session",
        price: 1000,
        duration: "Per Class",
    },
    {
        title: "1 Month",
        price: 6000,
        duration: "Unlimited",
    },
    {
        title: "3 Months",
        price: 15000,
        duration: "Unlimited",
    },
    {
        title: "6 Months",
        price: 24000,
        duration: "Unlimited",
    },
];

const dbsCriteria = [
    "An Athlete’s mindset is mandatory. No excuses. Full discipline.",
    "Follow all instructions given by the Coach.",
    "Trust the process. No arguments or justifications.",
    "Strict coaching format. Not for casual fitness seekers.",
    "Be punctual. Login no later than 7:15 AM.",
    "No class skipping. Rest days decided by Coach.",
    "No additional training without Coach’s permission.",
    "Strict diet adherence required.",
    "Missing sessions may result in removal.",
    "Fees are non-refundable, non-freezable, non-transferable.",
    "Monthly progress photos and measurements are compulsory.",
];
