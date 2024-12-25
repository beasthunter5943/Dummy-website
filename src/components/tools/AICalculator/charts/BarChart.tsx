import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '@/lib/theme';

interface BarChartProps {
  data: Array<{
    category: string;
    percentage: number;
  }>;
}

export function BarChart({ data }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data} layout="vertical">
        <XAxis type="number" domain={[0, 100]} />
        <YAxis 
          type="category" 
          dataKey="category" 
          width={150}
          style={{ fill: theme.colors.techWhite }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: theme.colors.deepSpace,
            border: `1px solid ${theme.colors.neonCoffee}`,
            borderRadius: '8px',
            color: theme.colors.techWhite
          }}
        />
        <Bar 
          dataKey="percentage" 
          fill={theme.colors.neonCoffee}
          radius={[0, 4, 4, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}