const getScale = (): Array<number> => {
  const baseScale = 2;
  const scale: Array<number> = [baseScale];
  const steps = 18;
  let step = 2;
  while (step < steps) {
    const roundScale = scale[step - 2] + (Math.floor((step - 2) / 4) + 1) * 4;
    scale.push(roundScale);
    ++step;
  }
  return scale;
};

const spaces = getScale();

export default spaces;
