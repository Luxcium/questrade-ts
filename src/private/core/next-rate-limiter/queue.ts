import { perSeconds } from '../../../utils';

export class ApiCallQ {
  private constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.value = null;
    this.isCalled = false;
    this.lastCall = Date.now();
    this.isGreenLight = true;
    this.rateLimitReset = 0;
    this.requestsRemaining = 1;
  }
  private lastCall: number;
  protected isGreenLight: boolean;
  protected isCalled: boolean;
  private first: any;
  private last: any;
  private size: number;
  public value: Ŋ | null;

  private rateLimitReset: number;

  private requestsRemaining: number;
  public enqueue(val: Ŋ) {
    const {
      xRemaining,
      xReset,
      fn,
      cb,
      args,
      timeThen,
      maxPerSec,
      maxPerHour,
    } = val;

    const newNode = new Node({
      args,
      cb,
      fn,
      maxPerHour,
      maxPerSec,
      timeThen,
      xRemaining,
      xReset,
    });

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

  protected dequeue() {
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
    return this;
  }
  public get xRemaining() {
    return this.requestsRemaining === 0 ? 1 : this.requestsRemaining;
  }

  public set xRemaining(value: number) {
    this.requestsRemaining = value;
  }
  /** Setter accept value in seconds */
  public set xReset(seconds: number) {
    this.rateLimitReset = seconds;
  }

  /** Getter return miliseconds  */
  public get xReset() {
    return this.rateLimitReset * 1000;
  }

  static get rightNow(): number {
    return Date.now();
  }
  public get count() {
    return this.size;
  }
  protected get lastDelay() {
    return ApiCallQ.rightNow - this.lastCall;
  }
  protected resetLastCall() {
    this.lastCall = Date.now();
  }
  public async callToPop(hertz: number): Promise<void> {
    if (this.size > 0 && !this.isCalled) {
      this.isCalled = true;
      setTimeout(async (): Promise<void> => {
        this.isCalled = false;
        await this.callToPop(1);
        return void 151;
      }, perSeconds(hertz));
      const poped = this.dequeue()?.value ?? null;
      let myfn: any;
      let mycb: any;

      if (poped) {
        const {
          xRemaining,
          xReset,
          fn,
          cb,
          args,
          timeThen,
          maxPerSec,
          maxPerHour,
        } = poped;

        cb(fn(args));
        void xRemaining, xReset, fn, cb, args, timeThen, maxPerSec, maxPerHour;
        poped;
        // [myfn, mycb] = !!poped ? poped : [neverWillCb, neverCb];
      }
      this.xReset = 10;
      const anyX = this.xReset;

      void anyX;
      const msRemaining = this.xReset * 1000 - ApiCallQ.rightNow;
      const waitPeriodMs = msRemaining / this.xRemaining;
      const msThen = ApiCallQ.rightNow + waitPeriodMs;

      while (ApiCallQ.rightNow <= msThen) {
        // do nothing just wait while rightNow <= msThen;
      }

      mycb(null, myfn());
      this.resetLastCall();
      return void 151;
    }
    return void 151;
  }
}

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
interface Ŋ {
  xRemaining: number;
  xReset: number;
  fn: any;
  cb: any;
  args: any;
  timeThen: number;
  maxPerSec: number;
  maxPerHour: number;
}
class Node {
  public value: Ŋ;
  public next: any;
  constructor(value: Ŋ) {
    this.value = value;
    this.next = null;
  }
}

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
    const newNode = new Node(val);

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
30
30000 (8 requests per seconds)
xMarketDatacalls
GET markets
GET markets/quotes/:id
GET markets/candles/:id
GET symbols/:id
GET symbols/:id/options
20
15000 (4 requests per seconds)
xRateLimitRemaining: 100
xRateLimitReset: 1300286940 (in the future a larger number than now)

const msRemaining = (this.xRateLimitReset * 1000) - this.rightNow()
const waitPeriodMs = (msRemaining / xRequestsRemaining)

account = 120ms ~ 33ms
market = 240ms ~ 50ms


 */
