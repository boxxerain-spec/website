"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <div className="bg-white text-black py-4 md:py-8 overflow-hidden whitespace-nowrap border-y-2 border-white flex">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
                className="flex"
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-4xl md:text-7xl font-anton uppercase tracking-widest pl-4">
                        <span className="text-accent">BOXX ERA</span> • NO EXCUSES • TRAIN HARD • STAY HUMBLE • LIMITLESS •
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
