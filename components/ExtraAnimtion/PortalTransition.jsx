"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import PortalEffect from "./child file/PortalEffect";

const PortalTransition = () => {
    const path = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={path} className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
                <PortalEffect />
            </div>

            {/* Background Fade */}
            <motion.div
                className="fixed top-0 left-0 w-screen h-screen bg-black"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { delay: 1.5, duration: 0.6, ease: "easeInOut" },
                }}
            />
        </AnimatePresence>
    );
};

export default PortalTransition;
