const { nextui } = require("@nextui-org/react");

module.exports = {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        background: "#FFFFFF",
                        foreground: "#11181C",
                        primary: "#7828c8",
                    },
                },
            },
        }),
    ],
};
