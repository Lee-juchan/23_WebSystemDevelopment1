// 얕은 복사, 깊은 복사 _ 깊은 복사2 (재귀 함수)

var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for(var prop in target) {
            result[prop] = copyObjectDeep(target[prop]); // 재귀적으로 프로퍼티 복사
        }
    } else {
        result = target;
    }
    return result;
};

var obj = {
    a : 1,
    b : {
        c: null,
        d:[1,2]
    }
};

var obj2 = copyObjectDeep(obj);
obj2.a = 10;
obj2.b.c = 20;
obj2.b.d[1] = 30;

console.log(obj);
console.log(obj2); // obj !== obj2