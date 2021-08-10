import * as os from 'os';

import { tryLog } from './tryLog';

void os;
void tryLog;
tryLog('→ osVersion: ', () => os.version());
tryLog('→ EOL: ', () => os.EOL);
tryLog('→ arch: ', () => os.arch());
tryLog('→ constants: ', () => os.constants);
tryLog('→ cpus: ', () => os.cpus());
tryLog('→ endianness: ', () => os.endianness());
tryLog('→ freemem: ', () => os.freemem());
tryLog('→ getPriority: ', () => os.getPriority());
tryLog('→ homedir: ', () => os.homedir());
tryLog('→ hostname: ', () => os.hostname());
tryLog('→ loadavg: ', () => os.loadavg());
tryLog('→ networkInterfaces: ', () => os.networkInterfaces());
tryLog('→ platform: ', () => os.platform());
tryLog('→ release: ', () => os.release());
// tryLog('→ setPriority: ', ()=> os.setPriority([pid, ]priority))
tryLog('→ tmpdir: ', () => os.tmpdir());
tryLog('→ totalmem: ', () => os.totalmem());
tryLog('→ type: ', () => os.type());
tryLog('→ uptime: ', () => os.uptime());
tryLog('→ userInfo: ', () => os.userInfo());
tryLog('→ version: ', () => os.version());

tryLog('→', () => `Current directory: ${process.cwd()}`);
tryLog('→', () => `Current directory: ${__dirname}`);

// try {
//   throw new Error('Whoops!');
// } catch (error) {
//   console.error(`${error.name}: ${error.message}`);
// }
/*

OS
tryLog('EOL', ()=> os.EOL)
tryLog('arch', ()=> os.arch())
tryLog('constants', ()=> os.constants)
tryLog('cpus', ()=> os.cpus())
tryLog('endianness', ()=> os.endianness())
tryLog('freemem', ()=> os.freemem())
tryLog('getPriority', ()=> os.getPriority([pid]))
tryLog('homedir', ()=> os.homedir())
tryLog('hostname', ()=> os.hostname())
tryLog('loadavg', ()=> os.loadavg())
tryLog('networkInterfaces', ()=> os.networkInterfaces())
tryLog('platform', ()=> os.platform())
tryLog('release', ()=> os.release())
tryLog('setPriority', ()=> os.setPriority([pid, ]priority))
tryLog('tmpdir', ()=> os.tmpdir())
tryLog('totalmem', ()=> os.totalmem())
tryLog('type', ()=> os.type())
tryLog('uptime', ()=> os.uptime())
tryLog('userInfo', ()=> os.userInfo([options]))
tryLog('version', ()=> os.version())
OS constants
Signal constants
Error constants
POSIX error constants
Windows-specific error constants
dlopen constants
Priority constants
libuv constants

 */
