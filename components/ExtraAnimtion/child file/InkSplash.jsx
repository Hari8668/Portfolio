import { motion } from "framer-motion";

const inkVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: { scale: [0, 1.5, 2], opacity: [1, 1, 0] },
};

const InkSplash = () => {
    return (
        <div className="absolute w-full h-full flex items-center justify-center">
            {/* Main Ink Splash */}
            <motion.div
                variants={inkVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute w-[200px] h-[200px] bg-black rounded-full"
                style={{
                    filter: "blur(50px)",
                }}
            />

            {/* Additional Ink Droplets for a Natural Look */}
            {[...Array(5)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ x: 0, y: 0, scale: 0 }}
                    animate={{
                        x: (Math.random() - 0.5) * 500,
                        y: (Math.random() - 0.5) * 500,
                        scale: [0, 1, 3],
                        opacity: [1, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        delay: index * 0.2,
                    }}
                    className="absolute w-[80px] h-[80px] bg-black rounded-full"
                    style={{
                        filter: "blur(30px)",
                    }}
                />
            ))}
        </div>
    );
};

export default InkSplash;
