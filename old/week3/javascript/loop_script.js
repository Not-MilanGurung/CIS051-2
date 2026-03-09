console.log(`\n\n`);
console.log('Loop scripts\n');

// Question 1:
// **Q: Write a for loop that prints numbers from 1 to 5 in the console.**
console.log('\nQuestion 1');
let i = 1;
for(i = 1; i <= 5; i++){
    console.log(i);
}

// Question 2:
// **Q: Using a while loop, print even numbers from 2 to 10 (inclusive) in the
// console.**
console.log('\nQuestion 2');
i = 2;
while(i <= 10){
    if (i%2 == 0){
        console.log(i);
    }
    i++;
}

// Question 3:
// **Q: Write a for loop to calculate the sum of numbers from 1 to 10.**
console.log('\nQuestion 3');
let sum = 0;
for(i = 1; i <= 10; i++){
    sum += i;
}
console.log(`Sum: ${sum}`);

// Question 4:
// **Q: Using a while loop, find the factorial of a given number (e.g., 5).**
console.log('\nQuestion 4');
fact = (num) => {
    let res = 1;
    while(num > 1){
        res *= num--;
    }
    return res;
}
console.log(`The factorial of 4 is ${fact(4)}`);

// Question 5:
// **Q: Write a for loop that prints the square of numbers from 1 to 5.**
console.log('\nQuestion 5');
for(i = 1; i <= 5; i++){
    console.log(`${i**2}`);
}

// Question 6:
// **Q: Using a while loop, print the cube of numbers from 1 to 5.**
console.log('\nQuestion 6');
i = 1;
while(i <= 5){
    console.log(`${i**3}`);
    i++;
}

// Question 7:
// **Q: Write a for loop to iterate through an array of names and print each name
// in the console.**
console.log('\nQuestion 7');
let arr = ['Dante', 'Vergil', 'Nero'];
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// Question 8:
// **Q: Using a while loop, find the sum of elements in an array of numbers.**
console.log('\nQuestion 8');
arr = [96, 34, 42, 65];
sum = 0;
for(i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(`The sum of ${arr} is ${sum}`);

// Question 9:
// **Q: Write a for loop that prints the elements of an array in reverse order.**
console.log('\nQuestion 9');
for(i = arr.length -1; i >= 0; i--){
    console.log(arr[i]);
}

// Question 10:
// **Q: Using a while loop, find the largest number in an array of numbers.**
console.log('\nQuestion 10');
let largest = arr[0];
for(i = 1; i < arr.length; i++){
    if (arr[i] > largest){
        largest = arr[i];
    }
}
console.log(`The largest number in the array is ${largest}`);

// Question 11:
// **Q: Write a for loop to calculate the sum of all even numbers from 1 to 20.**
console.log('\nQuestion 11');
sum = 0;
for(i=1; i<=20; i++){
    if (i%2 == 0){
        sum += i;
    }
}
console.log(`The sum of even number from 1 to 20 is ${sum}`);

// Question 12:
// **Q: Using a while loop, find the product of all odd numbers from 1 to 15.**
console.log('\nQuestion 12');
sum = 0;
for(i=1; i <= 15; i++){
    if (i%2 != 0){
        sum += i;
    }
}
console.log(`The sum of odd number from 1 to 15 is ${sum}`);

// Question 13:
// **Q: Write a for loop to print the following pattern:**
// *
// **
// ***
// ****
// *****
console.log('\nQuestion 13');
for(i=1; i <= 5; i++){
    console.log("*".repeat(i));
}

// Question 14:
// **Q: Using a while loop, print the numbers from 10 to 1 in descending order.**
console.log('\nQuestion 14');
for(i = 10; i > 0; i--){
    console.log(i);
}

// Question 15:
// **Q: Write a for loop to calculate the factorial of a given number (e.g., 6).**
console.log('\nQuestion 15');
fact = (num) => {
    let res = 1;
    for(i = 1; i <= num; i++){
        res *= i;
    }
    return res;
}
console.log(fact(6));

// Question 16:
// **Q: Using a while loop, find the sum of digits of a given number (e.g., 123).**
console.log('\nQuestion 16');
let num = 153;
sum = 0;
while(num > 0){
    sum += num % 10;
    num = Math.floor(num/10);
}
console.log(`Sum of digits of is ${sum}`);

// Question 17:
// **Q: Write a for loop to print the following pattern:**
// ```
// 55555
// 4444
// 333
// 22
// 1
console.log('\nQuestion 17');
for(i=5; i > 0; i--){
    console.log(`${i}`.repeat(i));
}

// Question 18:
// **Q: Using a while loop, print the first 10 Fibonacci numbers.**
console.log(`\nQuestion 18`);
a = 1;
b = 1;
let c = 0;
i = 0;
while(i < 10){
    console.log(a);
    c = a + b;
    a = b;
    b = c;
    i++;
}

// Question 19:
// **Q: Write a for loop to find and print the prime numbers between 1 and 20.**
console.log(`\nQuestion 19`);
prime = (num) => {
    let prime = true;
    let i = 2;
    while (i <= num/2){
        if (num % i == 0) {
            prime = false;
            break;
        }
        i++;
    }
    return prime;
}
for (i =1; i <= 20; i++){
    prime(i) ? console.log(i) : "";
}

// Question 20:
// **Q: Using a while loop, reverse a given number (e.g., 12345).**
console.log(`\nQuestion 20`)
num = 12345;
let revnum = 0;
while(num > 0){
    revnum = revnum * 10 + (num % 10);
    num = Math.floor(num/10);
}
console.log(revnum);
