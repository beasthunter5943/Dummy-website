import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '@/lib/theme';
import { formatCurrency } from '@/lib/utils';

interface LineChartProps {
  data: Array<{
    year: number;
    savings: number;
  }>;
}

export function LineChart({ data }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data}>
        <XAxis 
          dataKey="year" 
          style={{ fill: theme.colors.techWhite }}
        />
        <YAxis 
          style={{ fill: theme.colors.techWhite }}
          tickFormatter={(value) => formatCurrency(value)}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: theme.colors.deepSpace,
            border: `1px solid ${theme.colors.neonCoffee}`,
            borderRadius: '8px',
            color: theme.colors.techWhite
          }}
          formatter={(value: number) => formatCurrency(value)}
        />
        <Line 
          type="monotone" 
          dataKey="savings" 
          stroke={theme.colors.neonCoffee}
          strokeWidth={2}
          dot={{ 
            fill: theme.colors.deepSpace,
            stroke: theme.colors.neonCoffee,
            strokeWidth: 2
          }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}