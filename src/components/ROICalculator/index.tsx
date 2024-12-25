import { CalculatorForm } from './CalculatorForm';
import { GlassCard } from '@/components/ui/GlassCard';
import { theme } from '@/lib/theme';

export function ROICalculator() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className={`text-3xl font-bold text-${theme.colors.techWhite}`}>
              Calculate Your ROI
            </h2>
            <p className={`text-${theme.colors.neonCoffee} text-lg`}>
              See how much you can save with our AI automation solutions
            </p>
          </div>

          <GlassCard className="p-8">
            <CalculatorForm />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}