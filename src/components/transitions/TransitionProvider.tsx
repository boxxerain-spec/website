"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionContextType {
    transitionTo: (href: string) => void;
    isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const usePageTransition = () => {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error("usePageTransition must be used within a TransitionProvider");
    }
    return context;
};

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [pendingRoute, setPendingRoute] = useState<string | null>(null);

    const transitionTo = useCallback((href: string) => {
        if (href === pathname) return;
        setPendingRoute(href);
        setIsTransitioning(true);
    }, [pathname]);

    useEffect(() => {
        if (isTransitioning && pendingRoute) {
            const timer = setTimeout(() => {
                router.push(pendingRoute);
                // We keep isTransitioning true here, 
                // it will be set to false when pathname actually changes (next useEffect)
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning, pendingRoute, router]);

    useEffect(() => {
        // When the path actually changes, wait a bit for the new content to load then fade out
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setPendingRoute(null);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    return (
        <TransitionContext.Provider value={{ transitionTo, isTransitioning }}>
            <AnimatePresence mode="wait">
                {isTransitioning && (
                    <motion.div
                        key="page-transition-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
                    >
                        {/* Subtle blue radial gradient tint */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,67,209,0.15)_0%,transparent_70%)] pointer-events-none" />

                        {/* Top Progress Line */}
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="absolute top-0 left-0 h-[2px] bg-accent shadow-[0_0_15px_#4343D1] z-50"
                        />

                        {/* Centered BOXX ERA Logo & Text */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.3 } }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center gap-8 relative z-10"
                        >
                            <div className="relative w-48 h-48 md:w-64 md:h-64">
                                <Image
                                    src="/Boxx Era-01 (1).png"
                                    alt="BOXX ERA Logo"
                                    fill
                                    className="object-contain invert"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </TransitionContext.Provider>
    );
};
