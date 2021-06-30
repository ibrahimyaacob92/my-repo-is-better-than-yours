export function monthDiff(d1: Date, d2: Date): number {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

export function yearMonthDiff(
  d1: Date,
  d2 = new Date()
): { month: number; year: number } {
  const months = monthDiff(d1, d2);
  const year = Math.floor(months / 12);
  const month = months % 12;
  return { month, year };
}

export function dateDiff(
  startingDate: string,
  endingDate: string = ""
): {
  dayDiff: number;
  monthDiff: number;
  yearDiff: number;
  totalDays: number;
  isOlder: boolean;
} {
  // console.log(startingDate);
  var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
  let isOlder = true;
  if (!endingDate) {
    endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
  }
  var endDate = new Date(endingDate);
  console.log(startDate > endDate);
  if (startDate > endDate) {
    isOlder = false;
    var swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  var startYear = startDate.getFullYear();
  var february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28;
  var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var yearDiff = endDate.getFullYear() - startYear;
  var monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  var dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }
  const totalDays = dayDiff + monthDiff * 30 + yearDiff * 365;
  return {
    yearDiff,
    monthDiff,
    dayDiff,
    totalDays,
    isOlder,
  };
}

type ParamsA = {
  age: number;
  forks: number;
  stars: number;
  watch: number;
  solvedIssues: number;
  openIssues: number;
  totalDownloads: number;
  size: number;
  [key: string]: number;
};

export const scoring = (paramsMultiply: ParamsA): number => {
  const weightageCoeff: ParamsA = {
    age: 0.3,
    forks: 1.5,
    stars: 1,
    watch: 1.5,
    solvedIssues: 1.5,
    openIssues: -1.5,
    totalDownloads: 0.25,
    size: -0.05,
  };

  const bonus = {};
  let score = 0;
  Object.entries(weightageCoeff).forEach(([key, value]) => {
    // calculate for those parameter's defined
    if (paramsMultiply[key]) score = score + paramsMultiply[key] * value;
  });

  return Math.round(score);
};

export function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
