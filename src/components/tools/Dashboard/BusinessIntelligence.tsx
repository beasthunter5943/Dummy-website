import { useRef, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { HeatMap } from '@/components/ui/charts/HeatMap';
import { theme } from '@/lib/theme';
import { gsap } from 'gsap';

const automationData = [
  { process: 'Data Entry', potential: 95, complexity: 2 },
  { process: 'Customer Support', potential: 85, complexity: 3 },
  { process: 'Quality Control', potential: 75, complexity: 4 },
  { process: 'Resource Planning', potential: 80, complexity: 3 },
  { process: 'Risk Assessment', potential: 70, complexity: 5 }
];

export function BusinessIntelligence() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current.children, {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, []);

  return (
    <GlassCard className="p-6" ref={containerRef}>
      <h3 className={`text-2xl font-bold text-${theme.colors.ghostWhite} mb-6`}>
        Automation Potential Analysis
      </h3>
      
      <div className="h-[300px]">
        <HeatMap
          data={automationData}
          colors={[theme.colors.gradientStart, theme.colors.gradientEnd]}
        />
      </div>
    </GlassCard>
  );
}