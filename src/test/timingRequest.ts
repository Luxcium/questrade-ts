import { promisify } from 'util';

export const sleep = async (ms: number) => promisify(setTimeout)(ms);

export const timingRequests = () => '';

export function timingLoop() {
  return (hertz: number = 25) => () => {
    const mappingLoop = () => {
      // *** mappingLoop -----------v
      setTimeout(async () => {
        // if some condition call again
        //
        //
        //
      }, 1000 / hertz);
      // *** mappingLoop -----------^
    };

    return () => mappingLoop();
  };
}
