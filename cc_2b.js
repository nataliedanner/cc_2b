let itemName = "Energy Drink";
console.log(itemName);

let currentStock = 100;
let reorderLevel = 50;
let targetStock = 200;
let weeklyDemand = 75;
let supplierLeadTimeWeeks = 1;

let weeksOfCover = weeklyDemand > 0 ? (currentStock / weeklyDemand): Infinity;
console.log(weeksOfCover.toFixed(2));

let stockDeficit = Math.max(0, targetStock-currentStock);
