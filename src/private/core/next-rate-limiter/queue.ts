export class ApiCallQ<Ŋ> {
  private constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.value = null;
    this.isCalled = false;
    this.lastCall = Date.now();
    this.isGreenLight = true;
  }
  private lastCall: number;
  protected isGreenLight: boolean;
  protected isCalled: boolean;
  private first: any;
  private last: any;
  private size: number;
  public value: Ŋ | null;
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
