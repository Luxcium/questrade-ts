import { questrade } from './core/functions/private/questrade';

export async function questradeApi(options: any) {
  return questrade(options);
}

export async function tokenConnection(seedToken: string) {
  const qt = await questrade(seedToken);
  return { questrade: qt, qt };
}
