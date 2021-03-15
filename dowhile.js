// var cond = false;

// while (cond) {
//     console.log("이 구문은 실행되지 않습니다.");

// }

// do {
//     console.log("이 구문은 한 번은 실행됩니다.");
// } while (cond);
// ans = 0
// do {
//     var ans = parseInt(prompt("1 + 1 = ?"));
// } while (ans !=2);
// console.log("맞혔습니다!");


// Dowhile 형태로 아래 내용 바꾸기

var a = Math.ceil(Math.random()*10);
var b = Math.ceil(Math.random()*10);
var solution = a*b;

ans=0
do {
    var ans = parseInt(prompt(a + "*" + b + "=?"));
} while (ans != solution);
console.log("맞혔습니다!")