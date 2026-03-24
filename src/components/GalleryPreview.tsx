"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import { MoveRight } from "lucide-react";

const galleryImages = [
    {
        src: "/2022-03-13.webp",
        alt: "High intensity training",
        span: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/2021-08-17.webp",
        alt: "Community moments at Boxx Era",
        span: "md:col-span-2 md:row-span-1",
    },
];

export default function GalleryPreview() {
    return (
        <section className="bg-black py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block"
                    >
                        GALLERY
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-anton uppercase text-white mb-4 leading-none"
                    >
                        Inside the Grind <br className="hidden md:block" /> at Boxx Era
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-xs md:text-sm font-medium tracking-widest uppercase max-w-md"
                    >
                        A glimpse of training, transformation, and community.
                    </motion.p>
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-4 h-[900px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden bg-zinc-900 border border-white/5 hover:border-accent/40 transition-colors duration-500 ${image.span}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:saturate-[1.2]"
                            />
                            {/* Permanent Dark Overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-700" />

                        </motion.div>
                    ))}
                </div>

                {/* Mobile Carousel Layout */}
                <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 gap-6 pt-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="min-w-[80vw] h-[400px] relative snap-center overflow-hidden border border-white/10"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                            {/* Permanent Dark Overlay for Mobile */}
                            <div className="absolute inset-0 bg-black/45" />
                        </div>
                    ))}
                </div>

                {/* CTA Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex justify-start"
                >
                    <TransitionLink
                        href="/gallery"
                        className="group flex items-center gap-4 text-accent font-black uppercase tracking-[0.3em] text-xs md:text-sm transition-all"
                    >
                        <span>VIEW FULL GALLERY</span>
                        <div className="relative flex items-center justify-center w-10 h-10 border border-accent/30 rounded-full transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                            <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </div>
                    </TransitionLink>
                </motion.div>
            </div>
        </section>
    );
}
