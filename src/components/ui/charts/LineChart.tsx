import { useEffect, useRef } from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '@/lib/theme';

interface LineChartProps {
  data: Array<{ [key: string]: number }>;
  xKey: string;
  yKey: string;
  gradient: [string, string];
}

export function LineChart({ data, xKey, yKey, gradient }: LineChartProps) {
  const chartRef = useRef<SVGElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Add particle effects
    const svg = chartRef.current;
    const particles = Array.from({ length: 5 }, () => {
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", "2");
      circle.setAttribute("fill", theme.colors.cyberBlue);
      return circle;
    });

    particles.forEach(particle => {
      svg.appendChild(particle);
      gsap.to(particle, {
        duration: "random(2, 4)",
        attr: { cx: "random(0, 100%)", cy: "random(0, 100%)" },
        repeat: -1,
        ease: "none"
      });
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data} ref={chartRef}>
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={gradient[0]} />
            <stop offset="100%" stopColor={gradient[1]} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey={xKey}
          stroke={theme.colors.ghostWhite}
          tick={{ fill: theme.colors.ghostWhite }}
        />
        <YAxis
          stroke={theme.colors.ghostWhite}
          tick={{ fill: theme.colors.ghostWhite }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.colors.deepSpace,
            border: `1px solid ${theme.colors.neonPurple}`,
            borderRadius: '8px',
            color: theme.colors.ghostWhite
          }}
        />
        <Line
          type="monotone"
          dataKey={yKey}
          stroke="url(#lineGradient)"
          strokeWidth={2}
          dot={{
            fill: theme.colors.deepSpace,
            stroke: theme.colors.cyberBlue,
            strokeWidth: 2,
            r: 4
          }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}