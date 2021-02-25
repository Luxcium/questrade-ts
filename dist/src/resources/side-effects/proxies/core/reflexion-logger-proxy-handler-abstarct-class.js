"use strict";
/* eslint-disable radar/no-duplicate-string */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyHandlerAbstractClass = void 0;
const __1 = require("../..");
class ProxyHandlerAbstractClass {
    constructor(handlerOptions) {
        Object.defineProperty(this, "handlerOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: handlerOptions
        });
        // empty comment is to avoid → Unexpected empty constructor.eslint (no-empty-function)
    }
    getPrototypeOf(target) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ getPrototypeOf', 'target →', target);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.getPrototypeOf(target);
    }
    setPrototypeOf(target, v) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ setPrototypeOf', 'target →', target, 'v →', v);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.setPrototypeOf(target, v);
    }
    isExtensible(target) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ isExtensible', 'target →', target);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.isExtensible(target);
    }
    preventExtensions(target) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ preventExtensions', 'target →', target);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.preventExtensions(target);
    }
    getOwnPropertyDescriptor(target, p) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ getOwnPropertyDescriptor', 'target →', target, 'p →', p);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.getOwnPropertyDescriptor(target, p);
    }
    has(target, p) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ has', 'target →', target, 'p →', p);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.has(target, p);
    }
    get(target, p, receiver) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ get', 'target →', target, 'p →', p, 'receiver →', receiver);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.get(target, p, receiver);
    }
    set(target, p, value, receiver) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ set', 'target →', target, 'p →', p, 'value →', value, 'receiver →', receiver);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.set(target, p, value, receiver);
    }
    deleteProperty(target, p) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ deleteProperty', 'target →', target, 'p →', p);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.deleteProperty(target, p);
    }
    defineProperty(target, p, attributes) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ defineProperty', 'target →', target, 'p →', p, 'attributes →', attributes);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.defineProperty(target, p, attributes);
    }
    ownKeys(target) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', 'ownKeys', 'target', target);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.ownKeys(target);
    }
    apply(target, thisArg, argArray) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ apply', 'target →', target, 'thisArg →', thisArg, 'argArray →', argArray);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.apply(target, thisArg, argArray);
    }
    construct(target, argArray, newTarget) {
        if (this.handlerOptions.debuging === true) {
            __1.echo('PROXY:', '!!→ construct', 'target →', target, 'argArray →', argArray, 'newTarget →', newTarget);
            __1.echo('abstract class ReflexionLoggerProxyHandlerAbstractClass');
        }
        return Reflect.construct(target, argArray, newTarget);
    }
}
exports.ProxyHandlerAbstractClass = ProxyHandlerAbstractClass;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGV4aW9uLWxvZ2dlci1wcm94eS1oYW5kbGVyLWFic3RhcmN0LWNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvcHJveGllcy9jb3JlL3JlZmxleGlvbi1sb2dnZXItcHJveHktaGFuZGxlci1hYnN0YXJjdC1jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQThDOzs7QUFFOUMsNkJBQTZCO0FBRzdCLE1BQXNCLHlCQUF5QjtJQUU3QyxZQUE2QixjQUFtQzs7Ozs7bUJBQW5DOztRQUMzQixzRkFBc0Y7SUFDeEYsQ0FBQztJQUVNLGNBQWMsQ0FBQyxNQUFTO1FBQzdCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3pDLFFBQUksQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXpELFFBQUksQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxjQUFjLENBQUMsTUFBUyxFQUFFLENBQU07UUFDckMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDekMsUUFBSSxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVuRSxRQUFJLENBQUMseURBQXlELENBQUMsQ0FBQztTQUNqRTtRQUVELE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLFlBQVksQ0FBQyxNQUFTO1FBQzNCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFF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TSxTQUFTLENBQUMsTUFBUyxFQUFFLFFBQWEsRUFBRSxTQUFjO1FBQ3ZELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3pDLFFBQUksQ0FDRixRQUFRLEVBQ1IsZUFBZSxFQUNmLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUixhQUFhLEVBQ2IsU0FBUyxDQUNWLENBQUM7WUFFRixRQUFJLENBQUMseURBQXlELENBQUMsQ0FBQztTQUNqRTtRQUVELE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQXBNRCw4REFvTUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFGRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJhZGFyL25vLWR1cGxpY2F0ZS1zdHJpbmcgKi9cblxuaW1wb3J0IHsgZWNobyB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB0eXBlIHsgUHJveHlIYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb3h5SGFuZGxlckFic3RyYWN0Q2xhc3M8VCBleHRlbmRzIEZ1bmN0aW9uID0gYW55PlxuICBpbXBsZW1lbnRzIFByb3h5SGFuZGxlcjxUPiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaGFuZGxlck9wdGlvbnM6IFByb3h5SGFuZGxlck9wdGlvbnMpIHtcbiAgICAvLyBlbXB0eSBjb21tZW50IGlzIHRvIGF2b2lkIOKGkiBVbmV4cGVjdGVkIGVtcHR5IGNvbnN0cnVjdG9yLmVzbGludCAobm8tZW1wdHktZnVuY3Rpb24pXG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvdG90eXBlT2YodGFyZ2V0OiBUKTogb2JqZWN0IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuaGFuZGxlck9wdGlvbnMuZGVidWdpbmcgPT09IHRydWUpIHtcbiAgICAgIGVjaG8oJ1BST1hZOicsICchIeKGkiBnZXRQcm90b3R5cGVPZicsICd0YXJnZXQg4oaSJywgdGFyZ2V0KTtcblxuICAgICAgZWNobygnYWJzdHJhY3QgY2xhc3MgUmVmbGV4aW9uTG9nZ2VyUHJveHlIYW5kbGVyQWJzdHJhY3RDbGFzcycpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCk7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvdG90eXBlT2YodGFyZ2V0OiBULCB2OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oYW5kbGVyT3B0aW9ucy5kZWJ1Z2luZyA9PT0gdHJ1ZSkge1xuICAgICAgZWNobygnUFJPWFk6JywgJyEh4oaSIHNldFByb3RvdHlwZU9mJywgJ3RhcmdldCDihpInLCB0YXJnZXQsICd2IOKGkicsIHYpO1xuXG4gICAgICBlY2hvKCdhYnN0cmFjdCBjbGFzcyBSZWZsZXhpb25Mb2dnZXJQcm94eUhhbmRsZXJBYnN0cmFjdENsYXNzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCB2KTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4dGVuc2libGUodGFyZ2V0OiBUKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFuZGxlck9wdGlvbnMuZGVidWdpbmcgPT09IHRydWUpIHtcbiAgICAgIGVjaG8oJ1BST1hZOicsICchIeKGkiBpc0V4dGVuc2libGUnLCAndGFyZ2V0IOKGkicsIHRhcmdldCk7XG5cbiAgICAgIGVjaG8oJ2Fic3RyYWN0IGNsYXNzIFJlZmxleGlvbkxvZ2dlclByb3h5SGFuZGxlckFic3RyYWN0Q2xhc3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQ6IFQpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oYW5kbGVyT3B0aW9ucy5kZWJ1Z2luZyA9PT0gdHJ1ZSkge1xuICAgICAgZWNobygnUFJPWFk6JywgJyEh4oaSIHByZXZlbnRFeHRlbnNpb25zJywgJ3RhcmdldCDihpInLCB0YXJnZXQpO1xuXG4gICAgICBlY2hvKCdhYnN0cmFjdCBjbGFzcyBSZWZsZXhpb25Mb2dnZXJQcm94eUhhbmRsZXJBYnN0cmFjdENsYXNzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXG4gICAgdGFyZ2V0OiBULFxuICAgIHA6IFByb3BlcnR5S2V5LFxuICApOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLmhhbmRsZXJPcHRpb25zLmRlYnVnaW5nID09PSB0cnVlKSB7XG4gICAgICBlY2hvKFxuICAgICAgICAnUFJPWFk6JyxcbiAgICAgICAgJyEh4oaSIGdldE93blByb3BlcnR5RGVzY3JpcHRvcicsXG4gICAgICAgICd0YXJnZXQg4oaSJyxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICAncCDihpInLFxuICAgICAgICBwLFxuICAgICAgKTtcblxuICAgICAgZWNobygnYWJzdHJhY3QgY2xhc3MgUmVmbGV4aW9uTG9nZ2VyUHJveHlIYW5kbGVyQWJzdHJhY3RDbGFzcycpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHApO1xuICB9XG5cbiAgcHVibGljIGhhcyh0YXJnZXQ6IFQsIHA6IFByb3BlcnR5S2V5KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFuZGxlck9wdGlvbnMuZGVidWdpbmcgPT09IHRydWUpIHtcbiAgICAgIGVjaG8oJ1BST1hZOicsICchIeKGkiBoYXMnLCAndGFyZ2V0IOKGkicsIHRhcmdldCwgJ3Ag4oaSJywgcCk7XG5cbiAgICAgIGVjaG8oJ2Fic3RyYWN0IGNsYXNzIFJlZmxleGlvbkxvZ2dlclByb3h5SGFuZGxlckFic3RyYWN0Q2xhc3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVmbGVjdC5oYXModGFyZ2V0LCBwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQodGFyZ2V0OiBULCBwOiBQcm9wZXJ0eUtleSwgcmVjZWl2ZXI6IGFueSk6IGFueSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlck9wdGlvbnMuZGVidWdpbmcgPT09IHRydWUpIHtcbiAgICAgIGVjaG8oXG4gICAgICAgICdQUk9YWTonLFxuICAgICAgICAnISHihpIgZ2V0JyxcbiAgICAgICAgJ3RhcmdldCDihpInLFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgICdwIOKGkicsXG4gICAgICAgIHAsXG4gICAgICAgICdyZWNlaXZlciDihpInLFxuICAgICAgICByZWNlaXZlcixcbiAgICAgICk7XG5cbiAgICAgIGVjaG8oJ2Fic3RyYWN0IGNsYXNzIFJlZmxleGlvbkxvZ2dlclByb3h5SGFuZGxlckFic3RyYWN0Q2xhc3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwLCByZWNlaXZlcik7XG4gIH1cblxuICBwdWJsaWMgc2V0KHRhcmdldDogVCwgcDogUHJvcGVydHlLZXksIHZhbHVlOiBhbnksIHJlY2VpdmVyOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5oYW5kbGVyT3B0aW9ucy5kZWJ1Z2luZyA9PT0gdHJ1ZSkge1xuICAgICAgZWNobyhcbiAgICAgICAgJ1BST1hZOicsXG4gICAgICAgICchIeKGkiBzZXQnLFxuICAgICAgICAndGFyZ2V0IOKGkicsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgJ3Ag4oaSJyxcbiAgICAgICAgcCxcbiAgICAgICAgJ3ZhbHVlIOKGkicsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICAncmVjZWl2ZXIg4oaSJyxcbiAgICAgICAgcmVjZWl2ZXIsXG4gICAgICApO1xuXG4gICAgICBlY2hvKCdhYnN0cmFjdCBjbGFzcyBSZWZsZXhpb25Mb2dnZXJQcm94eUhhbmRsZXJBYnN0cmFjdENsYXNzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlZmxlY3Quc2V0KHRhcmdldCwgcCwgdmFsdWUsIHJlY2VpdmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVQcm9wZXJ0eSh0YXJnZXQ6IFQsIHA6IFByb3BlcnR5S2V5KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFuZGxlck9wdGlvbnMuZGVidWdpbmcgPT09IHRydWUpIHtcbiAgICAgIGVjaG8oJ1BST1hZOicsICchIeKGkiBkZWxldGVQcm9wZXJ0eScsICd0YXJnZXQg4oaSJywgdGFyZ2V0LCAncCDihpInLCBwKTtcblxuICAgICAgZWNobygnYWJzdHJhY3QgY2xhc3MgUmVmbGV4aW9uTG9nZ2VyUHJveHlIYW5kbGVyQWJzdHJhY3RDbGFzcycpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcCk7XG4gIH1cblxuICBwdWJsaWMgZGVmaW5lUHJvcGVydHkoXG4gICAgdGFyZ2V0OiBULFxuICAgIHA6IFByb3BlcnR5S2V5LFxuICAgIGF0dHJpYnV0ZXM6IFByb3BlcnR5RGVzY3JpcHRvcixcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaGFuZGxlck9wdGlvbnMuZGVidWdpbmcgPT09IHRydWUpIHtcbiAgICAgIGVjaG8oXG4gICAgICAgICdQUk9YWTonLFxuICAgICAgICAnISHihpIgZGVmaW5lUHJvcGVydHknLFxuICAgICAgICAndGFyZ2V0IOKGkicsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgJ3Ag4oaSJyxcbiAgICAgICAgcCxcbiAgICAgICAgJ2F0dHJpYnV0ZXMg4oaSJyxcbiAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICk7XG5cbiAgICAgIGVjaG8oJ2Fic3RyYWN0IGNsYXNzIFJlZmxleGlvbkxvZ2dlclByb3h5SGFuZGxlckFic3RyYWN0Q2xhc3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHAsIGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgcHVibGljIG93bktleXModGFyZ2V0OiBUKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlck9wdGlvbnMuZGVidWdpbmcgPT09IHRydWUpIHtcbiAgICAgIGVjaG8oJ1BST1hZOicsICdvd25LZXlzJywgJ3RhcmdldCcsIHRhcmdldCk7XG5cbiAgICAgIGVjaG8oJ2Fic3RyYWN0IGNsYXNzIFJlZmxleGlvbkxvZ2dlclByb3h5SGFuZGxlckFic3RyYWN0Q2xhc3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHkodGFyZ2V0OiBULCB0aGlzQXJnOiBhbnksIGFyZ0FycmF5PzogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5oYW5kbGVyT3B0aW9ucy5kZWJ1Z2luZyA9PT0gdHJ1ZSkge1xuICAgICAgZWNobyhcbiAgICAgICAgJ1BST1hZOicsXG4gICAgICAgICchIeKGkiBhcHBseScsXG4gICAgICAgICd0YXJnZXQg4oaSJyxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICAndGhpc0FyZyDihpInLFxuICAgICAgICB0aGlzQXJnLFxuICAgICAgICAnYXJnQXJyYXkg4oaSJyxcbiAgICAgICAgYXJnQXJyYXksXG4gICAgICApO1xuXG4gICAgICBlY2hvKCdhYnN0cmFjdCBjbGFzcyBSZWZsZXhpb25Mb2dnZXJQcm94eUhhbmRsZXJBYnN0cmFjdENsYXNzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0KHRhcmdldDogVCwgYXJnQXJyYXk6IGFueSwgbmV3VGFyZ2V0OiBhbnkpOiBvYmplY3Qge1xuICAgIGlmICh0aGlzLmhhbmRsZXJPcHRpb25zLmRlYnVnaW5nID09PSB0cnVlKSB7XG4gICAgICBlY2hvKFxuICAgICAgICAnUFJPWFk6JyxcbiAgICAgICAgJyEh4oaSIGNvbnN0cnVjdCcsXG4gICAgICAgICd0YXJnZXQg4oaSJyxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICAnYXJnQXJyYXkg4oaSJyxcbiAgICAgICAgYXJnQXJyYXksXG4gICAgICAgICduZXdUYXJnZXQg4oaSJyxcbiAgICAgICAgbmV3VGFyZ2V0LFxuICAgICAgKTtcblxuICAgICAgZWNobygnYWJzdHJhY3QgY2xhc3MgUmVmbGV4aW9uTG9nZ2VyUHJveHlIYW5kbGVyQWJzdHJhY3RDbGFzcycpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ0FycmF5LCBuZXdUYXJnZXQpO1xuICB9XG59XG5cbi8qXG5cblxuICArIFRlcm1pbm9sb2dpZVxuXG4gICMgZ2VzdGlvbm5haXJlIChoYW5kbGVyKVxuICBVbiBvYmpldCBxdWkgY29udGllbnQgbGVzIHRyYXBwZXMgcXVpIGludGVyY2VwdGVyb250IGxlcyBvcMOpcmF0aW9ucy5cblxuICAjIHRyYXBwZXNcbiAgTGVzIG3DqXRob2RlcyBxdWkgZm91cm5pc3NlbnQgbCdhY2PDqHMgYXV4IHByb3ByacOpdMOpcy4gQ2UgY29uY2VwdCBlc3QgYW5hbG9ndWVcbiAgYXV4IHRyYXBwZXMgdXRpbGlzw6llcyBkYW5zIGxlcyBzeXN0w6htZXMgZCdleHBsb2l0YXRpb25zLlxuXG4gICMgY2libGVcbiAgTCdvYmpldCB2aXJ0dWFsaXPDqSBwYXIgbGUgcHJveHkuIElsIGVzdCBzb3V2ZW50IHV0aWxpc8OpIGNvbW1lIG9iamV0IGRlXG4gIHN0b2NrYWdlLiBMZXMgaW52YXJpYW50cyAoYydlc3Qtw6AtZGlyZSBsZXMgw6lsw6ltZW50cyBkZSBzw6ltYW50aXF1ZSBxdWkgcmVzdGVudFxuICBpbmNoYW5nw6lzKSByZWxhdGlmcyDDoCBsYSBub24tZXh0ZW5zaWJpbGl0w6kgZXQgYXUgY2FyYWN0w6hyZSBub24tY29uZmlndXJhYmxlXG4gIGRlcyBwcm9wcmnDqXTDqXMgc29udCB2w6lyaWZpw6lzIHBhciByYXBwb3J0IMOgIGxhIGNpYmxlLlxuXG4gICtTeW50YXhlXG4gICogdmFyIHAgPSBuZXcgUHJveHkoY2libGUsIGdlc3Rpb25uYWlyZSk7XG5cbiAgKyBQYXJhbcOodHJlc1xuXG4gICMgY2libGVcbiAgVW5lIGNpYmxlIChxdWkgcGV1dCDDqnRyZSBuJ2ltcG9ydGUgcXVlbCBvYmpldCwgdW4gdGFibGVhdSwgdW5lIGZvbmN0aW9uLFxuICBvdSBtw6ptZSB1biBhdXRyZSBwcm94eSkgcXUnb24gc291aGFpdGUgZW52ZWxvcHBlciBkYW5zIHVuIFByb3h5LlxuXG4gICMgZ2VzdGlvbm5haXJlXG4gIFVuIG9iamV0IGRvbnQgbGVzIHByb3ByacOpdMOpcyBzb250IGRlcyBmb25jdGlvbnMgcXVpIGTDqWZpbmlzc2VudCBsZVxuICBjb21wb3J0ZW1lbnQgZHUgcHJveHkgbG9yc3F1J29uIHV0aWxpc2UgdW5lIG9ww6lyYXRpb24gc3VyIGNlbHVpLWNpLlxuXG4gICtNw6l0aG9kZXNcbiAgJD4gUGVybWV0IGRlIGNyw6llciB1biBvYmpldCBQcm94eSByw6l2b2NhYmxlOlxuICB8PiBQcm94eS5yZXZvY2FibGUoKVxuXG4gICtNw6l0aG9kZXMgcG91ciBsZSBnZXN0aW9ubmFpcmVcbiAgTCdvYmpldCB1dGlsaXPDqSBjb21tZSBnZXN0aW9ubmFpcmUgcmVncm91cGUgbGVzIGRpZmbDqXJlbnRlcyBmb25jdGlvbnNcbiAgwqsgdHJhcHBlcyDCuyBwb3VyIGxlIFByb3h5LlxuXG4gIFRvdXRlcyBjZXMgdHJhcHBlcyBzb250IG9wdGlvbm5lbGxlcy4gU2kgdW5lIHRyYXBwZSBuJ2EgcGFzIMOpdMOpIGTDqWZpbmllLFxuICBsZSBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdXQgc2VyYSBkZSB0cmFuc21ldHRyZSBsJ29ww6lyYXRpb24gw6AgbGEgY2libGUuXG5cblxuICAkPiBVbmUgdHJhcHBlIHBvdXIgT2JqZWN0LmdldFByb3RvdHlwZU9mOlxuICB8PiBoYW5kbGVyLmdldFByb3RvdHlwZU9mKClcblxuICAkPiBVbmUgdHJhcHBlIHBvdXIgT2JqZWN0LnNldFByb3RvdHlwZU9mOlxuICB8PiBoYW5kbGVyLnNldFByb3RvdHlwZU9mKClcblxuICAkPiBVbmUgdHJhcHBlIHBvdXIgT2JqZWN0LmlzRXh0ZW5zaWJsZTpcbiAgfD4gaGFuZGxlci5pc0V4dGVuc2libGUoKVxuXG4gICQ+IFVuZSB0cmFwcGUgcG91ciBPYmplY3QucHJldmVudEV4dGVuc2lvbnM6XG4gIHw+IGhhbmRsZXIucHJldmVudEV4dGVuc2lvbnMoKVxuXG4gICQ+IFVuZSB0cmFwcGUgcG91ciBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOlxuICB8PiBoYW5kbGVyLmdldE93blByb3BlcnR5RGVzY3JpcHRvcigpXG5cbiAgJD4gVW5lIHRyYXBwZSBwb3VyIE9iamVjdC5kZWZpbmVQcm9wZXJ0eTpcbiAgfD4gaGFuZGxlci5kZWZpbmVQcm9wZXJ0eSgpXG5cbiAgJD4gVW5lIHRyYXBwZSBwb3VyIGwnb3DDqXJhdGV1ciBpbjpcbiAgfD4gaGFuZGxlci5oYXMoKVxuXG4gICQ+IFVuZSB0cmFwcGUgcG91ciBsJ2FjY8OocyBhdXggdmFsZXVycyBkZXMgcHJvcHJpw6l0w6lzOlxuICB8PiBoYW5kbGVyLmdldCgpXG5cbiAgJD4gVW5lIHRyYXBwZSBwb3VyIGxhIGTDqWZpbml0aW9uIGRlcyB2YWxldXJzIGRlcyBwcm9wcmnDqXTDqXM6XG4gIHw+IGhhbmRsZXIuc2V0KClcblxuICAkPiBVbmUgdHJhcHBlIHBvdXIgbCdvcMOpcmF0ZXVyIGRlbGV0ZTpcbiAgfD4gaGFuZGxlci5kZWxldGVQcm9wZXJ0eSgpXG5cbiAgJD4gVW5lIHRyYXBwZSBwb3VyIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIGV0IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM6XG4gIHw+IGhhbmRsZXIub3duS2V5cygpXG5cbiAgJD4gVW5lIHRyYXBwZSBwb3VyIGwnYXBwZWwgZCd1bmUgZm9uY3Rpb246XG4gIHw+IGhhbmRsZXIuYXBwbHkoKVxuXG4gICQ+IFVuZSB0cmFwcGUgcG91ciBsJ29ww6lyYXRldXIgbmV3OlxuICB8PiBoYW5kbGVyLmNvbnN0cnVjdCgpXG5cbiAgQ2VydGFpbmVzIHRyYXBwZXMgbm9uIHN0YW5kYXJkcyBzb250IGTDqXNvcm1haXMgb2Jzb2zDqHRlcyBldCBvbnQgw6l0w6kgc3VwcHJpbcOpZXMuXG5cblxuKi9cbiJdfQ==