import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '@/lib/theme';

interface AreaChartProps {
  data: Array<{ [key: string]: number }>;
  keys: [string, string];
  colors: [string, string];
}

export function AreaChart({ data, keys, colors }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart data={data}>
        <XAxis
          dataKey="month"
          tick={{ fill: theme.colors.ghostWhite }}
        />
        <YAxis
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
        {keys.map((key, index) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stackId="1"
            stroke={colors[index]}
            fill={colors[index]}
            fillOpacity={0.3}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}