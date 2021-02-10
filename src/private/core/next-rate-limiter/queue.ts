/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
import { errorlog } from '../../../resources/side-effects';
import { CallBack } from '../../../typescript';
import { perSeconds, void0 } from '../../../utils';
import { neverWill } from '../requestPerSecondLimit/never-will';
import { QNode } from './q-node';

interface IQNode<T> {
  value: T;
  next: IQNode<T> | null;
}

// type ApiCallQ_Value = any;
type QNodes<T = unknown> = IQNode<T> | null;

/** FCFS Queue (first-come, first-served) */
export class ApiCallQ_<
  T extends { arg: number; fn: (arg: number) => number; cb?: any }
> {
  first: QNodes<T>;
  last: QNodes<T>;
  current: QNodes<T>;
  size: number;

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
  }

  public addToQueue = <R = any>(val: T): Promise<R> => {
    const enqueue = (cb: any) => {
      this.enqueue({ ...val, cb });
      console.log(this.callToPop());
    };

    return new Promise<R>((resolve, reject) => {
      enqueue((error: Error, result: any) => {
        if (!!error) {
          reject(error);
          return void 0;
        }
        resolve(result);
        return void 0;
      });
    });
  };

  protected callToPop() {
    const timeThen = Date.now();

    if (this.isCallable) {
      this.isCalled = true;
      const delay = 240;

      setTimeout(() => {
        this.dequeue();
        const fn = this.current?.value.fn ?? void0;
        const arg = this.current?.value.arg ?? '';
        const cb = this.current?.value?.cb ?? void0;

        try {
          cb(null, fn<any>(arg));
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
        this.callToPop();
      }, delay);

      return true;
    }
    return false;
  }

  protected enqueue(val: T) {
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

  protected dequeue() {
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

// const apiQ = new ApiCallQ_<{
//   arg: number;
//   fn:(arg: number) => number;
// }>();

// [
//   { arg: 6, fn: (arg: number) => arg + 3 },
//   { arg: 7, fn: (arg: number) => arg * 3 },
//   { arg: 8, fn: (arg: number) => arg + 3 },
//   { arg: 9, fn: (arg: number) => arg * 3 },
//   { arg: 11, fn: (arg: number) => arg * 3 },
//   { arg: 2, fn: (arg: number) => arg + 3 },
//   { arg: 3, fn: (arg: number) => arg * 3 },
//   { arg: 4, fn: (arg: number) => arg + 3 },
//   { arg: 5, fn: (arg: number) => arg * 3 },
//   { arg: 1, fn: (arg: number) => arg * 3 },
//   { arg: 100, fn: (arg: number) => arg * 3 },
//   {
//     arg: 5,
//     fn: (arg: number) => {
//       throw new Error(`Throw an error: ${arg}`);
//     },
//   },
//   { arg: 200, fn: (arg: number) => arg * 3 },
//   { arg: 12, fn: (arg: number) => arg + 3 },
// ]
//   .map(i => apiQ.addToQueue(i))
//   .map(p => p.then(v => console.log(v)).catch(console.error));

// async function noName() {
//   console.log(
//     '555555',
//     await apiQ.addToQueue({ arg: 10, fn: (arg: number) => arg + 555_545 }),
//   );
//   console.log(
//     '555555',
//     await apiQ.addToQueue({ arg: 10, fn: (arg: number) => arg + 555_545 }),
//   );

//   try {
//     console.log(
//       await apiQ.addToQueue({
//         arg: 5,
//         fn: (arg: number) => {
//           throw new Error(`Throw an error: ${arg}`);
//         },
//       }),
//     );
//   } catch {
//     console.log('anerrorerror');
//   }

//   console.log(
//     '555555',
//     await apiQ.addToQueue({ arg: 10, fn: (arg: number) => arg + 555_545 }),
//   );
// }
// noName();
function limitingRequest<T>(fn: Function, hertz: number = 1) {
  const callsQueue: [Function, CallBack<any>][] = [];
  let isCalled = false;

  const callToPop = async () => {
    if (callsQueue.length > 0 && !isCalled) {
      isCalled = true;
      setTimeout(async () => {
        isCalled = false;
        await callToPop();
      }, perSeconds(hertz));

      const poped = callsQueue.pop();
      const [myfn, mycb] = !!poped ? poped : neverWill;

      mycb(null, myfn());
    }
  };

  const addToQueue = (cb: any /* CallBack<any> */) => {
    callsQueue.unshift([fn, cb]);
    callToPop();
  };

  return new Promise<T>((resolve, reject) => {
    addToQueue((error: Error, result: any) => {
      if (!!error) {
        void errorlog(error);

        reject(error);
        return void 0;
      }
      resolve(result);
      return void 0;
    });
  });
}

export { limitingRequest };
