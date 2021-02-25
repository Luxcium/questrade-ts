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
/**
 * returns the number of milliseconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns  milliseconds
 */
declare type EpochMs = () => number;
/**
 * returns the number of milliseconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns  milliseconds
 */
declare const epochMs: EpochMs;
/**
 * returns the number of seconds elapsed since
 * January 1, 1970 00:00:00 UTC, with leap seconds ignored.
 * @returns  seconds
 */
declare type EpochSec = () => number;
declare const epochSec: EpochSec;
/**
 * extract the minutes part of and amout of miliseconds.
 * @param  miliseconds - The number of miliseconds from which to
 * extract the minute(s) rounded floor part.
 * @returns  Formated string `X`min
 */
declare type MinuteStr = (miliseconds: number) => string;
/**
 * extract the minutes part of and amout of miliseconds.
 * @param  miliseconds - The number of miliseconds from which to
 * extract the minute(s) rounded floor part.
 * @returns  Formated string `X`min
 */
declare const minuteStr: MinuteStr;
/**
 * extract the rest part in seconds from miliseconds deducted from the minutes.
 * @param  miliseconds - The number of miliseconds from which to
 * extract the second(s) rounded floor part.
 * @returns  Formated string `X`sec
 */
declare type SecondeStr = (miliseconds: number) => string;
/**
 * extract the rest part in seconds from miliseconds deducted from the minutes.
 * @param  miliseconds - The number of miliseconds from which to
 * extract the second(s) rounded floor part.
 * @returns  Formated string `X`sec
 */
declare const secondeStr: SecondeStr;
/**
 * extract the rest part in miliseconds after deducting from the seconds.
 * @param  miliseconds - The number of miliseconds from which to
 * extract rest rounded floor part.
 * @returns  Formated string `X`ms
 */
declare type MiliSecStr = (miliseconds: number) => string;
/**
 * extract the rest part in miliseconds after deducting from the seconds.
 * @param  miliseconds - The number of miliseconds from which to
 * extract rest rounded floor part.
 * @returns  Formated string `X`ms
 */
declare const miliSecStr: MiliSecStr;
/**
 * convert seconds to miliseconds (seconds × 1000)
 * @param  seconds - number of seconds to convert in miliseconds
 * @returns  miliseconds
 */
declare type Milisec = (seconds: number) => number;
/**
 * convert seconds to miliseconds (seconds × 1000)
 * @param  seconds - number of seconds to convert in miliseconds
 * @returns  miliseconds
 */
declare const milisec: Milisec;
/**
 * convert miliseconds to seconds celi(miliseconds ÷ 1000)
 * @param  miliseconds - number of miliseconds to convert in seconds
 * @returns  seconds
 */
declare type Sec = (miliseconds: number) => number;
/**
 * convert miliseconds to seconds celi(miliseconds ÷ 1000)
 * @param  miliseconds - number of miliseconds to convert in seconds
 * @returns  seconds
 */
declare const sec: Sec;
/**
 * calculate the amout of miliseconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  miliseconds remaining from now until laterMs
 */
declare type TimeRemaning = (laterMs: number) => number;
/**
 * calculate the amout of miliseconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  miliseconds remaining from now until laterMs
 */
declare const timeRemaning: TimeRemaning;
/**
 * calculate the amout of minutes remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  miliseconds from now until laterMs
 */
declare type MinutesRemaning = (laterMs: number) => number;
/**
 * calculate the amout of minutes remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  miliseconds from now until laterMs
 */
declare const minutesRemaning: MinutesRemaning;
/**
 * calculate the amout of seconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  seconds from now until laterMs.
 * Result should be consider as "less than" X seconde(s).
 */
declare type SecondsRemaning = (laterMs: number) => number;
/**
 * calculate the amout of seconds remaining from now until a future milisecond
 * epoch return -1 if epoch is in the past or if result is 0
 * @param  laterMs - future unix epoch in miliseconds
 * @returns  seconds from now until laterMs.
 * Result should be consider as "less than" X seconde(s).
 */
declare const secondsRemaning: SecondsRemaning;
/**
 * calculate from msRemaning, the maximum amout of request per seconde
 * (the frequecy)
 * @param  reqstRemaining - ['x-ratelimit-remaining']
 * @param  msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
 * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns  number of request per seconde in hertz
 */
declare type PossibleReqstPerSecond = (reqstRemaining: number, msRemaning: number, maximumperseconds?: number) => number;
/**
 * calculate from msRemaning, the maximum amout of request per seconde
 * (the frequecy)
 * @param  reqstRemaining - ['x-ratelimit-remaining']
 * @param  msRemaning - timeRemaning(['x-ratelimit-reset'] × 1000)
 * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns  number of request per seconde in hertz
 */
declare const possibleReqstPerSecond: PossibleReqstPerSecond;
/**
 * calculate from rateLimitReset, the maximum amout of request per seconde
 * (the frequecy)
 * @param   reqstRemaining - ['x-ratelimit-remaining']
 * @param   msRemaning -
 * @param   maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns   number of request per seconde in hertz
 */
declare type LimitRequestsPerSecond = (reqstRemaining: number, msRemaning: number, maximumperseconds?: number) => number;
/**
 * calculate from rateLimitReset, the maximum amout of request per seconde
 * (the frequecy)
 * @param  reqstRemaining - ['x-ratelimit-remaining']
 * @param  rateLimitReset -  ['x-ratelimit-reset']
 * @param  maximumperseconds - upper maximal limit of request permited by the rate limiter each seconds
 * @returns  number of request per seconde in hertz
 */
declare const limitRequestsPerSecond: LimitRequestsPerSecond;
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
declare const timeKeepingTools: TimeKeepingTools;
export { epochMs, epochSec, limitRequestsPerSecond, milisec, miliSecStr, minutesRemaning, minuteStr, possibleReqstPerSecond, sec, secondeStr, secondsRemaning, timeKeepingTools, timeRemaning, };
export type { EpochMs, EpochSec, LimitRequestsPerSecond, Milisec, MiliSecStr, MinutesRemaning, MinuteStr, PossibleReqstPerSecond, Sec, SecondeStr, SecondsRemaning, TimeRemaning, };
//# sourceMappingURL=time-keeping-tools.d.ts.map