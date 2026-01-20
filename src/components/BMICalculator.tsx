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

  const calculateBMI = () => {
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

    setResult(getBMIResult(bmi));
  };

  const resetCalculator = () => {
    setHeight("");
    setHeightFeet("");
    setHeightInches("");
    setWeight("");
    setResult(null);
  };

  return (
    <section id="bmi-calculator" className="section-container">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            BMI <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Calculate your Body Mass Index to understand your current fitness level and set realistic goals.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-6 h-6 text-primary" />
                  <h3 className="font-heading font-bold text-xl">Enter Your Details</h3>
                </div>

                {/* Unit Toggle */}
                <div className="flex gap-2 mb-6">
                  <Button
                    variant={unit === "metric" ? "primary" : "outline"}
                    onClick={() => {
                      setUnit("metric");
                      resetCalculator();
                    }}
                    className="flex-1"
                  >
                    Metric (kg/cm)
                  </Button>
                  <Button
                    variant={unit === "imperial" ? "primary" : "outline"}
                    onClick={() => {
                      setUnit("imperial");
                      resetCalculator();
                    }}
                    className="flex-1"
                  >
                    Imperial (lbs/ft)
                  </Button>
                </div>

                {/* Height Input */}
                <div className="mb-4">
                  <Label className="flex items-center gap-2 mb-2">
                    <Ruler className="w-4 h-4 text-primary" />
                    Height
                  </Label>
                  {unit === "metric" ? (
                    <Input
                      type="number"
                      placeholder="Height in cm (e.g., 175)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="bg-background"
                    />
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="Feet"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(e.target.value)}
                        className="bg-background"
                      />
                      <Input
                        type="number"
                        placeholder="Inches"
                        value={heightInches}
                        onChange={(e) => setHeightInches(e.target.value)}
                        className="bg-background"
                      />
                    </div>
                  )}
                </div>

                {/* Weight Input */}
                <div className="mb-6">
                  <Label className="flex items-center gap-2 mb-2">
                    <Scale className="w-4 h-4 text-primary" />
                    Weight
                  </Label>
                  <Input
                    type="number"
                    placeholder={unit === "metric" ? "Weight in kg (e.g., 70)" : "Weight in lbs (e.g., 154)"}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={calculateBMI} variant="primary" className="flex-1">
                    Calculate BMI
                  </Button>
                  <Button onClick={resetCalculator} variant="outline">
                    Reset
                  </Button>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center">
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-6">
                      <p className="text-6xl font-heading font-bold text-primary mb-2">
                        {result.bmi.toFixed(1)}
                      </p>
                      <p className={`text-2xl font-heading font-bold ${result.color}`}>
                        {result.category}
                      </p>
                    </div>
                    <div className="bg-background rounded-xl p-4 border border-border">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm text-left">
                          {result.description}
                        </p>
                      </div>
                    </div>
                    <Button variant="primary" className="mt-6 w-full">
                      Get a Free Consultation
                    </Button>
                  </motion.div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Scale className="w-12 h-12 text-primary" />
                    </div>
                    <p>Enter your height and weight to calculate your BMI</p>
                  </div>
                )}
              </div>
            </div>

            {/* BMI Chart */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-heading font-bold mb-4 text-center">BMI Categories</h4>
              <div className="grid grid-cols-4 gap-2 text-center text-sm">
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <p className="font-bold text-blue-400">Under 18.5</p>
                  <p className="text-muted-foreground text-xs mt-1">Underweight</p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-3">
                  <p className="font-bold text-green-400">18.5 - 24.9</p>
                  <p className="text-muted-foreground text-xs mt-1">Normal</p>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-3">
                  <p className="font-bold text-yellow-400">25 - 29.9</p>
                  <p className="text-muted-foreground text-xs mt-1">Overweight</p>
                </div>
                <div className="bg-red-500/20 rounded-lg p-3">
                  <p className="font-bold text-red-400">30+</p>
                  <p className="text-muted-foreground text-xs mt-1">Obese</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
