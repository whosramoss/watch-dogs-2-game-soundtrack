import { motion } from "framer-motion"
import { bodyVariantState } from "./variants/bodyVariantState"

export default function AnimateBackground({ src, controls }) {
    return (
        <motion.img
            // grayscale sm:blur-sm 
            className="absolute w-screen h-screen object-cover left-0 bottom-0"
            src={src}
            animate={controls}
            initial={bodyVariantState.contentinitial}
            exit={bodyVariantState.contentclose}
        ></motion.img>
    )
}