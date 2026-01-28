"use client";

import { useEffect, useState } from "react";
import { getTopHolders } from "@/utils/solana";
import { motion } from "framer-motion";

interface Holder {
    address: string;
    amount: number;
    rank: number;
}

export default function TopHolders() {
    const [holders, setHolders] = useState<Holder[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            // Pass your token mint address here once deployed
            const data = await getTopHolders("CA_PLACEHOLDER");
            setHolders(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <section className="py-24 px-6 relative bg-brand-red overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 via-red-600 to-red-800" />
            <div className="absolute inset-0 opacity-20 bg-comic-pattern" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-comic text-white text-outline-lg drop-shadow-2xl">
                        HALL OF TEARS
                    </h2>
                    <p className="text-xl md:text-2xl text-yellow-200 font-body mt-4 font-bold tracking-wide">
                        Top Contributors to the Sadness
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl p-8 rounded-[2.5rem] relative overflow-hidden"
                >
                    {/* Shine effect on card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine pointer-events-none" />

                    {loading ? (
                        <div className="text-center py-20 flex flex-col items-center">
                            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4" />
                            <span className="text-white font-comic text-xl animate-pulse">Collecting tears...</span>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {holders.map((holder, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border-2 ${index === 0 ? "bg-gradient-to-r from-yellow-400/80 to-yellow-600/80 border-yellow-300 transform scale-[1.02] shadow-lg" :
                                        index === 1 ? "bg-gradient-to-r from-gray-300/60 to-gray-400/60 border-gray-200" :
                                            index === 2 ? "bg-gradient-to-r from-orange-300/60 to-orange-400/60 border-orange-200" :
                                                "bg-white/10 border-white/5 hover:bg-white/20"
                                        }`}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-12 h-12 flex items-center justify-center rounded-full font-black text-2xl shadow-inner ${index < 3 ? "bg-white text-brand-dark-red" : "bg-black/20 text-white/80"
                                            }`}>
                                            {holder.rank}
                                        </div>
                                        <span className="font-mono text-lg md:text-xl font-bold text-white truncate w-32 md:w-auto tracking-wider">
                                            {holder.address}
                                        </span>
                                    </div>
                                    <div className="font-black text-white text-xl md:text-2xl drop-shadow-md flex items-center gap-2">
                                        {holder.amount.toLocaleString()}
                                        <span className="text-3xl filter drop-shadow-lg">😭</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>

                <p className="text-center mt-6 text-white/60 font-body font-bold text-sm tracking-widest uppercase">
                    * Live Data from Solana
                </p>
            </div>
        </section>
    );
}
