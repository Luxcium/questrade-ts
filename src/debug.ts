import { QuestradeClient } from './core/classes/QuestradeClient';

const questrade = new QuestradeClient({
  seedToken: 'BqM_7PgRAMHDPDv6DZHuJ64EfzsXNsyV0',
});

questrade.on('ready', (qt: QuestradeClient) => {
  return console.log(qt.qtGetTime);
});
