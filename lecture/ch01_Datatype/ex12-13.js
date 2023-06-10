// 객체의 가변성 _ 해결방안2 (프로퍼티 복사(얕은 복사) + 새 객체 리턴)

var copyObject = function (target) {
    var result = {}; // 빈 객체

    for (var prop in target) {
        result[prop] = target[prop]; // .prop 불가능
    }

    return result;
};

var user = {
    name: 'Jaenam',
    gender: 'male'
};

var user2 = copyObject(user);
user2.name = "Jung";

if (user != user2) {
    console.log("user information is changed");
}
console.log(user.name, user2.name); // Jeanam Jung
console.log(user === user2); // false