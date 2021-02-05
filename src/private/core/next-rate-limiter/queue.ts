import { perSeconds } from '../../../utils';

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
export class ApiCallQ<Ŋ> {
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

  public get xRequestsRemaining() {
    if (this.requestsRemaining !== 0) {
      return this.requestsRemaining;
    }
    return 1;
  }

  /** set in seconds get in miliseconds */
  public set xRequestsRemaining(number: number) {
    this.requestsRemaining = number;
  }
  /** get in miliseconds set in seconds */
  public get xRateLimitReset() {
    return this.rateLimitReset;
  }

  /** set in seconds get in miliseconds */
  public set xRateLimitReset(seconds: number) {
    this.rateLimitReset = seconds * 1000;
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
        poped as Ŋ;
        // [myfn, mycb] = !!poped ? poped : [neverWillCb, neverCb];
      }

      const msRemaining = this.xRateLimitReset * 1000 - ApiCallQ.rightNow;
      const xRequestsRemaining = 1;
      const waitPeriodMs = msRemaining / this.xRequestsRemaining;
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
  public enqueue(val: any) {
    const newNode = new Node<Ŋ>(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this;
  }

  public dequeue() {
    if (!this.first) {
      return null;
    }

    this.value = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return this;
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

class Node<Ŋ> {
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
