export const remaningTimeString = (secsRemaning: number) => {
  if (secsRemaning >= 60) {
    return (() => {
      const minutes = (secsRemaning / 60).toFixed(0);
      const minutesString = `${minutes}min`;
      const seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
      const secondString = `${seconds}sec`;

      return `${minutesString} ${secondString}`;
    })();
  }
  // to avoid shadowing
  return (() => {
    const seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
    const secondString = `${seconds}sec`;

    return `${secondString}`;
  })();
};
