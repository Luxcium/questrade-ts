function remaningTimeStringFunc(secsRemaning: number) {
  const minutes = (secsRemaning / 60).toFixed(0);
  const seconds = (secsRemaning % 60).toFixed(0);

  if (secsRemaning >= 60) {
    return `${minutes}min ${seconds}sec`;
  }
  return `${seconds}sec`;
}

type RemaningTimeString = (secsRemaning: number) => string;

const remaningTimeString: RemaningTimeString = remaningTimeStringFunc;

export { remaningTimeString };
