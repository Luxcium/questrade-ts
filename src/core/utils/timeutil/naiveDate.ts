const naiveCalculate = (SECOND: number = 1000) => {
  const DAY = 24 * 60 * 60 * SECOND;
  return {
    SECOND,
    HOUR: 60 * 60 * SECOND,
    MINUTE: 60 * SECOND,
    DAY,
    WEEK5: 5 * DAY,
    WEEK7: 7 * DAY,
    MONTH: 31 * DAY,
    MONTH28: 28 * DAY,
    MONTH29: 29 * DAY,
    MONTH30: 30 * DAY,
    YEAR: 365 * DAY,
    YEAR366: 366 * DAY,
    yWEEKS: 52,
    yMONTHS: 12,
  };
};
export const naive = {
  inSec: naiveCalculate(1),
  inMiliSec: naiveCalculate(1000),
};
// export const naiveSecondes = naive(1);
// export const naiveMiliSecondes = naive(1000);

export const day = (days: number) => days * naive.inMiliSec.DAY;
