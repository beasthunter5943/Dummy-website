import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { AICalculator } from '@/components/tools/AICalculator';
import { Dashboard } from '@/components/tools/Dashboard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/toaster';
import { theme } from '@/lib/theme';

export default function App() {
  return (
    <ScrollArea className="h-screen">
      <main className={`min-h-screen bg-${theme.colors.darkMatter}`}>
        <Hero />
        <SocialProof />
        <AICalculator />
        <Dashboard />
      </main>
      <Toaster />
    </ScrollArea>
  );
}