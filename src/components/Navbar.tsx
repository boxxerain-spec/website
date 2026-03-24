"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === "/";

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Training", href: "/#programs" },
        { name: "DBS", href: "/training/dream-body-series" },
        { name: "Legacy", href: "/articles" },
        { name: "Pricing", href: "/pricing" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/#contact" },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") && pathname === "/") {
            e.preventDefault();
            const id = href.replace("/#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            }
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full h-20 md:h-24 z-[150] border-b border-white/10 transition-all duration-500 ${isHome && !isOpen ? "bg-black/40 backdrop-blur-md" : "bg-black"
                    }`}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex-1 flex justify-start">
                        <TransitionLink href="/" className="relative w-12 h-12 md:w-16 md:h-16 z-[101]">
                            <Image
                                src="/Boxx Era-01 (1).png"
                                alt="BOXX ERA Logo"
                                fill
                                className="object-contain invert"
                            />
                        </TransitionLink>
                    </div>

                    {/* Desktop Links - Perfectly Centered */}
                    <div className="hidden lg:flex flex-none items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
                        {navLinks.map((link) => (
                            <TransitionLink
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={`transition-all duration-300 hover:text-accent relative group ${pathname === link.href ? "text-accent-red" : "text-white"}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full ${pathname === link.href ? "w-full bg-accent-red shadow-[0_0_8px_rgba(212,0,0,0.6)]" : ""}`} />
                            </TransitionLink>
                        ))}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
                        <TransitionLink href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#D40000", color: "#ffffff", boxShadow: "0 0 25px rgba(212,0,0,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden xs:flex bg-accent text-black px-6 md:px-10 py-2.5 md:py-3.5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(29,194,193,0.2)] transition-all duration-500 items-center justify-center whitespace-nowrap"
                            >
                                JOIN THE ERA NOW
                            </motion.button>
                        </TransitionLink>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-white z-[111] p-1 focus:outline-none flex items-center justify-center transition-transform active:scale-90"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} className="text-accent" /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-black/98 backdrop-blur-2xl flex flex-col p-8 pt-44"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
                        </div>

                        <div className="relative z-10 flex flex-col items-start gap-5 w-full max-w-[320px]">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: i * 0.1,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    className="w-full"
                                >
                                    <TransitionLink
                                        href={link.href}
                                        onClick={(e) => {
                                            handleLinkClick(e, link.href);
                                            setIsOpen(false);
                                        }}
                                        className={`text-[2rem] xs:text-[2.8rem] font-anton uppercase tracking-tighter hover:text-accent transition-all duration-300 block text-left ${pathname === link.href ? "text-accent" : "text-white"}`}
                                    >
                                        <span className="flex items-center gap-4">
                                            {pathname === link.href && <motion.div layoutId="nav-line" className="w-8 h-[2px] bg-accent" />}
                                            {link.name}
                                        </span>
                                    </TransitionLink>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="w-full mt-10"
                            >
                                <TransitionLink href="/#contact" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-accent text-black py-5 px-6 text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_15px_40px_rgba(29,194,193,0.2)] hover:bg-accent-red hover:text-white transition-all duration-500 transform active:scale-[0.98] text-left flex justify-between items-center group/mb">
                                        <span>JOIN THE ERA NOW</span>
                                        <ArrowUpRight size={16} className="group-hover/mb:translate-x-1 group-hover/mb:-translate-y-1 transition-transform" />
                                    </button>
                                </TransitionLink>

                                <div className="mt-16 flex gap-8 text-[9px] font-black uppercase tracking-[0.3em]">
                                    <a
                                        href="https://www.instagram.com/boxxera.in?igsh=MWZ4MWRoaHh1ZjVsaQ%3D%3D&utm_source=qr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-accent transition-colors"
                                    >
                                        Instagram
                                    </a>
                                    <span className="text-white/20">Youtube</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

