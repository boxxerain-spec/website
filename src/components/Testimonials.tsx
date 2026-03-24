"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Richa Mehrotra",
        rating: 5,
        text: "Boxx Era is not an easy space for people who are not ready to improve themselves. It’s a place where you unlearn and relearn the techniques of living your life in a free-spirited environment. The coaches don’t just train your body, they work on your mindset.",
        image: "/unnamed.png",
    },
    {
        id: 2,
        name: "Namrata Arya",
        rating: 5,
        text: "Training at Boxx Era has been such a great experience. The gym has a really positive vibe, and the coaches are patient, knowledgeable, and genuinely invested in your progress. Every session feels purposeful and motivating.",
    },
    {
        id: 3,
        name: "Dilip Varma",
        rating: 5,
        text: "The vibe at Boxx Era is uniquely elevating — a perfect blend of high energy and positive support. It makes every training session something to genuinely look forward to.",
    },
    {
        id: 4,
        name: "Ratika Srivastava",
        rating: 5,
        text: "Boxx Era isn’t just a gym — it’s a life-changing space. I’ve been training here for over a year, and the transformation through the Dream Body Series has been incredible, both physically and mentally.",
        image: "/unnamed (1).png",
    },
    {
        id: 5,
        name: "Mallika Gera",
        rating: 5,
        text: "More than just physical results — it’s been a complete mindset shift. Since joining the DBS challenge, my relationship with fitness has changed completely. Workouts no longer feel like a chore.",
    },
    {
        id: 6,
        name: "Pria Sethi",
        rating: 5,
        text: "So I signed up for the Dream Body Series (DBS – 51 days) at Boxx Era Hauz Khas, and wow… what a ride. 😅 I went in thinking, “okay, maybe I’ll lose a couple of kgs,” but what I actually walked out with was way more — better stamina, real strength, and a whole lot of inch loss (my clothes are literally thanking me)😬😬\nThe workouts were no joke — there were days I thought my body would give up, but the coaches kept me going and somehow made it fun too. Somewhere between all the sweat and sore muscles, I actually started enjoying it.\nNow, 51 days later, I feel lighter, stronger, and way more confident. Dropping my before & after here because even I can’t believe the difference sometimes 🙈",
        image: "/unnamed (2).png",
    },
];

function TestimonialText({ text }: { text: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const CHAR_LIMIT = 180;

    if (text.length <= CHAR_LIMIT) {
        return (
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-12 font-medium italic">
                &quot;{text}&quot;
            </p>
        );
    }

    return (
        <div className="mb-12">
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium italic">
                &quot;{isExpanded ? text : `${text.slice(0, CHAR_LIMIT)}...`}&quot;
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-accent text-[10px] font-black uppercase tracking-widest mt-4 hover:text-white transition-colors"
            >
                {isExpanded ? "Read Less -" : "Read More +"}
            </button>
        </div>
    );
}

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateVisibleItems = useCallback(() => {
        if (window.innerWidth < 768) {
            setVisibleItems(1);
        } else if (window.innerWidth < 1280) {
            setVisibleItems(2);
        } else {
            setVisibleItems(3);
        }
    }, []);

    useEffect(() => {
        updateVisibleItems();
        window.addEventListener("resize", updateVisibleItems);
        return () => window.removeEventListener("resize", updateVisibleItems);
    }, [updateVisibleItems]);

    const maxIndex = testimonials.length - visibleItems;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [maxIndex]);

    return (
        <section className="bg-black py-24 md:py-32 px-6 md:px-12 relative overflow-hidden selection:bg-accent selection:text-white">
            <div className="container mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-4 block">
                            REAL RESULTS
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase tracking-tight leading-[0.9] mb-8">
                            WHAT OUR <br /> <span className="text-white">MEMBERS SAY</span>
                        </h2>
                        <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] leading-relaxed max-w-md">
                            Unfiltered experiences from real people who trained at Boxx Era.
                        </p>
                    </motion.div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
                        >
                            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
                        >
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative overflow-visible" ref={containerRef}>
                    <motion.div
                        className="flex gap-6 md:gap-8"
                        animate={{ x: `calc(-${currentIndex * (100 / visibleItems)}% - ${currentIndex * (32 / visibleItems)}px)` }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0"
                                style={{ width: `calc(${100 / visibleItems}% - ${((visibleItems - 1) * 32) / visibleItems}px)` }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="bg-zinc-900/30 border border-white/5 p-8 md:p-10 rounded-sm flex flex-col justify-between h-full hover:border-accent/40 hover:bg-zinc-900/50 transition-all duration-500 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div>
                                        <div className="flex gap-1 mb-8">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-accent text-accent group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                                            ))}
                                        </div>
                                        <TestimonialText text={item.text} />
                                    </div>

                                    <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                                        <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 text-white font-anton text-lg tracking-tighter group-hover:border-accent/50 group-hover:text-accent transition-colors duration-500 overflow-hidden">
                                            {item.image ? (
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            ) : (
                                                item.name.split(' ').map(n => n[0]).join('')
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs">
                                                {item.name}
                                            </h4>
                                            <span className="text-accent uppercase tracking-widest text-[9px] font-black">
                                                VERIFIED MEMBER
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {[...Array(maxIndex + 1)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1 transition-all duration-500 rounded-full ${currentIndex === i ? "w-12 bg-accent" : "w-4 bg-white/10"}`}
                        />
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="flex -space-x-3">
                            {testimonials.slice(0, 4).map((item) => (
                                <div key={item.id} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-black uppercase text-white/50 overflow-hidden relative">
                                    <div className="w-full h-full bg-accent/10 flex items-center justify-center uppercase">
                                        {item.image ? (
                                            <Image src={item.image} alt={item.name} fill className="object-cover opacity-60" />
                                        ) : (
                                            item.name[0]
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-white font-black uppercase tracking-[.25em] text-xs mb-1">
                                Rated 4.8★ by 150+ members
                            </p>
                            <span className="text-white/30 uppercase tracking-[.3em] text-[9px]">
                                Authenticated via Google Reviews
                            </span>
                        </div>
                    </div>

                    <motion.a
                        href="https://www.google.com/search?client=safari&hs=yCz9&sca_esv=c6630c33b2d75486&hl=en-in&cs=1&sxsrf=ANbL-n4scfqjcoasdUD0aUsT0DEuJlPyoQ:1770633134158&q=boxx+era+fitness+studio+reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOSZQaM4ths956hJQtjt83JL9LGEo9NMATAZww-O97BYyA42v6jomKrq25M2fPVnQ8aUO1ACm8-HF6k-IDmlrForkvgaFwydKUIpjIgjQVOL5VpMY0g%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: "#D40000", color: "#ffffff", boxShadow: "0 0 25px rgba(212,0,0,0.4)" }}
                        className="bg-accent text-black px-10 py-5 font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-4 transition-all group"
                    >
                        VIEW MORE REVIEWS <MoveRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
