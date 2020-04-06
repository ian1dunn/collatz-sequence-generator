module.exports = (number) => {
  let n = number;
  let sequence = [];
  sequence.push(n);

  while (n > 1) {
    if (n % 2 === 0) {
      // Even
      n = n / 2;
      sequence.push(n);
    } else {
      n = 3 * n + 1;
      sequence.push(n);
    }
  }

  return sequence;
};
