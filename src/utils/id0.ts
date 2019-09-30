export function void0(...param: any[]) {
  return void 0 && param;
}
export async function id0(
  funct: () => any,
  ...message: any
): Promise<void | any> {
  console.log(...message);
  try {
    return funct();
  } catch (error) {
    console.error(error.message);
  }
  return;
}
