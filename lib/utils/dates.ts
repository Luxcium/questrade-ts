export const formatDate: (date: Date | string) => string = (
  date: Date | string,
) => {
  return new Date(date).toISOString();
};
