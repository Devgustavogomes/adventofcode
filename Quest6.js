const raw = document.querySelector("pre").textContent;
const inputs = raw.split("\n");

let bank,
  firstBattery,
  lastBattery,
  finalBattery,
  actuallyBatteryIndex,
  partOfBank;

const joltage = [];

for (let i = 0; i < inputs.length - 1; i++) {
  const tempJoltage = [];
  bank = inputs[i];
  firstBattery = bank[0];
  actuallyBatteryIndex = 0;

  for (let k = 1; k < bank.length - 11; k++) {
    if (bank[k] > firstBattery) {
      firstBattery = bank[k];
      actuallyBatteryIndex = k;
    }
  }

  tempJoltage.push(firstBattery);

  do {
    partOfBank = bank.slice(actuallyBatteryIndex + 1);

    bank = partOfBank;

    lastBattery = partOfBank[0];

    actuallyBatteryIndex = 0;

    for (let k = 1; k < partOfBank.length - (11 - tempJoltage.length); k++) {
      if (partOfBank[k] > lastBattery) {
        lastBattery = partOfBank[k];
        actuallyBatteryIndex = k;
      }
    }

    tempJoltage.push(lastBattery);
  } while (tempJoltage.length < 12);

  const result = tempJoltage.join("");

  joltage.push(Number(result));
}

const totalJoltage = joltage.reduce(
  (totalValue, currentValue) => totalValue + currentValue,
  0
);
console.log(totalJoltage);
