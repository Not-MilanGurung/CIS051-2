// 1. Question: How can you use an if/else statement in JavaScript to check if a number is positive or
// negative? Provide a code example for both cases.
check_even_odd = (n) => {
    if (n%2 == 0){
        console.log(`${n} is even`);
    }
    else {
        console.log(`${n} is odd`);
    }
}
check_even_odd(23);
check_even_odd(78);

// 2. Question: Write a JavaScript program to check if a user is eligible to vote (18 years or older) using
// if/else statement. Provide the code to handle both cases.
voting_eligibility = (age) => {
    if (age >= 18){
        console.log(`A ${age} year old is eligible for voting`);
    } else {
        console.log(`A ${age} year old can not vote`);
    }
}
voting_eligibility(43);
voting_eligibility(17);


// 3. Question: Create a switch case to determine the day of the week based on a given number (1-7).
// Assume 1 is Sunday and 7 is Saturday.
day_of_week = (num) =>{
    let day = "";
    switch(num) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thrusday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Noday";
    }
    console.log(`The number ${num} corelates to the day ${day}`);
}

day_of_week(2);
day_of_week(7);
day_of_week(0);

// 4. Question: How can you use an if/else statement to check if a given string is longer than 10
// characters or not?
longer_than_10 = (str) => {
    if (str.length > 10){
        console.log(`The given string:${str}  is longer than 10 characters`);
    } else {
        console.log(`The string: ${str} is not longer than 10 character`);
    }
}

longer_than_10("My name is milan");
longer_than_10("Blah Bla");

// 5. Question: Write a JavaScript program to determine the grade of a student based on their exam
// score using if/else statement. Assume scores are in the range of 0-100.
function grading(mark) {
    let res = "";
    if (mark >= 90){
        res = "A+";
    } else if (mark >= 70) {
        res = "A";
    } else if (mark >= 60) {
        res = "B";
    } else if (mark >= 50) {
        res = "C";
    } else if (mark >= 40) {
        res = "D";
    } else if (mark >= 30) {
        res = "E"; 
    } else {
        res = "F"
    }
    console.log(`${mark} is a ${res} grade`);
}

grading(45);
grading(70);

// 6. Question: Write a code that takes a month number (1-12) as input and returns the number of days
// in that month using switch case.
days_in_month = (month) => {
    let days = 0;
    switch(month){
        case 1:
            days = 31;
            break;
        case 2:
            days = 28;
            break;
        case 3:
            days = 31;
            break;
        case 4:
            days = 30;
            break;
        case 5:
            days = 31;
            break;
        case 6:
            days = 30;
            break;
        case 7:
            days = 31;
            break;
        case 8:
            days = 31;
            break;
        case 9:
            days = 30;
            break;
        case 10:
            days = 31;
            break;
        case 11:
            days = 30;
            break;
        case 12:
            days = 31;
            break;
        default:
            days = null;
    }
    console.log(`Month ${month} has ${days} days`);
}

days_in_month(2);
days_in_month(10);

// 7. Question: How can you use an if/else statement to check if a given year is a leap year or not?
// Hint: formula for leap year: (year % 4 === 0 &amp;&amp; year % 100 !== 0) or (year % 400 === 0 )
leap_year = (year) => {
    if (year % 400 === 0){
        console.log(`${year} is a leap year`);
    } else if (year % 4 === 0 && year % 100 != 0){
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

leap_year(8);
leap_year(10);
leap_year(200);
leap_year(1200);


// 8. Question: Create a JavaScript program that determines if a given variable is an array or not, using
// if/else statement.
check_for_array = (arr) => {
    if (Array.isArray(arr)){
        return true;
    } else {
        return false;
    }
}
let a = 5;
let b = ['Milan', 6];
console.log(`${a} ${check_for_array(a) ? "is" : "is not"} a array`);
console.log(`${b} ${check_for_array(b) ? "is" : "is not"} a array`);

// 9. Question: Write a JavaScript function to calculate the discount amount based on the purchase
// amount using switch case. If the purchase amount is less than 100, apply a 5% discount; otherwise,
// apply a 10% discount.
discount_calculator = (purchace) => {
    let discount = 0;
    switch(purchace < 100){
        case true:
            discount = 5;
            break;
        case false:
            discount = 10;
            break;
    }
    return discount;
}
console.log(`The discount rate for purchace of ${30} is ${discount_calculator(30)}%`);
console.log(`The discount rate for purchace of ${140} is ${discount_calculator(140)}%`);

// 10. Question: Implement a JavaScript program to determine the type of a variable (string, number,
// boolean, object, undefined, null) using if/else statements.
getTypeOf = (variable) => {
    if (typeof variable == 'string'){
        return 'string';
    } else if (typeof variable == 'number'){
        return 'number';
    } else if (typeof variable == 'boolean'){
        return 'boolean';
    } else if (typeof variable == 'object'){
        if (variable === null){
            return 'null';
        } else {
            return 'object';
        }
    } else if (typeof variable == 'undefined'){
        return 'undefined';
    } else {
        return 'unknown';
    }
}

console.log(`${a} is ${getTypeOf(a)}`);
console.log(`${b} is ${getTypeOf(b)}`);
a = true;
console.log(`${a} is ${getTypeOf(a)}`);
a = "milan";
console.log(`${a} is ${getTypeOf(a)}`);