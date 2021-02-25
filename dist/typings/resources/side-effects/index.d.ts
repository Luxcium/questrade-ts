import { client, ech0, echo, errorlog, getHash, getHttpClient, getMyToken, infolog, makeTedis, setMyToken, tablelog, warnlog } from './default-behaviour';
export { validateToken, writeToken } from './auth';
export { sync } from './auth/mkdirp';
export { client, ech0, echo, errorlog, getHash, getHttpClient, getMyToken, infolog, makeTedis, setMyToken, sideEffects, tablelog, warnlog, };
declare const sideEffects: {
    client: typeof client;
    ech0: typeof ech0;
    echo: typeof echo;
    errorlog: typeof errorlog;
    getHash: typeof getHash;
    getHttpClient: typeof getHttpClient;
    getMyToken: typeof getMyToken;
    infolog: typeof infolog;
    makeTedis: typeof makeTedis;
    setMyToken: typeof setMyToken;
    tablelog: typeof tablelog;
    warnlog: typeof warnlog;
};
//# sourceMappingURL=index.d.ts.map