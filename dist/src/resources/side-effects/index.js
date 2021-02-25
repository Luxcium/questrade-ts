"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnlog = exports.tablelog = exports.sideEffects = exports.setMyToken = exports.makeTedis = exports.infolog = exports.getMyToken = exports.getHttpClient = exports.getHash = exports.errorlog = exports.echo = exports.ech0 = exports.client = exports.sync = exports.writeToken = exports.validateToken = void 0;
const default_behaviour_1 = require("./default-behaviour");
Object.defineProperty(exports, "client", { enumerable: true, get: function () { return default_behaviour_1.client; } });
Object.defineProperty(exports, "ech0", { enumerable: true, get: function () { return default_behaviour_1.ech0; } });
Object.defineProperty(exports, "echo", { enumerable: true, get: function () { return default_behaviour_1.echo; } });
Object.defineProperty(exports, "errorlog", { enumerable: true, get: function () { return default_behaviour_1.errorlog; } });
Object.defineProperty(exports, "getHash", { enumerable: true, get: function () { return default_behaviour_1.getHash; } });
Object.defineProperty(exports, "getHttpClient", { enumerable: true, get: function () { return default_behaviour_1.getHttpClient; } });
Object.defineProperty(exports, "getMyToken", { enumerable: true, get: function () { return default_behaviour_1.getMyToken; } });
Object.defineProperty(exports, "infolog", { enumerable: true, get: function () { return default_behaviour_1.infolog; } });
Object.defineProperty(exports, "makeTedis", { enumerable: true, get: function () { return default_behaviour_1.makeTedis; } });
Object.defineProperty(exports, "setMyToken", { enumerable: true, get: function () { return default_behaviour_1.setMyToken; } });
Object.defineProperty(exports, "tablelog", { enumerable: true, get: function () { return default_behaviour_1.tablelog; } });
Object.defineProperty(exports, "warnlog", { enumerable: true, get: function () { return default_behaviour_1.warnlog; } });
var auth_1 = require("./auth");
Object.defineProperty(exports, "validateToken", { enumerable: true, get: function () { return auth_1.validateToken; } });
Object.defineProperty(exports, "writeToken", { enumerable: true, get: function () { return auth_1.writeToken; } });
var mkdirp_1 = require("./auth/mkdirp");
Object.defineProperty(exports, "sync", { enumerable: true, get: function () { return mkdirp_1.sync; } });
const sideEffects = {
    client: default_behaviour_1.client,
    ech0: default_behaviour_1.ech0,
    echo: default_behaviour_1.echo,
    errorlog: default_behaviour_1.errorlog,
    getHash: default_behaviour_1.getHash,
    getHttpClient: default_behaviour_1.getHttpClient,
    getMyToken: default_behaviour_1.getMyToken,
    infolog: default_behaviour_1.infolog,
    makeTedis: default_behaviour_1.makeTedis,
    setMyToken: default_behaviour_1.setMyToken,
    tablelog: default_behaviour_1.tablelog,
    warnlog: default_behaviour_1.warnlog,
};
exports.sideEffects = sideEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcmVzb3VyY2VzL3NpZGUtZWZmZWN0cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFhNkI7QUFLM0IsdUZBakJBLDBCQUFNLE9BaUJBO0FBQ04scUZBakJBLHdCQUFJLE9BaUJBO0FBQ0oscUZBakJBLHdCQUFJLE9BaUJBO0FBQ0oseUZBakJBLDRCQUFRLE9BaUJBO0FBQ1Isd0ZBakJBLDJCQUFPLE9BaUJBO0FBQ1AsOEZBakJBLGlDQUFhLE9BaUJBO0FBQ2IsMkZBakJBLDhCQUFVLE9BaUJBO0FBQ1Ysd0ZBakJBLDJCQUFPLE9BaUJBO0FBQ1AsMEZBakJBLDZCQUFTLE9BaUJBO0FBQ1QsMkZBakJBLDhCQUFVLE9BaUJBO0FBRVYseUZBbEJBLDRCQUFRLE9Ba0JBO0FBQ1Isd0ZBbEJBLDJCQUFPLE9Ba0JBO0FBZlQsK0JBQW1EO0FBQTFDLHFHQUFBLGFBQWEsT0FBQTtBQUFFLGtHQUFBLFVBQVUsT0FBQTtBQUNsQyx3Q0FBcUM7QUFBNUIsOEZBQUEsSUFBSSxPQUFBO0FBaUJiLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLE1BQU0sRUFBTiwwQkFBTTtJQUNOLElBQUksRUFBSix3QkFBSTtJQUNKLElBQUksRUFBSix3QkFBSTtJQUNKLFFBQVEsRUFBUiw0QkFBUTtJQUNSLE9BQU8sRUFBUCwyQkFBTztJQUNQLGFBQWEsRUFBYixpQ0FBYTtJQUNiLFVBQVUsRUFBViw4QkFBVTtJQUNWLE9BQU8sRUFBUCwyQkFBTztJQUNQLFNBQVMsRUFBVCw2QkFBUztJQUNULFVBQVUsRUFBViw4QkFBVTtJQUNWLFFBQVEsRUFBUiw0QkFBUTtJQUNSLE9BQU8sRUFBUCwyQkFBTztDQUNSLENBQUM7QUFsQkEsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjbGllbnQsXG4gIGVjaDAsXG4gIGVjaG8sXG4gIGVycm9ybG9nLFxuICBnZXRIYXNoLFxuICBnZXRIdHRwQ2xpZW50LFxuICBnZXRNeVRva2VuLFxuICBpbmZvbG9nLFxuICBtYWtlVGVkaXMsXG4gIHNldE15VG9rZW4sXG4gIHRhYmxlbG9nLFxuICB3YXJubG9nLFxufSBmcm9tICcuL2RlZmF1bHQtYmVoYXZpb3VyJztcblxuZXhwb3J0IHsgdmFsaWRhdGVUb2tlbiwgd3JpdGVUb2tlbiB9IGZyb20gJy4vYXV0aCc7XG5leHBvcnQgeyBzeW5jIH0gZnJvbSAnLi9hdXRoL21rZGlycCc7XG5leHBvcnQge1xuICBjbGllbnQsXG4gIGVjaDAsXG4gIGVjaG8sXG4gIGVycm9ybG9nLFxuICBnZXRIYXNoLFxuICBnZXRIdHRwQ2xpZW50LFxuICBnZXRNeVRva2VuLFxuICBpbmZvbG9nLFxuICBtYWtlVGVkaXMsXG4gIHNldE15VG9rZW4sXG4gIHNpZGVFZmZlY3RzLFxuICB0YWJsZWxvZyxcbiAgd2FybmxvZyxcbn07XG5cbmNvbnN0IHNpZGVFZmZlY3RzID0ge1xuICBjbGllbnQsXG4gIGVjaDAsXG4gIGVjaG8sXG4gIGVycm9ybG9nLFxuICBnZXRIYXNoLFxuICBnZXRIdHRwQ2xpZW50LFxuICBnZXRNeVRva2VuLFxuICBpbmZvbG9nLFxuICBtYWtlVGVkaXMsXG4gIHNldE15VG9rZW4sXG4gIHRhYmxlbG9nLFxuICB3YXJubG9nLFxufTtcbiJdfQ==