module.exports = {
    purge: [],
    theme: {
        extend: {
            spacing: {
                '1/2': '50%',
                '1/3': '33.3333333%',
                '2/3': '66.6666666%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.3s linear',
            },
        },
    },
    variants: {},
    plugins: [],
};
