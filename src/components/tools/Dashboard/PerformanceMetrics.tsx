import { useEffect, useRef } from 'react';
import { LineChart } from '@/components/ui/charts/LineChart';
import { GlassCard } from '@/components/ui/GlassCard';
import { theme } from '@/lib/theme';
import { gsap } from 'gsap';

const metrics = {
  efficiency: Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    value: 85 + Math.random() * 10
  })),
  errorRate: Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    value: 15 - (i * 0.8) - Math.random() * 2
  }))
};

export function PerformanceMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current.children, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <GlassCard className="p-6" ref={containerRef}>
      <h3 className={`text-2xl font-bold text-${theme.colors.ghostWhite} mb-6`}>
        Performance Metrics
      </h3>

      <div className="space-y-8">
        <div>
          <h4 className={`text-${theme.colors.cyberBlue} mb-4`}>
            Process Efficiency
          </h4>
          <LineChart
            data={metrics.efficiency}
            xKey="month"
            yKey="value"
            gradient={[theme.colors.gradientStart, theme.colors.gradientEnd]}
          />
        </div>

        <div>
          <h4 className={`text-${theme.colors.cyberBlue} mb-4`}>
            Error Rate Reduction
          </h4>
          <LineChart
            data={metrics.errorRate}
            xKey="month"
            yKey="value"
            gradient={[theme.colors.gradientEnd, theme.colors.gradientStart]}
          />
        </div>
      </div>
    </GlassCard>
  );
}