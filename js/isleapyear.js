var a = prompt("알고 싶은 년도를 입력하세요");
console.log(isLeapYear(a));
function isLeapYear(year){
    if (year %4 == 0) {
        return true;
    }else{
        return false
    }
}
