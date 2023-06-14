// 내부함수에 this 전달 _ bind

var obj = {
    logThis : function() {
        console.log(this);
    },

    logThisLater1: function() {
        setTimeout(this.logThis, 500);
    },
    logThisLater2: function() {
        setTimeout(this.logThis.bind(this), 500); // this 바인딩
    },
};
obj.logThisLater1(); // Timeout
obj.logThisLater2(); // obj