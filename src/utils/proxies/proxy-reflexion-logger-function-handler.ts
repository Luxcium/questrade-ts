
export class ProxyReflexionLoggerFunctionHandler<T extends Function = any>
  implements ProxyHandler<T> {
  getPrototypeOf(target: T): object | null {
    console.log('PROXY:', 'getPrototypeOf', 'target:', target);
    return Reflect.getPrototypeOf(target);
  }

  setPrototypeOf(target: T, v: any): boolean {
    console.log('PROXY:', 'setPrototypeOf', 'target', target, 'v', v);
    return Reflect.setPrototypeOf(target, v);
  }

  isExtensible(target: T): boolean {
    console.log('PROXY:', 'isExtensible', 'target', target);
    return Reflect.isExtensible(target);
  }

  preventExtensions(target: T): boolean {
    console.log('PROXY:', 'preventExtensions', 'target', target);
    return Reflect.preventExtensions(target);
  }

  getOwnPropertyDescriptor(
    target: T,
    p: PropertyKey
  ): PropertyDescriptor | undefined {
    console.log('PROXY:', 'getOwnPropertyDescriptor', 'target', target, 'p', p);
    return Reflect.getOwnPropertyDescriptor(target, p);
  }

  has(target: T, p: PropertyKey): boolean {
    console.log('PROXY:', 'has', 'target', target, 'p', p);
    return Reflect.has(target, p);
  }

  get(target: T, p: PropertyKey, receiver: any): any {
    console.log(
      'PROXY:',
      'get',
      'target',
      target,
      'p',
      p,
      'receiver',
      receiver
    );
    return Reflect.get(target, p, receiver);
  }

  set(target: T, p: PropertyKey, value: any, receiver: any): boolean {
    console.log(
      'PROXY:',
      'set',
      'target',
      target,
      'p',
      p,
      'value',
      value,
      'receiver',
      receiver
    );
    return Reflect.set(target, p, value, receiver);
  }

  deleteProperty(target: T, p: PropertyKey): boolean {
    console.log('PROXY:', 'deleteProperty', 'target', target, 'p', p);
    return Reflect.deleteProperty(target, p);
  }

  defineProperty(
    target: T,
    p: PropertyKey,
    attributes: PropertyDescriptor
  ): boolean {
    console.log(
      'PROXY:',
      'defineProperty',
      'target',
      target,
      'p',
      p,
      'attributes',
      attributes
    );
    return Reflect.defineProperty(target, p, attributes);
  }

  ownKeys(target: T): PropertyKey[] {
    console.log('PROXY:', 'ownKeys', 'target', target);
    return Reflect.ownKeys(target);
  }

  apply(target: T, thisArg: any, argArray?: any): any {
    console.log(
      'PROXY:',
      'apply',
      'target',
      target,
      'thisArg',
      thisArg,
      'argArray',
      argArray
    );
    return Reflect.apply(target, thisArg, argArray);
  }

  construct(target: T, argArray: any, newTarget: any): object {
    console.log(
      'PROXY:',
      'construct',
      'target',
      target,
      'argArray',
      argArray,
      'newTarget',
      newTarget
    );
    return Reflect.construct(target, argArray, newTarget);
  }
}
