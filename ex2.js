module.exports.name = 'module';
global.name = 'global';

console.log(this.name); // module : node.js 전역공간의 this는 모듈객체

var obj = {
    name: 'obj',

    m1: function () { console.log(this.name) }, // this = obj (obj로 지정)

    m2: () => {
        function m4() {
            console.log(this.name); // this = global (지정 안됨)
        };
        m4();
    },

    m3: () => console.log(this.name), // this = module (물려 받음)
};

obj.m1();
obj.m3();
obj.m2();