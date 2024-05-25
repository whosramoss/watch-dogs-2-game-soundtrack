import { AnimatePresence, motion } from "framer-motion"
import { bodyVariantState } from "./variants/bodyVariantState"
import SlideInTransition from "./SlideInTransition"
import { fontHacked } from "../fonts"

export default function AnimateTitle({ title, controls }) {
    return (
        <SlideInTransition>
            <AnimatePresence>
                <motion.div
                    key="big-font-name"
                    animate={controls}
                    initial={bodyVariantState.textinitial}
                    exit={bodyVariantState.textclose}
                    className={`${fontHacked.className} text-title-responsive  text-center text-primary`}

                >
                    {title}
                </motion.div>
            </AnimatePresence>
        </SlideInTransition>
    )
}
