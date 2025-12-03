const raw = document.querySelector("pre").textContent;
const inputs = raw.split("\n");

let bank, firstBattery, secondBattery, finalBattery, biggerIndex, partOfBank;

const joltage = [];

for (let i = 0; i < inputs.length - 1; i++) {
  bank = inputs[i];
  console.log(bank);
  firstBattery = Number(bank[0]);
  biggerIndex = 0;

  for (let k = 1; k < bank.length - 1; k++) {
    if (Number(bank[k]) > firstBattery) {
      firstBattery = Number(bank[k]);
      biggerIndex = k;
    }
  }

  partOfBank = bank.slice(biggerIndex + 1);
  secondBattery = Number(partOfBank[0]);

  for (let k = 1; k < partOfBank.length; k++) {
    if (Number(partOfBank[k]) > secondBattery) {
      secondBattery = Number(partOfBank[k]);
    }
  }

  finalBattery = String(firstBattery) + String(secondBattery);
  joltage.push(Number(finalBattery));
}

const totalJoltage = joltage.reduce(
  (totalValue, currentValue) => totalValue + currentValue,
  0
);
console.log(totalJoltage);
