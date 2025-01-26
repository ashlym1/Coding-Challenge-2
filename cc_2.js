// Task 1: Working with Arrays - Store Inventory

let products = ["Ceremonial Grade Matcha Powder", "Green Tea Wafer Cookies", "Green Tea Milk Spread", "Hibiscus Tea Bags", "Strawberry Wafer Cookies"];  // Array of Products

products.push("Strawberry Matcha Powder");  // Add a new product to the end of the array
products.pop();  // Remove the last product from the array

console.log(products);  // Log the updated product list to the console

// Task 2: Accessing and Modifying Arrays - Student Scores

let scores = [97, 60, 50, 80, 70];  // Array of student scores

// Update the second score in the array
scores[1] = 95;  // Changing the second score to 95

// Calculate the average of all scores
let average = scores.reduce((a, b) => a + b) / scores.length;  // Calculate average score

// Log the updated array and average score
console.log("Updated Scores: ", scores);  // Log updated scores
console.log("Average Score: ", average);  // Log average score

//Task 3: Working with obects - Employee Records 
let employee= {Name: "Yazmin Hues" , Age: 21, Department: "Marketing" , isActive: true };
// Update the department Property
employee.department="Marketing"; // The department reamins Marketing 
// Add a new property: position
employee.position = " Creative Director "; // Adding a higher, creative position
// Log the updated object to the console
console.log (employee); // Log the updated employee object