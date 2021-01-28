/**
 * The ECMAScript epoch and timestamps
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
 * Returns the number of milliseconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns {number} milliseconds
 */
type EpochMs = () => number;
/**
 * Returns the number of milliseconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns {number} milliseconds
 */
const epochMs: EpochMs = epochMsFunct;
/**
 * Returns the number of milliseconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns {number} milliseconds
 */
function epochMsFunct(): number {
  return Date.now();
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Returns the number of seconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns {number} seconds
 */
type EpochSec = () => number;
/**
 * Returns the number of seconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns {number} seconds
 */
const epochSec: EpochSec = epochSecFunct;
/**
 * Returns the number of seconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns {number} seconds
 */
function epochSecFunct(): number {
  return Date.now() / 1000;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->

/**
 * Extract the minutes part of and amout of miliseconds.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract the minute(s) rounded floor part.
 * @returns {string} Formated string `X`min
 */
type MinuteStr = (miliseconds: number) => string;

/**
 * Extract the minutes part of and amout of miliseconds.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract the minute(s) rounded floor part.
 * @return {string} Formated string `X`min
 */
const minuteStr: MinuteStr = minuteStrFunct;

/**
 * Extract the minutes part of and amout of miliseconds.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract the minute(s) rounded floor part.
 * @returns {string} Formated string `X`min
 */
function minuteStrFunct(miliseconds: number): string {
  return `${floor(miliseconds / 1000 / 60)}min`;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->

/**
 * Extract the rest part in seconds from miliseconds deducted from the minutes.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract the second(s) rounded floor part.
 * @returns {string} Formated string `X`sec
 */
type SecondeStr = (miliseconds: number) => string;

/**
 * Extract the rest part in seconds from miliseconds deducted from the minutes.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract the second(s) rounded floor part.
 * @returns {string} Formated string `X`sec
 */
const secondeStr: SecondeStr = secondeStrFunct;

/**
 * Extract the rest part in seconds from miliseconds deducted from the minutes.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract the second(s) rounded floor part.
 * @returns {string} Formated string `X`sec
 */
function secondeStrFunct(miliseconds: number): string {
  return `${floor(miliseconds / 1000) % 60}sec`;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Extract the rest part in miliseconds after deducting from the seconds.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract rest rounded floor part.
 * @returns {string} Formated string `X`ms
 */
type MiliSecStr = (miliseconds: number) => string;
/**
 * Extract the rest part in miliseconds after deducting from the seconds.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract rest rounded floor part.
 * @returns {string} Formated string `X`ms
 */
const miliSecStr: MiliSecStr = miliSecStrFunct;
/**
 * Extract the rest part in miliseconds after deducting from the seconds.
 * @param {number} miliseconds - The number of miliseconds from which to
 * extract rest rounded floor part.
 * @returns {string} Formated string `X`ms
 */
function miliSecStrFunct(miliseconds: number): string {
  return `${floor(miliseconds % 1000)}ms`;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Convert seconds to miliseconds (seconds × 1000)
 * @param {number} seconds - number of seconds to convert in miliseconds
 * @returns {number} miliseconds
 */
type Milisec = (seconds: number) => number;
/**
 * Convert seconds to miliseconds (seconds × 1000)
 * @param {number} seconds - number of seconds to convert in miliseconds
 * @returns {number} miliseconds
 */
const milisec: Milisec = milisecFunct;
/**
 * Convert seconds to miliseconds (seconds × 1000)
 * @param {number} seconds - number of seconds to convert in miliseconds
 * @returns {number} miliseconds
 */
function milisecFunct(seconds: number): number {
  return seconds * 1000;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Convert miliseconds to seconds celi(miliseconds ÷ 1000)
 * @param {number} miliseconds - number of miliseconds to convert in seconds
 * @returns {number} seconds
 */
type Sec = (miliseconds: number) => number;
/**
 * Convert miliseconds to seconds celi(miliseconds ÷ 1000)
 * @param {number} miliseconds - number of miliseconds to convert in seconds
 * @returns {number} seconds
 */
const sec: Sec = secFunct;
/**
 * Convert miliseconds to seconds celi(miliseconds ÷ 1000)
 * @param {number} miliseconds - number of miliseconds to convert in seconds
 * @returns {number} seconds
 */
function secFunct(miliseconds: number): number {
  return ceil(miliseconds / 1000);
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Calculate the amout of miliseconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param {number} laterMs - future unix epoch in miliseconds
 * @returns {number} miliseconds remaining from now until laterMs
 */
type TimeRemaning = (laterMs: number) => number;
/**
 * Calculate the amout of miliseconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param {number} laterMs - future unix epoch in miliseconds
 * @returns {number} miliseconds remaining from now until laterMs
 */
const timeRemaning: TimeRemaning = timeRemaningFunct;
/**
 * Calculate the amout of miliseconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param {number} laterMs - future unix epoch in miliseconds
 * @returns {number} miliseconds remaining from now until laterMs
 */
function timeRemaningFunct(laterMs: number): number {
  let nowMs = epochMs();
  if (nowMs > laterMs) return -1;
  return laterMs - nowMs || -1;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Calculate the amout of minutes remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param {number} laterMs - future unix epoch in miliseconds
 * @returns {number} miliseconds from now until laterMs
 */
type MinutesRemaning = (laterMs: number) => number;
/** Result should be consider less than X minute(s) remaining */
const minutesRemaning: MinutesRemaning = minutesRemaningFunct;
/** Result should be consider less than X minute(s) remaining */
function minutesRemaningFunct(laterMs: number): number {
  const value = ceil(timeRemaning(laterMs) / (60 * 1000));
  if (value > 0) return value;
  return -1;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Calculate the amout of seconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param {number} laterMs - future unix epoch in miliseconds
 * @returns {number} seconds from now until laterMs.
 * Result should be consider as "less than" X seconde(s).
 */
type SecondsRemaning = (laterMs: number) => number;
/**
 * Calculate the amout of seconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param {number} laterMs - future unix epoch in miliseconds
 * @returns {number} seconds from now until laterMs.
 * Result should be consider as "less than" X seconde(s).
 */
const secondsRemaning: SecondsRemaning = secondsRemaningFunct;
/**
 * Calculate the amout of seconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param {number} laterMs - future unix epoch in miliseconds
 * @returns {number} seconds from now until laterMs.
 * Result should be consider as "less than" X seconde(s).
 */
function secondsRemaningFunct(laterMs: number): number {
  const value = ceil(timeRemaning(laterMs) / 1000);
  if (value > 0) return value;
  return -1;
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Calculate the maximum amout of request per seconde (the frequecy)
 * @param {number} reqstRemaining - ['x-ratelimit-remaining']
 * @param {number} msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
 * @param {number} maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns {number} number of request per seconde in hertz
 */
type PossibleReqstPerSecond = (
  reqstRemaining: number,
  msRemaning: number,
  maximumperseconds: number,
) => number;
/**
 * Calculate the maximum amout of request per seconde (the frequecy)
 * @param {number} reqstRemaining - ['x-ratelimit-remaining']
 * @param {number} msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
 * @param {number} maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns {number} number of request per seconde in hertz
 */
const possibleReqstPerSecond: PossibleReqstPerSecond = possibleReqstPerSecondFunct;
/**
 * Calculate the maximum amout of request per seconde (the frequecy)
 * @param {number} reqstRemaining - ['x-ratelimit-remaining']
 * @param {number} msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
 * @param {number} maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns {number} number of request per seconde in hertz
 */
function possibleReqstPerSecondFunct(
  reqstRemaining: number,
  msRemaning: number,
  maximumperseconds: number,
): number {
  return floor(
    max(min(reqstRemaining / sec(msRemaning), maximumperseconds), -1),
  );
}

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――->
/**
 * Calculate the maximum amout of request per seconde (the frequecy)
 * @param {number} reqstRemaining - ['x-ratelimit-remaining']
 * @param {number} rateLimitReset -  ['x-ratelimit-reset']
 * @param {number} maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns {number} number of request per seconde in hertz
 */
type LimitRequestsPerSecond = (
  reqstRemaining: number,
  msRemaning: number,
  maximumperseconds: number,
) => number;
/**
 * Calculate the maximum amout of request per seconde (the frequecy)
 * @param {number} reqstRemaining - ['x-ratelimit-remaining']
 * @param {number} rateLimitReset -  ['x-ratelimit-reset']
 * @param {number} maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns {number} number of request per seconde in hertz
 */
const limitRequestsPerSecond: LimitRequestsPerSecond = limitRequestsPerSecondFunct;
/**
 * Calculate the maximum amout of request per seconde (the frequecy)
 * @param {number} reqstRemaining - ['x-ratelimit-remaining']
 * @param {number} rateLimitReset -  ['x-ratelimit-reset']
 * @param {number} maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns {number} number of request per seconde in hertz
 */
function limitRequestsPerSecondFunct(
  reqstRemaining: number,
  rateLimitReset: number,
  maximumperseconds: number,
): number {
  const msRemaning = timeRemaning(rateLimitReset * 1000);
  return floor(
    max(min(reqstRemaining / sec(msRemaning), maximumperseconds), -1),
  );
}

export {
  epochMs,
  epochSec,
  minuteStr,
  secondeStr,
  miliSecStr,
  milisec,
  sec,
  timeRemaning,
  minutesRemaning,
  secondsRemaning,
  possibleReqstPerSecond,
  limitRequestsPerSecond,
};
export type {
  EpochMs,
  EpochSec,
  MinuteStr,
  SecondeStr,
  MiliSecStr,
  Milisec,
  Sec,
  TimeRemaning,
  MinutesRemaning,
  SecondsRemaning,
  PossibleReqstPerSecond,
  LimitRequestsPerSecond,
};
