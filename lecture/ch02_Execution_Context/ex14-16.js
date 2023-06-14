// scope chain _ 브라우저

// ex1
var a = 1;

var outer = function () {
    var b = 2; // 브라우저상 b안보임
    var inner = function() {
        console.dir(inner);
    };
    inner();
};
outer();


// ex2
var a = 1;

var outer = function () {
    var b = 2;
    var inner = function() {
        console.log(b); // 브라우저상 b 노출
        console.dir(inner);
    };
    inner();
};
outer();


// ex3
var a = 1;

var outer = function () {
    var b = 2;
    var inner = function() {
        console.log(b);
        debugger; // 디버거 사용
    };
    inner();
};
outer();