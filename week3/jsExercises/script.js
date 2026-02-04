// Exercise 1: Variables and Data Types
// Task: Declare variables for a person's name, age, and email. Assign values of the appropriate data
// types (string, number). Use `console.log()` to print these values to the console
let name = "John";
let age = 15;
let email = "john@roblox.eu";

console.log(
    `
    Name: ${name}
    Age: ${age}
    Email: ${email}
    `
);

// Exercise 2: Functions and Conditional Statements
// Task: Create a function called `isAdult(age)` that takes a person's age as an argument and returns
// "Adult" if the age is 18 or older, or "Minor" if the age is less than 18. Call the function with different
// ages and display the result using `console.log()`

function isAdult(age) {
    if (age >= 18){
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(`Age ${age} is ${isAdult(age)}`);
age = 97;
console.log(`Age ${age} is ${isAdult(age)}`);

// Exercise 3: Loops
// Task: Write a loop that counts from 1 to 10 and displays each number in the console. Use a `for` loop
// to achieve this.
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Exercise 4: Arrays and Loops
// Task: Create an array of your favorite fruits. Use a `for` loop to iterate through the array and display
// each fruit in the console.
let fruits = ['apple', 'banana', 'citrus', 'durian'];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Exercise 5: Conditional Statements and Functions
// Task: Write a function called `isEven(number)` that takes a number as an argument and returns
// "Even" if the number is even or "Odd" if it's odd. Call the function with different numbers and
// display the result using `console.log()`.
function isEven(number){
    if (number % 2 == 0) return "Even";
    else return "Odd";
}
let num = 57;
console.log(`The number ${num} is ${isEven(num)}`);
num = 128;
console.log(`The number ${num} is ${isEven(num)}`);

// Exercise 6: Conditional Statements and Loops
// Task: Create a `for` loop that iterates from 1 to 20. Inside the loop, use conditional statements to
// print "Even" if the current number is even and "Odd" if it's odd
for (let i = 1; i <= 20; i++){
    let out = `${i} is `;
    if (i%2 == 0) out += "Even";
    else out += "Odd";
    console.log(out);
}

// Exercise 7: Functions, Arrays, and Loops
// Task: Create an array of numbers. Write a function called `sumArray(array)` that takes an array of
// numbers as an argument and returns the sum of all the numbers. Call the function with your array
// and display the result using `console.log()`.
let nums = [23, 54, 65,2, 65, 24, 54];
console.log(`The sum of ${nums} is ${sumArray(nums)}`);

function sumArray(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

// Exercise 8: Nested Loops
// Task: Use nested loops (a `for` loop within another `for` loop) to create a multiplication table from 1
// to 10. Display the results in the console.
for (let i = 1; i <= 10; i++){
    console.log(`Mult table for ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}