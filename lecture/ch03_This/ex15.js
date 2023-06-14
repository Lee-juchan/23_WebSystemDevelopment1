// 명시적 this 바인딩 _ call

var obj = {
    a:1,
    method : function(x, y) {
        console.log(this.a, x, y);
    }
};

obj.method(2,3);                   // 1 2 3        / this = obj 
obj.method.call({ a: 100 }, 3, 4); // 100 3 4      / this = { a:100 }