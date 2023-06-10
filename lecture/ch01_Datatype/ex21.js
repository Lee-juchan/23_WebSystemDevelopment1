// 배열 undefined와 empty

var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1; // [empty, 1]

arr1.forEach((v, i) => console.log(v, i)); // undefined 0 / 1 1
arr2.forEach((v, i) => console.log(v, i)); // 1 1

arr1.map((v, i) => v + i); // [NaN, 2]
arr2.map((v, i) => v + i); // [empty, 2]

arr1.filter(v => !v); // [undefined]
arr2.filter(v => !v); // []

arr1.reduce((p, c, i) => p + c + i, ''); // undefined011
arr2.reduce((p, c, i) => p + c + i, ''); // 11