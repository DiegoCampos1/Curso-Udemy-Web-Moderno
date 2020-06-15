function findOutlier(integers) {
  let binary = integers.map((int, i) => Math.abs(int) % 2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 0) count++;
    if (count > 1) {
      return integers[binary.indexOf(1)];
    } else {
      return integers[binary.indexOf(0)];
    }
  }
}
