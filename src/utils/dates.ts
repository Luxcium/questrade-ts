export const formatDate: (date: string | Date) => string = (
  date: string | Date
) => {
  return new Date(date).toISOString();
};
