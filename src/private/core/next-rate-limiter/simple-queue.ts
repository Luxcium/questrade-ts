/* eslint-disable radar/cognitive-complexity */
/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
// /*eslint complexity: ["error", 5]*/
import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import { now, void0 } from '../../../utils';
import { QNode } from './q-node';

export interface IQNode<T extends QNodesVal> {
  value: T;
  next: IQNode<T> | null;
}

// type ApiCallQ_Value = any; .functionKind === 'ClientResponse'
type QNodes<T extends QNodesVal = QNodesVal> = IQNode<T> | null;

export interface QNodesVal {
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

export class SimpleQueue {
  protected broke: boolean;
  protected current: QNodes<QNodesVal>;
  protected first: QNodes<QNodesVal>;
  protected isCalled: boolean;
  protected last: QNodes<QNodesVal>;
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

  protected get isCallable() {
    return this.isNotEmpty && this.isNotCalled && this.isNotBroken;
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
    this.broke = false;
  }

  // -| protected |-···―――――――――――――――――――――――――···-| callToPopQueue() |-//::――― ~
  // info: callToPopQueue //-*
  protected callToPopQueue() {
    const timeThen = now();

    if (this.isCallable) {
      this.isCalled = true;

      setTimeout(async () => {
        this.deQueue();
        const { fn } = this.current!.value;
        const { config } = this.current!.value;
        const cb = this.current!.value.cb ?? void0;

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
              'ms' /* '\n' */,
            );
          }
        } catch (error) {
          console.error(
            "'****' CATCH an error in Queue Ratelimiter:",
            error.message,
          );
          cb(error, null);
        }

        void0('Complete previous cycle in', now() - timeThen, 'ms');
        this.isCalled = false;

        this.callToPopQueue();
      }, 1);
    }
  }

  public async addToQueue<S = any>(value: QNodesVal): Promise<S> {
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

  // -| protected |-···――――――――――――――――――――――――――――――――――···-| enQueue() |-//::―― ~
  protected enQueue(val: QNodesVal) {
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
