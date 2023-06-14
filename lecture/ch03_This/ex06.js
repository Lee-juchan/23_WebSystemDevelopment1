// 함수와 메서드의 this

var func = function(x) {
    console.log(this, x);
    return func;
}
func(1); // global 1

var obj = {
    method : func
};
obj.method(2); // obj 2