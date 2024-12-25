import { useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { theme } from '@/lib/theme';
import { gsap } from 'gsap';
import { clients } from './constants';

export function ClientLogos() {
  useEffect(() => {
    gsap.from('.client-logo', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.client-logos',
        start: 'top center+=100',
      },
    });
  }, []);

  return (
    <div className="client-logos grid grid-cols-2 md:grid-cols-4 gap-6">
      {clients.map((client) => (
        <GlassCard
          key={client.name}
          className="client-logo group flex items-center justify-center p-8"
          hover={false}
        >
          <div className="relative w-24 h-24 transition-transform duration-300 group-hover:scale-110">
            <div className={`absolute inset-0 ${theme.effects.holographicGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            <div className={`text-${theme.colors.neonCoffee} font-bold text-xl`}>
              {client.name}
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}