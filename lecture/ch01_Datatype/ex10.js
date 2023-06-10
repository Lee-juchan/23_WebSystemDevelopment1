// 객체의 가변성 _ 문제점

var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'Jung');

if (user != user2) {
    console.log("user information is changed");
}
console.log(user.name, user2.name); // Jung Jung
console.log(user === user2); // true