import { QuestradeClient } from './QuestradeClient';

export async function Questrade(token: string) {
  const client = new QuestradeClient(token);
  client.on('ready', (qtobj: QuestradeClient) => qtobj);
}
