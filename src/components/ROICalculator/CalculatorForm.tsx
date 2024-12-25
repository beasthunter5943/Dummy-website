import { useState } from 'react';
import { SciFiButton } from '@/components/ui/SciFiButton';
import { Slider } from '@/components/ui/slider';
import { theme } from '@/lib/theme';
import { calculateAnnualSavings } from './utils';
import type { CalculatorInputs } from './types';

const initialInputs: CalculatorInputs = {
  employees: 10,
  hoursPerWeek: 20,
  hourlyRate: 50,
};

export function CalculatorForm() {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);

  const annualSavings = calculateAnnualSavings(
    inputs.employees,
    inputs.hoursPerWeek,
    inputs.hourlyRate
  );

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <label className={`block text-${theme.colors.techWhite}`}>
            Number of Employees
          </label>
          <Slider
            value={[inputs.employees]}
            min={1}
            max={100}
            step={1}
            onValueChange={([value]) => 
              setInputs(prev => ({ ...prev, employees: value }))
            }
          />
          <span className={`block text-${theme.colors.neonCoffee} text-right`}>
            {inputs.employees} employees
          </span>
        </div>

        <div className="space-y-4">
          <label className={`block text-${theme.colors.techWhite}`}>
            Hours Spent on Manual Tasks (per week)
          </label>
          <Slider
            value={[inputs.hoursPerWeek]}
            min={1}
            max={40}
            step={1}
            onValueChange={([value]) => 
              setInputs(prev => ({ ...prev, hoursPerWeek: value }))
            }
          />
          <span className={`block text-${theme.colors.neonCoffee} text-right`}>
            {inputs.hoursPerWeek} hours/week
          </span>
        </div>

        <div className="space-y-4">
          <label className={`block text-${theme.colors.techWhite}`}>
            Average Hourly Rate ($)
          </label>
          <Slider
            value={[inputs.hourlyRate]}
            min={20}
            max={200}
            step={5}
            onValueChange={([value]) => 
              setInputs(prev => ({ ...prev, hourlyRate: value }))
            }
          />
          <span className={`block text-${theme.colors.neonCoffee} text-right`}>
            ${inputs.hourlyRate}/hour
          </span>
        </div>
      </div>

      <div className={`p-6 rounded-lg ${theme.effects.glassBlur} border border-${theme.colors.neonCoffee} text-center`}>
        <div className="text-sm text-gray-400 mb-2">Estimated Annual Savings</div>
        <div className={`text-4xl font-bold text-${theme.colors.neonCoffee}`}>
          ${new Intl.NumberFormat().format(Math.round(annualSavings))}
        </div>
      </div>

      <SciFiButton className="w-full">
        Get Detailed Analysis
      </SciFiButton>
    </div>
  );
}