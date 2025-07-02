import type { Config } from "tailwindcss";

export default {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "main-gradation": 'linear-gradient(to bottom, #6DC7F9 0%, #0354A5 100%)',
            },
            colors: {
                bg: "#FFFFE7",
                orange: "#DF7F03",
                main: "#0354A5",
            },
        },
    },
    plugins: [],
} satisfies Config;
