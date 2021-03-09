/* eslint-disable radar/cognitive-complexity */
/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
// /*eslint complexity: ["error", 5]*/
import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import { echo } from '../../../resources';
import type {
  ClientRequestConfig,
  ClientResponse,
} from '../../../resources/side-effects/types';
import { ApiOptions } from '../../../typescript';
import { now, void0 } from '../../../utils';
import { QNode } from './q-node';

export interface IQNode<T extends QNodesValue> {
  value: T;
  next: IQNode<T> | null;
}

// type ApiCallQ_Value = any; .functionKind === 'ClientResponse'
type QNodes<T extends QNodesValue = QNodesValue> = IQNode<T> | null;

type QNodesValue = QNodesValue1 | QNodesValue2;
export interface QNodesValue1 {
  cb?: any;
  config: ClientRequestConfig;
  fn: <R = any>(config: ClientRequestConfig) => Promise<ClientResponse<R>>;
  functionKind?: 'ClientResponse';
}

export interface QNodesValue2 {
  cb?: any;
  config: any;
  fn: (config: any) => any;
  functionKind?: 'other';
}
// const instanceApiCallQ_: { instance: ApiCallQ_<any> | null } = {
//   instance: null,
// };

// void instanceApiCallQ_;

/** fCFS Queue (first-come, first-served) */

export class ApiCallQ_ {
  protected broke: boolean;
  protected current: QNodes<QNodesValue>;
  protected first: QNodes<QNodesValue>;
  protected isCalled: boolean;
  protected last: QNodes<QNodesValue>;
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

  public static new(apiOptions: ApiOptions) {
    return new ApiCallQ_(apiOptions);
  }

  protected get positiveTimeOffset() {
    return this.timeOfSet >= 0 ? this.timeOfSet : 0;
  }

  // -| constructor |-···―――――――――――――――――――――――――――···-| ApiCallQ_() |-//-://#-| ~
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

  // -| protected |-get――――――――――――――――――――――――――――――···-| requestLimit |-//::――― ~
  // info: requestLimit //-!
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

  // -| protected |-···―――――――――――――――――――――――――···-| callToPopQueue() |-//::――― ~
  // info: callToPopQueue //-*
  protected callToPopQueue() {
    const timeThen = now();

    if (this.isCallable) {
      this.isCalled = true;

      setTimeout(async () => {
        this.deQueue();
        const cb = this.current?.value.cb ?? void0;
        const { fn } = this.current!.value;
        const { config } = this.current!.value;

        try {
          if (this.current?.value?.functionKind === 'other') {
            const fnct: <R>(config: unknown) => R = fn as <R>(
              config: unknown,
            ) => R;

            const before = now();
            cb(null, fnct(config));
            console.info(
              '\n *** *** *** Other function cycle in',
              now() - before,
              'ms\n' /* '\n' */,
            );
          }

          if (this.current?.value?.functionKind === 'ClientResponse') {
            try {
              const fnct: <R>(
                config: ClientRequestConfig,
              ) => Promise<ClientResponse<R>> = fn as <R>(
                config: ClientRequestConfig,
              ) => Promise<ClientResponse<R>>;

              const before = now();
              const response = await fnct(config);
              echo(
                '\nrequest response cycle in',
                now() - before,
                'ms\n' /* '\n' */,
                { METHOD: config.method, URI: config.url },
              );
              this.remaining = response.headers['x-ratelimit-remaining'];
              this.resetTime = response.headers['x-ratelimit-reset'];

              cb(null, response);
            } catch (error) {
              if ((error.message as string).search(/401|429|500/u) > 0) {
                console.error(
                  "'****' BROKE on an error in Queue Ratelimiter:",
                  error.message,
                  (error.message as string).search(/401|429|500/u),
                );
                this.broke = true;
              }

              throw error;
            }

            // {
          }
        } catch (error) {
          console.error(
            "'****' CATCH an error in Queue Ratelimiter:",
            error.message,
          );
          cb(error, null);
        }

        echo('Complete previous cycle in', now() - timeThen, 'ms');
        this.isCalled = false;

        this.callToPopQueue();
      }, this.requestLimit);
    }
  }

  public async addToQueue<S = any>(value: QNodesValue2): Promise<S> {
    const callBack = (cb: (error: Error, result: S) => boolean) => {
      this.enQueue({ ...value, cb, functionKind: 'other' });
      if (this.isNotCalled) {
        this.callToPopQueue();
      }
    };

    return new Promise<S>((resolve, reject) => {
      callBack((error: Error, result: S) => {
        if (!error) {
          resolve(result);

          return true;
        }

        reject(error);

        return false;
      });
    });
  }

  // -| public |-···―――――――――――――――――――――――――――――――――···-| addToQueue() |-//::――― ~
  public async addApiCallToQueue<R = unknown>(
    value: QNodesValue1,
  ): Promise<ClientResponse<R>> {
    const callBack = (
      cb: (error: Error, result: ClientResponse<R>) => boolean,
    ) => {
      this.enQueue({ ...value, cb, functionKind: 'ClientResponse' });
      if (this.isNotCalled) {
        this.callToPopQueue();
      }
    };

    return new Promise<ClientResponse<R>>((resolve, reject) => {
      callBack((error: Error, result: ClientResponse<R>) => {
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
