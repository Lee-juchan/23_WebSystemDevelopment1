// 콜백지옥 해결 _ promise

new Promise(function(resolve) {
    setTimeout(function() {
        var name = 'Espresso';
        console.log(name);

        resolve(name);
    }, 100);

}).then(function(prevName) { // name -> prevName    
    return new Promise(function (resolve) {
        setTimeout(function() {
            var name = prevName + ', Americano';
            console.log(name);
    
            resolve(name);
        }, 100);
    });
}).then(function(prevName) { // name -> prevName    
    return new Promise(function (resolve) {
        setTimeout(function() {
            var name = prevName + ', CafeMoca';
            console.log(name);
    
            resolve(name);
        }, 100);
    });
}).then(function(prevName) { // name -> prevName    
    return new Promise(function (resolve) {
        setTimeout(function() {
            var name = prevName + ', CafeLatte';
            console.log(name);
    
            resolve(name);
        }, 100);
    });
});