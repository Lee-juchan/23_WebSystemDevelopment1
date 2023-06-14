var func = function() {
  return this;
}

var obj = {
  m1: func,
  m2: () => func(),
  m3: () => this
}

var result = '';

result += func() == global ? '1' : '0';
result += obj.m1() == global ? '1' : '0';
result += obj.m2() == global ? '1' : '0';
result += obj.m3() == global ? '1' : '0';
result += func.bind(obj).call(global) == global ? '1' : '0';

console.log(result);