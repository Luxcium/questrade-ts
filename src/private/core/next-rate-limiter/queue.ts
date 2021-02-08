import { MAX_PER_HOUR, MAX_PER_SECONDES } from '../../../magic-values';
import { Ŋ } from '../../../typescript';
import { perSeconds } from '../../../utils';

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

  protected async callToPop(hertz: number) {
    if (this.size > 0 && !this.isCalled) {
      this.isCalled = true;
      setTimeout(async () => {
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
          httpClient,
          cb,
          config,
          timeThen,
          maxPerSec,
          maxPerHour,
        } = poped;

        cb(httpClient(config));
        void xRemaining,
          xReset,
          httpClient,
          cb,
          config,
          timeThen,
          maxPerSec,
          maxPerHour;
        poped;
        // [myfn, mycb] = !!poped ? poped : [neverWillCb, neverCb];
      }
      this.xReset = 10;
      const anyX = this.xReset;

      void anyX;
      const msRemaining = this.xReset * 1000 - ApiCallQ.now;
      const waitPeriodMs = msRemaining / this.xRemaining;
      const msThen = ApiCallQ.now + waitPeriodMs;

      while (ApiCallQ.now <= msThen) {
        // do nothing just wait while rightNow <= msThen;
      }

      mycb(null, myfn());
      this.resetLastCall();
      return void 151;
    }
    return void 151;
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
  protected execute() {
    return this.cb(this.httpClient, this.config);
  }
  public enqueue(val: Ŋ) {
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

    const newNode = new Node(val);

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
