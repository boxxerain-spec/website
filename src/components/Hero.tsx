"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import Button from "@/components/Button";

const slides = [
    {
        tagline: "",
        headline: "BOXX ERA",
        description: "Result-oriented fitness boutique studio | Personal training • Transformations • Boxing Culture • Group Training",
        primaryCTA: "START YOUR TRANSFORMATION",
        primaryLink: "/pricing",
        secondaryCTA: "GROUP CLASS & OPEN GYM PRICING",
        secondaryLink: "/pricing#enroll",
        image: "/WhatsApp Image 2026-02-25 at 12.25.01 PM.jpeg",
    },
    {
        tagline: "ALL SENSES ON",
        headline: (
            <>
                DREAM BODY SERIES –<br />COMMIT TO EVOLVE
            </>
        ),
        description: "by – Jeeth Sanghavi",
        primaryCTA: "ENROLL NOW",
        primaryLink: "/pricing",
        secondaryCTA: "EXPLORE TRAINING",
        secondaryLink: "/#programs",
        image: "/WhatsApp Image 2026-03-23 at 5.18.59 PM.jpeg",
        ghostText: "TRANSFORMATION EXPERT",
        position: "object-[center_10%]"
    },
    {
        tagline: "", // Moved to headline focal point
        headline: "TRAIN WITH THE BEST",
        subHeadline: "CERTIFIED & TRANSFORMATION-FOCUSED TRAINING",
        description: (
            <>
                TRAINED CELEBRITIES AND PROFESSIONAL ATHLETES
            </>
        ),
        primaryCTA: "GET YOUR FIRST CLASS",
        primaryLink: "/#contact",
        secondaryCTA: "CONTACT US",
        secondaryLink: "/#contact",
        image: "/WhatsApp Image 2026-02-25 at 12.17.10 PM.jpeg",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        const init = () => {
            setIsMounted(true);
            setWindowWidth(window.innerWidth);
        };

        const timeout = setTimeout(init, 0);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        const timer = setInterval(nextSlide, 10000);
        return () => {
            clearTimeout(timeout);
            clearInterval(timer);
            window.removeEventListener("resize", handleResize);
        }
    }, [nextSlide]);

    return (
        <section
            id="hero"
            className="relative h-screen min-h-[660px] w-full overflow-hidden bg-black text-white flex flex-col"
        >
            {/* Navbar overlay removed, now global in layout */}


            <div className="flex-grow relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={slides[current].image}
                                alt="Hero Background"
                                fill
                                className={`object-cover grayscale ${(slides[current] as any).position || "object-center"}`}
                                priority
                            />
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-black/70" />
                        </div>

                        {/* 0. Ghost Text (Decorative) */}
                        {(slides[current] as any).ghostText && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 0.1, scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        duration: 2,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    className="text-[clamp(10vw,20vw,25vw)] font-anton uppercase text-white whitespace-nowrap leading-none text-center"
                                >
                                    {(slides[current] as any).ghostText}
                                </motion.span>
                            </div>
                        )}

                        {/* Content Container */}
                        <div className="relative z-10 h-full w-full flex items-center justify-center pt-28 md:pt-20">
                            <div className="container mx-auto px-6 flex flex-col items-center text-center">

                                {/* 1. Tagline (Slides 1 & 2) */}
                                {slides[current].tagline && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 0.8,
                                            ease: "easeOut"
                                        }}
                                        className="mb-8 md:mb-12"
                                    >
                                        <span className="text-[clamp(0.6rem,2.5vw,0.8rem)] font-black tracking-[0.5em] text-accent uppercase bg-black/20 backdrop-blur-sm px-4 py-1">
                                            {slides[current].tagline}
                                        </span>
                                    </motion.div>
                                )}

                                {/* 2. Main Headline */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: current === 2 ? 30 : 0,
                                        scale: current === 2 ? 1 : 0.95
                                    }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        delay: current === 2 ? 0.5 : 0.7, // Slide 3 headline first
                                        duration: current === 2 ? 1.2 : 1,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    className={`w-full ${current === 2 ? "max-w-6xl" : "max-w-5xl"} mb-6 md:mb-8`}
                                >
                                    <h1 className={`
                                        font-anton uppercase tracking-tighter leading-[1.05] md:leading-[0.95]
                                        ${current === 2
                                            ? "text-[clamp(2.2rem,9vw,7.5rem)]"
                                            : "text-[clamp(2.5rem,10vw,8.5rem)]"
                                        }
                                    `}>
                                        {slides[current].headline}
                                    </h1>
                                </motion.div>

                                {/* 3. Sub-heading (Slide 3 Only) */}
                                {(slides[current] as any).subHeadline && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.9,
                                            duration: 1.2,
                                            ease: "easeOut"
                                        }}
                                        className="mb-8 md:mb-12 max-w-4xl"
                                    >
                                        <h2 className="text-[clamp(0.9rem,2.5vw,1.4rem)] font-bold tracking-[0.1em] md:tracking-[0.15em] text-white/80 uppercase leading-relaxed">
                                            {(slides[current] as any).subHeadline}
                                        </h2>
                                    </motion.div>
                                )}

                                {/* 4. Supporting Description */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: current === 2 ? 1.3 : 0.9,
                                        duration: 1
                                    }}
                                    className="mb-16 md:mb-24"
                                >
                                    <p className="mx-auto max-w-2xl text-[clamp(0.7rem,1.8vw,0.95rem)] font-medium text-white/50 tracking-[0.15em] md:tracking-[0.25em] uppercase leading-relaxed">
                                        {slides[current].description}
                                    </p>
                                </motion.div>

                                {/* 5. CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-6 md:gap-10 w-full sm:w-auto">
                                    <Button
                                        text={slides[current].primaryCTA}
                                        href={slides[current].primaryLink || "/#contact"}
                                        className="w-full sm:w-auto tracking-[0.3em]"
                                    />
                                    <TransitionLink href={slides[current].secondaryLink || "/#contact"}>
                                        <motion.button
                                            whileHover={{ scale: 1.05, borderColor: "#1DC2C1", color: "#1DC2C1", backgroundColor: "rgba(29, 194, 193, 0.05)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="border-2 border-white/20 text-white/60 px-10 md:px-14 py-4 md:py-6 font-black uppercase tracking-widest text-xs md:text-sm transition-all w-full sm:w-auto"
                                        >
                                            {slides[current].secondaryCTA}
                                        </motion.button>
                                    </TransitionLink>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Manual Navigation Dots */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-50 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="group relative h-10 md:h-12 w-8 flex items-center justify-center"
                    >
                        <motion.div
                            animate={{
                                height: current === index ? (isMounted && windowWidth < 768 ? 24 : 32) : 12,
                                backgroundColor: current === index ? "#1DC2C1" : "rgba(255,255,255,0.3)",
                                boxShadow: current === index ? "0 0 15px rgba(212,0,0,0.6)" : "none"
                            }}
                            className="w-[2px] transition-colors duration-300 group-hover:bg-[#1DC2C1] group-hover:shadow-[0_0_10px_rgba(29,194,193,0.8)]"
                        />
                    </button>
                ))}
            </div>

            {/* Decorative vertical words - Slide Context */}
            <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 items-center opacity-20 pointer-events-none">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.5em] uppercase">Boxx Era</span>
                <div className="w-[1px] h-20 bg-white" />
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.5em] uppercase text-[#1DC2C1]">Elite</span>
            </div>

            {/* Scroll indicator overlay */}
            <div className="absolute right-8 md:right-12 bottom-12 hidden md:block opacity-40 z-50">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-white" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}
