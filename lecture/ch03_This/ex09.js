// 메서드 내부함수에서 this

var obj1 = {
    outerFunc : function() {
        console.log(this); // obj1

        var innerFunc = function() {
            console.log(this);
        };
        innerFunc(); // global

        var obj2 = {
            innerMethod : innerFunc
        };
        obj2.innerMethod(); // obj2
    }
};
obj1.outerFunc();