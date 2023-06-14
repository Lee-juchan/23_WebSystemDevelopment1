// 화살표 함수 this

var obj = {
    outer : function() {
        console.log(this); // obj
        
        var innerFunc = () => {
            console.log(this); // this = obj
        };
        innerFunc();
    }
};
obj.outer();