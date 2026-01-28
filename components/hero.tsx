"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, ArrowRight } from "lucide-react";

export default function Hero() {
    const contractAddress = "CA: 8s...Pump"; // Placeholder

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        alert("Copied directly to your tears!");
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-gradient-to-b from-yellow-50 to-orange-100">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-[100px] animate-pulse-glow delay-1000" />

                {/* Floating Tears */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                        className="absolute text-4xl opacity-50 select-none"
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i % 3) * 20}%`,
                        }}
                    >
                        😭
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10 flex flex-col items-center max-w-4xl"
            >
                <motion.h1
                    className="text-6xl md:text-9xl font-comic text-brand-red text-outline-lg mb-6 transform -rotate-2 tracking-tighter"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                >
                    HODL... WHY?
                </motion.h1>

                <div className="relative group cursor-pointer mb-8">
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, -2, 2, -2, 0]
                        }}
                        transition={{
                            y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                            rotate: { repeat: Infinity, duration: 5 }
                        }}
                        className="relative z-10"
                    >
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl transform scale-110" />
                        <Image
                            src="/red_crying_horse.png"
                            alt="Crying Horse"
                            width={450}
                            height={450}
                            className="drop-shadow-2xl hover:scale-105 transition-transform duration-300 relative z-10"
                            priority
                        />
                    </motion.div>

                    {/* Animated Tears with Glow */}
                    <div className="absolute top-[180px] left-[130px] w-6 h-16 bg-brand-blue opacity-90 rounded-full animate-cry-flow border-2 border-white/50 shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
                    <div className="absolute top-[180px] right-[145px] w-6 h-16 bg-brand-blue opacity-90 rounded-full animate-cry-flow border-2 border-white/50 shadow-[0_0_15px_rgba(56,189,248,0.6)]" style={{ animationDelay: '0.4s' }} />
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl px-8 py-6 rounded-3xl mb-10 max-w-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
                >
                    <p className="text-2xl md:text-3xl font-body text-gray-800 leading-relaxed">
                        The only token backed by <span className="text-brand-red font-bold">pure regret</span> and <span className="text-brand-blue font-bold">salty tears</span>.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 items-center w-full justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-red text-white font-comic rounded-2xl border-b-8 border-brand-dark-red hover:border-b-4 hover:translate-y-1 transition-all active:border-b-0 active:translate-y-2 px-10 py-5 text-2xl md:text-3xl shadow-lg flex items-center gap-3 w-full md:w-auto justify-center"
                    >
                        BUY ON PUMP.FUN
                        <ArrowRight className="w-8 h-8" strokeWidth={3} />
                    </motion.button>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={copyToClipboard}
                        className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl px-6 py-4 rounded-2xl cursor-pointer hover:bg-white/40 flex items-center gap-3 text-lg font-bold text-gray-700 w-full md:w-auto justify-center"
                    >
                        <span className="font-mono">{contractAddress}</span>
                        <Copy size={20} className="text-brand-red" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
