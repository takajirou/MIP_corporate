import type { Config } from "tailwindcss";

export default {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                bg: "#FFFFE7",
                orange: "#DF7F03",
                main: "#0354A5",
            },
            title:{
                size: "65px",
                weight: "bold",
                headingSize: "20px",
            },
        },
    },
    plugins: [],
} satisfies Config;
