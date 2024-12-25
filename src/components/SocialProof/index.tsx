import { ClientLogos } from './ClientLogos';
import { StatsCounter } from './StatsCounter';
import { theme } from '@/lib/theme';

export function SocialProof() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h2 className={`text-3xl font-bold text-${theme.colors.techWhite}`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`text-${theme.colors.neonCoffee} text-lg max-w-2xl mx-auto`}>
            Empowering businesses with next-generation AI solutions
          </p>
        </div>
        
        <ClientLogos />
        
        <div className="my-24">
          <StatsCounter />
        </div>
      </div>
    </section>
  );
}