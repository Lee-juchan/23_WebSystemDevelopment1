// apply 활용 _ 여러 인수를 받는 메소드

var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers); // numbers 배열 인자로 전달
var min = Math.min.apply(null, numbers); // numbers 배열 인자로 전달
console.log(max, min); // 45 3