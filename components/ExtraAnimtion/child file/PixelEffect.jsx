import { motion } from "framer-motion";

const generatePixels = () => {
    const pixels = [];
    for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 25; j++) {
            pixels.push({ x: i * 20, y: j * 20 });
        }
    }
    return pixels;
};

const pixels = generatePixels();

const PixelEffect = () => {
    return (
        <div className="absolute w-full h-full grid grid-cols-25 grid-rows-25">
            {pixels.map((pixel, index) => (
                <motion.div
                    key={index}
                    initial={{ x: pixel.x, y: pixel.y, opacity: 1, scale: 1 }}
                    animate={{
                        x: pixel.x + (Math.random() - 0.5) * 400,
                        y: pixel.y + (Math.random() - 0.5) * 400,
                        opacity: 0,
                        scale: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: Math.random() * 0.3,
                    }}
                    className="w-5 h-5 bg-white absolute"
                />
            ))}
        </div>
    );
};

export default PixelEffect;
