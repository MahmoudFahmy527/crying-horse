"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

export default function Hero() {
    const contractAddress = "CA: 8s...Pump"; // Placeholder

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        alert("Copied directly to your tears!");
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-comic-pattern">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-red rounded-full blur-3xl animate-bounce-slow" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 flex flex-col items-center"
            >
                <h1 className="text-6xl md:text-9xl font-comic text-brand-red text-outline-lg mb-4 transform -rotate-2">
                    HODL... WHY?
                </h1>

                <div className="relative group cursor-pointer">
                    <motion.div
                        animate={{ rotate: [0, -2, 2, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="relative"
                    >
                        <Image
                            src="/red_crying_horse.png"
                            alt="Crying Horse"
                            width={400}
                            height={400}
                            className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </motion.div>

                    {/* Animated Tears */}
                    <div className="absolute top-[160px] left-[110px] w-4 h-12 bg-brand-blue opacity-80 rounded-full animate-bounce" style={{ animationDuration: '0.8s' }} />
                    <div className="absolute top-[160px] right-[125px] w-4 h-12 bg-brand-blue opacity-80 rounded-full animate-bounce" style={{ animationDuration: '1.2s' }} />
                </div>

                <p className="text-2xl md:text-4xl mt-8 font-body max-w-2xl text-gray-800">
                    The only token backed by pure regret and salty tears.
                    <span className="block text-brand-red mt-2">Join the sob party.</span>
                </p>

                <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
                    <button className="px-8 py-4 bg-brand-red text-white font-comic text-2xl rounded-xl border-b-8 border-red-800 hover:border-b-4 hover:translate-y-1 transition-all shadow-xl">
                        BUY ON PUMP.FUN
                    </button>

                    <div
                        onClick={copyToClipboard}
                        className="px-6 py-4 bg-white text-black font-body text-lg rounded-xl border-4 border-gray-200 cursor-pointer hover:bg-gray-50 flex items-center gap-2"
                    >
                        <span>{contractAddress}</span>
                        <Copy size={20} />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
