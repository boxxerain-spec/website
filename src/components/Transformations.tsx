"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const transformations = [
    { id: 1, name: "ELITE MEMBER", result: "REDEFINED STRENGTH & AGILITY", image: "/photo-output.jpg" },
    { id: 2, name: "ELITE MEMBER", result: "COMPLETE BODY RECOMPOSITION", image: "/photo-output(1).jpg" },
    { id: 3, name: "HIMANSHU", result: "ATHLETIC TRANSFORMATION", image: "/himanshutransf.webp" },
    { id: 4, name: "ELITE MEMBER", result: "FAT LOSS & LEAN MUSCLE GAIN", image: "/fatlossjeeth.jpg" },
    { id: 5, name: "ELITE MEMBER", result: "POST-PREGNANCY RECOVERY", image: "/f53db072-d38c-4e6c-b1e3-3173d4aa363a.JPG" },
    { id: 6, name: "ELITE MEMBER", result: "CORE STRENGTH EVOLUTION", image: "/e02c16f4-e854-4e50-b51f-f84f48337d02.JPG" },
    { id: 7, name: "ELITE MEMBER", result: "ELITE TRANSFORMATION", image: "/CEEC597B-F2B5-4E8B-AE15-BCCE88CABE7C.JPEG" },
    { id: 8, name: "ELITE MEMBER", result: "DISCIPLINED PROGRESS", image: "/c8e6f298-27dd-4542-8e45-a1c7be34c962.JPG" },
    { id: 9, name: "ELITE MEMBER", result: "METAMORPHOSIS COMPLETE", image: "/ba5cfe46-74c5-455c-a882-8f0e05adcfc8.JPG" },
    { id: 10, name: "ELITE MEMBER", result: "STRENGTH & CONDITIONING", image: "/B1997CD9-1BE6-408D-B736-E47ABBC7B472.JPEG" },
    { id: 11, name: "ELITE MEMBER", result: "LIFESTYLE TRANSFORMATION", image: "/b3f35b39-9589-42ff-aa5f-ce72736a97e3.JPG" },
    { id: 12, name: "ELITE MEMBER", result: "POWER & ENDURANCE", image: "/9331ecd7-ad25-4c6e-8324-ced7d3407998.jpg" },
    { id: 13, name: "ELITE MEMBER", result: "TOTAL BODY EVOLUTION", image: "/5673DACD-3E9F-41DD-8667-E1CB867C08EC.JPEG" },
    { id: 14, name: "ELITE MEMBER", result: "ELITE ATHLETICISM", image: "/82B4E89B-28C3-44FE-A3C7-078EF16735FB.JPEG" },
    { id: 15, name: "ELITE MEMBER", result: "MAXIMUM RESULTS", image: "/9F1D0119-34BB-4C6E-BE43-78A36BEB4461.jpg" },
    { id: 16, name: "ELITE MEMBER", result: "ATHLETIC PEAK", image: "/FDF7CEA8-8C65-4B49-A12B-C5C012AFCA3A.JPEG" },
    { id: 17, name: "ELITE MEMBER", result: "PERFORMANCE EVOLUTION", image: "/2021-08-17.webp" },
    { id: 18, name: "ELITE MEMBER", result: "DEDICATED GROWTH", image: "/2022-03-13.webp" },
    { id: 20, name: "ELITE MEMBER", result: "ELITE PROGRESSION", image: "/WhatsApp Image 2026-02-25 at 12.05.56 PM.jpeg" },
    { id: 21, name: "ELITE MEMBER", result: "TRANSFORMATION JOURNEY", image: "/WhatsApp Image 2026-02-25 at 12.06.52 PM.jpeg" },
    { id: 22, name: "ELITE MEMBER", result: "ATHLETIC RECOMPOSITION", image: "/WhatsApp Image 2026-02-25 at 12.07.50 PM.jpeg" },
    { id: 23, name: "ELITE MEMBER", result: "ELITE BODY TRANSFORMATION", image: "/WhatsApp Image 2026-02-25 at 12.08.14 PM.jpeg" },
    { id: 24, name: "ELITE MEMBER", result: "COMPLETE PHYSICAL EVOLUTION", image: "/WhatsApp Image 2026-02-25 at 12.09.58 PM.jpeg" },
    { id: 25, name: "ELITE MEMBER", result: "RESULT-DRIVEN TRANSFORMATION", image: "/WhatsApp Image 2026-02-25 at 12.13.04 PM.jpeg" },
];

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
}

function ParallaxCarousel({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    // Each set of children is 50% of the movement div (since we render it twice)
    // So wrapping from 0 to -50% will create a perfect loop
    const translateX = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

    const directionFactor = useRef<number>(1);
    const [isHovered, setIsHovered] = useState(false);

    useAnimationFrame((t, delta) => {
        if (isHovered) return;

        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what makes it move faster on scroll.
         * We can comment this out if we want purely static speed.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            className="overflow-hidden whitespace-nowrap flex flex-nowrap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div className="flex flex-nowrap gap-6 md:gap-10" style={{ x: translateX }}>
                {/* Render one set of items */}
                {children}
                {/* Render a second set of identical items for the infinite loop */}
                {children}
            </motion.div>
        </div>
    );
}

export default function Transformations() {
    return (
        <section id="transformations" className="bg-black py-24 md:py-40 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 mb-16 md:mb-24">
                <div className="flex flex-col items-start relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-4 block">
                            Real Results
                        </span>
                        <h2 className="text-5xl md:text-8xl font-anton uppercase leading-[0.9] tracking-tighter text-white mb-6">
                            Real <br /> <span className="text-accent">Transformations</span>
                        </h2>
                        <div className="w-24 h-2 bg-accent mt-4" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="mt-8 text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.3em] leading-relaxed max-w-md"
                    >
                        NO EXCUSES. REAL RESULTS. OUR CLIENTS DON&apos;T JUST CHANGE—THEY EVOLVE.
                    </motion.p>
                </div>
            </div>

            <div className="w-full">
                <ParallaxCarousel baseVelocity={-2}>
                    {transformations.map((item) => (
                        <div key={item.id} className="w-[300px] md:w-[450px] lg:w-[500px] flex-shrink-0">
                            <motion.div
                                className="group relative aspect-[4/5] md:aspect-[3/4] bg-zinc-900 border border-white/5 overflow-hidden transition-all duration-500 hover:border-accent"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 300px, 500px"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

                                {/* Transformation Badge */}
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="bg-accent text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 shadow-[0_5px_15px_rgba(29,194,193,0.3)]">
                                        RESULT
                                    </span>
                                </div>

                                {/* Hover Glow Line (Bottom) */}
                                <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500 shadow-[0_0_15px_rgba(29,194,193,0.5)]" />
                            </motion.div>
                        </div>
                    ))}
                </ParallaxCarousel>
            </div>
        </section>
    );
}
