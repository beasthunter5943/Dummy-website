export interface CalculatorInputs {
  manualHours: number;
  employeeCount: number;
  hourlyRate: number;
  processComplexity: number;
}

export interface CalculationResults {
  annualSavings: number;
  hoursSaved: number;
  projection: Array<{
    year: number;
    savings: number;
  }>;
  resourceImpact: Array<{
    category: string;
    percentage: number;
  }>;
}