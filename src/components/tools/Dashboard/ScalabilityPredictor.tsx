import { useRef, useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { AreaChart } from '@/components/ui/charts/AreaChart';
import { theme } from '@/lib/theme';
import { gsap } from 'gsap';

const scalabilityData = Array.from({ length: 12 }, (_, i) => ({
  month: i + 1,
  capacity: Math.floor(100 + (i * 15) + Math.random() * 20),
  usage: Math.floor(80 + (i * 12) + Math.random() * 15)
}));

export function ScalabilityPredictor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current.children, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, []);

  return (
    <GlassCard className="p-6" ref={containerRef}>
      <h3 className={`text-2xl font-bold text-${theme.colors.ghostWhite} mb-6`}>
        System Scalability Forecast
      </h3>
      
      <div className="h-[300px]">
        <AreaChart
          data={scalabilityData}
          keys={['capacity', 'usage']}
          colors={[theme.colors.neonPurple, theme.colors.cyberBlue]}
        />
      </div>
    </GlassCard>
  );
}