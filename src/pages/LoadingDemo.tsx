import { useState } from "react";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LoadingDemo = () => {
    const [showFullScreen, setShowFullScreen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                        Loading Animations Demo
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Premium fitness-themed loading animations for Oxygen Fitness
                    </p>
                </div>

                {/* Full Screen Loading Animation */}
                <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">Full-Screen Loading Animation</CardTitle>
                        <CardDescription>
                            The main loading animation that appears when the app first loads
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-slate-300">
                            This animation includes:
                        </p>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                            <li>Animated rotating dumbbell icon</li>
                            <li>Pulsing concentric circles</li>
                            <li>Gradient progress bar</li>
                            <li>Cycling motivational quotes</li>
                            <li>Floating background particles</li>
                            <li>Bouncing dots indicator</li>
                        </ul>
                        <Button
                            onClick={() => setShowFullScreen(true)}
                            className="w-full sm:w-auto"
                        >
                            Preview Full-Screen Animation
                        </Button>
                    </CardContent>
                </Card>

                {/* Loading Spinners */}
                <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">Loading Spinners</CardTitle>
                        <CardDescription>
                            Reusable loading spinners in different sizes
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Small */}
                            <div className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-lg">
                                <h3 className="text-lg font-semibold text-white">Small</h3>
                                <LoadingSpinner size="sm" />
                                <code className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded">
                                    size="sm"
                                </code>
                            </div>

                            {/* Medium */}
                            <div className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-lg">
                                <h3 className="text-lg font-semibold text-white">Medium</h3>
                                <LoadingSpinner size="md" />
                                <code className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded">
                                    size="md"
                                </code>
                            </div>

                            {/* Large */}
                            <div className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-lg">
                                <h3 className="text-lg font-semibold text-white">Large</h3>
                                <LoadingSpinner size="lg" />
                                <code className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded">
                                    size="lg"
                                </code>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Spinners with Text */}
                <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">Spinners with Text</CardTitle>
                        <CardDescription>
                            Loading spinners with custom messages
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-lg">
                                <LoadingSpinner size="md" text="Loading workouts..." />
                                <code className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded text-center">
                                    text="Loading workouts..."
                                </code>
                            </div>

                            <div className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-lg">
                                <LoadingSpinner size="md" text="Fetching your data..." />
                                <code className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded text-center">
                                    text="Fetching your data..."
                                </code>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Usage Examples */}
                <Card className="bg-slate-900/50 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">Usage Examples</CardTitle>
                        <CardDescription>
                            Code snippets for implementing the loading animations
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="text-white font-semibold">Full-Screen Loading:</h4>
                            <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto">
                                <code className="text-sm text-slate-300">
                                    {`import { LoadingAnimation } from "@/components/LoadingAnimation";

<LoadingAnimation />`}
                                </code>
                            </pre>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-white font-semibold">Loading Spinner:</h4>
                            <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto">
                                <code className="text-sm text-slate-300">
                                    {`import { LoadingSpinner } from "@/components/LoadingSpinner";

<LoadingSpinner size="md" text="Loading..." />`}
                                </code>
                            </pre>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Full-Screen Preview Modal */}
            {showFullScreen && (
                <div className="fixed inset-0 z-50">
                    <LoadingAnimation />
                    <Button
                        onClick={() => setShowFullScreen(false)}
                        className="absolute top-4 right-4 z-[60]"
                        variant="secondary"
                    >
                        Close Preview
                    </Button>
                </div>
            )}
        </div>
    );
};

export default LoadingDemo;
