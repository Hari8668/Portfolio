import { motion } from "framer-motion";

const ringVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: { scale: 4, opacity: 0 },
};

const Rings = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            {[...Array(5)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={ringVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: index * 0.2,
                    }}
                    className="absolute w-32 h-32 border-4 border-white rounded-full"
                />
            ))}
        </div>
    );
};

export default Rings;
