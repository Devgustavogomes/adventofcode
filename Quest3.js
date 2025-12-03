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

    if (s.length % 2 !== 0) continue;

    mid = Math.floor(s.length / 2);
    left = s.slice(0, mid);
    right = s.slice(mid);
    if (left === right) {
      invalidIds.push(j);
    }
  }
}
const totalInvalids = invalidIds.reduce(
  (totalValue, currentValue) => totalValue + currentValue,
  0
);
console.log(totalInvalids);
