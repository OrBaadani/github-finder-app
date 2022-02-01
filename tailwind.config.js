module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        screens: {
            // xxs: '300px',
            xs: '475px',
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [require('daisyui')],
    // daisyui: {
    //     themes: [
    //         {
    //             mytheme: {
    //                 // custom theme
    //                 primary: '#ea5234',
    //                 'primary-focus': '#d43616',
    //                 'primary-content': '#ffffff',
    //                 // other colors
    //             },
    //             myothertheme: {
    //                 // custom theme
    //                 primary: '#007ebd',
    //                 'primary-focus': '#005c8a',
    //                 'primary-content': '#ffffff',
    //                 // other colors
    //             },
    //         },
    //         'dark', // and some pre-defined theme
    //         'forest',
    //         'synthwave',
    //     ],
    // },
};
