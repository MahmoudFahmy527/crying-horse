"use client";

import { motion } from "framer-motion";

export default function Graduation() {
    const steps = [
        { label: "BORN TO CRY", status: "done" },
        { label: "1000 CRYING HOLDERS", status: "active" },
        { label: "PUMP FUN GRADUATION", status: "soon" },
        { label: "CRYING ON RAYDIUM", status: "future" },
    ];

    return (
        <section className="py-20 px-6 bg-white relative">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-comic text-brand-blue text-outline-lg mb-16">
                    PATH TO JOY?
                    <span className="block text-2xl text-gray-400 font-body mt-2">(Unlikely)</span>
                </h2>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-gray-100 transform -translate-x-1/2 rounded-full hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse text-right" : "md:flex-row text-left"
                                } flex-col`}
                        >
                            {/* Content */}
                            <div className="flex-1">
                                <div className={`inline-block px-8 py-6 rounded-2xl border-4 ${step.status === "done" ? "bg-green-100 border-green-500 text-green-700" :
                                        step.status === "active" ? "bg-brand-gold border-brand-red text-brand-red" :
                                            "bg-gray-50 border-gray-200 text-gray-400"
                                    }`}>
                                    <h3 className="text-2xl font-comic">{step.label}</h3>
                                </div>
                            </div>

                            {/* Marker */}
                            <div className="z-10 w-12 h-12 rounded-full border-4 bg-white flex items-center justify-center shrink-0
                            border-brand-blue shadow-lg">
                                <span className="text-xl">😭</span>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
