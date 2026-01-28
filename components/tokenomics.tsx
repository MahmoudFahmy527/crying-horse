"use client";

import { motion } from "framer-motion";

export default function Tokenomics() {
    const cards = [
        {
            title: "SUPPLY",
            value: "1 BILLION",
            desc: "Enough tears for everyone",
            color: "bg-blue-50",
            borderColor: "border-brand-blue",
            textColor: "text-brand-dark-blue",
            icon: "🌊"
        },
        {
            title: "TAX",
            value: "0/0",
            desc: "No fees, just pain",
            color: "bg-red-50",
            borderColor: "border-brand-red",
            textColor: "text-brand-red",
            icon: "🚫"
        },
        {
            title: "LIQUIDITY",
            value: "BURNT",
            desc: "Like my dreams",
            color: "bg-amber-50",
            borderColor: "border-brand-gold",
            textColor: "text-amber-600",
            icon: "🔥"
        },
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-brand-gold">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-comic-pattern opacity-30 mix-blend-multiply" />

            {/* Animated Blobs */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-400 rounded-full blur-[80px] animate-pulse-glow" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-400 rounded-full blur-[80px] animate-pulse-glow delay-700" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-comic text-white text-center text-outline-lg mb-20 transform rotate-1 drop-shadow-xl"
                >
                    TOKENOMICS
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {cards.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                            className={`relative p-8 rounded-[2rem] border-4 ${item.borderColor} ${item.color} shadow-[0_10px_0_rgba(0,0,0,0.1)]`}
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full border-4 border-inherit flex items-center justify-center text-4xl shadow-md">
                                {item.icon}
                            </div>

                            <h3 className={`text-4xl font-comic ${item.textColor} mt-8 mb-4 text-center`}>{item.title}</h3>
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-inherit">
                                <p className="text-5xl md:text-6xl font-black text-gray-800 mb-2 tracking-tight">{item.value}</p>
                                <p className="text-xl text-gray-600 font-body font-bold italic opacity-80">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
