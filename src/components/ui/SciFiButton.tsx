import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { theme } from '@/lib/theme';
import { magneticButton } from '@/lib/animations';

interface SciFiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glowColor?: string;
  variant?: 'primary' | 'secondary';
}

export function SciFiButton({
  children,
  className,
  glowColor = theme.colors.neonCoffee,
  variant = 'primary',
  ...props
}: SciFiButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = magneticButton(button);
    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn(
        'relative px-8 py-3 rounded-lg transition-all duration-300',
        'before:absolute before:inset-0 before:rounded-lg before:transition-all',
        'hover:scale-105 hover:translate-y-[-2px]',
        variant === 'primary' && [
          `bg-${theme.colors.deepSpace}`,
          `text-${theme.colors.techWhite}`,
          `hover:shadow-[0_0_20px_${glowColor}]`,
        ],
        variant === 'secondary' && [
          theme.effects.glassBlur,
          `border border-${theme.colors.neonCoffee}`,
          `text-${theme.colors.neonCoffee}`,
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}