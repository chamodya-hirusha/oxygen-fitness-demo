import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const motivationalQuotes = [
    "Building Strength...",
    "Powering Up...",
    "Getting Ready...",
    "Almost There...",
    "Loading Your Fitness Journey...",
];

export const LoadingAnimation = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Main loading content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Animated dumbbell icon */}
                <div className="relative">
                    {/* Outer pulsing circles */}
                    <motion.div
                        className="absolute inset-0 -m-12"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    >
                        <div className="w-32 h-32 rounded-full border-4 border-primary/30" />
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 -m-8"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                    >
                        <div className="w-24 h-24 rounded-full border-4 border-primary/40" />
                    </motion.div>

                    {/* Dumbbell SVG */}
                    <motion.div
                        animate={{
                            rotateZ: [0, 360],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="drop-shadow-2xl"
                        >
                            {/* Dumbbell design */}
                            <motion.g
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {/* Left weight */}
                                <rect
                                    x="5"
                                    y="30"
                                    width="20"
                                    height="40"
                                    rx="4"
                                    className="fill-primary"
                                />
                                <rect
                                    x="10"
                                    y="25"
                                    width="10"
                                    height="50"
                                    rx="2"
                                    className="fill-primary/80"
                                />

                                {/* Bar */}
                                <rect
                                    x="25"
                                    y="45"
                                    width="50"
                                    height="10"
                                    rx="5"
                                    className="fill-primary/90"
                                />

                                {/* Right weight */}
                                <rect
                                    x="75"
                                    y="30"
                                    width="20"
                                    height="40"
                                    rx="4"
                                    className="fill-primary"
                                />
                                <rect
                                    x="80"
                                    y="25"
                                    width="10"
                                    height="50"
                                    rx="2"
                                    className="fill-primary/80"
                                />
                            </motion.g>

                            {/* Sparkle effects */}
                            <motion.circle
                                cx="20"
                                cy="20"
                                r="3"
                                className="fill-white"
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.circle
                                cx="80"
                                cy="80"
                                r="3"
                                className="fill-white"
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                        </svg>
                    </motion.div>
                </div>

                {/* Brand name with gradient */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-2">
                        OXYGEN
                    </h1>
                    <p className="text-lg text-slate-400 font-medium">FITNESS</p>
                </motion.div>

                {/* Progress bar */}
                <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Motivational text */}
                <motion.p
                    key={quoteIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-slate-300 text-lg font-medium"
                >
                    {motivationalQuotes[quoteIndex]}
                </motion.p>

                {/* Spinning dots */}
                <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-primary rounded-full"
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>
    );
};
