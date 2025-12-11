export type Experience = {
  years: number;
  months: number;
  totalMonths: number;
};

// Calculates experience from a YYYY or YYYY-MM string until `now`
export function calculateExperience(from: string, now: Date = new Date()): Experience {
  if (!from) return { years: 0, months: 0, totalMonths: 0 };
  const [y, m = '01'] = from.split('-');
  const start = new Date(parseInt(y, 10), parseInt(m, 10) - 1, 1);

  let totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  return { years, months, totalMonths };
}

export function formatExperience(exp: Experience): string {
  const y = exp.years;
  const m = exp.months;
  const yLabel = y === 1 ? 'year' : 'years';
  const mLabel = m === 1 ? 'month' : 'months';
  return `${y} ${yLabel} and ${m} ${mLabel}`;
}
