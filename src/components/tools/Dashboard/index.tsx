import { PerformanceMetrics } from './PerformanceMetrics';
import { MarketAnalyzer } from './MarketAnalyzer';
import { BusinessIntelligence } from './BusinessIntelligence';
import { ScalabilityPredictor } from './ScalabilityPredictor';
import { theme } from '@/lib/theme';

export function Dashboard() {
  return (
    <section className={`py-24 bg-${theme.colors.darkMatter}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-${theme.colors.ghostWhite} ${theme.effects.textGlow} mb-12 text-center`}>
          AI Performance Dashboard
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PerformanceMetrics />
          <MarketAnalyzer />
          <BusinessIntelligence />
          <ScalabilityPredictor />
        </div>
      </div>
    </section>
  );
}