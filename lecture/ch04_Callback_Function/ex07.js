// 메서드를 콜백함수로 전달

var obj = {
    vals : [1, 2, 3],
    logVals: function (v, i) {
        console.log(this, v, i);
    }
};

obj.logVals(1, 2);          // obj
[4, 5].forEach(obj.logVals); // global (메서드 but global)