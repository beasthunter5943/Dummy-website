import { useState } from 'react';
import { Calculator } from './Calculator';
import { Results } from './Results';
import { GlassCard } from '@/components/ui/GlassCard';
import { theme } from '@/lib/theme';

export function AICalculator() {
  const [results, setResults] = useState<CalculationResults | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className={`text-3xl font-bold text-${theme.colors.techWhite}`}>
              AI Savings Calculator Pro
            </h2>
            <p className={`text-${theme.colors.neonCoffee} text-lg`}>
              Calculate your potential savings with AI automation
            </p>
          </div>

          <GlassCard className="p-8">
            {!results ? (
              <Calculator onCalculate={setResults} />
            ) : (
              <Results data={results} onReset={() => setResults(null)} />
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}