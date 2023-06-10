// 얕은 복사, 깊은 복사 _ 얕은 복사

var copyObject = function (target) {
    var result = {}; // 빈 객체

    for (var prop in target) {
        result[prop] = target[prop]; // .prop 불가능
    }

    return result;
};

var user = {
    name : 'jeanam',
    urls : { // 참조형 프로퍼티
        portfolio : 'portfolio',
        blog: 'blog',
        facebook: 'facebook'
    }
};
var user2 = copyObject(user);

user2.name = 'Jung';
console.log(user.name === user2.name); // false

user2.urls.portfolio = 'newPortfolio';
console.log(user.urls.portfolio === user2.urls.portfolio); // true

user.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // true