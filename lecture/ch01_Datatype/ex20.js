// 배열 undefined와 empty

var arr1 = [];
arr1.length = 3;
console.log(arr1); // empty * 3

var arr2 = new Array(3);
console.log(arr2); // empty * 3

var arr3 = [undefined, undefined, undefined];
console.log(arr3); // undefined undefined undefined