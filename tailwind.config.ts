import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "brand-red": "var(--primary-red)", // Vivid red
                "brand-dark-red": "#b91c1c", // Darker red for depth
                "brand-gold": "var(--accent-gold)",
                "brand-blue": "var(--tears-blue)",
                "brand-dark-blue": "#0ea5e9",
            },
            fontFamily: {
                comic: ["var(--font-sigmar)", "cursive"],
                body: ["var(--font-paytone)", "sans-serif"],
            },
            animation: {
                "bounce-slow": "bounce 3s infinite",
                "shake": "shake 3s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite",
                "cry-flow": "cryFlow 1s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "shine": "shine 2s linear infinite",
                "pulse-glow": "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                shake: {
                    "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
                    "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
                    "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
                    "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
                },
                cryFlow: {
                    "0%": { backgroundPosition: "0 0" },
                    "100%": { backgroundPosition: "0 20px" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                shine: {
                    "0%": { backgroundPosition: "200% center" },
                    "100%": { backgroundPosition: "-200% center" },
                },
                pulseGlow: {
                    "0%, 100%": { opacity: "1", filter: "brightness(1)" },
                    "50%": { opacity: ".8", filter: "brightness(1.5)" },
                }
            },
            backgroundImage: {
                "comic-pattern": "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
                "radial-red": "radial-gradient(circle at center, var(--primary-red), #991b1b)",
                "radial-gold": "radial-gradient(circle at center, var(--accent-gold), #b45309)",
            }
        },
    },
    plugins: [],
} satisfies Config;
