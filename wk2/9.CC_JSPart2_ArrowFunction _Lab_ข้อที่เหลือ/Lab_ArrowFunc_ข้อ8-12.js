// Lab 3.8
// const calFootballScore = (win, lose, draw) => win * 3 + lose * 0 + draw * 1;
// const winMatch = prompt("ชนะกี่ match");
// const loseMatch = prompt("แพ้กี่ match");
// const drawMatch = prompt("เสมอกี่ match");
// alert(`คะแนนรวม = ${calFootballScore(winMatch, loseMatch, drawMatch)}`);


//  Lab 3.9
// const isLeapYear = year => {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(`ปี ค.ศ. ${year} เป็น leap year`);
//             return true;
//         } else {
//             console.log(`ปี ค.ศ. ${year} ไม่เป็น leap year`);
//             return false;
//         }
//     } else if (year % 4 ===0) {
//         console.log(`ปี ค.ศ. ${year} เป็น leap year`);
//         return true;
//     } else {
//         console.log(`ปี ค.ศ. ${year} ไม่เป็น leap year`);
//         return false;
//     }
// }
// const inputYear = prompt("ใส่ปี ค.ศ.");
// isLeapYear(inputYear);


// Lab 3.10 
// const calDayAge = year => {
//     let day = 0;
//     for (let i = +year; i <= 2020; i++) {
//         if (isLeapYear(i)) {
//             day += 366;
//             console.log(`${i} = 366 leap year`);
//         } else {
//             day += 365;
//             console.log(`${i} = 365`);
//         }
//     }
//     return day;
// }
// const inputBirthdayYear = prompt("ใส่ปี ค.ศ. เกิด");
// console.log(`เกิดมาแล้ว ${calDayAge(inputBirthdayYear)} วัน`);



// Lab 3.11
// const convertToCelcius = temp => (temp - 32) * 5 / 9
// const inputTemp = +prompt("input temp in farenheit");
// console.log(convertToCelcius(inputTemp));


// Lab 3.12
// const factorial = num => {
//     let result = 1;
//     for (let i = +num; i >= 1; i--) {
//         result = result * i;
//     }
//     return result;
// }
// const inputFactNum = prompt("ใส่ตัวเลขที่ต้องการทำ factorial");
// console.log(factorial(inputFactNum));
