"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { articles, Article } from "@/data/articles";
import Button from "@/components/Button";

const categories = ["ALL", "HIGHLIGHTS", "COMMUNITY", "TRANSFORMATION"];

function MediaLogo({ src, alt, color, className }: { src?: string; alt: string; color?: string; className?: string }) {
    const [error, setError] = useState(!src);

    if (error || !src) {
        return (
            <div className={`flex items-center gap-2 ${className}`}>
                <div className="w-1 h-4" style={{ backgroundColor: color || '#1DC2C1' }} />
                <span className="text-[9px] font-black uppercase tracking-widest text-black/60">{alt}</span>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain object-left transition-all duration-300"
                onError={() => setError(true)}
                unoptimized
            />
        </div>
    );
}

export default function ArticlesPage() {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const filteredArticles = activeCategory === "ALL"
        ? articles
        : articles.filter(a => a.category === activeCategory);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">

            {/* SECTION 1: HERO */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <Image
                        src="/hero.png" // Using existing hero image
                        alt="Articles Hero"
                        fill
                        className="object-cover opacity-30 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.6em] mb-8 block"
                    >
                        Boxx Era Press Archive
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(3rem,10vw,7.5rem)] font-anton uppercase leading-[0.85] tracking-tighter text-white drop-shadow-[0_0_30px_rgba(29,194,193,0.3)]"
                    >
                        LEGACY TALKS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-2xl mx-auto mt-8 text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.3em] leading-relaxed"
                    >
                        Media coverage • brand stories • transformational journeys
                    </motion.p>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 48 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="w-[1px] bg-gradient-to-b from-accent to-transparent"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION: MEET COACH JEETH SANGHAVI */}
            <section className="py-24 md:py-32 bg-black border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-sm mb-16 border border-white/5 shadow-2xl"
                        >
                            <Image
                                src="/WhatsApp Image 2026-02-25 at 12.16.27 PM.jpeg"
                                alt="Coach Jeeth Sanghavi - Boxing training at Boxx Era"
                                fill
                                className="object-cover object-center transition-transform duration-[3s] hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 1024px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                                <span className="bg-accent text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2">
                                    Meet Your Coach: Jeeth Sanghavi
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-6 block">
                                COACH SPOTLIGHT
                            </span>

                            <h2 className="text-4xl md:text-6xl font-anton uppercase leading-[0.9] tracking-tighter text-white mb-8">
                                Meet Your Coach: <span className="text-accent">Jeeth Sanghavi</span>
                            </h2>

                            <div className="w-16 h-[2px] bg-accent/30 mb-12" />

                            <div className="space-y-8 text-white/70 text-lg leading-relaxed font-light">
                                <p>
                                    Welcome to the heart of Boxx Era, where transformation begins! Meet <span className="text-white font-bold">Jeeth Sanghavi</span>, the trailblazing Founder and Transformational Expert at our premier fitness studio in Delhi & Gurugram.
                                </p>

                                <p>
                                    With over 15 years of dedicated experience in the fitness industry, Jeeth has made it her mission to empower individuals to elevate their physical, mental, and emotional well-being through holistic, science-backed methods. As a proud recipient of the <span className="text-accent font-semibold">Rashtriya Shiksha Ratan Award</span>, her credentials speak volumes. A former international and national athlete, Jeeth has excelled in both lawn tennis and boxing, and even holds the title of advanced-level mountaineer.
                                </p>

                                <p>
                                    Jeeth&apos;s expertise is wide-ranging, from body transformation and rehabilitation to sports training, making her a trusted name among fitness enthusiasts. One of her most significant accomplishments includes training Bollywood superstar <span className="text-white font-bold">Priyanka Chopra</span> for her role in the critically acclaimed film <em>Mary Kom</em>, where she expertly guided the actress to embody the grit and determination of an Olympic boxer.
                                </p>

                                <p>
                                    At the heart of Boxx Era is a vibrant community committed to holistic transformation. Jeeth has cultivated an environment where personalized training, rehabilitation/prehabilitation programs, transformation coaching, and nutritional guidance come together to redefine the fitness experience in India.
                                </p>

                                <p>
                                    Join us at Boxx Era and embark on your transformative journey with Coach Jeeth as your guide—where every step takes you closer to your ultimate self!
                                </p>

                                <div className="pt-10">
                                    <Button
                                        text="START YOUR TRANSFORMATION WITH COACH JEETH"
                                        href="/#contact"
                                        className="w-full sm:w-auto px-12 py-7"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: COACH SHIVANI DAHIYA */}
            <section className="py-24 md:py-32 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[16/10] md:aspect-[21/11] w-full overflow-hidden rounded-sm mb-16 border border-white/5 shadow-2xl"
                        >
                            <Image
                                src="/WhatsApp Image 2026-03-23 at 6.04.12 PM.jpeg"
                                alt="Coach Shivani Dahiya"
                                fill
                                className="object-cover object-[center_25%] transition-transform duration-[3s] hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
                                <span className="bg-accent text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2">
                                    Meet Coach Shivani Dahiya —
                                </span>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                            {/* Main Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-8"
                            >
                                <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-6 block">
                                    COACH SPOTLIGHT
                                </span>

                                <h2 className="text-4xl md:text-7xl font-anton uppercase leading-[0.9] tracking-tighter text-white mb-6">
                                    Meet Coach Shivani Dahiya — <br />
                                    <span className="text-accent">The Powerhouse Behind Boxx Era</span>
                                </h2>

                                <p className="text-lg md:text-xl text-white/60 font-medium uppercase tracking-[0.1em] mb-12">
                                    Professional Boxer • Results-Driven Performance • Elite Transformation Coach
                                </p>

                                <div className="w-16 h-[2px] bg-accent/30 mb-16" />

                                <div className="space-y-8 text-white/70 text-lg leading-relaxed font-light">
                                    <p>
                                        With a stellar career as an Indian professional boxer and a decorated record of victories in both national and international matches, <span className="text-white font-bold">Shivani Dahiya</span> is one of the most dynamic and results-driven coaches at Boxx Era. As a co-founder of the studio, she brings over a decade of comprehensive fitness expertise, backed by multiple certifications in various training disciplines.
                                    </p>

                                    <p>
                                        Shivani&apos;s approach to fitness transcends conventional methods. Whether you&apos;re seeking general fitness, sport-specific training, or advanced athletic development, she combines scientific rigor with innovative techniques to ensure maximum results. Her workouts are crafted with precision, a tough attitude, and an unwavering focus on performance.
                                    </p>

                                    {/* Quote Block */}
                                    <div className="my-16 py-12 px-8 md:px-12 border-l-2 border-accent bg-white/[0.02] relative">
                                        <p className="text-2xl md:text-4xl font-anton uppercase text-white leading-[1.1] italic tracking-tight">
                                            &ldquo;True strength isn&apos;t just about what your body can do—it&apos;s about the discipline to show up and the resilience to never break.&rdquo;
                                        </p>
                                        <div className="absolute top-4 right-8 text-accent/10 font-anton text-9xl leading-none select-none">
                                            &ldquo;
                                        </div>
                                    </div>

                                    <p>
                                        Drawing from her world-class athletic background, Coach Shivani has developed a unique training philosophy rooted in authenticity and excellence. Her dedication to her own athletic journey fuels her passion for transforming individuals from all walks of life into true athletes. Her coaching style emphasizes pushing boundaries, inspiring discipline, and unlocking untapped potential.
                                    </p>
                                    <p>
                                        At Boxx Era, Shivani&apos;s mission is clear: to empower every individual to surpass their limits and achieve their fitness goals. Whether you&apos;re a beginner or an aspiring athlete, her personalized, results-oriented training will help you unlock your true strength and resilience.
                                    </p>

                                    <div className="pt-10">
                                        <p className="font-anton text-2xl uppercase tracking-tight text-white mb-12">
                                            Join us at Boxx Era — <span className="text-accent underline decoration-1 underline-offset-8">where champions are made.</span>
                                        </p>

                                        <Button
                                            text="START YOUR TRAINING WITH COACH SHIVANI"
                                            href="/#contact"
                                            className="w-full sm:w-auto px-12 py-7"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Sidebar Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:col-span-4"
                            >
                                <div className="sticky top-40 space-y-12">
                                    <div className="p-8 border border-white/5 bg-zinc-950/50 backdrop-blur-sm rounded-sm">
                                        <h4 className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-b border-accent/20 pb-4">
                                            Expertise & Career
                                        </h4>
                                        <ul className="space-y-6">
                                            {[
                                                "Professional Boxing Career",
                                                "10+ Years Elite Experience",
                                                "Multi-Certified Master Coach",
                                                "Co-Founder & Visionary",
                                                "Advanced Sport Conditioning"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-4 items-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white/50 group">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="relative aspect-square w-full grayscale opacity-20 overflow-hidden rounded-sm group">
                                        <Image
                                            src="/Boxx Era-01 (1).png"
                                            alt="Boxx Era Seal"
                                            fill
                                            className="object-contain p-12 group-hover:scale-110 transition-transform duration-1000 invert"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CATEGORY FILTER */}
            <section className="py-12 sticky top-20 md:top-24 bg-black/90 backdrop-blur-md z-40 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-2 ${activeCategory === cat ? "text-accent" : "text-white/40 hover:text-white"
                                    }`}
                            >
                                {cat === "HIGHLIGHTS" ? "LEGACY TALKS" : cat}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="active-cat"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: ARTICLES GRID */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-16"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredArticles.map((article) => (
                                <motion.article
                                    key={article.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative flex flex-col h-full bg-white/[0.02] border border-white/5 hover:border-accent/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-2xl"
                                >
                                    {/* Article Image Section */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                                        {article.image ? (
                                            <Image
                                                src={article.image}
                                                alt={article.headline}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                                                <span className="text-white/10 font-anton text-4xl">BOXX ERA</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                        {/* Publication Logo - Improved Visibility */}
                                        <div className="absolute top-6 left-6 z-10">
                                            <div className="flex items-center justify-start w-48 md:w-64 h-8 md:h-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                                                <MediaLogo
                                                    src={article.sourceLogo}
                                                    alt={article.source}
                                                    color={article.brandColor}
                                                    className="w-full h-full relative invert brightness-200 contrast-200"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 md:p-10 flex flex-col flex-grow relative">
                                        {/* Accent Line */}
                                        <div className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full bg-accent transition-all duration-500" />

                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-[9px] font-black tracking-[0.2em] text-accent/80 uppercase px-2 py-1 border border-accent/20">
                                                {article.category === "HIGHLIGHTS" ? "LEGACY TALKS" : article.category}
                                            </span>
                                            <span className="text-[9px] font-bold text-white/20 tracking-widest uppercase">
                                                {article.year}
                                            </span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-anton uppercase leading-[1.1] mb-6 text-white group-hover:text-accent transition-colors tracking-tight line-clamp-2">
                                            {article.headline}
                                        </h3>

                                        <p className="text-white/40 text-[13px] md:text-sm leading-relaxed mb-10 flex-grow font-medium line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <Link
                                            href={article.link}
                                            target="_blank"
                                            className="group/cta inline-flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mt-auto transition-all text-accent-red"
                                        >
                                            <span className="relative group-hover:drop-shadow-[0_0_8px_rgba(29,194,193,0.8)] transition-all duration-300">
                                                READ FULL ARTICLE
                                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent-red transition-all duration-500 group-hover:w-full" />
                                            </span>
                                            <ArrowUpRight size={14} className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: BRAND STATEMENT STRIP */}
            <section className="py-32 border-y border-white/5 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                <div className="container mx-auto px-6 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-3xl md:text-5xl lg:text-7xl font-anton uppercase leading-[1.3] tracking-tighter max-w-5xl mx-auto"
                    >
                        “<span className="text-accent">Boxx Era</span> isn’t just a gym. It’s a movement built on discipline, resilience, and transformation.”
                    </motion.p>
                </div>
            </section>

            {/* SECTION 6: CTA – JOIN THE MOVEMENT */}
            <section className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-anton uppercase mb-4 tracking-tighter leading-[1.2]">
                        Read the stories.<br />Train with purpose.
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <Link href="/#contact" className="w-full sm:w-auto bg-accent text-black px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all text-center">
                            JOIN BOXX ERA
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
