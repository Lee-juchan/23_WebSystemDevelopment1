// 콜백 함수 내부 this에 다른 값 바인딩3_ bind

var obj1 = {
    name : 'obj1',
    func : function() {
            console.log(this.name);
    }
};

setTimeout(obj1.func.bind(obj1), 100); // this = obj1

var obj2 = {name : 'obj2'};
setTimeout(obj1.func.bind(obj2), 200); // this = obj2