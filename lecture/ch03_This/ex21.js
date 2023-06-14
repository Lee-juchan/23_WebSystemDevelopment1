// call, apply 활용 _ 생성자 내부 다른 생성자 호출

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
};

function Student(name, gender, school) {
    Person.call(this, name, gender); // call로 호출, this = 인스턴스 자신
    this.school = school;
};

function Employee (name, gender, company) {
    Person.apply(this, [name, gender]); // call로 호출, this = 인스턴스 자신
    this.company = company;
};

var by = new Student('by', 'FM', 'Dankuk'); // {name: 'by', gender: 'FM', school: 'Dankuk'}
var jn = new Student('jn', 'M', 'Google'); // {name: 'jn', gender: 'M', school: 'Google'}
console.log(by, jn);