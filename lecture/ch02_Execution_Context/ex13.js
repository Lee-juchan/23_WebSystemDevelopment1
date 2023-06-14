// scope chain

var a = 1;

var outer = function () {

    var inner = function() {
        console.log(a); // undeined
        var a = 3;
    };
    inner();

    console.log(a); // 1
};
outer();

console.log(a); // 1