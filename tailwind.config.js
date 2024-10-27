/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "bg-gradient-to-mb": "linear-gradient(156deg,  var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    DEFAULT: "#2ED573",
                    light: "#82E6AB",
                    dark: "#25AA5C",
                },
                grey: {
                    100: "#E7E8EB",
                    200: "#CFD2D7",
                    300: "#B8BBC2",
                    400: "#A0A4AD",
                    500: "#898E98",
                    600: "#727883",
                    700: "#5C616E",
                    800: "#454B58",
                    900: "#2F3542",
                },
                error: {
                    DEFAULT: "#FF4B55",
                },
            },
        },
    },
    plugins: [],
};
