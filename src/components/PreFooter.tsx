"use client";

import { motion } from "framer-motion";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import { ArrowUpRight, Package, Trophy, Image as ImageIcon, Phone } from "lucide-react";
import Button from "./Button";

import { usePathname } from "next/navigation";

const quickLinks = [
    {
        title: "PACKAGES",
        description: "CHOOSE THE PLAN THAT MATCHES YOUR AMBITION.",
        icon: <Package size={20} />,
        link: "/pricing",
    },
    {
        title: "JOURNEY",
        description: "SEE HOW WE TRANSFORM BEGINNERS INTO THEIR ELITE SELF.",
        icon: <Trophy size={20} />,
        link: "/#transformations",
    },
    {
        title: "GALLERY",
        description: "EXPLORE OUR ELITE TRAINING FACILITY IN ACTION.",
        icon: <ImageIcon size={20} />,
        link: "/gallery",
    },
    {
        title: "CONTACT US",
        description: "GET IN TOUCH WITH OUR ELITE COACHING TEAM.",
        icon: <Phone size={20} />,
        link: "/#contact",
    },
];

export default function PreFooter() {
    const pathname = usePathname();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") && pathname === "/") {
            e.preventDefault();
            const id = href.replace("/#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <section className="bg-black py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                {/* Main Conversion CTA */}
                <div className="text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase tracking-tight leading-[1.1] md:leading-[0.95] mb-12 md:mb-16">
                            STILL UNSURE ABOUT <br />
                            <span className=" text-[0.8em] md:text-[0.7em] leading-none">WHAT PROGRAM TO CHOOSE?</span>
                        </h2>
                        <Button
                            text="LET US HELP YOU"
                            href="/#contact"
                            className="tracking-[0.4em]"
                        />
                    </motion.div>
                </div>

                {/* Quick Access Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }
                        }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {quickLinks.map((item) => (
                        <TransitionLink
                            key={item.title}
                            href={item.link}
                            onClick={(e) => handleLinkClick(e, item.link)}
                            className="group bg-zinc-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-accent-red/40 transition-all hover:-translate-y-2 flex flex-col justify-between h-full hover:bg-zinc-900/60"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                className="flex flex-col h-full justify-between"
                            >
                                <div>
                                    <div className="text-accent mb-6 group-hover:text-accent-red transition-colors group-hover:scale-110 origin-left">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-anton uppercase tracking-widest text-white mb-3 group-hover:text-accent-red transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 text-[10px] md:text-xs leading-relaxed uppercase tracking-wider mb-8">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">
                                    EXPLORE NOW <ArrowUpRight size={14} className="text-accent group-hover:text-accent-red transition-colors" />
                                    <div className="h-px bg-white/10 flex-grow group-hover:bg-accent-red/30 transition-colors" />
                                </div>
                            </motion.div>
                        </TransitionLink>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
