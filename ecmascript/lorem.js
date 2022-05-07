const PI = 3.1415;

export const average = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
};

export const circleArea = (r) => PI * Math.pow(r, 2);

export default PI;
