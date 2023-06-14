// call, apply 활용 _ 문자열 배열 메소드 적용

var str = 'abc def';

// Array.prototype.push.call(str, ', pushed string');// 원본 문자열 변경은 불가

console.log(Array.prototype.concat.call(str, 'string'));

Array.prototype.every.call(str, char => char!==' '); // false

Array.prototype.some.call(str, char => char!==' '); // true

Array.prototype.map.call(str, char => char + '!'); // ['a!', 'b!', 'c!', ' !', 'd!', 'e!', 'f!']

Array.prototype.reduce.apply(str, [(string, char, i) => string + char + i], ''); // ab1c2 3d4e5f6