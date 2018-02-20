module.exports = function solveEquation(equation) {
  let split = equation.split(' ');
  let a = Number(split[0]);
  let b = Number(split[3].concat(split[4]));
  let c = Number(split[7].concat(split[8]));

  let discr = b * b - 4 * a * c;
  let firstRoot = Math.round((-1 * b + Math.sqrt(discr)) / (2 * a));
  let secondRoot = Math.round((-1 * b - Math.sqrt(discr)) / (2 * a));
  return [firstRoot, secondRoot].sort((a, b) => a - b);
};
