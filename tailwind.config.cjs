/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                "fade-in-out": "fade-in-out 4s ease-in-out infinite",
            },
            backgroundImage: {
                "hero-pattern": "url('/layered-waves-haikei.svg')",
            },
            colors: {
                body: "rgb(var(--color-bg))",
                "box-bg": "rgb(var(--color-box))",
                "box-shadow": "rgb(var(--box-sd))",
                "box-border": "rgb(var(--box-border))",
                primary: "#a47cbe",
                "heading-1": "rgb(var(--heading-1))",
                "heading-2": "rgb(var(--heading-2))",
                "heading-3": "rgb(var(--heading-3))",
            },
            screens: {
                midmd: "880px",
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};