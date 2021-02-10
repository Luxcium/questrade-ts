/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
import {
  ClientRequestConfig,
  ClientResponse,
} from '../../../resources/side-effects/types';
import { void0 } from '../../../utils';
import { timeKeepingTools } from '.';
import { QNode } from './q-node';

interface IQNode<T> {
  value: T;
  next: IQNode<T> | null;
}

// type ApiCallQ_Value = any;
type QNodes<T = unknown> = IQNode<T> | null;

/** FCFS Queue (first-come, first-served) */
export class ApiCallQ_<
  T extends {
    config: ClientRequestConfig;
    fn: <R>(config: ClientRequestConfig) => Promise<ClientResponse<R>>;
    cb?: any;
  }
> {
  protected first: QNodes<T>;
  protected last: QNodes<T>;
  protected current: QNodes<T>;
  protected size: number;
  protected remaining: number;
  protected timeUntilReset: number;
  protected isCalled: boolean;

  public get isNotCalled(): boolean {
    return !this.isCalled;
  }

  public get isEmpty(): boolean {
    return this.size <= 0;
  }
  public get isNotEmpty(): boolean {
    return this.size > 0;
  }
  // : this is {current: NonNullable<ApiCallQ_<T>['current']>;
  public get isCallable() {
    return this.isNotEmpty && this.isNotCalled;
  }

  public constructor() {
    this.isCalled = false;
    this.first = null;
    this.last = null;
    this.size = 0;
    this.current = null;
    this.remaining = 1;
    this.timeUntilReset = 1;
  }

  public addToQueue = <R = any>(value: T): Promise<R> => {
    const enqueue = (callBack: any) => {
      //
      // INFO: Will use the calback to return the values from callToPopQueue() //-!
      this.enQueue({ ...value, callBack });
      //
      // INFO: callToPopQueue() is called to recursively empty the Queue //-!
      this.callToPopQueue();
      return void 0;
    };

    // INFO: Will use a promisified call back to return the values as a promise //-!
    return new Promise<R>((resolve, reject) => {
      enqueue((error: Error, result: any) => {
        if (!error) {
          resolve(result);
          return void 0;
        } else {
          reject(error);
          return void 0;
        }
      });
    });
  };

  protected callToPopQueue() {
    const timeThen = Date.now();

    if (this.isCallable) {
      this.isCalled = true;
      const delay = 240;

      setTimeout(async () => {
        this.deQueue();
        const cb = this.current?.value?.cb ?? void0;

        try {
          const fn = this.current!.value.fn;
          const config = this.current!.value.config;
          const response = await fn(config);

          this.remaining = Number(response.headers['x-ratelimit-remaining']);
          this.timeUntilReset = Number(response.headers['x-ratelimit-reset']);
          timeKeepingTools.epochMs();

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
      }, delay);

      return true;
    }
    return false;
  }

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
