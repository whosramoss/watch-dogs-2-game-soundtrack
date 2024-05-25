import { motion } from "framer-motion"
import { sectionVariantState } from "./variants/sectionVariantState"

export default function AnimateContent({ children }) {


    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={sectionVariantState}>
            {children}
        </motion.div>
    )
}
