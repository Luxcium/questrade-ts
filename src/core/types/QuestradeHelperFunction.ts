import { IQuestradeAPIOptions, QuestradeClass } from '.';
export async function QuestradeHelperFunction(
  opts: IQuestradeAPIOptions,
  cb?: (qt: QuestradeClass) => Promise<QuestradeClass>
) {
  return new Promise(
    (resolve: (qt: QuestradeClass) => any, _reject: (error: Error) => any) => {
      const qt = new QuestradeClass(opts);
      qt.on('ready', async () => {
        if (typeof cb === 'function') {
          console.log('ready', 'ready');
          return resolve(await cb(qt));
        }
        return resolve(qt);
      });
    }
  );
}
export const tokenConnection: (
  token: string
) => Promise<{ questrade: QuestradeClass }> = async (token: string) => {
  const questrade = await QuestradeHelperFunction({ seedToken: token });
  return { questrade };
};
