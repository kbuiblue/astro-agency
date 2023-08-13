/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            animation: {
                "fade-in-out": "fade-in-out 5s ease-in infinite",
                "gradient": "animatedgradient 6s ease infinite",
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
                sm: "620px",
                midmd: "880px",
            },
        },
    },
};
