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
        <section className="py-20 px-6 bg-brand-red relative text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-comic text-center mb-12 text-outline">
                    HALL OF TEARS
                    <span className="block text-xl font-body mt-2 opacity-90 text-yellow-200">
                        (Top Contributors Logic)
                    </span>
                </h2>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border-4 border-brand-gold overflow-hidden">
                    {loading ? (
                        <div className="text-center py-10 animate-pulse">Loading tears...</div>
                    ) : (
                        <div className="space-y-4">
                            {holders.map((holder, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`text-2xl font-comic w-8 ${index === 0 ? "text-yellow-300 scale-125" :
                                                index === 1 ? "text-gray-300" :
                                                    index === 2 ? "text-orange-300" : "text-white"
                                            }`}>
                                            #{holder.rank}
                                        </span>
                                        <span className="font-mono text-lg md:text-xl truncate w-32 md:w-auto">
                                            {holder.address}
                                        </span>
                                    </div>
                                    <div className="font-bold text-brand-gold text-lg">
                                        {holder.amount.toLocaleString()} 😭
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                <p className="text-center mt-8 text-white/60 font-body text-sm">
                    * Snapshot taken live from Solana Blockchain
                </p>
            </div>
        </section>
    );
}
