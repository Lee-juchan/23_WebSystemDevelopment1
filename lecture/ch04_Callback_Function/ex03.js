// 콜백 함수 _ Array.prototype.map

var newArr = [10, 20, 30].map(function (v, i) {
    console.log(v, i);
    return v + 5;
});

console.log(newArr);

// 결과
// 10 0
// 20 1
// 30 3
// [15, 25, 35]