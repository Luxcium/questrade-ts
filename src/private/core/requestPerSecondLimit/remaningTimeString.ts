export const remaningTimeString = (secsRemaning: number): string => {
  if (secsRemaning >= 60) {
    return (() => {
      const minutes = (secsRemaning / 60).toFixed(0);
      const minutesString = `${minutes}min`;
      const seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
      const secondString = `${seconds}sec`;
      const timeLeft = `${minutesString} ${secondString}`;
      return timeLeft;
    })();
  }
  // to avoid shadowing
  return (() => {
    const seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
    const secondString = `${seconds}sec`;
    const timeLeft = `${secondString}`;
    return timeLeft;
  })();
};
