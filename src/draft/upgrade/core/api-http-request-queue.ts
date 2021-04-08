/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */

import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import { QNode } from '../../../private/core/next-rate-limiter/q-node';
import { QNodes } from '../../../private/core/next-rate-limiter/queue';
import {
  ClientRequestConfig,
  ClientResponse,
} from '../../../resources/side-effects/types';
import { ApiOptions } from '../../../typescript';
import { now } from '../../../utils';

export class ApiCallQ_ {
  protected broke: boolean;
  protected current: QNodes<QNodesValue>;
  protected first: QNodes<QNodesValue>;
  protected isCalled: boolean;
  protected last: QNodes<QNodesValue>;
  protected xRemaining: number;
  protected xResetTime: number;
  protected size: number;

  // constructor |-···――――――――――――――――――――――――――――···-| ApiCallQ_() |-···――――――― ~
  public constructor(
    protected apiOptions?: ApiOptions,
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

  public static new(apiOptions: ApiOptions) {
    return new ApiCallQ_(apiOptions);
  }

  protected get positiveTimeOffset() {
    return this.timeOfSet >= 0 ? this.timeOfSet : 0;
  }

  // -| protected |-get――――――――――――――――――――――――――――――···-| requestLimit |-//::――― ~
  protected get requestLimit() {
    const { floor, min, ceil } = Math;
    const reqstRemaining = this.xRemaining - 1;
    const resetTime = this.xResetTime;

    if (resetTime < 1) {
      return 0;
    }

    if (reqstRemaining < 1) {
      return 999;
    }

    const timeNow = floor(now() / 1000);
    const timeRemaining = resetTime - timeNow;
    const reqPerSecRaw = reqstRemaining / timeRemaining;
    const reqPerSec = min(floor(reqPerSecRaw), 20);
    const delay = ceil(1000 / reqPerSec);
    const offset = this.positiveTimeOffset;

    return ceil(delay + offset);
  }

  // -| public |-···―――――――――――――――――――――――――――――――――···-| addToQueue() |-//::――― ~
  public async addCallToQueue<R = unknown>(
    value: QNodesValue,
  ): Promise<ClientResponse<R>> {
    const callBack: TheCallBack<R> = (cb: CallBack<R>) => {
      this.enQueue({ ...value, cb, functionKind: 'ClientResponse' });
      if (this.isNotCalled) {
        this.callToPopQueue();
      }
    };

    return new Promise<ClientResponse<R>>((resolve, reject) => {
      callBack((error, result) => {
        if (!error) {
          resolve(result!);

          return true;
        }

        reject(error);

        return false;
      });
    });
  }

  // -| protected |-···―――――――――――――――――――――――――···-| callToPopQueue() |-//::――― ~
  protected callToPopQueue() {
    if (this.isCallable) {
      this.isCalled = true;
      setTimeout(async () => {
        this.deQueue();
        const callBack: <R>(
          error: Error | null,
          result?: ClientResponse<R>,
        ) => CallBack<R> = (error, result) =>
          this.current?.value.cb(error, result);

        // const callBack = cb; // typeof cb === 'function' ? cb : cb;
        const { fn: fnct } = this.current!.value;
        const { config } = this.current!.value;

        if (this.current?.value?.functionKind === 'ClientResponse') {
          try {
            const response = await fnct(config);

            this.remaining = response.headers['x-ratelimit-remaining'];
            this.resetTime = response.headers['x-ratelimit-reset'];

            callBack(null, response);
          } catch (error) {
            if ((error.message as string).search(/401|429|500/u) > 0) {
              console.error(
                "'****' BROKE on an error in Queue Ratelimiter:",
                error.message,
                (error.message as string).search(/401|429|500/u),
              );
              this.broke = true;
            }

            callBack(error);
          }
        }

        this.isCalled = false;

        this.callToPopQueue();
      }, this.requestLimit);
    }
  }

  // -| protected |-···――――――――――――――――――――――――――――――――――···-| enQueue() |-//::―― ~
  protected enQueue(val: QNodesValue) {
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

export interface QNodesValue {
  cb: CallBack<any>;
  config: ClientRequestConfig;
  fn: <R = unknown>(config: ClientRequestConfig) => Promise<ClientResponse<R>>;
  functionKind?: 'ClientResponse';
}

export type CallBack<R> = (
  error: Error | null,
  result?: ClientResponse<R>,
) => any;

export type TheCallBack<R> = (cb: CallBack<R>) => any;
