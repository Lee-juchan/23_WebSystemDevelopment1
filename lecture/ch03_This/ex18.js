// call, apply 활용 _ 유사배열객체 배열 메소드 적용 (arguments, NodeList)

// arguments
function a() {
    var args = Array.prototype.slice.call(arguments); // call로 호출, 배열메소드 사용가능
    args.forEach(function (arg) {
        console.log(arg);
    });
}
a(1, 2, 3);


// NodeList
document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelector('div');
var nodeArr = Array.prototype.slice.call(nodeList); // call로 호출
nodeArr.forEach(function(node) {
    console.log(node);
});