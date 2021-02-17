/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import { echo, echo1 } from '../../../resources/side-effects/default-behaviour';
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
  protected remaining: number;
  protected resetTime: number;
  protected size: number;

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
    this.remaining = -2;
    this.resetTime = -2;
    this.broke = false;
  }

  // -| protected |-get――――――――――――――――――――――――――――――···-| requestLimit |-//::――― ~
  // info: requestLimit //-!
  protected get requestLimit() {
    const { floor, min, ceil } = Math;
    const reqstRemaining = echo1('\nreqstRemaining:', this.remaining - 1);
    if (reqstRemaining < 1) {
      return echo1('returnTime :', 999);
    }

    const resetTime = echo1('resetTime :', this.resetTime);
    if (resetTime <= 0) {
      return echo1('returnTime :', 666);
    }

    const timeNow = echo1('timeNow   :', floor(now() / 1000));
    const timeRemaining = resetTime - timeNow;
    echo1('timeRemaining:', timeRemaining);

    const reqPerSecRaw = echo1(
      '\nreqPerSecRaw:',
      reqstRemaining / timeRemaining,
    );

    const reqPerSec = echo1('reqPerSec:', min(floor(reqPerSecRaw), 20));
    const delay = echo1('calculated Delay:', ceil(1000 / reqPerSec));
    const offset = this.positiveTimeOffset;

    return echo1(`delay plus ${offset}ms offset :`, ceil(delay + offset));
  }

  // -| protected |-···――――――――――――――――――――――――――···-| callToPopQueue() |-//::――― ~
  // info: callToPopQueue //-!
  protected callToPopQueue() {
    const timeThen = now();

    if (this.isCallable) {
      this.isCalled = true;

      // hint: //-*|-···―――――――――――――――――――――――――――――···-| setTimeout() |-···――― ~
      setTimeout(async () => {
        this.deQueue();
        const cb = this.current?.value.cb ?? void0;

        try {
          const { fn } = this.current!.value;
          const { config } = this.current!.value;
          const before = now();
          const response = await fn(config);

          if (response.status !== 200) {
            console.error(response);
            throw new Error((response as any) as string);
          }

          console.log(
            '\nrequest response cycle in',
            now() - before,
            'ms' /* '\n' */,
          );
          const xRemaining = Number(response.headers['x-ratelimit-remaining']);
          const xReset = Number(response.headers['x-ratelimit-reset']);

          // set to 1 if zero or not a number or NaN
          this.remaining = typeof xRemaining === 'number' ? xRemaining || 1 : 1;
          this.resetTime = typeof xReset === 'number' ? xReset || 1 : 1;

          // hint: //-*|-···―――――――――――――――――――――――――――···-| callback() |-···――― ~
          cb(null, response);
        } catch (error) {
          this.broke = true;
          console.log('catch an error in Queue Ratelimiter:', error.message);
          cb(error, null);
        }

        console.log('Complete previous cycle in', now() - timeThen, 'ms');

        this.isCalled = false;
        this.callToPopQueue();
        echo(`\nsetTimeout(${now()})---------------------------------->>>>>>>`);
        // console.clear();
      }, this.requestLimit);

      return true;
    }

    return false;
  }

  // -| public |-···―――――――――――――――――――――――――――――――――···-| addToQueue() |-//::――― ~
  // info: addToQueue //-!
  public async addToQueue<R = any>(value: T) /* : ClientPromise<R> */ {
    //

    echo(
      `\n\naddToQueue(${now()}) ----------------------------------config = ${
        value.config.url?.split('v1')[1]
      } `,
    );

    // iNFO: //-: Passing the callback value through the `cb` parameter
    const callBack = (cb: any) => {
      //
      this.enQueue({ ...value, cb });
      //
      // hint: //-*-···―――――――――――――――――――――――――···-| callToPopQueue() |-//-/――― ~
      if (this.isNotCalled) {
        this.callToPopQueue();
      }

      return null;
    };

    // info: //-! Will use a promisified call back to return value as a promise
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
