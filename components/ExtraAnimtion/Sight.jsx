"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Waves from "./child file/Waves";

const RingTransition = () => {
    const path = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={path}>
                {/* Expanding Rings Animation */}
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex items-center justify-center">
                    <Waves />
                </div>

                {/* Background Fade-Out */}
                <motion.div
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.5, ease: "easeInOut" }
                    }}
                />
            </div>
        </AnimatePresence>
    );
};

export default RingTransition;
