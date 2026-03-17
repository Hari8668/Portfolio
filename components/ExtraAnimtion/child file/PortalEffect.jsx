import { motion } from "framer-motion";

const portalVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: { scale: [0, 1.5, 0.2, 5], opacity: [1, 1, 0.8, 0] },
};

const PortalEffect = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            {/* Outer Glowing Ring */}
            <motion.div
                variants={portalVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute w-32 h-32 rounded-full border-4 border-blue-500 animate-pulse"
                style={{
                    boxShadow: "0 0 20px rgba(0, 191, 255, 0.8)",
                }}
            />

            {/* Inner Portal Vortex */}
            <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0.2, 1, 5], opacity: [1, 1, 0] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                style={{
                    filter: "blur(10px)",
                }}
            />
        </div>
    );
};

export default PortalEffect;
