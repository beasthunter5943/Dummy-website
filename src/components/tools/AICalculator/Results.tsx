import { useEffect } from 'react';
import { SciFiButton } from '@/components/ui/SciFiButton';
import { BarChart } from './charts/BarChart';
import { LineChart } from './charts/LineChart';
import { formatCurrency } from '@/lib/utils';
import { theme } from '@/lib/theme';
import { gsap } from 'gsap';

interface ResultsProps {
  data: CalculationResults;
  onReset: () => void;
}

export function Results({ data, onReset }: ResultsProps) {
  useEffect(() => {
    gsap.from('.result-item', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="result-item space-y-2">
          <h3 className={`text-${theme.colors.techWhite} text-lg font-semibold`}>
            Annual Cost Savings
          </h3>
          <p className={`text-${theme.colors.neonCoffee} text-3xl font-bold`}>
            {formatCurrency(data.annualSavings)}
          </p>
        </div>

        <div className="result-item space-y-2">
          <h3 className={`text-${theme.colors.techWhite} text-lg font-semibold`}>
            Hours Saved Annually
          </h3>
          <p className={`text-${theme.colors.neonCoffee} text-3xl font-bold`}>
            {data.hoursSaved.toLocaleString()} hours
          </p>
        </div>
      </div>

      <div className="result-item">
        <h3 className={`text-${theme.colors.techWhite} text-lg font-semibold mb-4`}>
          5-Year Projection
        </h3>
        <LineChart data={data.projection} />
      </div>

      <div className="result-item">
        <h3 className={`text-${theme.colors.techWhite} text-lg font-semibold mb-4`}>
          Resource Allocation Impact
        </h3>
        <BarChart data={data.resourceImpact} />
      </div>

      <SciFiButton 
        onClick={onReset}
        variant="secondary"
        className="w-full"
      >
        Calculate Another Scenario
      </SciFiButton>
    </div>
  );
}