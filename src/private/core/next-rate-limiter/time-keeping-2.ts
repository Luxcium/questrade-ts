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

function epochMsFunct(): number {
  return Date.now();
}

function epochSecFunct(): number {
  return Date.now() / 1000;
}

function minuteStrFunct(miliseconds: number): string {
  return `${floor(miliseconds / 1000 / 60)}min`;
}

function secondeStrFunct(miliseconds: number): string {
  return `${floor(miliseconds / 1000) % 60}sec`;
}

function miliSecStrFunct(miliseconds: number): string {
  return `${floor(miliseconds % 1000)}ms`;
}

function milisecFunct(seconds: number): number {
  return seconds * 1000;
}

function secFunct(miliseconds: number): number {
  return ceil(miliseconds / 1000);
}

function timeRemaningFunct(laterMs: number): number {
  const nowMs = epochMs();
  if (nowMs > laterMs) return 0;
  return laterMs - nowMs;
}

/** Result should be consider less than X minute(s) remaining */
function minutesRemaningFunct(laterMs: number): number {
  return ceil(timeRemaning(laterMs) / (60 * 1000));
}

/** Result should be consider less than X seconde(s) */
function secondsRemaningFunct(laterMs: number): number {
  return ceil(timeRemaning(laterMs) / 1000);
}

function possiblePerSecondsFunct(
  requestsRemaining: number,
  msRemaning: number,
  maximumperseconds: number,
): number {
  return floor(
    max(min(requestsRemaining / sec(msRemaning), maximumperseconds), -1),
  );
}

const epochMs: EpochMs = epochMsFunct;
const epochSec: EpochSec = epochSecFunct;
const minuteStr: MinuteStr = minuteStrFunct;
const secondeStr: SecondeStr = secondeStrFunct;
const miliSecStr: MiliSecStr = miliSecStrFunct;
const milisec: Milisec = milisecFunct;
const sec: Sec = secFunct;
const timeRemaning: TimeRemaning = timeRemaningFunct;
/** Result should be consider less than X minute(s) remaining */
const minutesRemaning: MinutesRemaning = minutesRemaningFunct;
/** Result should be consider less than X seconde(s) */
const secondsRemaning: SecondsRemaning = secondsRemaningFunct;
const possiblePerSeconds: PossiblePerSeconds = possiblePerSecondsFunct;

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
  possiblePerSeconds,
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
  PossiblePerSeconds,
};

type EpochMs = () => number;
type EpochSec = () => number;
type MinuteStr = (miliseconds: number) => string;
type SecondeStr = (miliseconds: number) => string;
type MiliSecStr = (miliseconds: number) => string;
type Milisec = (seconds: number) => number;
type Sec = (miliseconds: number) => number;
type TimeRemaning = (laterMs: number) => number;
/** Result should be consider less than X minute(s) remaining */
type MinutesRemaning = (laterMs: number) => number;
/** Result should be consider less than X seconde(s) */
type SecondsRemaning = (laterMs: number) => number;
type PossiblePerSeconds = (
  requestsRemaining: number,
  msRemaning: number,
  maximumperseconds: number,
) => number;
