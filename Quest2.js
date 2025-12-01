const raw = document.querySelector("pre").textContent;
let gateNumber = 50;
let number;
let zeroCount = 0;
let aux;
const cleaned = raw.replace(/\s+/g, " ").trim();

const result = cleaned.split(" ");
for (let i = 0; i < result.length; i++) {
  if (result[i].startsWith("R")) {
    number = Number(result[i].slice(1));
    if (number >= 100) {
      zeroCount += parseInt(number / 100);
    }
    if (gateNumber + (number % 100) >= 100) {
      zeroCount++;
    }
    gateNumber = (gateNumber + number) % 100;
  } else if (result[i].startsWith("L")) {
    number = Number(result[i].slice(1));

    if (number >= 100) {
      zeroCount += parseInt(number / 100);
    }

    if (gateNumber - (number % 100) <= 0 && gateNumber !== 0) {
      zeroCount++;
    }
    gateNumber = (gateNumber - (number % 100) + 100) % 100;
  }
}

console.log(zeroCount);
