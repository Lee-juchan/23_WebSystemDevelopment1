// 생성자 함수 this

var Cat = function(name, age) {
    this.bark = 'meow';
    this.name = name;
    this.age = age;
};

var choco = new Cat('choco', 7); // this == choco
var nabi = new Cat('nabi', 5); // this == nabi
console.log(choco); // {bark: 'meow', name: 'choco', age: 7}
console.log(nabi); // {bark: 'meow', name: 'nabi', age: 5}