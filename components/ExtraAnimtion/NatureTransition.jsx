"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NatureScene from "./child file/NatureScene";

const NatureTransition = () => {
    const path = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={path} className="fixed top-0 left-0 w-screen h-screen z-50">
                <NatureScene />
            </div>

            {/* Background Fade */}
            <motion.div
                className="fixed top-0 left-0 w-screen h-screen bg-black"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { delay: 2.5, duration: 0.8, ease: "easeInOut" },
                }}
            />
        </AnimatePresence>
    );
};

export default NatureTransition;
