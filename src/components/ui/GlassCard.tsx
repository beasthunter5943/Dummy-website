import { cn } from '@/lib/utils';
import { theme } from '@/lib/theme';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6',
        theme.effects.glassBlur,
        'border border-opacity-20',
        `border-${theme.colors.neonCoffee}`,
        hover && [
          'transition-all duration-300',
          'hover:scale-105',
          'hover:shadow-lg',
          `hover:shadow-${theme.colors.neonCoffee}/20`,
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}