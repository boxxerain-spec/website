"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const interest = formData.get("interest");
        const message = formData.get("message");

        const subject = "New Enquiry from Boxera Website";
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AInterest: ${interest}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        const mailtoLink = `mailto:boxxera.in@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Artificial delay for UX animation consistency
        setTimeout(() => {
            window.location.href = mailtoLink;
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        }, 800);
    };

    return (
        <section id="contact" className="bg-black py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Side: Copy & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-4 block">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase tracking-tight leading-[0.9] mb-8">
                            START YOUR <br /> <span className="text-white">TRANSFORMATION</span>
                        </h2>
                        <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] leading-relaxed max-w-md mb-16">
                            Tell us about your goals. We&apos;ll take it from there.
                        </p>

                        <div className="space-y-12">
                            <div className="flex items-start gap-6 group">
                                <div className="p-3 border border-white/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Studios</h4>
                                    <p className="text-white/40 uppercase tracking-tighter text-[10px] leading-relaxed">
                                        HAUZ KHAS, NEW DELHI <br />
                                        SECTOR 43, GURUGRAM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-3 border border-white/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Connect</h4>
                                    <p className="text-white/40 uppercase tracking-tighter text-[10px]">
                                        +91 72908 20211
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-3 border border-white/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Email</h4>
                                    <p className="text-white/40 uppercase tracking-tighter text-[10px]">
                                        boxxera.in@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>


                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-md shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Full Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="EX. JON DOE"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Email Address</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="JON@EXAMPLE.COM"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Phone Number</label>
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Training Interest</label>
                                    <select
                                        name="interest"
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider appearance-none cursor-pointer"
                                    >
                                        <option className="bg-zinc-900" value="personal">Personal Training</option>
                                        <option className="bg-zinc-900" value="group">Group Classes</option>
                                        <option className="bg-zinc-900" value="dbs">Dream Body Series</option>
                                        <option className="bg-zinc-900" value="boxing">Boxing Training</option>
                                        <option className="bg-zinc-900" value="transformation">Transformation Clinic</option>
                                        <option className="bg-zinc-900" value="others">Others</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Message / Goals</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="TELL US WHAT YOU WANT TO ACHIEVE..."
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider resize-none"
                                ></textarea>
                            </div>

                            <div className="relative pt-4">
                                <AnimatePresence mode="wait">
                                    {status === "idle" || status === "loading" ? (
                                        <motion.button
                                            key="submit"
                                            disabled={status === "loading"}
                                            whileHover={{ scale: 1.02, backgroundColor: "#D40000", color: "#ffffff", boxShadow: "0 0 25px rgba(212,0,0,0.4)" }}
                                            className="w-full bg-accent text-black py-5 font-black uppercase tracking-[.3em] text-xs flex items-center justify-center gap-4 transition-all disabled:opacity-50 group shadow-[0_10px_30px_rgba(29,194,193,0.15)]"
                                        >
                                            {status === "loading" ? "SENDING..." : (
                                                <>SEND ENQUIRY <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                            )}
                                        </motion.button>
                                    ) : status === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="w-full bg-green-500/20 text-green-500 border border-green-500/20 py-5 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs"
                                        >
                                            <CheckCircle2 size={18} /> Thanks! Our team will contact you shortly.
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="error"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="w-full bg-red-500/20 text-red-500 border border-red-500/20 py-5 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs cursor-pointer"
                                            onClick={() => setStatus("idle")}
                                        >
                                            <AlertCircle size={18} /> Something went wrong. Please try again.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
