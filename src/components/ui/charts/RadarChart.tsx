import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { theme } from '@/lib/theme';

interface RadarChartProps {
  data: {
    current: Array<{ metric: string; value: number }>;
    projected: Array<{ metric: string; value: number }>;
  };
  colors: [string, string];
}

export function RadarChart({ data, colors }: RadarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsRadarChart data={data.current}>
        <PolarGrid stroke={theme.colors.ghostWhite} />
        <PolarAngleAxis
          dataKey="metric"
          tick={{ fill: theme.colors.ghostWhite }}
        />
        <Radar
          name="Current"
          dataKey="value"
          stroke={colors[0]}
          fill={colors[0]}
          fillOpacity={0.3}
        />
        <Radar
          name="Projected"
          dataKey="value"
          stroke={colors[1]}
          fill={colors[1]}
          fillOpacity={0.3}
          data={data.projected}
        />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
}