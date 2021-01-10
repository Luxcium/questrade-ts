import { Tedis } from 'tedis';

export function makeTedis(
  options?:
    | {
        host?: string | undefined;
        port?: number | undefined;
        password?: string | undefined;
        timeout?: number | undefined;
        tls?: { key: Buffer; cert: Buffer } | undefined;
      }
    | undefined,
): Tedis {
  return new Tedis(options);
}
