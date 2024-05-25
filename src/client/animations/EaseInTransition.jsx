import { motion } from "framer-motion";

export default function EaseInTransition({
    children,
    delay = .25,
    duration = .45,
    initialX = 0,
    initialY = -20,
    renderOnce = true
}) {
    return (
        <>
            <motion.div
                initial="initial"
                variants={{
                    initial: {
                        opacity: 0,
                        x: initialX,
                        y: initialY,
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: delay,
                            duration: duration,
                            ease: "easeOut",
                            staggerChildren: 0.1,
                        },
                    },
                }}
                whileInView="animate"
                viewport={{ once: renderOnce }}
            >
                {children}
            </motion.div>
        </>
    );
}