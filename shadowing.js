function shadowing_example(){
    var val=5; //지역변수
    console.log("F", val);
    val++; // var=1
}
// 끝나고 나오면 var=1을 가지고 나오는게 아니라, 아래의 새로 선언된 var=0을 사용

var val = 0; //전역변수
shadowing_example();
console.log("O", val);

//만약 function안에서 var val=1; 하고 선언하고 시작하면, 결과값 또한 선언된 값에서 변한 1이 적용된다.