/* eslint-disable radar/no-identical-functions */
/* eslint-disable promise/avoid-new */
import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import { errorlog } from '../../../resources/side-effects';
import { CallBack, Ŋ } from '../../../typescript';
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

  public callToPop() {
    const timeThen = Date.now();

    if (this.isCallable) {
      this.isCalled = true;
      const delay = 240;

      setTimeout(() => {
        this.dequeue();
        const fn = this.current?.value.fn ?? void0;
        const arg =
          this.current?.value.arg ??
          'error in the callToPop method of the queue';
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
  public enqueue(val: T) {
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

  public dequeue() {
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

const apiQ = new ApiCallQ_<{
  arg: number;
  fn:(arg: number) => number;
}>();

[
  { arg: 1, fn: (arg: number) => arg * 3 },
  // { arg: 2, fn: (arg: number) => arg + 3 },
  // { arg: 3, fn: (arg: number) => arg * 3 },
  // { arg: 4, fn: (arg: number) => arg + 3 },
  // { arg: 5, fn: (arg: number) => arg * 3 },
  { arg: 100, fn: (arg: number) => arg * 3 },
  {
    arg: 5,
    fn: (arg: number) => {
      throw new Error(`Throw an error: ${arg}`);
    },
  },
  { arg: 200, fn: (arg: number) => arg * 3 },
  // { arg: 6, fn: (arg: number) => arg + 3 },
  // { arg: 7, fn: (arg: number) => arg * 3 },
  // { arg: 8, fn: (arg: number) => arg + 3 },
  // { arg: 9, fn: (arg: number) => arg * 3 },
  // { arg: 11, fn: (arg: number) => arg * 3 },
  { arg: 12, fn: (arg: number) => arg + 3 },
]
  .map(i => apiQ.addToQueue(i))
  .map(p => p.then(v => console.log(v)).catch(console.error));

// console.log(apiQ);
// console.dir(apiQ);

async function noName() {
  console.log(
    '555555',
    await apiQ.addToQueue({ arg: 10, fn: (arg: number) => arg + 555_545 }),
  );
  console.log(
    '555555',
    await apiQ.addToQueue({ arg: 10, fn: (arg: number) => arg + 555_545 }),
  );

  try {
    console.log(
      await apiQ.addToQueue({
        arg: 5,
        fn: (arg: number) => {
          throw new Error(`Throw an error: ${arg}`);
        },
      }),
    );
  } catch {
    console.log('anerrorerror');
  }

  console.log(
    '555555',
    await apiQ.addToQueue({ arg: 10, fn: (arg: number) => arg + 555_545 }),
  );
  console.log(
    '555555',
    await apiQ.addToQueue({ arg: 10, fn: (arg: number) => arg + 555_545 }),
  );
  console.log(
    '555555',
    await apiQ.addToQueue({ arg: 10, fn: (arg: number) => arg + 555_545 }),
  );
  // apiQ.callToPop();
  // console.log('first:', await apiQ.callToPop(console.log));
  // console.log('second:', await apiQ.callToPop(console.log));
  // console.log('third:', await apiQ.callToPop(console.log));
}
noName();
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

// export class ApiCallQ_b {
//   // protected config: any;
//   // protected cb: any;
//   // protected first: any;
//   // protected httpClient: any;
//   // protected isCalled: boolean;
//   // protected isGreenLight: boolean;
//   // protected last: any;
//   // protected lastCalled: number;
//   // protected size: number;
//   // public value: Ŋ | null;
//   private constructor() {
//     // this.first = null;
//     // this.last = null;
//     // this.size = 0;
//     // this.value = null;
//     // this.isCalled = false;
//     // this.lastCalled = Date.now();
//     // this.isGreenLight = true;
//     // this.rateLimitReset = 0;
//     // this.requestsRemaining = 1;
//   }
//   // protected resetLastCall() {
//   //   this.lastCalled = Date.now();
//   // }

//   // public async next() {
//   //   const msRemaining = this.xReset * 1000 - this.now;
//   //   const waitPeriodMs = msRemaining / this.xRemaining;

//   //   void waitPeriodMs;
//   //   /*
//   //     30
//   //     30000 (8 requests per seconds)
//   //     xMarketDatacalls

//   //     20
//   //     15000 (4 requests per seconds)
//   //     xRateLimitRemaining: 100
//   //     xRateLimitReset: 1300286940 (in the future a larger number than now)

//   //     account = 120ms ~ 33ms
//   //     market = 240ms ~ 50ms
//   //   */
//   // }
//   // public addToQueue = (cb: any /* CallBack<any> */) => {
//   //   const fn: any = null
//   //   this.enqueue([fn, cb]);
//   //   // callToPop();
//   // };
//   // protected execute() {
//   //   return new Promise<any>((resolve, reject) => {
//   //     this.addToQueue((error: Error, result: any) => {
//   //       if (!!error) {
//   //         void errorlog(error);

//   //         reject(error);
//   //         return void 0;
//   //       }
//   //       resolve(result);
//   //       return void 0;
//   //     });
//   //   });
//   //   // return this.cb(this.httpClient, this.config);
//   // }
//   // public enqueue(val: Ŋ | any) {
//   //   const newNode = new QNode(val);

//   //   if (!this.first) {
//   //     this.first = newNode;
//   //     this.last = newNode;
//   //   } else {
//   //     this.last.next = newNode;
//   //     this.last = newNode;
//   //   }
//   //   this.size += 1;
//   //   return this;

//     /*
//     // const {
//     //   xRemaining,
//     //   xReset,
//     //   fn,
//     //   cb,
//     //   config,
//     //   timeThen,
//     //   maxPerSec,
//     //   maxPerHour,
//     // } = val;
//     xRemaining ,xReset ,fn ,cb ,args ,timeThen ,maxPerSec ,maxPerHour
//      */
//     // xRemaining: number;
//     // xReset: number;
//     // fn: any;
//     // cb: any;
//     // args: any;
//     // timeThen: number;
//     // maxPerSec: number;
//     // maxPerHour: number;
//   // }

//   public dequeue() {
//     if (!this.first) {
//       this.value = null;
//       return this;
//     }

//     this.value = this.first;

//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size -= 1;
//     this.config = this.value?.config ?? null;
//     this.cb = this.value?.cb ?? ((fn: any, arg: any) => fn(arg));
//     this.httpClient = this.value?.httpClient;
//     this.maxPerHour = this.value?.maxPerHour ?? MAX_PER_HOUR;
//     this.maxPerSec = this.value?.maxPerSec ?? MAX_PER_SECONDES;
//     this.timeThen = this.value?.timeThen ?? 0;
//     this.xRemaining = this.value?.xRemaining ?? 1;
//     this.xReset = this.value?.xReset ?? 0;
//     return this;
//   }
//   // private requestsRemaining: number;
//   // public set xRemaining(value: number) {
//   //   this.requestsRemaining = value === 0 ? 1 : value;
//   // }
//   // public get xRemaining() {
//   //   return this.requestsRemaining === 0 ? 1 : this.requestsRemaining;
//   // }
//   // private rateLimitReset: number;
//   // /** Setter accept value in seconds */
//   // public set xReset(seconds: number) {
//   //   this.rateLimitReset = seconds;
//   // }
//   // /** Getter return miliseconds  */
//   // public get xReset() {
//   //   return this.rateLimitReset * 1000;
//   // }
//   // static get now(): number {
//   //   return Date.now();
//   // }

//   // public get now(): number {
//   //   return Date.now();
//   // }
//   // public get count() {
//   //   return this.size;
//   // }
//   // protected get lastDelay() {
//   //   return ApiCallQ.now - this.lastCalled;
//   // }

//   // private _maxPerHour: any;
//   // public set maxPerHour(value: number) {
//   //   this._maxPerHour = value;
//   // }
//   // public get maxPerHour() {
//   //   return this._maxPerHour;
//   // }
//   // private _maxPerSec: any;
//   // public set maxPerSec(value: number) {
//   //   this._maxPerSec = value;
//   // }
//   // public get maxPerSec() {
//   //   return this._maxPerSec;
//   // }
//   // private _timeThen: any;
//   // public set timeThen(value: number) {
//   //   this._timeThen = value;
//   // }
//   // public get timeThen() {
//   //   return this._timeThen;
//   // }
// }

export class ApiCallQ {
  protected config: any;
  protected cb: any;
  protected first: any;
  protected httpClient: any;
  protected isCalled: boolean;
  protected isGreenLight: boolean;
  protected last: any;
  protected lastCalled: number;
  protected size: number;
  public value: Ŋ | null;
  private constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.value = null;
    this.isCalled = false;
    this.lastCalled = Date.now();
    this.isGreenLight = true;
    this.rateLimitReset = 0;
    this.requestsRemaining = 1;
  }
  protected resetLastCall() {
    this.lastCalled = Date.now();
  }

  public async next() {
    const msRemaining = this.xReset * 1000 - this.now;
    const waitPeriodMs = msRemaining / this.xRemaining;

    void waitPeriodMs;
    /*
      30
      30000 (8 requests per seconds)
      xMarketDatacalls

      20
      15000 (4 requests per seconds)
      xRateLimitRemaining: 100
      xRateLimitReset: 1300286940 (in the future a larger number than now)


      account = 120ms ~ 33ms
      market = 240ms ~ 50ms
    */
  }
  public addToQueue = (cb: any /* CallBack<any> */) => {
    const fn: any = null;

    this.enqueue([fn, cb]);
    // callToPop();
  };
  protected execute() {
    return new Promise<any>((resolve, reject) => {
      this.addToQueue((error: Error, result: any) => {
        if (!!error) {
          void errorlog(error);

          reject(error);
          return void 0;
        }
        resolve(result);
        return void 0;
      });
    });
    // return this.cb(this.httpClient, this.config);
  }
  public enqueue(val: Ŋ | any) {
    const newNode = new QNode(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this;

    /*
    // const {
    //   xRemaining,
    //   xReset,
    //   fn,
    //   cb,
    //   config,
    //   timeThen,
    //   maxPerSec,
    //   maxPerHour,
    // } = val;
    xRemaining ,xReset ,fn ,cb ,args ,timeThen ,maxPerSec ,maxPerHour
     */
    // xRemaining: number;
    // xReset: number;
    // fn: any;
    // cb: any;
    // args: any;
    // timeThen: number;
    // maxPerSec: number;
    // maxPerHour: number;
  }

  public dequeue() {
    if (!this.first) {
      this.value = null;
      return this;
    }

    this.value = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    this.config = this.value?.config ?? null;
    this.cb = this.value?.cb ?? ((fn: any, arg: any) => fn(arg));
    this.httpClient = this.value?.httpClient;
    this.maxPerHour = this.value?.maxPerHour ?? MAX_PER_HOUR;
    this.maxPerSec = this.value?.maxPerSec ?? MAX_PER_SECONDES;
    this.timeThen = this.value?.timeThen ?? 0;
    this.xRemaining = this.value?.xRemaining ?? 1;
    this.xReset = this.value?.xReset ?? 0;
    return this;
  }
  private requestsRemaining: number;
  public set xRemaining(value: number) {
    this.requestsRemaining = value === 0 ? 1 : value;
  }
  public get xRemaining() {
    return this.requestsRemaining === 0 ? 1 : this.requestsRemaining;
  }
  private rateLimitReset: number;
  /** Setter accept value in seconds */
  public set xReset(seconds: number) {
    this.rateLimitReset = seconds;
  }
  /** Getter return miliseconds  */
  public get xReset() {
    return this.rateLimitReset * 1000;
  }
  static get now(): number {
    return Date.now();
  }

  public get now(): number {
    return Date.now();
  }
  public get count() {
    return this.size;
  }
  protected get lastDelay() {
    return ApiCallQ.now - this.lastCalled;
  }

  private _maxPerHour: any;
  public set maxPerHour(value: number) {
    this._maxPerHour = value;
  }
  public get maxPerHour() {
    return this._maxPerHour;
  }
  private _maxPerSec: any;
  public set maxPerSec(value: number) {
    this._maxPerSec = value;
  }
  public get maxPerSec() {
    return this._maxPerSec;
  }
  private _timeThen: any;
  public set timeThen(value: number) {
    this._timeThen = value;
  }
  public get timeThen() {
    return this._timeThen;
  }
}

export { limitingRequest };

// first request
// its restponse
/*
  public enqueue(item: T) {
    this._queue.enqueue(item);
    return this;
  }

  public dequeue() {
    this.value = this._queue.dequeue();

  }

 */
// second request
// its restponse

// next request
// its restponse

export class Queue {
  first: any;
  last: any;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val: any) {
    const newNode = new QNode(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return (this.size += 1);
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return temp.value;
  }
}

/*
Category	API Calls	Maximum allowed
requests per second	Maximum allowed
requests per hour
xAccountcalls

GET time
GET accounts
GET accounts/:id/positions
GET accounts/:id/balances
GET accounts/:id/executions
GET accounts/:id/orders

GET markets
GET markets/quotes/:id
GET markets/candles/:id
GET symbols/:id
GET symbols/:id/options

30
30000 (8 requests per seconds)
xMarketDatacalls

20
15000 (4 requests per seconds)
xRateLimitRemaining: 100
xRateLimitReset: 1300286940 (in the future a larger number than now)

const msRemaining = (this.xRateLimitReset * 1000) - this.rightNow()
const waitPeriodMs = (msRemaining / xRequestsRemaining)

account = 120ms ~ 33ms
market = 240ms ~ 50ms


 */
