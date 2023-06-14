// 콜백함수 this

setTimeout(function () { console.log(this); }, 100); // Timeout 객체 / crome에서는 전역

[1, 2].forEach(function (v) { console.log(this, v) }); // global

// document.body.innerHTML += '<button id="a">click</button>';
// document.body.querySelector('#a').addEventListener('click', function(e) {console.log(this, e);}); // 이벤트 정보