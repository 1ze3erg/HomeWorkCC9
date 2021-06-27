// Lab 2.3
// const checkPermission = function (role, pass, fail) {
//     if (role === "ADMIN") pass();
//     else fail();
// }
// const pass = () => alert("ACCESS GRANTED");
// const fail = () => alert("ACCESS DENIED");
// checkPermission("ADMIN", pass, fail);


// Lab 2.4
// function magic() {
//     console.log("Hello")
//     return function (x) {
//         return x * 42;
//     };
// }
// const magic = () => x => x*42
// const answer = magic(); // answer = function (x) {return x*42}
// console.log(answer); // * function (x) {return x*42}
// console.log(answer(1337)); // ** 56154
// console.log(magic(1337)(42)); // *** 42*42 = 1764 parameter 2 step