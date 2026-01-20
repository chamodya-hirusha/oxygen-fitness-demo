import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Scale, Ruler, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Unit = "metric" | "imperial";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  description: string;
}

const getBMIResult = (bmi: number): BMIResult => {
  if (bmi < 18.5) {
    return {
      bmi,
      category: "Underweight",
      color: "text-blue-400",
      description: "You may need to gain some weight. Consult with a nutritionist for a healthy meal plan.",
    };
  } else if (bmi < 25) {
    return {
      bmi,
      category: "Normal Weight",
      color: "text-green-400",
      description: "Great job! You're at a healthy weight. Maintain your lifestyle with regular exercise.",
    };
  } else if (bmi < 30) {
    return {
      bmi,
      category: "Overweight",
      color: "text-yellow-400",
      description: "Consider a balanced diet and regular exercise to reach a healthier weight.",
    };
  } else {
    return {
      bmi,
      category: "Obese",
      color: "text-red-400",
      description: "We recommend consulting with a healthcare professional and starting a fitness program.",
    };
  }
};

const BMICalculator = () => {
  const [unit, setUnit] = useState<Unit>("metric");
  const [height, setHeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateBMI = async () => {
    let bmi: number;

    if (unit === "metric") {
      const heightM = parseFloat(height) / 100;
      const weightKg = parseFloat(weight);
      if (!heightM || !weightKg) return;
      bmi = weightKg / (heightM * heightM);
    } else {
      const totalInches = parseFloat(heightFeet) * 12 + parseFloat(heightInches);
      const weightLbs = parseFloat(weight);
      if (!totalInches || !weightLbs) return;
      bmi = (weightLbs / (totalInches * totalInches)) * 703;
    }

    setIsCalculating(true);
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    setResult(getBMIResult(bmi));
    setIsCalculating(false);
  };

  const resetCalculator = () => {
    setHeight("");
    setHeightFeet("");
    setHeightInches("");
    setWeight("");
    setResult(null);
    setIsCalculating(false);
  };

  const getBMIPosition = (bmi: number) => {
    // Map BMI 15-40 to 0-100%
    const min = 15;
    const max = 40;
    const pos = ((bmi - min) / (max - min)) * 100;
    return Math.min(Math.max(pos, 0), 100);
  };

  return (
    <section id="bmi-calculator" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6">
            Know Your <span className="text-primary">BMI</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify underweight, overweight and obesity in adults.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-12 border border-border/50 shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
              {/* Calculator Form */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Calculator className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground">Calculate Now</h3>
                  </div>

                  {/* Unit Toggle */}
                  <div className="inline-flex p-1 bg-secondary/50 rounded-xl mb-6 md:mb-8 w-full">
                    <button
                      onClick={() => { setUnit("metric"); resetCalculator(); }}
                      className={`flex-1 py-2.5 md:py-3 px-3 md:px-4 rounded-lg text-xs md:text-sm font-bold transition-all ${unit === "metric" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Metric
                    </button>
                    <button
                      onClick={() => { setUnit("imperial"); resetCalculator(); }}
                      className={`flex-1 py-2.5 md:py-3 px-3 md:px-4 rounded-lg text-xs md:text-sm font-bold transition-all ${unit === "imperial" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Imperial
                    </button>
                  </div>

                  <div className="grid gap-6">
                    {/* Height Input */}
                    <div>
                      <Label className="text-sm font-bold mb-3 flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-primary" />
                        Height
                      </Label>
                      {unit === "metric" ? (
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="e.g. 175"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="h-12 md:h-14 bg-background/50 border-border/50 focus:border-primary pl-4 pr-12 rounded-xl text-sm md:text-base"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs md:text-sm text-muted-foreground font-bold">cm</span>
                        </div>
                      ) : (
                        <div className="flex gap-4">
                          <div className="relative flex-1">
                            <Input
                              type="number"
                              placeholder="ft"
                              value={heightFeet}
                              onChange={(e) => setHeightFeet(e.target.value)}
                              className="h-12 md:h-14 bg-background/50 border-border/50 rounded-xl text-sm md:text-base"
                            />
                          </div>
                          <div className="relative flex-1">
                            <Input
                              type="number"
                              placeholder="in"
                              value={heightInches}
                              onChange={(e) => setHeightInches(e.target.value)}
                              className="h-12 md:h-14 bg-background/50 border-border/50 rounded-xl text-sm md:text-base"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Weight Input */}
                    <div>
                      <Label className="text-sm font-bold mb-3 flex items-center gap-2">
                        <Scale className="w-4 h-4 text-primary" />
                        Weight
                      </Label>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"}
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className="h-12 md:h-14 bg-background/50 border-border/50 focus:border-primary pl-4 pr-12 rounded-xl text-sm md:text-base"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs md:text-sm text-muted-foreground font-bold">
                          {unit === "metric" ? "kg" : "lbs"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={calculateBMI}
                    size="lg"
                    disabled={isCalculating}
                    className="w-full sm:flex-1 rounded-xl font-bold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isCalculating ? (
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                        <span>Calculating...</span>
                      </div>
                    ) : (
                      "Calculate BMI"
                    )}
                  </Button>
                  <Button
                    onClick={resetCalculator}
                    variant="outline"
                    size="lg"
                    disabled={isCalculating}
                    className="w-full sm:w-auto rounded-xl font-bold border-2 hover:bg-secondary/50 transition-all disabled:opacity-50"
                  >
                    Reset
                  </Button>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center min-h-[300px] md:min-h-[400px]">
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-8"
                  >
                    <div className="relative py-6 md:py-12">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 md:border-8 border-primary animate-ping" />
                      </div>
                      <p className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-primary mb-2 tracking-tighter">
                        {result.bmi.toFixed(1)}
                      </p>
                      <p className={`text-xl md:text-2xl lg:text-3xl font-heading font-bold uppercase tracking-widest ${result.color}`}>
                        {result.category}
                      </p>
                    </div>

                    {/* BMI Gauge */}
                    <div className="space-y-3 md:space-y-4">
                      <div className="h-3 md:h-4 w-full bg-secondary/50 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 flex">
                          <div className="h-full bg-blue-500/50 w-[14%]" /> {/* Underweight */}
                          <div className="h-full bg-green-500/50 w-[26%]" /> {/* Normal */}
                          <div className="h-full bg-yellow-500/50 w-[20%]" /> {/* Overweight */}
                          <div className="h-full bg-red-500/50 w-[40%]" /> {/* Obese */}
                        </div>
                        <motion.div
                          initial={{ left: "0%" }}
                          animate={{ left: `${getBMIPosition(result.bmi)}%` }}
                          transition={{ type: "spring", stiffness: 50, damping: 15 }}
                          className="absolute top-0 bottom-0 w-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10 -ml-0.75"
                        />
                      </div>
                      <div className="flex justify-between text-[9px] md:text-[10px] uppercase font-bold text-muted-foreground/60 tracking-tighter">
                        <span>15</span>
                        <span>18.5</span>
                        <span>25</span>
                        <span>30</span>
                        <span>40+</span>
                      </div>
                    </div>

                    <div className="bg-background/80 backdrop-blur rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/50 text-left">
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Info className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    </div>

                    <Button variant="primary" size="lg" className="w-full rounded-xl font-bold mt-4 shadow-glow text-sm md:text-base">
                      Get a Free Training Plan
                    </Button>
                  </motion.div>
                ) : (
                  <div className="text-center space-y-4 md:space-y-6 flex flex-col items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary/50 flex items-center justify-center border-2 border-dashed border-border/50">
                      <Scale className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground/30 animate-pulse" />
                    </div>
                    <div className="max-w-xs">
                      <h4 className="font-heading font-bold text-lg md:text-xl mb-2">Ready to check?</h4>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        Enter your data above to see your health score and recommendations.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* BMI Chart */}
            <div className="mt-8 md:mt-16 pt-8 md:pt-12 border-t border-border/30">
              <h4 className="font-heading font-bold mb-6 md:mb-8 text-center text-base md:text-lg lg:text-xl uppercase tracking-widest text-muted-foreground/80">BMI Classifications</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { range: "Under 18.5", label: "Underweight", color: "bg-blue-500/10 text-blue-400" },
                  { range: "18.5 - 24.9", label: "Normal", color: "bg-green-500/10 text-green-400" },
                  { range: "25 - 29.9", label: "Overweight", color: "bg-yellow-500/10 text-yellow-400" },
                  { range: "30+", label: "Obese", color: "bg-red-500/10 text-red-400" },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-current/10 backdrop-blur-sm`}>
                    <p className="font-black text-lg md:text-xl lg:text-2xl mb-1">{item.range}</p>
                    <p className="text-[10px] md:text-xs uppercase font-bold tracking-widest opacity-80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
