import { useEffect, useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { theme } from '@/lib/theme';
import { stats } from './constants';
import { animateValue } from './animations';

export function StatsCounter() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, index) => {
            animateValue(0, stat.value, stat.duration, (value) => {
              setCounts((prev) => {
                const next = [...prev];
                next[index] = value;
                return next;
              });
            });
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.stats-counter');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-counter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <GlassCard
          key={stat.label}
          className="text-center p-6 space-y-2"
        >
          <div className={`text-4xl font-bold text-${theme.colors.neonCoffee}`}>
            {new Intl.NumberFormat().format(counts[index])}
            {stat.suffix}
          </div>
          <div className={`text-${theme.colors.techWhite} text-sm`}>
            {stat.label}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}