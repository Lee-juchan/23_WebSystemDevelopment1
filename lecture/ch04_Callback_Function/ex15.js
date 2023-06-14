// 콜백지옥 해결2 _ promise2

var addCoffee = function(name) {
    return function(prevName) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                var newName = prevName ? (prevName + ', ' + name) : name;
                console.log(newName);
                resolve(newName);
            }, 100);
        })
    }
}

addCoffee('Espresso')()
.then(addCoffee('Americano'))
.then(addCoffee('CafeMoch'))
.then(addCoffee('CafeLatte'));