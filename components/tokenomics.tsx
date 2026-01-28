"use client";

import { motion } from "framer-motion";

export default function Tokenomics() {
    return (
        <section className="py-20 px-6 bg-brand-gold relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-comic text-white text-outline-lg mb-12 transform rotate-1">
                    TOKENOMICS
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "SUPPLY", value: "1 BILLION", desc: "Enough tears for everyone" },
                        { title: "TAX", value: "0/0", desc: "No fees, just pain" },
                        { title: "LIQUIDITY", value: "BURNT", desc: "Like my dreams" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3 }}
                            className="bg-white p-8 rounded-3xl border-b-8 border-gray-200 shadow-xl"
                        >
                            <h3 className="text-3xl font-comic text-brand-red mb-2">{item.title}</h3>
                            <p className="text-4xl md:text-5xl font-black text-gray-800 mb-2">{item.value}</p>
                            <p className="text-lg text-gray-500 font-body">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative tears background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #3FB1CE 2px, transparent 2px)", backgroundSize: "30px 30px" }}>
            </div>
        </section>
    );
}
