"use client";

import { motion } from "framer-motion";

export default function Graduation() {
    const steps = [
        { label: "BORN TO CRY", status: "done", desc: "Concept & Art Created" },
        { label: "1000 CRYING HOLDERS", status: "active", desc: "Phase 1 Goal" },
        { label: "PUMP FUN GRADUATION", status: "soon", desc: "Market Cap Target Hit" },
        { label: "CRYING ON RAYDIUM", status: "future", desc: "Universal Sadness" },
    ];

    return (
        <section className="py-24 px-6 relative bg-white overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-comic text-brand-blue text-outline-lg mb-20 drop-shadow-xl"
                >
                    PATH TO JOY?
                    <span className="block text-3xl text-gray-400 font-body mt-4 font-bold rotated-sticker transform -rotate-3 decoration-wavy">
                        (Unlikely)
                    </span>
                </motion.h2>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-6 bg-gray-100 transform -translate-x-1/2 rounded-full hidden md:block border-x-2 border-gray-200" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className={`relative flex items-center gap-12 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse text-right" : "md:flex-row text-left"
                                } flex-col group`}
                        >
                            {/* Content */}
                            <div className="flex-1 w-full md:w-auto">
                                <div className={`p-8 rounded-[2rem] border-b-8 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl ${step.status === "done" ? "bg-green-100 border-green-500 shadow-green-200" :
                                        step.status === "active" ? "bg-brand-gold border-brand-red shadow-orange-200" :
                                            "bg-gray-50 border-gray-300 shadow-gray-200 grayscale opacity-70"
                                    }`}>
                                    <h3 className={`text-3xl font-comic mb-2 ${step.status === "done" ? "text-green-700" :
                                            step.status === "active" ? "text-brand-red" :
                                                "text-gray-500"
                                        }`}>{step.label}</h3>
                                    <p className="font-body text-lg font-bold opacity-70">{step.desc}</p>
                                </div>
                            </div>

                            {/* Central Marker */}
                            <div className={`z-10 w-20 h-20 rounded-full border-8 flex items-center justify-center shrink-0 bg-white shadow-xl transition-transform duration-500 group-hover:scale-110 ${step.status === "active" ? "border-brand-red animate-pulse-glow" :
                                    step.status === "done" ? "border-green-500" : "border-gray-300"
                                }`}>
                                <span className="text-3xl filter drop-shadow-sm">
                                    {step.status === "done" ? "✅" : step.status === "future" ? "🔒" : "😭"}
                                </span>
                            </div>

                            {/* Spacer */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
