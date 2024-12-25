import { useRef, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { RadarChart } from '@/components/ui/charts/RadarChart';
import { theme } from '@/lib/theme';
import { gsap } from 'gsap';

const marketData = {
  current: [
    { metric: 'Market Share', value: 45 },
    { metric: 'Customer Growth', value: 65 },
    { metric: 'Revenue Impact', value: 78 },
    { metric: 'Competitive Edge', value: 82 },
    { metric: 'Innovation Score', value: 90 }
  ],
  projected: [
    { metric: 'Market Share', value: 75 },
    { metric: 'Customer Growth', value: 85 },
    { metric: 'Revenue Impact', value: 92 },
    { metric: 'Competitive Edge', value: 88 },
    { metric: 'Innovation Score', value: 95 }
  ]
};

export function MarketAnalyzer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current.children, {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, []);

  return (
    <GlassCard className="p-6" ref={containerRef}>
      <h3 className={`text-2xl font-bold text-${theme.colors.ghostWhite} mb-6`}>
        Market Impact Analysis
      </h3>
      
      <div className="h-[300px]">
        <RadarChart
          data={marketData}
          colors={[theme.colors.cyberBlue, theme.colors.neonPurple]}
        />
      </div>
    </GlassCard>
  );
}