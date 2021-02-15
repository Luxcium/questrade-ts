class QNode<T> {
  public value: T;

  public next: any;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export { QNode };
