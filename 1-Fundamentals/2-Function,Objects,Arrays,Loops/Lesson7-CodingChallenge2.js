
const bills = [];
const tips = [];
const total = [];


function calculateTip(bill) {
    const tipValue = (bill >= 50 && bill < 300) ? bill * 0.15 : bill * .2;
    bills.push(bill);
    tips.push(tipValue);
    total.push(bill + tipValue);
}

calculateTip(100)
calculateTip(125)
calculateTip(555)
calculateTip(44)

console.log(bills, tips, total)


