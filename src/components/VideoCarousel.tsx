"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";

interface Video {
    id: string;
    title: string;
}

const videos: Video[] = [
    { id: "SJ-uNKWshsg", title: "Training Intensity" },
    { id: "xsmt88YJ4wY", title: "The Discipline" },
    { id: "Qbyb7c7ErqI", title: "Elite Moves" },
    { id: "W7yfYKjU4jc", title: "Action Replay" },
];

// Triple the videos for infinite loop effect
const allVideos = [...videos, ...videos, ...videos];

export default function VideoCarousel() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden border-b border-white/5">
            <div className="container mx-auto px-6 mb-16 md:mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-4 block">
                        SEE THE INTENSITY. FEEL THE DISCIPLINE.
                    </span>
                    <h2 className="text-5xl md:text-8xl font-anton uppercase leading-none tracking-tighter text-white">
                        TRAIN IN <span className="text-accent">ACTION</span>
                    </h2>
                </motion.div>
            </div>

            {/* Smooth Infinite Marquee */}
            <div
                className="relative w-full py-10 overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className="flex gap-4 md:gap-8 px-4 w-fit"
                    animate={{
                        x: isPaused ? undefined : ["0%", "-33.33%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {allVideos.map((video, index) => (
                        <div
                            key={`${video.id}-${index}`}
                            className="flex-shrink-0 w-[80vw] sm:w-[45vw] lg:w-[32vw]"
                        >
                            <div
                                onClick={() => setSelectedId(video.id)}
                                className="group relative aspect-video bg-zinc-900 overflow-hidden cursor-pointer border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-2xl"
                            >
                                <Image
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title}
                                    fill
                                    unoptimized
                                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/Boxx Era-01 (1).png";
                                        target.className = "object-contain p-20 opacity-20";
                                    }}
                                />

                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-accent flex items-center justify-center rounded-full transform group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(29,194,193,0.5)]">
                                        <Play fill="black" size={32} className="ml-1" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedId(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            className="relative w-full max-w-6xl aspect-video bg-zinc-900 border border-white/5 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
