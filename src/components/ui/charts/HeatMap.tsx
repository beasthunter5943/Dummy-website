import { ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis, ZAxis, Tooltip } from 'recharts';
import { theme } from '@/lib/theme';

interface HeatMapProps {
  data: Array<{
    process: string;
    potential: number;
    complexity: number;
  }>;
  colors: [string, string];
}

export function HeatMap({ data, colors }: HeatMapProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart>
        <XAxis
          dataKey="complexity"
          type="number"
          name="Complexity"
          domain={[0, 5]}
          tick={{ fill: theme.colors.ghostWhite }}
        />
        <YAxis
          dataKey="potential"
          type="number"
          name="Automation Potential"
          domain={[0, 100]}
          tick={{ fill: theme.colors.ghostWhite }}
        />
        <ZAxis
          type="category"
          dataKey="process"
          name="Process"
        />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            backgroundColor: theme.colors.deepSpace,
            border: `1px solid ${theme.colors.neonPurple}`,
            borderRadius: '8px',
            color: theme.colors.ghostWhite
          }}
        />
        <Scatter
          data={data}
          fill={colors[0]}
          fillOpacity={0.6}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}