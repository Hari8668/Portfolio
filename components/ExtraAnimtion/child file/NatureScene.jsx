import { motion } from "framer-motion";

const NatureScene = () => {
    return (
        <div className="absolute w-full h-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-400 to-orange-300">
            {/* Sun */}
            <motion.div
                initial={{ y: 200, scale: 0.8 }}
                animate={{ y: -100, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-40 h-40 bg-yellow-500 rounded-full shadow-lg"
            />

            {/* Clouds */}
            {[...Array(3)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 300, opacity: 1 }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                        delay: index * 0.4,
                    }}
                    className="absolute top-1/4 w-32 h-20 bg-white rounded-full blur-md"
                    style={{
                        left: `${index * 20 + 10}%`,
                    }}
                />
            ))}

            {/* Sunset */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="absolute bottom-0 w-full h-1/2 bg-orange-500"
            />

            {/* Night Sky Transition */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="absolute w-full h-full bg-gradient-to-b from-black to-blue-900"
            />

            {/* Moon */}
            <motion.div
                initial={{ x: -300, y: 150, opacity: 0 }}
                animate={{ x: 100, y: -100, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 2.4 }}
                className="absolute w-20 h-20 bg-gray-300 rounded-full shadow-lg"
            />

            {/* Stars */}
            {[...Array(10)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        delay: 2.6 + index * 0.1,
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                        top: `${Math.random() * 50 + 20}%`,
                        left: `${Math.random() * 80 + 10}%`,
                    }}
                />
            ))}
        </div>
    );
};

export default NatureScene;
