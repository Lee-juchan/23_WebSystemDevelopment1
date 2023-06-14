// 콜백 함수 내부 this에 다른 값 바인딩1 _ self

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