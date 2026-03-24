"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

const MediaPreview = () => {
    // We only want 3 featured articles for this section
    const featuredArticles = articles
        .filter((article) => article.category === "HIGHLIGHTS")
        .slice(0, 3);

    // Fallback images - including the generated one
    const displayImages = [
        "/media/article1.png",
        "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=2000&auto=format&fit=crop",
    ];

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16 md:text-center text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 block"
                    >
                        BOXX ERA
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[clamp(2.5rem,8vw,5rem)] font-anton uppercase text-white mb-6 leading-[0.9] tracking-tighter"
                    >
                        LEGACY <span className="relative inline-block text-accent">
                            TALKS
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
                                className="absolute -bottom-2 md:-bottom-4 left-0 h-[8px] md:h-[12px] bg-accent/40 rounded-full"
                            />
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 max-w-2xl mx-auto text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed"
                    >
                        Featured across leading platforms for performance-driven transformation and elite training standards.
                    </motion.p>
                </div>

                {/* Article Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuredArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-full"
                        >
                            <Link
                                href={article.link}
                                target="_blank"
                                className="group relative flex flex-col h-full bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(29,194,193,0.1)]"
                            >
                                {/* Image Section */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden">
                                    <Image
                                        src={article.image || displayImages[index % displayImages.length]}
                                        alt={article.headline}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                    {/* Publication Logo - Improved Visibility */}
                                    <div className="absolute top-6 left-6 z-10">
                                        <div className="flex items-center justify-start w-48 md:w-64 h-8 md:h-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                                            {article.sourceLogo ? (
                                                <img
                                                    src={article.sourceLogo}
                                                    alt={article.source}
                                                    className="h-full object-contain object-left invert brightness-200 contrast-200"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                            ) : null}
                                            <span className={`${article.sourceLogo ? 'hidden' : ''} text-[10px] font-black uppercase text-white tracking-[0.2em]`}>
                                                {article.source}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <span className="text-accent text-[9px] font-black tracking-[0.2em] uppercase mb-3 block">
                                        {article.category === "HIGHLIGHTS" ? "LEGACY TALKS" : article.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-anton uppercase leading-[1.1] mb-4 text-white line-clamp-2 transition-colors duration-300">
                                        {article.headline}
                                    </h3>
                                    <p className="text-white/40 text-[13px] md:text-sm mb-10 line-clamp-2 font-medium leading-relaxed">
                                        {article.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <span className="text-accent-red font-black text-[10px] md:text-xs uppercase tracking-[0.3em] flex items-center gap-2 group/cta transition-all duration-300">
                                            <span className="relative inline-block group-hover:drop-shadow-[0_0_8px_rgba(29,194,193,0.8)] transition-all duration-300">
                                                READ ARTICLE
                                                <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-accent-red transition-all duration-500 group-hover:w-full" />
                                            </span>
                                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                                        </span>
                                    </div>
                                </div>

                                {/* Thin yellow border glow on hover */}
                                <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 transition-all duration-500 pointer-events-none" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="mt-16 md:mt-24 text-center">
                    <Link href="/articles" className="inline-block w-full md:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative border border-accent/40 text-accent w-full md:w-auto px-12 py-5 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all duration-500 overflow-hidden hover:border-accent"
                        >
                            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                                VIEW ALL ARTICLES →
                            </span>
                            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Subtle Noise / Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </section>
    );
};

export default MediaPreview;
