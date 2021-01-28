export class ApiCallQueue<T> {
  private _queue: T[];
  private constructor(...elements: T[]) {
    this._queue = [...elements];
  }

  public addToQueue(item: T) {
    this._queue.unshift(item);
    return this;
  }

  public popFromQueue() {
    this._queue.pop();
    return this;
  }

  public addToQueue3(item: T) {
    this._queue.push(item);
    return this;
  }
}
