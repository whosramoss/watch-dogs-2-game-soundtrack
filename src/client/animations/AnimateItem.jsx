import { motion } from "framer-motion"

export default function AnimateItem({ children }) {
    return (
        <motion.div variants={{
            initial: {
                opacity: 0,
                x: -50,
            },
            animate: {
                opacity: 1,
                x: 0,
                transition: {
                    staggerChildren: 0.1,
                    duration: 0.75,
                },
            },
        }}>
            {children}
        </motion.div>
    )
}