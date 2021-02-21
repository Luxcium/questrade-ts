/* eslint-disable radar/cognitive-complexity */
/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
// /*eslint complexity: ["error", 5]*/
import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import { id1 } from '../../../resources/side-effects/default-behaviour';
import type {
  ClientRequestConfig,
  ClientResponse,
} from '../../../resources/side-effects/types';
import { now, void0 } from '../../../utils';
import { QNode } from './q-node';

interface IQNode<T extends QNodesValue> {
  value: T;
  next: IQNode<T> | null;
}

// type ApiCallQ_Value = any;
type QNodes<T extends QNodesValue = QNodesValue> = IQNode<T> | null;
interface QNodesValue {
  config: ClientRequestConfig;
  fn: <R>(config: ClientRequestConfig) => Promise<ClientResponse<R>>;
  cb?: any;
}
// const instanceApiCallQ_: { instance: ApiCallQ_<any> | null } = {
//   instance: null,
// };

// void instanceApiCallQ_;

/** fCFS Queue (first-come, first-served) */

export class ApiCallQ_<T extends QNodesValue = QNodesValue> {
  protected broke: boolean;
  protected current: QNodes<T>;
  protected first: QNodes<T>;
  protected isCalled: boolean;
  protected last: QNodes<T>;
  protected xRemaining: number;
  protected xResetTime: number;
  protected size: number;

  protected set remaining(xRemaining: any) {
    const xRemain = Number(xRemaining);
    // set to 1 if zero or not a number or NaN
    this.xRemaining = typeof xRemain === 'number' ? xRemain || 1 : 1;
  }

  protected get remaining() {
    return this.xRemaining;
  }

  protected set resetTime(xResetTime: any) {
    const xReset = Number(xResetTime);
    // set to 1 if zero or not a number or NaN
    this.xResetTime = typeof xReset === 'number' ? xReset || 1 : 1;
  }

  protected get resetTime() {
    return this.xResetTime;
  }

  protected get isBroken() {
    return this.broke;
  }

  protected get isNotBroken() {
    return !this.broke;
  }

  protected get isNotCalled(): boolean {
    return !this.isCalled;
  }

  protected get isEmpty(): boolean {
    return this.size <= 0;
  }

  protected get isNotEmpty(): boolean {
    return this.size > 0;
  }

  // : this is {current: NonNullable<ApiCallQ_<T>['current']>;
  protected get isCallable() {
    return this.isNotEmpty && this.isNotCalled && this.isNotBroken;
  }

  public static get new() {
    return new ApiCallQ_();
  }

  protected get positiveTimeOffset() {
    return this.timeOfSet >= 0 ? this.timeOfSet : 0;
  }

  // -| constructor |-···―――――――――――――――――――――――――――···-| ApiCallQ_() |-//-://#-| ~
  public constructor(
    protected maxPerSecondes: number = MAX_PER_SECONDES,
    protected maxPerHour: number = MAX_PER_HOUR,
    protected timeOfSet: number = 1000 / MAX_PER_SECONDES && 0,
  ) {
    this.isCalled = false;
    this.first = null;
    this.last = null;
    this.size = 0;
    this.current = null;
    this.xRemaining = -2;
    this.xResetTime = -2;
    this.broke = false;
  }

  // -| protected |-get――――――――――――――――――――――――――――――···-| requestLimit |-//::――― ~
  // info: requestLimit //-!
  protected get requestLimit() {
    const { floor, min, ceil } = Math;
    const reqstRemaining = id1('\nreqstRemaining:', this.xRemaining - 1);
    const resetTime = id1('resetTime :', this.xResetTime);
    if (reqstRemaining < 1 || resetTime < 1) {
      return id1('returnTime :', 666);
    }

    // if (resetTime <= 0) {
    //   return id1('returnTime :', 666);
    // }

    const timeNow = id1('timeNow   :', floor(now() / 1000));
    const timeRemaining = resetTime - timeNow;
    id1('timeRemaining:', timeRemaining);

    const reqPerSecRaw = id1('\nreqPerSecRaw:', reqstRemaining / timeRemaining);
    const reqPerSec = id1('reqPerSec:', min(floor(reqPerSecRaw), 20));
    const delay = id1('calculated Delay:', ceil(1000 / reqPerSec));
    const offset = this.positiveTimeOffset;

    return id1(`delay plus ${offset}ms offset :`, ceil(delay + offset));
  }

  // -| protected |-···――――――――――――――――――――――――――···-| callToPopQueue() |-//::――― ~
  // info: callToPopQueue //-!
  protected callToPopQueue() {
    const timeThen = now();

    if (this.isCallable) {
      this.isCalled = true;

      setTimeout(async () => {
        this.deQueue();
        const cb = this.current?.value.cb ?? void0;
        try {
          const { fn } = this.current!.value;
          const { config } = this.current!.value;
          const before = now();
          const response = await fn(config);
          this.remaining = response.headers['x-ratelimit-remaining'];
          this.resetTime = response.headers['x-ratelimit-reset'];

          cb(null, response);
          console.info(
            '\nrequest response cycle in',
            now() - before,
            'ms' /* '\n' */,
          );
        } catch (error) {
          if (
            (error.message as string).includes('401') ||
            (error.message as string).includes('429') ||
            (error.message as string).includes('500')
          ) {
            this.broke = true;
          }

          console.error('catch an error in Queue Ratelimiter:', error.message);
          cb(error, null);
        }

        console.info('Complete previous cycle in', now() - timeThen, 'ms');

        this.isCalled = false;
        this.callToPopQueue();
      }, this.requestLimit);
    }
  }

  // -| public |-···―――――――――――――――――――――――――――――――――···-| addToQueue() |-//::――― ~
  public async addToQueue<R = any>(value: T) /* : ClientPromise<R> */ {
    const callBack = (cb: any) => {
      this.enQueue({ ...value, cb });
      if (this.isNotCalled) {
        this.callToPopQueue();
      }
    };

    return new Promise<ClientResponse<R>>((resolve, reject) => {
      callBack((error: Error, result: any) => {
        if (!error) {
          resolve(result);

          return true;
        }

        reject(error);

        return false;
      });
    });
  }

  // -| protected |-···――――――――――――――――――――――――――――――――――···-| enQueue() |-//::―― ~
  protected enQueue(val: T) {
    const newNode = new QNode(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    return (this.size += 1);
    // by Colt Steele ― Developer and Bootcamp Instructor
    // from Udemy ― Js Algorithms And Data Structures Masterclass
  }

  // -| protected |-···――――――――――――――――――――――――――――――――――···-| deQueue() |-//::―― ~
  protected deQueue() {
    if (!this.first) {
      return null;
    }

    this.current = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size -= 1;

    return this;
    // by Colt Steele ― Developer and Bootcamp Instructor
    // from Udemy ― Js Algorithms And Data Structures Masterclass
  }
}
export const myQueueu = new ApiCallQ_();
