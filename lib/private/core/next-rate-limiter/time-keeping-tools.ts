/**
 * the ECMAScript epoch and timestamps
 *
 * A JavaScript date is fundamentally specified as the number of milliseconds
 * that have elapsed since midnight on January 1, 1970, UTC. This date and time
 * are not the same as the UNIX epoch (the number of seconds that have elapsed
 * since midnight on January 1, 1970, UTC), which is the predominant base value
 * for computer-recorded date and time values.
 *
 * Note: It's important to keep in mind that while the time value at the heart of
 * a Date object is UTC, the basic methods to fetch the date and time or its
 * components all work in the local (i.e. host system) time zone and offset.
 *
 * It should be noted that the maximum Date is not of the same value as the
 * maximum safe integer (Number.MAX_SAFE_INTEGER is 9,007,199,254,740,991).
 * Instead, it is defined in ECMA-262 that a maximum of ±100,000,000 (one hundred
 * million) days relative to January 1, 1970 UTC (that is, April 20, 271821 BCE ~
 * September 13, 275760 CE) can be represented by the standard Date object
 * (equivalent to ±8,640,000,000,000,000 milliseconds).
 *
 *
 * Date.now()
 *
 * Returns the numeric value corresponding to the current time—the number of
 * milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds
 * ignored.
 *
 */

const { ceil, floor, max, min } = Math;

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * returns the number of milliseconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns  milliseconds
 */
type EpochMs = () => number;
/**
 * returns the number of milliseconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns  milliseconds
 */
const epochMs: EpochMs = epochMsFunct;

/**
 * returns the number of milliseconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns  milliseconds
 */
function epochMsFunct(): number {
  return Date.now();
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * returns the number of seconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns  seconds
 */
type EpochSec = () => number;

const epochSec: EpochSec = epochSecFunct;

/**
 * returns the number of seconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns  seconds
 */
function epochSecFunct(): number {
  return Date.now() / 1000;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->

/**
 * extract the minutes part of and amout of miliseconds.
 * @param  miliseconds - The number of miliseconds from which to
 * extract the minute(s) rounded floor part.
 * @returns  Formated string `X`min
 */
type MinuteStr = (miliseconds: number) => string;

/**
 * extract the minutes part of and amout of miliseconds.
 * @param  miliseconds - The number of miliseconds from which to
 * extract the minute(s) rounded floor part.
 * @returns  Formated string `X`min
 */
const minuteStr: MinuteStr = minuteStrFunct;

function minuteStrFunct(miliseconds: number): string {
  return `${floor(miliseconds / 1000 / 60)}min`;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->

/**
 * extract the rest part in seconds from miliseconds deducted from the minutes.
 * @param  miliseconds - The number of miliseconds from which to
 * extract the second(s) rounded floor part.
 * @returns  Formated string `X`sec
 */
type SecondeStr = (miliseconds: number) => string;

/**
 * extract the rest part in seconds from miliseconds deducted from the minutes.
 * @param  miliseconds - The number of miliseconds from which to
 * extract the second(s) rounded floor part.
 * @returns  Formated string `X`sec
 */
const secondeStr: SecondeStr = secondeStrFunct;

function secondeStrFunct(miliseconds: number): string {
  return `${floor(miliseconds / 1000) % 60}sec`;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * extract the rest part in miliseconds after deducting from the seconds.
 * @param  miliseconds - The number of miliseconds from which to
 * extract rest rounded floor part.
 * @returns  Formated string `X`ms
 */
type MiliSecStr = (miliseconds: number) => string;
/**
 * extract the rest part in miliseconds after deducting from the seconds.
 * @param  miliseconds - The number of miliseconds from which to
 * extract rest rounded floor part.
 * @returns  Formated string `X`ms
 */
const miliSecStr: MiliSecStr = miliSecStrFunct;

function miliSecStrFunct(miliseconds: number): string {
  return `${floor(miliseconds % 1000)}ms`;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * convert seconds to miliseconds (seconds × 1000)
 * @param  seconds - number of seconds to convert in miliseconds
 * @returns  miliseconds
 */
type Milisec = (seconds: number) => number;
/**
 * convert seconds to miliseconds (seconds × 1000)
 * @param  seconds - number of seconds to convert in miliseconds
 * @returns  miliseconds
 */
const milisec: Milisec = milisecFunct;

function milisecFunct(seconds: number): number {
  return seconds * 1000;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * convert miliseconds to seconds celi(miliseconds ÷ 1000)
 * @param  miliseconds - number of miliseconds to convert in seconds
 * @returns  seconds
 */
type Sec = (miliseconds: number) => number;
/**
 * convert miliseconds to seconds celi(miliseconds ÷ 1000)
 * @param  miliseconds - number of miliseconds to convert in seconds
 * @returns  seconds
 */
const sec: Sec = secFunct;

function secFunct(miliseconds: number): number {
  return ceil(miliseconds / 1000);
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * calculate the amout of miliseconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  miliseconds remaining from now until laterMs
 */
type TimeRemaning = (laterMs: number) => number;
/**
 * calculate the amout of miliseconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  miliseconds remaining from now until laterMs
 */
const timeRemaning: TimeRemaning = timeRemaningFunct;

function timeRemaningFunct(laterMs: number): number {
  const nowMs = epochMs();

  if (nowMs > laterMs) {
    return -1;
  }

  return laterMs - nowMs || -1;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * calculate the amout of minutes remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  miliseconds from now until laterMs
 */
type MinutesRemaning = (laterMs: number) => number;
/**
 * calculate the amout of minutes remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  miliseconds from now until laterMs
 */
const minutesRemaning: MinutesRemaning = minutesRemaningFunct;

function minutesRemaningFunct(laterMs: number): number {
  const value = ceil(timeRemaning(laterMs) / (60 * 1000));

  if (value > 0) {
    return value;
  }

  return -1;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * calculate the amout of seconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  seconds from now until laterMs.
 * Result should be consider as "less than" X seconde(s).
 */
type SecondsRemaning = (laterMs: number) => number;
/**
 * calculate the amout of seconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  seconds from now until laterMs.
 * Result should be consider as "less than" X seconde(s).
 */
const secondsRemaning: SecondsRemaning = secondsRemaningFunct;

function secondsRemaningFunct(laterMs: number): number {
  const value = ceil(timeRemaning(laterMs) / 1000);

  if (value > 0) {
    return value;
  }

  return -1;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * calculate from msRemaning, the maximum amout of request per seconde
 * (the frequecy)
 * @param  reqstRemaining - ['x-ratelimit-remaining']
 * @param  msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
 * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns  number of request per seconde in hertz
 */
type PossibleReqstPerSecond = (
  reqstRemaining: number,
  msRemaning: number,
  maximumperseconds?: number,
) => number;
/**
 * calculate from msRemaning, the maximum amout of request per seconde
 * (the frequecy)
 * @param  reqstRemaining - ['x-ratelimit-remaining']
 * @param  msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
 * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns  number of request per seconde in hertz
 */
const possibleReqstPerSecond: PossibleReqstPerSecond = possibleReqstPerSecondFunct;

/**
 * calculate from msRemaning, the maximum amout of request per seconde
 * (the frequecy)
 * @param  reqstRemaining - ['x-ratelimit-remaining']
 * @param  msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
 * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns  number of request per seconde in hertz
 */
function possibleReqstPerSecondFunct(
  reqstRemaining: number,
  msRemaning: number,
  maximumperseconds = 20,
): number {
  return (
    floor(max(min(reqstRemaining / sec(msRemaning), maximumperseconds), -1)) ||
    -1
  );
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * calculate from rateLimitReset, the maximum amout of request per seconde
 * (the frequecy)
 * @param   reqstRemaining - ['x-ratelimit-remaining']
 * @param   msRemaning -
 * @param   maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns   number of request per seconde in hertz
 */
type LimitRequestsPerSecond = (
  reqstRemaining: number,
  msRemaning: number,
  maximumperseconds?: number,
) => number;
/**
 * calculate from rateLimitReset, the maximum amout of request per seconde
 * (the frequecy)
 * @param  reqstRemaining - ['x-ratelimit-remaining']
 * @param  rateLimitReset -  ['x-ratelimit-reset']
 * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns  number of request per seconde in hertz
 */
const limitRequestsPerSecond: LimitRequestsPerSecond = limitRequestsPerSecondFunct;

function limitRequestsPerSecondFunct(
  reqstRemaining: number,
  rateLimitReset: number,
  maximumperseconds = 20,
): number {
  const msRemaning = timeRemaning(rateLimitReset * 1000);

  return (
    floor(max(min(reqstRemaining / sec(msRemaning), maximumperseconds), -1)) ||
    -1
  );
}

interface TimeKeepingTools {
  /**
   * returns the number of milliseconds elapsed since
   * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
   * @returns  milliseconds
   */
  epochMs: EpochMs;
  /**
   * returns the number of seconds elapsed since
   * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
   * @returns  seconds
   */
  epochSec: EpochSec;
  /**
   * calculate from rateLimitReset, the maximum amout of request per seconde
   * (the frequecy)
   * @param  reqstRemaining - ['x-ratelimit-remaining']
   * @param  rateLimitReset -  ['x-ratelimit-reset']
   * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
   * @returns  number of request per seconde in hertz
   */
  limitRequestsPerSecond: LimitRequestsPerSecond;
  /**
   * convert seconds to miliseconds (seconds × 1000)
   * @param  seconds - number of seconds to convert in miliseconds
   * @returns  miliseconds
   */
  milisec: Milisec;
  miliSecStr: MiliSecStr;
  minutesRemaning: MinutesRemaning;
  minuteStr: MinuteStr;
  /**
   * calculate from msRemaning, the maximum amout of request per seconde
   * (the frequecy)
   * @param  reqstRemaining - ['x-ratelimit-remaining']
   * @param  msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
   * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
   * @returns  number of request per seconde in hertz
   */
  possibleReqstPerSecond: PossibleReqstPerSecond;
  /**
   * convert miliseconds to seconds celi(miliseconds ÷ 1000)
   * @param  miliseconds - number of miliseconds to convert in seconds
   * @returns  seconds
   */
  sec: Sec;
  secondeStr: SecondeStr;
  secondsRemaning: SecondsRemaning;
  timeRemaning: TimeRemaning;
}
// https://github.com/Luxcium/questrade-ts/blob/next/from-v1.2.0-next-20201226/lib/private/core/next-rate-limiter/time-keeping-tools.ts#L327
const timeKeepingTools: TimeKeepingTools = {
  epochMs,
  epochSec,
  limitRequestsPerSecond,
  miliSecStr,
  milisec,
  minuteStr,
  minutesRemaning,
  possibleReqstPerSecond,
  sec,
  secondeStr,
  secondsRemaning,
  timeRemaning,
};

export {
  epochMs,
  epochSec,
  limitRequestsPerSecond,
  milisec,
  miliSecStr,
  minutesRemaning,
  minuteStr,
  possibleReqstPerSecond,
  sec,
  secondeStr,
  secondsRemaning,
  timeKeepingTools,
  timeRemaning,
};
export type {
  EpochMs,
  EpochSec,
  LimitRequestsPerSecond,
  Milisec,
  MiliSecStr,
  MinutesRemaning,
  MinuteStr,
  PossibleReqstPerSecond,
  Sec,
  SecondeStr,
  SecondsRemaning,
  TimeRemaning,
};
