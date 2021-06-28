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

// Lab 9.6
// function draw(n) {
//     let sum = "";
//     for (let i = 1; i <= n; i++) {
//         sum += "*"
//         console.log(sum);
//     }
// }
// draw(4);

// Lab 9.7
// for (let i = 2; i <= 12; i++) {
//     for (let j = 1; j <= 12; j++) {
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
//     console.log("----------------------------");
// }

// Lab 9.8
// let sum = 0;
// let count = 0;
// while (true) {
//     let num = +prompt("input num");
//     if (!num || num < 0) break;
//     sum += num;
//     count++;
// }
// alert(`sum = ${sum}`);
// alert(`avg = ${sum / count}`);

// Lab 9.9 
// let player1Num = prompt("player1 input num (1-99)");
// if (isNumber(player1Num) && player1Num >= 1 && player1Num <= 99) {
//     let count = 0;
//     while (true) {
//         count++;
//         let player2Num = prompt("player2 guess num (1-99)");
//         if (isNumber(player2Num) && player2Num >= 1 && player2Num <= 99) {
//             if (isNumber(player2Num) && +player2Num === +player1Num) {
//                 alert("ถูกต้อง");
//                 alert(`ยินดีด้วยคุณทายถูกภายใน ${count} รอบ`);
//                 break;
//             } else if (isNumber(player2Num) && +player2Num > +player1Num) alert("มากกว่าคำตอบ");
//             else if (isNumber(player2Num) && +player2Num < +player1Num) alert("น้อยกว่าคำตอบ");
//         } else alert("คุณไม่ได้ใส่ตัวเลข หรือ เลขไม่ได้อยู่ระหว่าง 1-99");
//     }
// } else alert("คุณไม่ได้ใส่ตัวเลข หรือ เลขไม่ได้อยู่ระหว่าง 1-99");

// Lab 9.10
// for (let i = 1; i <= 100; i++) {
//     let round = 0
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0) round++;
//     }    
//     if (round === 2) {
//         console.log(i);
//         console.log("-------------------------")
//     }
// }