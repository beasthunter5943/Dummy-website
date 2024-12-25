import type { CalculatorInputs, CalculationResults } from './types';

export function calculateSavings(inputs: CalculatorInputs): CalculationResults {
  const {
    manualHours,
    employeeCount,
    hourlyRate,
    processComplexity
  } = inputs;

  // Calculate base annual savings
  const weeksPerYear = 52;
  const automationEfficiency = 0.7 + (0.05 * processComplexity); // 70-90% efficiency
  const annualHours = manualHours * weeksPerYear;
  const hoursSaved = Math.floor(annualHours * automationEfficiency);
  const annualSavings = hoursSaved * hourlyRate * employeeCount;

  // Generate 5-year projection with compound efficiency gains
  const projection = Array.from({ length: 5 }, (_, i) => {
    const yearMultiplier = 1 + (i * 0.1); // 10% improvement each year
    return {
      year: i + 1,
      savings: Math.floor(annualSavings * yearMultiplier),
    };
  });

  // Calculate resource impact
  const resourceImpact = [
    {
      category: 'Direct Cost Savings',
      percentage: 40,
    },
    {
      category: 'Productivity Gain',
      percentage: 30,
    },
    {
      category: 'Error Reduction',
      percentage: 20,
    },
    {
      category: 'Customer Satisfaction',
      percentage: 10,
    },
  ];

  return {
    annualSavings,
    hoursSaved,
    projection,
    resourceImpact,
  };
}