// 객체의 가변성 _ 해결방안1 (새 객체 리턴)

var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function (user, newName) {
    return { // 새 객체 리턴
        name : newName,
        gender: user.gender
    };
};

var user2 = changeName(user, 'Jung');

if (user != user2) {
    console.log("user information is changed");
}
console.log(user.name, user2.name); // Jeanam Jung
console.log(user === user2); // false