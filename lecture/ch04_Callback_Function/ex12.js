// 콜백지옥1

setTimeout(function(name) {
    var coffeeList = name;
    console.log(coffeeList);

    setTimeout(function(name) {
        coffeeList += ', ' + name;
        console.log(coffeeList);

        setTimeout(function(name) {
            coffeeList += ', ' + name;
            console.log(coffeeList);

            setTimeout(function(name) {
                coffeeList += ', ' + name;
                console.log(coffeeList);
            }, 100, 'cafeLatte');
        }, 100, 'cafeMoch');
    }, 100, 'americano');
}, 100, 'espreso');