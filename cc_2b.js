let itemName = "Energy Drink";
console.log("Item Name:" , itemName);

let unitCost = 1.25
let currentStock = 25;
let reorderLevel = 50;
let targetStock = 200;
let weeklyDemand = 75;
let supplierLeadTimeWeeks = 1;

let weeksOfCover = weeklyDemand > 0 ? (currentStock / weeklyDemand): Infinity;
console.log("Weeks of Cover:" , weeksOfCover.toFixed(2));

let stockDeficit = Math.max(0, targetStock-currentStock);

let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
console.log("Recommended Reorder Quantity:" , reorderQuantity);

let estimatedReorderCost = reorderQuantity * unitCost;
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2));

let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks // true;
console.log("Reorder Now?" , reorderNow);