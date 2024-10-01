// Finding the Average Marks of Students
const marks = [85, 97, 44, 37, 76, 60];
const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
const averageMarks = totalMarks / marks.length;
console.log(`Average Marks: ${averageMarks.toFixed(2)}`); // Displaying to 2 decimal places

// Calculating Final Prices After 10% Discount
const prices = [250, 645, 300, 900, 50];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices); // Final prices after applying the discount

// Managing an Array of Companies
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift(); // Remove the first company
const uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) {
    companies.splice(uberIndex, 1, "Ola"); // Replace "Uber" with "Ola"
}
companies.push("Amazon"); // Add Amazon at the end
console.log(companies); // Final array of companies
