import { useState } from 'react';
import { SciFiButton } from '@/components/ui/SciFiButton';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { calculateSavings } from './utils';
import type { CalculatorInputs } from './types';

const initialInputs: CalculatorInputs = {
  manualHours: 40,
  employeeCount: 5,
  hourlyRate: 50,
  processComplexity: 3,
};

interface CalculatorProps {
  onCalculate: (results: CalculationResults) => void;
}

export function Calculator({ onCalculate }: CalculatorProps) {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);

  const handleCalculate = () => {
    const results = calculateSavings(inputs);
    onCalculate(results);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <label className="block text-techWhite">
            Weekly Manual Process Hours
          </label>
          <Slider
            value={[inputs.manualHours]}
            min={1}
            max={168}
            step={1}
            onValueChange={([value]) => 
              setInputs(prev => ({ ...prev, manualHours: value }))
            }
          />
          <span className="block text-neonCoffee text-right">
            {inputs.manualHours} hours/week
          </span>
        </div>

        <div className="space-y-4">
          <label className="block text-techWhite">
            Number of Employees Involved
          </label>
          <Input
            type="number"
            value={inputs.employeeCount}
            onChange={(e) => 
              setInputs(prev => ({ 
                ...prev, 
                employeeCount: parseInt(e.target.value) || 0 
              }))
            }
            className="bg-deepSpace text-techWhite border-neonCoffee"
          />
        </div>

        <div className="space-y-4">
          <label className="block text-techWhite">
            Average Hourly Rate ($)
          </label>
          <Input
            type="number"
            value={inputs.hourlyRate}
            onChange={(e) => 
              setInputs(prev => ({ 
                ...prev, 
                hourlyRate: parseInt(e.target.value) || 0 
              }))
            }
            className="bg-deepSpace text-techWhite border-neonCoffee"
          />
        </div>

        <div className="space-y-4">
          <label className="block text-techWhite">
            Process Complexity Level
          </label>
          <Slider
            value={[inputs.processComplexity]}
            min={1}
            max={5}
            step={1}
            onValueChange={([value]) => 
              setInputs(prev => ({ ...prev, processComplexity: value }))
            }
          />
          <span className="block text-neonCoffee text-right">
            Level {inputs.processComplexity}
          </span>
        </div>
      </div>

      <SciFiButton 
        onClick={handleCalculate}
        className="w-full"
      >
        Calculate Savings
      </SciFiButton>
    </div>
  );
}