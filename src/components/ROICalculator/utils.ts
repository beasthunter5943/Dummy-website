export function calculateAnnualSavings(
  employees: number,
  hoursPerWeek: number,
  hourlyRate: number,
  savingsPercentage: number = 0.3
): number {
  const weeksPerYear = 52;
  return employees * hoursPerWeek * hourlyRate * weeksPerYear * savingsPercentage;
}