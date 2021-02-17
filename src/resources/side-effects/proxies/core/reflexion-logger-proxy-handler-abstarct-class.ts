/* eslint-disable radar/no-duplicate-string */

import { echo } from '../..';
import type { ProxyHandlerOptions } from '../../types';

export abstract class ProxyHandlerAbstractClass<T extends Function = any>
  implements ProxyHandler<T> {
  public constructor(protected handlerOptions: ProxyHandlerOptions) {
    // empty comment is to avoid → Unexpected empty constructor.eslint (no-empty-function)
  }

  public getPrototypeOf(target: T): object | null {
    if (this.handlerOptions.debuging === true) {
      void echo<any>('PROXY:', '!!→ getPrototypeOf', 'target →', target);

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.getPrototypeOf(target);
  }

  public setPrototypeOf(target: T, v: any): boolean {
    if (this.handlerOptions.debuging === true) {
      void echo('PROXY:', '!!→ setPrototypeOf', 'target →', target, 'v →', v);

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.setPrototypeOf(target, v);
  }

  public isExtensible(target: T): boolean {
    if (this.handlerOptions.debuging === true) {
      void echo<any>('PROXY:', '!!→ isExtensible', 'target →', target);

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.isExtensible(target);
  }

  public preventExtensions(target: T): boolean {
    if (this.handlerOptions.debuging === true) {
      void echo<any>('PROXY:', '!!→ preventExtensions', 'target →', target);

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.preventExtensions(target);
  }

  public getOwnPropertyDescriptor(
    target: T,
    p: PropertyKey,
  ): PropertyDescriptor | undefined {
    if (this.handlerOptions.debuging === true) {
      void echo<any>(
        'PROXY:',
        '!!→ getOwnPropertyDescriptor',
        'target →',
        target,
        'p →',
        p,
      );

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.getOwnPropertyDescriptor(target, p);
  }

  public has(target: T, p: PropertyKey): boolean {
    if (this.handlerOptions.debuging === true) {
      void echo<any>('PROXY:', '!!→ has', 'target →', target, 'p →', p);

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.has(target, p);
  }

  public get(target: T, p: PropertyKey, receiver: any): any {
    if (this.handlerOptions.debuging === true) {
      void echo(
        'PROXY:',
        '!!→ get',
        'target →',
        target,
        'p →',
        p,
        'receiver →',
        receiver,
      );

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.get(target, p, receiver);
  }

  public set(target: T, p: PropertyKey, value: any, receiver: any): boolean {
    if (this.handlerOptions.debuging === true) {
      void echo(
        'PROXY:',
        '!!→ set',
        'target →',
        target,
        'p →',
        p,
        'value →',
        value,
        'receiver →',
        receiver,
      );

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.set(target, p, value, receiver);
  }

  public deleteProperty(target: T, p: PropertyKey): boolean {
    if (this.handlerOptions.debuging === true) {
      void echo<any>(
        'PROXY:',
        '!!→ deleteProperty',
        'target →',
        target,
        'p →',
        p,
      );

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.deleteProperty(target, p);
  }

  public defineProperty(
    target: T,
    p: PropertyKey,
    attributes: PropertyDescriptor,
  ): boolean {
    if (this.handlerOptions.debuging === true) {
      void echo<any>(
        'PROXY:',
        '!!→ defineProperty',
        'target →',
        target,
        'p →',
        p,
        'attributes →',
        attributes,
      );

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.defineProperty(target, p, attributes);
  }

  public ownKeys(target: T) {
    if (this.handlerOptions.debuging === true) {
      void echo<any>('PROXY:', 'ownKeys', 'target', target);

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.ownKeys(target);
  }

  public apply(target: T, thisArg: any, argArray?: any): any {
    if (this.handlerOptions.debuging === true) {
      void echo(
        'PROXY:',
        '!!→ apply',
        'target →',
        target,
        'thisArg →',
        thisArg,
        'argArray →',
        argArray,
      );

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.apply(target, thisArg, argArray);
  }

  public construct(target: T, argArray: any, newTarget: any): object {
    if (this.handlerOptions.debuging === true) {
      void echo(
        'PROXY:',
        '!!→ construct',
        'target →',
        target,
        'argArray →',
        argArray,
        'newTarget →',
        newTarget,
      );

      echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
    }

    return Reflect.construct(target, argArray, newTarget);
  }
}

/*


  + Terminologie

  # gestionnaire (handler)
  Un objet qui contient les trappes qui intercepteront les opérations.

  # trappes
  Les méthodes qui fournissent l'accès aux propriétés. Ce concept est analogue
  aux trappes utilisées dans les systèmes d'exploitations.

  # cible
  L'objet virtualisé par le proxy. Il est souvent utilisé comme objet de
  stockage. Les invariants (c'est-à-dire les éléments de sémantique qui restent
  inchangés) relatifs à la non-extensibilité et au caractère non-configurable
  des propriétés sont vérifiés par rapport à la cible.

  +Syntaxe
  * var p = new Proxy(cible, gestionnaire);

  + Paramètres

  # cible
  Une cible (qui peut être n'importe quel objet, un tableau, une fonction,
  ou même un autre proxy) qu'on souhaite envelopper dans un Proxy.

  # gestionnaire
  Un objet dont les propriétés sont des fonctions qui définissent le
  comportement du proxy lorsqu'on utilise une opération sur celui-ci.

  +Méthodes
  $> Permet de créer un objet Proxy révocable:
  |> Proxy.revocable()

  +Méthodes pour le gestionnaire
  L'objet utilisé comme gestionnaire regroupe les différentes fonctions
  « trappes » pour le Proxy.

  Toutes ces trappes sont optionnelles. Si une trappe n'a pas été définie,
  le comportement par défaut sera de transmettre l'opération à la cible.


  $> Une trappe pour Object.getPrototypeOf:
  |> handler.getPrototypeOf()

  $> Une trappe pour Object.setPrototypeOf:
  |> handler.setPrototypeOf()

  $> Une trappe pour Object.isExtensible:
  |> handler.isExtensible()

  $> Une trappe pour Object.preventExtensions:
  |> handler.preventExtensions()

  $> Une trappe pour Object.getOwnPropertyDescriptor:
  |> handler.getOwnPropertyDescriptor()

  $> Une trappe pour Object.defineProperty:
  |> handler.defineProperty()

  $> Une trappe pour l'opérateur in:
  |> handler.has()

  $> Une trappe pour l'accès aux valeurs des propriétés:
  |> handler.get()

  $> Une trappe pour la définition des valeurs des propriétés:
  |> handler.set()

  $> Une trappe pour l'opérateur delete:
  |> handler.deleteProperty()

  $> Une trappe pour Object.getOwnPropertyNames et Object.getOwnPropertySymbols:
  |> handler.ownKeys()

  $> Une trappe pour l'appel d'une fonction:
  |> handler.apply()

  $> Une trappe pour l'opérateur new:
  |> handler.construct()

  Certaines trappes non standards sont désormais obsolètes et ont été supprimées.


*/
