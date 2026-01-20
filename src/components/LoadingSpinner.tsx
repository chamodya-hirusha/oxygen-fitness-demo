import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    className?: string;
    text?: string;
}

export const LoadingSpinner = ({
    size = "md",
    className,
    text
}: LoadingSpinnerProps) => {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-16 h-16",
        lg: "w-24 h-24",
    };

    const dotSizes = {
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-3 h-3",
    };

    return (
        <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
            <div className="relative">
                {/* Outer spinning ring */}
                <motion.div
                    className={cn(
                        "rounded-full border-4 border-primary/20 border-t-primary",
                        sizeClasses[size]
                    )}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Inner pulsing circle */}
                <motion.div
                    className="absolute inset-0 m-auto w-1/2 h-1/2 rounded-full bg-primary/30"
                    animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Bouncing dots */}
            {text && (
                <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className={cn("bg-primary rounded-full", dotSizes[size])}
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{text}</p>
                </div>
            )}
        </div>
    );
};
