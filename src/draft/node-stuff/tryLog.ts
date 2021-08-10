export async function tryLog(
  label: string,
  funct: (val?: any[]) => any,
  val?: any[],
) {
  try {
    const value = await funct(val);
    console.log(label, value);

    return value;
  } catch (error) {
    console.log('ERROR:', label, error.message);

    return error.message;
  }
}
