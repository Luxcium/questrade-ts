/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import { echo, echo1 } from '../../../resources/side-effects/default-behaviour';
import {
  ClientPromise,
  ClientRequestConfig,
  ClientResponse,
} from '../../../resources/side-effects/types';
import { void0 } from '../../../utils';
import { QNode } from './q-node';

interface IQNode<T extends QNodesValue> {
  value: T;
  next: IQNode<T> | null;
}

// type ApiCallQ_Value = any;
type QNodes<T extends QNodesValue = QNodesValue> = IQNode<T> | null;
type QNodesValue = {
  config: ClientRequestConfig;
  fn: <R>(config: ClientRequestConfig) => Promise<ClientResponse<R>>;
  cb?: any;
};
// const instanceApiCallQ_: { instance: ApiCallQ_<any> | null } = {
//   instance: null,
// };

// void instanceApiCallQ_;

/** FCFS Queue (first-come, first-served) */

export class ApiCallQ_<T extends QNodesValue = QNodesValue> {
  protected first: QNodes<T>;
  protected last: QNodes<T>;
  protected current: QNodes<T>;
  protected broke: boolean;
  protected size: number;
  protected remaining: number;
  protected resetTime: number;
  protected isCalled: boolean;

  protected get isBroken() {
    return this.broke;
  }
  protected get isNotBroken() {
    return !this.broke;
  }

  //-| protected |-get――――――――――――――――――――――――――――――···-| requestLimit |-//::――― ~
  protected get requestLimit() {
    const { floor, min, ceil } = Math;
    const reqstRemaining = echo1('reqstRemaining:', this.remaining);
    const resetTime = echo1('resetTime :', this.resetTime);
    if (resetTime <= 0) {
      return echo1('returnTime :', 500);
    }

    const timeNow = echo1('timeNow   :', floor(Date.now() / 1000));
    const timeRemaining = resetTime - timeNow;
    // clamp up at maximum 20 rps returns the minimum betwen 20 and reqPerSec
    const reqPerSecRaw = echo1(
      'reqPerSecRaw    :',
      reqstRemaining / timeRemaining,
    );

    const reqPerSecfloor = echo1('reqPerSecfloor  :', floor(reqPerSecRaw));
    const reqPerSecClamp = echo1('reqPerSecClamp  :', min(reqPerSecfloor, 20));
    const reqPerSec = echo1('reqPerSecfloor  :', reqPerSecClamp);
    const delay = echo1('calculated Delay:', ceil(1000 / reqPerSec));
    echo1('timeRemaining:', timeRemaining);

    return echo1('ceil Delay plus 50 ms :', ceil(delay + 25));
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
  static get new() {
    return new ApiCallQ_();
  }
  protected get positiveTimeOfSet() {
    return this.timeOfSet >= 0 ? this.timeOfSet : 0;
  }
  //-| constructor |-···―――――――――――――――――――――――――――···-| ApiCallQ_() |-//-://#-| ~
  public constructor(
    protected maxPerSecondes: number = MAX_PER_SECONDES,
    protected maxPerHour: number = MAX_PER_HOUR,
    protected timeOfSet: number = 1000 / MAX_PER_SECONDES,
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

  //-| public |-···―――――――――――――――――――――――――――――――――···-| addToQueue() |-//::――― ~
  public addToQueue<R = any>(value: T): ClientPromise<R> {
    //

    echo(
      `addToQueue(${Date.now()}) ----------------------------------config = ${
        value.config.url?.split('v1')[1]
      } `,
    );

    // INFO: //-: Passing the callback value through the `cb` parameter
    const callBack = (cb: any) => {
      //
      this.enQueue({ ...value, cb });
      //
      // HINT: //-!-···―――――――――――――――――――――――――···-| callToPopQueue() |-//-/――― ~
      if (this.isNotCalled) {
        this.callToPopQueue();
      }

      return void 100;
    };

    // INFO: //-! Will use a promisified call back to return value as a promise
    return new Promise<ClientResponse<R>>((resolve, reject) => {
      callBack((error: Error, result: any) => {
        if (!error) {
          resolve(result);

          return void 200;
        } else {
          reject(error);

          return void 400;
        }
      });
    });
  }
  //-| protected |-···――――――――――――――――――――――――――···-| callToPopQueue() |-//::――― ~

  protected callToPopQueue() {
    // -------------------------------------------------------------------------
    echo(
      `this.isCallable = ${
        this.isCallable
      }----------------------------------callToPopQueue(${Date.now()})`,
    );
    const timeThen = Date.now();

    if (this.isCallable) {
      this.isCalled = true;

      // HINT: //-:|-···―――――――――――――――――――――――――――――···-| setTimeout() |-···――― ~
      setTimeout(async () => {
        this.deQueue();
        const cb = this.current?.value?.cb ?? void0;

        try {
          const fn = this.current!.value.fn;
          const config = this.current!.value.config;
          const timeBefore1 = Date.now();
          const response = await fn(config);
          if (response.status !== 200) {
            throw new Error((response as any) as string);
          }

          const timeAfter1 = Date.now() - timeBefore1;
          console.log('request response cycle in', timeAfter1, 'ms' /* '\n' */);
          const xRemaining = echo1(
            'xRemaining:',
            Number(response.headers['x-ratelimit-remaining']),
          );

          const xReset = echo1(
            'xReset:',
            Number(response.headers['x-ratelimit-reset']),
          );

          // set to 1 if zero or not a number or NaN
          this.remaining = typeof xRemaining === 'number' ? xRemaining || 1 : 1;
          this.resetTime = typeof xReset === 'number' ? xReset || 1 : 1;

          // HINT: //-:|-···―――――――――――――――――――――――――――···-| callback() |-···――― ~
          cb(null, response);
        } catch (error) {
          this.broke = true;
          console.log('catch an error in Queue Ratelimiter:', error.message);
          cb(error, null);
        }

        this.isCalled = false;
        const timeNow = Date.now() - timeThen;

        console.log('Complete previous cycle in', timeNow, 'ms' /* '\n' */);
        this.callToPopQueue();
        echo(`setTimeout(${Date.now()})----------------------------------`);
        // console.clear();
        // INFO: requestLimit //-?
      }, this.requestLimit);

      return echo1('return from callToPopQueue:', true);
    }

    return echo1('return from callToPopQueue:', false);
  }

  //-| protected |-···――――――――――――――――――――――――――――――――――···-| enQueue() |-//::―― ~
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
  }

  //-| protected |-···――――――――――――――――――――――――――――――――――···-| deQueue() |-//::―― ~
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
  }
}
export const myQueueu = new ApiCallQ_();
