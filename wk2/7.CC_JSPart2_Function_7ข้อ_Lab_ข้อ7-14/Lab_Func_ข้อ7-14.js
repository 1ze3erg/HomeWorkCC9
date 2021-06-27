function isNumber(num) {
    // initail value
    let isZero = false;
    // check zero number
    if (+num === 0) {
        if (num === null) isZero = false;
        else if (num[0] === "0" || num.trim() !== "") isZero = true;
        else isZero = false;
    } else isZero = false;
    // check number or NaN
    const isNumber = !!+num ? true : isZero ? true : false
    return isNumber;
}


// Lab 1.7
// function min(a, b) {
//     if (a < b) return a;
//     else return b;
// }
// alert(min(10, 20));

// Lab 1.8
// function login(username, password) {
//     if (username === "admin" && password === "P@ssw0rd") {
//         alert("Success");
//     } else {
//         alert("Fail");
//     }
// }
// login("admin", "P@ssw0rd");


// Lab 1.9 ***
// function isPrimeNumber(num) {
//     let round = 0
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) round++;
//     }    
//     if (round === 2) return true
//     else return false;
// }
// function loopPrime(last) {
//     for (let i = 1; i <= last; i++) {
//         let round = 0
//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) round++;
//         }    
//         if (round === 2) {
//             console.log(`จำนวนเฉพาะ = ${i}`);
//         }
//     }
// }
// const inputNum = prompt("input number for check prime number and loop prime number");
// alert(`${inputNum} is ${isPrimeNumber(+inputNum)} prime number`);
// loopPrime(inputNum);


// Lab 1.10
// function squareNum(num) {
//     const result = num * num;
// }
// console.log(squareNum(2)); // * undefined เพราะ ไม่ได้ return


// Lab 1.11
// function sayHi(age) {
//     if (age < 12) alert('Hi kid');
// }
// console.log(sayHi); // * show ทั้ง function
// console.log(sayHi(10)); // ** alert Hi kid และ log undefined (no return)

// function sayHi(name) {
//     if (name) {
//       alert('Hi ' + name);
//       return;
//     } else {
//       return 'Who are you';
//     }
//   }
//   console.log(sayHi('John')); // *** alert Hi John และ log undefined (return เปล่าๆ)
//   console.log(sayHi()); // **** log Who are you


// Lab 1.12
// function getLongText() {
//     return 
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
// }
// console.log(getLongText()); // * undefined เพราะ js insert ; auto ทั้ง 2 บรรทัด


// Lab 1.13

// ใช้ if แต่ไม่ใช้ else
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } 
//     return confirm('Did parents allow you?');
// }
// alert(checkAge(10));

// ใช้ ? แทน if
// function checkAge(age) {
//     let result = age > 18 ? true : confirm('Did parents allow you?')
//     return result;
// }
// alert(checkAge(17));

// ใช้ || แทน if
// function checkAge(age) {
//     let result = age > 18 || confirm('Did parents allow you?')
//     return result;
// }
// alert(checkAge(20));


// Lab 1.14
// function max(a, b ,c, d) {
//     let max = a;
//     if (b > max) max = b;
//     if (c > max) max = c;
//     if (d > max) max = d;
//     if (max === undefined) return max;
//     return +max;
// }
// console.log(max());
// console.log(max(2));
// console.log(max(3, 1));
// console.log(max(7, 3, 9, 2));
// console.log(max("abc", 3, 9, 2));