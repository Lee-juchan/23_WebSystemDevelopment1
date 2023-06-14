// 내부함수의 this 전달 _ call, apply, bind

// call
var obj1 = {
    outerFunc : function() {
        console.log(this); // obj1

        var innerFunc = function() {
            console.log(this);
        };
        innerFunc.call(this); // obj1 / call로 호출
    }
};
obj1.outerFunc();


// bind
var obj1 = {
    outerFunc : function() {
        console.log(this); // obj1

        var innerFunc = function() {
            console.log(this);
        }.bind(this); // this 바인딩
        innerFunc(); // obj1
    }
};
obj1.outerFunc();