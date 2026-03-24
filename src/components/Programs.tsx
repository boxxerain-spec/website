"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import { ArrowUpRight, Zap, Target, Shield, MoveRight, X } from "lucide-react";

const programs = [
    {
        id: "01",
        type: "TAG_STACK",
        title: "GROUP CLASS & OPEN GYM",
        tagline: "",
        tags: ["GROUP CLASS", "OPEN GYM", "PRICING"],
        icon: <Target className="w-6 h-6" />,
        image: "/WhatsApp Image 2026-02-25 at 11.59.48 AM.jpeg",
    },
    {
        id: "02",
        type: "PERSONAL_TRAINING",
        title: "PERSONAL TRAINING",
        tagline: "",
        tags: [],
        features: [
            "Individual Assessment",
            "Identification of wear point",
            "Goal & result oriented training",
            "Expert / Qualified Coaches",
            "Achieve  YOUR personal goals Online/offline"
        ],
        icon: <Zap className="w-6 h-6" />,
        image: "/DSC_0087.webp",
    },
    {
        id: "03",
        type: "TAG_STACK",
        title: "TRANSFORMATION CLINIC",
        tagline: "",
        tags: ["1 on 1 training with transformation expert - Jeeth"],
        icon: <Shield className="w-6 h-6" />,
        image: "/himanshutransf.webp",
    },
];

const TRANSFORMATION_CLINIC_LINK = "https://rzp.io/l/KuMhkTpH";

export default function Programs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeMobileIndex, setActiveMobileIndex] = useState(0);
    const [showTransformationModal, setShowTransformationModal] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (showTransformationModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showTransformationModal]);

    // Handle Scroll detection for dots (manual swipe)
    const handleScroll = () => {
        if (!scrollRef.current || !isMobile) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = window.innerWidth * 0.85 + 24; // 85vw + gap-6
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex !== activeMobileIndex) {
            setActiveMobileIndex(newIndex);
        }
    };

    // Auto-slide logic for mobile/tablet
    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            if (!scrollRef.current) return;
            const nextIndex = (activeMobileIndex + 1) % programs.length;
            const cardWidth = window.innerWidth * 0.85 + 24; // 85vw + gap-6

            scrollRef.current.scrollTo({
                left: nextIndex * cardWidth,
                behavior: "smooth"
            });

            // Directly update index — don't rely on scroll event firing on touch devices
            setActiveMobileIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [isMobile, activeMobileIndex]);

    const containerVariants = {
        rest: { transition: { staggerChildren: 0.1 } },
        hover: { transition: { staggerChildren: 0.05 } }
    };

    const itemVariants = {
        rest: { opacity: 0, y: 20 },
        hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as any } }
    };

    return (
        <section id="programs" className="bg-black py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto relative z-10 px-4 md:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 md:mb-24 gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-anton uppercase tracking-tight leading-[1.2] text-white max-w-sm">
                            EMPOWERING YOU WITH AN AUTHENTIC WORLD-CLASS ATHLETE TRAINING PHILOSOPHY.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="md:max-w-md lg:max-w-md"
                    >
                        <div className="w-12 h-1 bg-accent mb-6 md:block hidden" />
                        <p className="text-xs sm:text-sm md:text-sm text-white/70 leading-relaxed uppercase">
                            EXCLUSIVE NUTRITION PLAN | FAT LOSS | MUSCLE BUILDING / TONING | KIDS TRAINING | SENIOR ADULT TRAINING <br />
                            SPORTS SPECIFIC TRAINING | LIFESTYLE ASSESSMENT | NATURAL BODY BUILDING
                        </p>
                    </motion.div>
                </div>

                {/* Grid on Desktop, Slider on Mobile */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar lg:grid lg:grid-cols-3 gap-6 lg:gap-10 -mx-6 px-6 lg:mx-0 lg:px-0 pb-8 lg:pb-0"
                >
                    {programs.map((program, index) => {
                        const isActive = isMobile ? (activeMobileIndex === index) : hoveredIndex === index;

                        return (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                className={`group relative h-[550px] md:h-[650px] lg:h-[750px] bg-zinc-900 overflow-hidden border transition-all duration-700 rounded-sm cursor-pointer flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-auto snap-center lg:snap-align-none
                                    ${!isMobile && hoveredIndex !== null && hoveredIndex !== index ? "opacity-30 grayscale blur-[1px]" : "opacity-100 grayscale-0 blur-0"}
                                    ${isActive ? "border-accent shadow-[0_0_40px_rgba(29,194,193,0.25)]" : "border-white/5"}
                                `}
                            >
                                <div className="absolute inset-0 bg-zinc-900/40" />

                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col z-20 overflow-hidden text-center items-center">

                                    {program.type === "TAG_STACK" ? (
                                        <div className="h-full flex flex-col relative items-center w-full">
                                            {/* Heading Stack (Centered by default, moves to top on hover) */}
                                            <div className={`absolute left-0 right-0 flex flex-col items-center transition-all duration-700 ease-[0.16,1,0.3,1] ${isActive ? "top-0" : "top-1/2 -translate-y-1/2"}`}>
                                                <span className="text-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-2 block">
                                                    {program.tagline}
                                                </span>
                                                <h3 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] font-anton uppercase tracking-tight text-white leading-[1.1] text-center px-6 break-words">
                                                    {program.title}
                                                </h3>
                                            </div>

                                            {/* Content - Tags Stack */}
                                            <div className="flex flex-col items-center w-full mt-32 md:mt-40 gap-8 h-full">
                                                <motion.div
                                                    variants={containerVariants}
                                                    animate={isActive ? "hover" : "rest"}
                                                    className={`flex flex-col gap-3 w-full transition-all duration-700 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                                                >
                                                    {program.tags?.map((tag, tIdx) => (
                                                        <motion.div
                                                            key={tIdx}
                                                            variants={itemVariants}
                                                            className="border border-white/20 bg-white/5 backdrop-blur-md px-4 py-3 md:py-3 py-2.5 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transform transition-all duration-300 hover:border-accent-red hover:bg-accent-red/10"
                                                        >
                                                            {tag}
                                                        </motion.div>
                                                    ))}
                                                </motion.div>

                                                {/* EXPLORE NOW Button */}
                                                {program.id === "03" ? (
                                                    <motion.button
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                        transition={{ delay: 0.4, duration: 0.5 }}
                                                        whileHover={{ backgroundColor: "#D40000", color: "#ffffff", boxShadow: "0 0 25px rgba(212,0,0,0.4)" }}
                                                        onClick={() => setShowTransformationModal(true)}
                                                        className="mt-2 md:mt-4 bg-accent text-black px-8 py-3 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
                                                    >
                                                        EXPLORE NOW <MoveRight size={16} />
                                                    </motion.button>
                                                ) : (
                                                    <TransitionLink
                                                        href={program.id === "01" ? "/pricing#enroll" : "/pricing"}
                                                        className="inline-block"
                                                    >
                                                        <motion.button
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                            transition={{ delay: 0.4, duration: 0.5 }}
                                                            whileHover={{ backgroundColor: "#D40000", color: "#ffffff", boxShadow: "0 0 25px rgba(212,0,0,0.4)" }}
                                                            className="mt-2 md:mt-4 bg-accent text-black px-8 py-3 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
                                                        >
                                                            EXPLORE NOW <MoveRight size={16} />
                                                        </motion.button>
                                                    </TransitionLink>
                                                )}
                                            </div>

                                            {/* Static Bottom */}
                                            <div className={`mt-auto transition-opacity duration-500 ${isActive ? "opacity-0 invisible" : "opacity-100 visible"}`}>
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 flex items-center gap-2">
                                                    EXPLORE <ArrowUpRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        /* Card 02 - Personal Training */
                                        <div className="h-full flex flex-col relative items-center w-full">
                                            <div className={`absolute left-0 right-0 flex flex-col items-center transition-all duration-700 ease-[0.16,1,0.3,1] ${isActive ? "top-0" : "top-1/2 -translate-y-1/2"}`}>
                                                <span className="text-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-2 block">{program.tagline}</span>
                                                <h3 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.8rem] font-anton uppercase tracking-tight text-white leading-[0.95] text-center px-6 break-words">
                                                    PERSONAL <br /> TRAINING
                                                </h3>
                                            </div>

                                            <div className={`w-full flex flex-col items-center transition-all duration-700 mt-32 md:mt-44 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                                                {program.tags && program.tags.length > 0 && (
                                                    <div className="flex border-b border-white/10 mb-6 md:mb-8 w-full">
                                                        {program.tags.map((tag, tIdx) => (
                                                            <div key={tIdx} className="flex-1 py-3 text-[9px] md:text-[10px] font-black text-white/40 hover:text-accent transition-colors border-r last:border-r-0 border-white/10 uppercase tracking-tighter">
                                                                {tag}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                <ul className="flex flex-col gap-2 md:gap-2.5 items-stretch mb-3 md:mb-4 w-full max-w-[280px] mx-auto list-none pl-0">
                                                    {program.features?.map((f, fIdx) => (
                                                        f ? (
                                                            <li key={fIdx} className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] flex items-start gap-3 group/li text-left">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-accent-red flex-shrink-0 mt-1.5 shadow-[0_0_8px_rgba(212,0,0,0.6)] group-hover/li:bg-accent group-hover/li:shadow-[0_0_8px_rgba(29,194,193,0.6)] transition-all" />
                                                                <span className="flex-1 min-w-0">{f}</span>
                                                            </li>
                                                        ) : null
                                                    ))}
                                                </ul>

                                                {/* EXPLORE NOW Button */}
                                                <TransitionLink
                                                    href="/pricing"
                                                    className="inline-block"
                                                >
                                                    <motion.button
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                        transition={{ delay: 0.4, duration: 0.5 }}
                                                        whileHover={{ backgroundColor: "#D40000", color: "#ffffff", boxShadow: "0 0 25px rgba(212,0,0,0.4)" }}
                                                        className="bg-accent text-black px-8 py-3 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3 transition-all shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
                                                    >
                                                        EXPLORE NOW <MoveRight size={16} />
                                                    </motion.button>
                                                </TransitionLink>
                                            </div>

                                            <div className={`mt-auto transition-opacity duration-500 ${isActive ? "opacity-0 invisible" : "opacity-100 visible"}`}>
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 flex items-center gap-2">
                                                    EXPLORE <ArrowUpRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-700 ${isActive ? "w-full" : "w-0"}`} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Animated Dots for Mobile Slider */}
                {isMobile && (
                    <div className="flex justify-center gap-3 mt-8">
                        {programs.map((_, i) => (
                            <div
                                key={i}
                                className="h-1 bg-white/10 overflow-hidden rounded-full w-12 relative"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-accent origin-left"
                                    initial={{ scaleX: 0 }}
                                    animate={{
                                        scaleX: activeMobileIndex === i ? 1 : 0
                                    }}
                                    transition={{
                                        duration: activeMobileIndex === i ? 5 : 0.3,
                                        ease: "linear"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Transformation Clinic Modal */}
            <AnimatePresence>
                {showTransformationModal && (
                    <>
                        <motion.div
                            key="transformation-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 p-4 sm:p-6 flex items-center justify-center"
                            onClick={() => setShowTransformationModal(false)}
                        />
                        <motion.div
                            key="transformation-modal-content"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed inset-4 sm:inset-6 md:inset-auto z-50 md:max-w-lg md:max-h-[85vh] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col bg-zinc-900 border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 flex-shrink-0">
                                <h3 className="text-lg sm:text-xl font-anton uppercase text-white tracking-tight">
                                    Transformation Clinic
                                </h3>
                                <button
                                    type="button"
                                    onClick={() => setShowTransformationModal(false)}
                                    className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-white/85 text-sm sm:text-base leading-relaxed">
                                <p className="font-semibold text-accent text-base sm:text-lg">
                                    A Premium, Personalized Holistic Transformation Program
                                </p>
                                <p>
                                    Are you someone who has struggled to see results despite trying various approaches? Do you have ongoing medical conditions or past injuries that have held you back? Our Transformation Clinic is designed specifically for you.
                                </p>
                                <p>
                                    This is a one-on-one, holistic transformation program tailored to your unique needs. Every plan is customized based on your individual circumstances—regardless of gender, age, or medical background. We understand that every person&apos;s journey is different, and our expert is here to guide you every step of the way.
                                </p>
                                <p>
                                    Take the first step toward your transformation today. Book a consultation with our experienced specialist to start your personalized journey.
                                </p>
                            </div>
                            <div className="p-4 sm:p-6 border-t border-white/10 flex-shrink-0">
                                <a
                                    href={TRANSFORMATION_CLINIC_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-accent text-black py-4 px-6 font-black uppercase tracking-[0.2em] text-xs sm:text-sm transition-all hover:bg-white rounded"
                                >
                                    Book Your Consultation Now <MoveRight size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}