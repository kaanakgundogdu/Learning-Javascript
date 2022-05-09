

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const tipValue = function (bill) {
    return (bill >= 50 && bill < 300) ? bill * 0.15 : bill * .2;
}

const calculatedAvg = function (arr) {
    let sums = 0;
    for (let i = 0; i < arr.length; i++) {
        sums += arr[i];
    }
    return sums / arr.length;
}

for (let bill = 0; bill < bills.length; bill++) {
    const tip = tipValue(bills[bill]);
    const total = tip + bills[bill]
    tips.push(tip);
    totals.push(total);
}

console.log(`Total tips: ${tips}`);
console.log(`Totals: ${totals}`);

console.log(`Bills avg: ${calculatedAvg(bills)}`);
console.log(`Bills avg: ${calculatedAvg(tips)}`);
console.log(`Bills avg: ${calculatedAvg(totals)}`);


