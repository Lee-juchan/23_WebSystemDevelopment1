// 내부함수에서 this 우회 _ 변수 self

var obj1 = {
    outerFunc : function() {
        console.log(this); // obj1

        var innerFunc1 = function() {
            console.log(this);
        };
        innerFunc1(); // global

        var self = this; // self : this == obj
        var innerFunc2 = function() {
            console.log(self);
        };
        innerFunc2(); // obj
    }
};
obj1.outerFunc();