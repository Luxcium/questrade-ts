/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
import { timeKeepingTools } from '.';
import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import {
  ClientPromise,
  ClientRequestConfig,
  ClientResponse
} from '../../../resources/side-effects/types';
import { void0 } from '../../../utils';
import { QNode } from './q-node';

interface IQNode<T extends QNodesValue> {
  value: T;
  next: IQNode<T> | null;
}

// type ApiCallQ_Value = any;
type QNodes<T extends QNodesValue> = IQNode<T> | null;
type QNodesValue = {
  config: ClientRequestConfig;
  fn: <R>(config: ClientRequestConfig) => Promise<ClientResponse<R>>;
  cb?: any;
};
const instanceApiCallQ_: { instance: ApiCallQ_<any> | null } = {
  instance: null,
};

void instanceApiCallQ_;

/** FCFS Queue (first-come, first-served) */

export class ApiCallQ_<T extends QNodesValue> {
  protected first: QNodes<T>;
  protected last: QNodes<T>;
  protected current: QNodes<T>;
  protected size: number;
  protected remaining: number;
  protected timeUntilReset: number;
  protected isCalled: boolean;

  protected get requestLimit() {
    return timeKeepingTools.limitRequestsPerSecond(
      this.remaining,
      this.timeUntilReset,
    );
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
    return this.isNotEmpty && this.isNotCalled;
  }
  static get new() {
    return new ApiCallQ_();
  }
  //-| constructor |-···―――――――――――――――――――――――――――···-| ApiCallQ_() |-//-://#-| ~
  public constructor(
    protected maxPerSecondes: number = MAX_PER_SECONDES,
    protected maxPerHour: number = MAX_PER_HOUR,
  ) {
    this.isCalled = false;
    this.first = null;
    this.last = null;
    this.size = 0;
    this.current = null;
    this.remaining = 1;
    this.timeUntilReset = 1;
  }

  //-| public |-···―――――――――――――――――――――――――――――――――···-| addToQueue() |-//::――― ~
  public addToQueue<R = any>(value: T): ClientPromise<R> {
    //
    // INFO: //-: Passing the callback value through the `cb` parameter
    const callBack = (cb: any) => {
      //
      this.enQueue({ ...value, cb });
      //
      // HINT: //-:-···―――――――――――――――――――――――――···-| callToPopQueue() |-//-/――― ~
      this.callToPopQueue();
      return void 100;
    };

    // INFO: //-: Will use a promisified call back to return value as a promise
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
          const response = await fn(config);

          const xRemaining = response.headers['x-ratelimit-remaining'];
          const xReset = response.headers['x-ratelimit-reset'];

          // set to 1 if zero or not a number or NaN
          this.remaining = typeof xRemaining === 'number' ? xRemaining || 1 : 1;
          this.timeUntilReset = typeof xReset === 'number' ? xReset || 1 : 1;

          // HINT: //-:|-···―――――――――――――――――――――――――――···-| callback() |-···――― ~
          cb(null, response);
        } catch (error) {
          // console.log('catch an error:', error.message);
          cb(error, null);
        }

        this.isCalled = false;
        const timeNow = Date.now();

        console.log(
          'Complete previous cycle in',
          timeNow - timeThen,
          'ms' /* '\n' */,
        );
        this.callToPopQueue();
      }, 1000 / this.requestLimit);

      return true;
    }
    return false;
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
