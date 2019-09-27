export const endpointFormatDate = (
  startTime: string,
  endTime: string
): string => {
  return `startTime=${new Date(startTime).toISOString()}&endTime=${new Date(
    endTime
  ).toISOString()}`;
};
