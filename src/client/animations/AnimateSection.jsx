import { motion } from "framer-motion"
import { bodyVariantState } from "./variants/bodyVariantState"

export default function AnimateSection({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="open"
            exit="close"
            variants={bodyVariantState}
            className="absolute z-0 bg-ground top-0 left-0  w-full"
        >
            {children}
        </motion.div>
    )
}
