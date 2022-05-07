// exports.average = (numbers) => {
//   if (numbers.length === 0) return 0;
//   return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
// };

// module.exports = { average }; // { average: average }

// module.exports = (numbers) => {
//   if (numbers.length === 0) return 0;
//   return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
// };

const PI = 3.1415;

// const average = (numbers) => {
//   if (numbers.length === 0) return 0;
//   return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
// };

// const circleArea = (r) => PI * Math.pow(r, 2);

// module.exports = { average, circleArea };

exports.average = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
};

exports.circleArea = (r) => PI * Math.pow(r, 2);
