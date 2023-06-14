// 콜백 함수 내부 this에 다른 값 바인딩1 _ func 함수 재활용

// obj1
var obj1 = {
    name : 'obj1',
    func : function() {
        var self = this; // self = obj

        return function () {
            console.log(self.name);
        };
    }
};
setTimeout(obj1.func(), 100);

// obj2s
var obj2 = {
    name : 'obj2',
    func : obj1.func
};
var callback2 = obj2.func(); // this = obj2
setTimeout(callback2, 200);

// obj3
var obj3 = {name : 'obj3'};
var callback3 = obj1.func.call(obj3); // this = obj3
setTimeout(callback3, 300);