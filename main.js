
// 1).
// const userInput = parseInt(prompt("Please enter a positive number between 50 and 100:"));

// if (isNaN(userInput) || userInput < 50 || userInput > 100) {
//   console.log("Invalid input. Please enter a positive number between 50 and 100.");
// } else {
//   let sum = 0;
//   let count = 0;

//   for (let i = 1; i <= userInput; i++) {
//     if (userInput % i === 0) {
//       sum += i;
//       count++;
//     }
//   }

//   const mean = sum / count;

//   console.log("Arithmetic mean of the divisors:", mean);
// }



// 2).
// const userInput1 = parseInt(prompt("Enter the first number between 70 and 140:"));
// const userInput2 = parseInt(prompt("Enter the second number between 70 and 140:"));
// const userInput3 = parseInt(prompt("Enter the third number between 70 and 140:"));

// const isValidInput = (num) => !isNaN(num) && num >= 70 && num <= 140;

// if (!isValidInput(userInput1) || !isValidInput(userInput2) || !isValidInput(userInput3)) {
//   console.log("Invalid input. Please enter three numbers between 70 and 140.");
// } else {
//   const countDivisors = (number) => {
//     let count = 0;
//     for (let i = 1; i <= number; i++) {
//       if (number % i === 0) {
//         count++;
//       }
//     }
//     return count;
//   };

//   const divisorsCount1 = countDivisors(userInput1);
//   const divisorsCount2 = countDivisors(userInput2);
//   const divisorsCount3 = countDivisors(userInput3);

//   let numberWithMostDivisors = userInput1;
//   let maxDivisors = divisorsCount1;

//   if (divisorsCount2 > maxDivisors) {
//     numberWithMostDivisors = userInput2;
//     maxDivisors = divisorsCount2;
//   }

//   if (divisorsCount3 > maxDivisors) {
//     numberWithMostDivisors = userInput3;
//     maxDivisors = divisorsCount3;
//   }

//   console.log("Number with the most divisors:", numberWithMostDivisors);
// }


// 3).
// let count = 0;
// let result = 1;

// for (let i = 10; i <= 180; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     count++;
//     result *= i;
//   }
// }

// console.log("Count of multiples of 3 or 5:", count);
// console.log("Result of multiplication:", result);


// // 4)
// const userInput1 = parseFloat(prompt("Enter the first number:"));
// const userInput2 = parseFloat(prompt("Enter the second number:"));
// const userInput3 = parseFloat(prompt("Enter the third number:"));
// const userInput4 = parseFloat(prompt("Enter the fourth number:"));

// const isValidInput = (num) => !isNaN(num);

// if (!isValidInput(userInput1) || !isValidInput(userInput2) || !isValidInput(userInput3) || !isValidInput(userInput4)) {
//   console.log("Invalid input. Please enter numeric values.");
// } else {
//   let largestNumber = userInput1;

//   if (userInput2 > largestNumber) {
//     largestNumber = userInput2;
//   }

//   if (userInput3 > largestNumber) {
//     largestNumber = userInput3;
//   }

//   if (userInput4 > largestNumber) {
//     largestNumber = userInput4;
//   }

//   console.log("The largest number is:", largestNumber);
// }



// // 5).
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// const email = prompt("Enter your email address:");
// const image = prompt("Enter the image address:");

// const htmlString = `
//   <div class="card">
//     <img src="${image}" alt="Profile Picture">
//     <div class="details">
//       <h2>${firstName} ${lastName}</h2>
//       <p>Email: ${email}</p>
//     </div>
//   </div>
// `;

// document.body.innerHTML = htmlString;


// // 6).
// const a = 3;
// const b = 2;
// const c = -5;

// const discriminant = b ** 2 - 4 * a * c;

// if (discriminant > 0) {
//   const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//   console.log("x1 =", x1);
//   console.log("x2 =", x2);
// } else if (discriminant === 0) {
//   // One real root
//   const x = -b / (2 * a);

//   console.log("x =", x);
// } else {
//   // No real roots
//   console.log("No real roots exist.");
// }

// // 7)
// const side1 = parseFloat(prompt("Enter the length of side 1:"));
// const side2 = parseFloat(prompt("Enter the length of side 2:"));

// const isValidInput = (num) => !isNaN(num) && num > 0;

// if (!isValidInput(side1) || !isValidInput(side2)) {
//   console.log("Invalid input. Please enter positive numeric values.");
// } else {
//   const hypotenuse = Math.sqrt(side1 ** 2 + side2 ** 2);

//   console.log("Length of the hypotenuse:", hypotenuse);
// }


// //  8).
// const number = parseInt(prompt("Enter a number from 0 to 200:"));

// const isValidInput = (num) => !isNaN(num) && num >= 0 && num <= 200;

// if (!isValidInput(number)) {
//   console.log("Invalid input. Please enter a number from 0 to 200.");
// } else {
//   let isPrime = true;

//   if (number === 0 || number === 1) {
//     isPrime = false;
//   } else {
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }

//   if (isPrime) {
//     console.log(number, "is a prime number.");
//   } else if (number === 0 || number === 1) {
//     console.log(number, "is neither prime nor composite.");
//   } else {
//     console.log(number, "is a composite number.");
//   }
// }



// // 9).

// const name = prompt("Enter your name:");
// const surname = prompt("Enter your surname:");
// const age = parseInt(prompt("Enter your age:"));
// const email = prompt("Enter your email:");

// const isValidInput = (input) => input !== null && input.trim() !== "";

// if (!isValidInput(name) || !isValidInput(surname) || isNaN(age) || !isValidInput(email)) {
//   console.log("Invalid input. Please enter valid information.");
// } else {
//   const message = `Hello, I am ${name} ${surname}. I am ${age} years old, and my email is "${email}".`;

//   console.log(message);
// }



// // 10).
// function isPrime(number) {
//   if (number < 2) {
//     return false;
//   }
  
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
  
//   return true;
// }

// for (let i = 10; i <= 90; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }


// // 11)
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomColor() {
//   const r = getRandomNumber(0, 255);
//   const g = getRandomNumber(0, 255);
//   const b = getRandomNumber(0, 255);
//   return `rgb(${r},${g},${b})`;
// }

// for (let i = 0; i < 10; i++) {
//   const randomColor = getRandomColor();
//   console.log(randomColor);
// }



// 12).
// var rows = 8;
// for (let i = rows; i >= 1; i--) {
//     let row = '';
//     for (let j = i; j >= 1; j--) {
//         row += '*';
//     }
//     console.log(row);
// }



// 13).
//   function buildUpsideDownPyramid(height) {
//   for (let i = height; i > 0; i--) {
//     let row = '';
//     row += ' '.repeat(height - i);
//     row += '*'.repeat(2 * i - 1);
//     console.log(row);
//   }
// }

// const pyramidHeight = 10;
// buildUpsideDownPyramid(pyramidHeight);




// // 14).
// function generateEvenNumbers() {
//   const iterations = parseInt(prompt("Enter the number of iterations:"));

//   if (isNaN(iterations)) {
//     console.log("Invalid input. Please enter a number.");
//     return;
//   }

//   let evenNumbers = [];
//   let sum = 0;

//   for (let i = 0; i < iterations; i++) {
//     const randomNumber = Math.floor(Math.random() * (371 - 135 + 1)) + 135;

//     if (randomNumber % 2 === 0) {
//       evenNumbers.push(randomNumber);
//       sum += randomNumber;
//     }
//   }

//   console.log("Even numbers generated:", evenNumbers);

//   if (evenNumbers.length === 0) {
//     console.log("No even numbers were generated.");
//   } else {
//     const mean = sum / evenNumbers.length;
//     console.log("Arithmetic mean of even numbers:", mean);
//   }
// }

// generateEvenNumbers();


// // 15
//   function printSnowflakeTriangle() {
//   const snowflakesOnSide = parseInt(prompt("Enter the number of snowflakes on one side of the triangle:"));

//   if (isNaN(snowflakesOnSide)) {
//     console.log("Invalid input. Please enter a number.");
//     return;
//   }

//   for (let i = 1; i <= snowflakesOnSide; i++) {
//     let row = '';

//     row += ' '.repeat(snowflakesOnSide - i);

//     row += '*'.repeat(i * 2 - 1);

//     console.log(row);
//   }
// }

// printSnowflakeTriangle();



// // 16).

// var userAmount = Number(prompt("Enter your amount"));
// var text = "";

// for (; userAmount >= 100;) {
//     text += 100 + "₾ ";
//     userAmount -= 100;
// }

// for (; userAmount >= 50;) {
//     text += 50 + "₾ ";
//     userAmount -= 50;
// }

// for (; userAmount >= 20;) {
//     text += 20 + "₾ ";
//     userAmount -= 20;
// }

// for (; userAmount >= 10;) {
//     text += 10 + "₾ ";
//     userAmount -= 10;
// }

// for (; userAmount >= 5;) {
//     text += 5 + "₾ ";
//     userAmount -= 5;
// }

// console.log(text);



// // 17).
// function convertCurrency(amount, currencyType) {
//     const exchangeRates = {
//       dollars: 0.39,   
//       rubles: 28.89,   
//       pounds: 0.31     
//     };
  
//     if (!exchangeRates.hasOwnProperty(currencyType)) {
//       console.log("Invalid currency type.");
//       return;
//     };
  
//     const convertedAmount = amount * exchangeRates[currencyType];
//     return convertedAmount;
//   };
  
//   const amountInGEL = 100;
//   const currencyType = 'dollars';
//   const convertedAmount = convertCurrency(amountInGEL, currencyType);
  
//   if (convertedAmount !== undefined) {
//     console.log(`Converted amount: ${convertedAmount} ${currencyType.toUpperCase()}`);
//   }