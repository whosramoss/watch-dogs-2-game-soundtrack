import { AnimatePresence, motion } from "framer-motion"
import { bodyVariantState } from "./variants/bodyVariantState"

export default function AnimateBottom({ children, controls }) {
    return (
        <AnimatePresence>
            <motion.div
                key="content"
                initial={bodyVariantState.contentinitial}
                animate={controls}
                exit={bodyVariantState.contentclose}
                className="text-contrast text-left"
            >
                <div className="flex justify-between items-center text-contrast ">
                    <div className="flex flex-col">
                        <span className="text-5xl font-bold hidden sm:block">
                            {children}

                        </span>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}