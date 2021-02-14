/**
 * As per this function definition 0 hz will be equivalent to 1000 hz
 * Will return a non negative value delay = delay \< 0 ? -(delay) : +(delay);
 * @returns delay in mili seconds = !!hz ? (1000 / hz) : 1000
 */

export const perSeconds = (hertz: number): number => {
  let delay: number = hertz;
  // non zero
  // as per this definition
  // 0 hz is equivalent to 1000 hz

  delay = 1000 / delay;
  delay = !!delay ? delay : 1000;
  // non negative
  delay = delay < 0 ? delay * -1 : delay;

  // When delay is larger than 2147483647 or less than 1,
  // the delay will be set to 1.
  // Non-integer delays are truncated to an integer.
  return delay;
};
