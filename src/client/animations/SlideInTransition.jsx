import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function SlideInTransition({
    children,
    delay = 0.75,
    duration = 1.5,
    initialX = 0,
    fontSize = "100%",
}) {

    return (
        <div className="overflow-hidden mt-4">
            <AnimatePresence>
                <motion.div
                    initial="initial"
                    variants={{
                        initial: {
                            opacity: 1,
                            x: initialX,
                            y: fontSize,
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: delay,
                                duration: duration,
                                ease: [0.85, 0, 0.15, 1],
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    animate="animate"
                    className="text-contrast"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}