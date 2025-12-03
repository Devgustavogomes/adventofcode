const raw = document.querySelector("pre").textContent;
const inputs = raw.split(",");
const invalidIds = [];

let s, mid, left, right;

for (let i = 0; i < inputs.length; i++) {
  const [initStr, finishStr] = inputs[i].split("-");
  const init = Number(initStr);
  const finish = Number(finishStr);

  for (let j = init; j <= finish; j++) {
    s = j.toString();

    for (let size = 1; size < s.length; size++) {
      if (s.length % size !== 0) continue;

      const block = s.slice(0, size);
      const repetitions = s.length / size;

      if (block.repeat(repetitions) === s && repetitions >= 2) {
        invalidIds.push(j);
      }
    }
  }
}
console.log(invalidIds);
const totalInvalids = invalidIds.reduce(
  (totalValue, currentValue) => totalValue + currentValue,
  0
);
console.log(totalInvalids);
