// bind _ this지정, 부분 적용 함수 구현

var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // global 1 2 3 4

var bindFunc = func.bind({ x: 1 }); // this 바인딩
bindFunc(5, 6, 7, 8); // {x : 1} 5 6 7 8

var bindFunc2 = func.bind({ x: 1 }, 4, 5); // this 바인딩 + 부분 적용 함수
bindFunc2(6, 7); // {x : 1} 4 5 6 7
bindFunc2(8, 9); // {x : 1} 4 5 8 9