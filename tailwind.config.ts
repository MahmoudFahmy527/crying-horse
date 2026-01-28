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
                "brand-red": "var(--primary-red)",
                "brand-gold": "var(--accent-gold)",
                "brand-blue": "var(--tears-blue)",
            },
            fontFamily: {
                comic: ["var(--font-sigmar)", "cursive"],
                body: ["var(--font-paytone)", "sans-serif"],
            },
            animation: {
                "bounce-slow": "bounce 3s infinite",
                "shake": "shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite",
                "cry-flow": "cryFlow 1s linear infinite",
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
                }
            },
            backgroundImage: {
                "comic-pattern": "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
} satisfies Config;
