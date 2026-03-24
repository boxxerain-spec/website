"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const locations = [
    {
        city: "New Delhi",
        address: "D-69, HAUZ KHAS RD, BLOCK H, HAUZ KHAS, NEW DELHI, DELHI 110016",
        link: "https://www.google.com/maps/dir//Boxx+Era+Fitness+Studio,+D-69,+Hauz+Khas+Rd,+near+main+market,+Block+H,+Hauz+Khas,+New+Delhi,+Delhi+110016/@28.5530108,77.2070739,17z/data=!4m9!4m8!1m1!4e2!1m5!1m1!1s0x390ce3db6c83b431:0xafc64cf1526c1c41!2m2!1d77.2070739!2d28.5530108?entry=ttu",
        cta: "GET DIRECTIONS",
        image: "/WhatsApp Image 2026-03-23 at 5.16.25 PM.jpeg",
    },
    {
        city: "Gurugram",
        address: "C-524, BLOCK C, SUSHANT LOK PHASE I, SECTOR 43, GURUGRAM, HARYANA 122009",
        link: "https://www.google.com/maps/dir//Boxx+Era+Fitness+Studio,+C-524,+Block+C,+Sushant+Lok+Phase+I,+Sector+43,+Gurugram,+Haryana+122009/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d1945a840c91f:0xafb204df9668f70c?sa=X&ved=1t:57443&ictx=111",
        cta: "GET DIRECTIONS",
        image: "/WhatsApp Image 2026-03-23 at 5.14.12 PM.jpeg",
    },
];

export default function Studios() {
    return (
        <section className="bg-black py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-4 block">
                            OUR FOOTPRINT
                        </span>
                        <h2 className="text-5xl md:text-8xl font-anton uppercase tracking-tight leading-none mb-6">
                            THE <span className="text-white/20">STUDIOS</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl border border-white/5 flex flex-col justify-end p-8 md:p-12 hover:border-accent/30 transition-colors"
                        >
                            <div className="absolute inset-0 grayscale transition-transform duration-1000 group-hover:scale-110">
                                <Image
                                    src={loc.image}
                                    alt={loc.city}
                                    fill
                                    className="object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 border border-white/10 rounded-lg text-accent">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="text-accent font-black text-[10px] tracking-[0.4em] uppercase">
                                        AVAILABLE LOCATION
                                    </span>
                                </div>

                                <h3 className="text-5xl md:text-7xl font-anton uppercase tracking-tight text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                    {loc.city}
                                </h3>

                                <p className="text-white/40 text-[10px] md:text-xs leading-relaxed uppercase tracking-[0.2em] mb-10 max-w-sm">
                                    {loc.address}
                                </p>

                                <motion.a
                                    href={loc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-accent transition-colors cursor-pointer"
                                >
                                    {loc.cta} <ArrowUpRight size={16} className="text-accent" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
