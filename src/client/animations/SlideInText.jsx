import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function SlideInText({
    text,
    delay = 0.75,
    duration = 1.5,
    initialX = 0,
    fontSize = "100%",
}) {
    return (
        <AnimatePresence>
            {text.map(({ id, content }) => (
                <div key={id} className="overflow-hidden">
                    <motion.div
                        key={id}
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
                        {content}
                    </motion.div>
                </div>

            ))}
        </AnimatePresence>
    );
}