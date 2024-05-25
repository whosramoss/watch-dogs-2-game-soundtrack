
const animationDuration = 1.1;
const animationDelay = 0.7;

export const bodyVariantState = {
    initial: { x: "-100vw" },
    open: {
        x: 0,
        transition: {
            delay: animationDelay,
            duration: animationDuration,
            ease: [0.85, 0, 0.15, 1],
            staggerChildren: 0.1,
        },
    },
    close: {
        x: "-100vw",
        transition: {
            delay: animationDelay,
            duration: animationDuration,
            ease: [0.85, 0, 0.15, 1],
            staggerChildren: 0.1,
        },
    },
    textinitial: {
        x: 0,
    },
    textopen: {
        x: "-0%", //    x: "-45%", 
        transition: {
            delay: animationDelay,
            duration: animationDuration,
            ease: [0.85, 0, 0.15, 1],
            staggerChildren: 0.1,
        },
    },
    textclose: {
        x: -10,
        transition: {
            delay: animationDelay,
            duration: animationDuration,
            ease: [0.85, 0, 0.15, 1],
            staggerChildren: 0.1,
        },
    },
    contentinitial: {
        x: 0,
    },
    contentopen: {
        x: "120%",
        transition: {
            delay: animationDelay,
            duration: animationDuration - 0.3,
            ease: [0.85, 0, 0.15, 1],
            staggerChildren: 0.1,
        },
    },
    contentclose: {
        x: 0,
        transition: {
            delay: animationDelay + 0.3,
            duration: animationDuration,
            ease: [0.85, 0, 0.15, 1],
            staggerChildren: 0.1,
        },
    },
};
