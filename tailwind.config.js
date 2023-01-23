/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {},
        },
        screens: {
            xs: "375px",
            sm: "680px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
            "2xl": "1680px",
            "3xl": "1920px",
            "max-xs": { max: "374px" },
            "max-sm": { max: "679px" },
            "max-md": { max: "767px" },
            "max-lg": { max: "1023px" },
            "max-xl": { max: "1199px" },
            "max-2xl": { max: "1439px" },
            "max-3xl": { max: "1679px" },
            "max-4xl": { max: "1919px" },
        },
        fontFamily: {
            primary: ["Inter", "sans-serif"],
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities(
                {
                    ".scrollbar-hide": {
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    },
                    ".scrollbar-default": {
                        "-ms-overflow-style": "auto",
                        "scrollbar-width": "auto",
                        "&::-webkit-scrollbar": {
                            display: "block",
                        },
                    },
                },
                ["responsive"]
            );
        },
        require("@tailwindcss/line-clamp"),
    ],
};
