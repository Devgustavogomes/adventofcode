const raw = document.querySelector("pre").textContent;
let gateNumber = 50;
let number;
let zeroCount = 0;
const cleaned = raw.replace(/\s+/g, " ").trim();

const result = cleaned.split(" ");

for (let i = 0; i < result.length; i++) {
  if (result[i].startsWith("R")) {
    number = Number(result[i].slice(1));
    gateNumber = (gateNumber + number) % 100;
  } else if (result[i].startsWith("L")) {
    number = Number(result[i].slice(1));
    gateNumber = (gateNumber - number + 100) % 100;
  }
  if (gateNumber === 0) {
    zeroCount++;
  }
}

console.log(zeroCount);
