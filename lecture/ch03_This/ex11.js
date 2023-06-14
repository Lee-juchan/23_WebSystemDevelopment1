// 화살표 함수 this

var obj = {
    outerFunc : function() {
        console.log(this); // obj

        var innerFunc = () => { // 화살표 함수
            console.log(this);
        };
        innerFunc(); // obj
    }
};
obj.outerFunc();