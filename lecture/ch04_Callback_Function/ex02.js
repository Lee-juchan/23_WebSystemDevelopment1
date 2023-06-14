// 콜백 함수 _ setInterval

var count = 0;

var cbFunc = function() {
    console.log(count);

    if(++count > 4) {
        clearInterval(timer);
    }
}

var timer = setInterval(cbFunc, 300);

// 결과
// 0
// 1
// 2
// 3
// 4