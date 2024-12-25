import { useEffect, useRef } from 'react';
import { glitchText } from '@/lib/animations';
import { theme } from '@/lib/theme';

interface GlitchHeadingProps {
  text: string;
  className?: string;
}

export function GlitchHeading({ text, className }: GlitchHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    glitchText(heading);
  }, [text]);

  return (
    <h1
      ref={headingRef}
      className={cn(
        'text-5xl md:text-6xl lg:text-7xl font-bold',
        'bg-clip-text text-transparent',
        theme.effects.holographicGradient,
        className
      )}
    >
      {text}
    </h1>
  );
}