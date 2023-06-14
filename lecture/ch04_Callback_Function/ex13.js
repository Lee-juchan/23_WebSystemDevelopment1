// 콜백지옥 _ 해결1

var coffeeList = '';

var addEspresso = function (name) {
    coffeeList = name;
    console.log(coffeeList);

    setTimeout(addAmericano, 100, 'Americano');
};

var addAmericano = function (name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);

    setTimeout(addCafeMocha, 100, 'CafeMocha');
};

var addCafeMocha = function (name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);

    setTimeout(addCafeLatte, 100, 'CafeLatte');
};

var addCafeLatte = function (name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);
};

setTimeout(addEspresso, 100, 'Espresso');