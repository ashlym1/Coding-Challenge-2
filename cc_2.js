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

// Task 3: Working with Objects - Employee Records
let employee = {name: "Yazmin Hues",age: 21,department: "Marketing",isActive: true};
// Update the department property
employee.department = "Marketing";  // The department remains Marketing
// Add a new property: position
employee.position = "Creative Director";  // Adding a higher, creative position
// Log the updated object to the console
console.log(employee);  // Log the updated employee object

// Task 4: Array of Objects - Customer Database 
let customers =[ 
    { name: "Lili Joe",email: "lilijo23@gmail.com", purchaseAmount: 60},
    { name: "Jaded Doe", email: "jjdoe@gmail.com", purchaseAmount: 80 },
    { name : "Hera Smith", email: "herasm@gmail.com", purchaseAmount: 100}
];
//add a new customer to the array
customers.push({ name :"Henry Centella ", email:"hencentella@gmail.com", purchaseAmount: 140}); // New customer 
//log the entire customer list to the console
console.log(customers); // Log the updated customer list

// Task 5 : Object Methods - Order Processsing Systems 
let order = {
    orderId: 12345,
    customerName: "Lili Joe",
    amount: 60,
    // Method to calculate tax (assuming a 10% tax rate)
    calculateTax: function() {
        return this.amount * 0.10;  // Calculate 10% tax
         }
};
// Log the order details and tax amount 
console.log( "Order Details:",order); //Log order details 
console.log( "Tax Amount;",order.calculateTax()) // Log the Tax amount
