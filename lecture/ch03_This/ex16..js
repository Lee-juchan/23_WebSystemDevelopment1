// 명시적 this 바인딩 _ apply (매개변수 배열 전달)

var func = function (a, b, c) {
    console.log(this, a, b, c);
};
func.apply({ x: 1 }, [2, 3, 4]); // {x : 1} 2 3 4       / this = {x : 1}


var obj = {
    a: 1,
    method: function (x, y) {
        console.log(this.a, x, y);
    }
};
obj.method.apply({ a: 100 }, [4, 5]); // 100 4 5        / this = {a : 100}