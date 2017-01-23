const defaultModeString = '************************* default mode (non strict) ********************';

function logThis(obj) {
  console.log(obj);
  console.log('\n\r');
}

if (console.group) {
  console.group(defaultModeString);
} else {
  console.log(defaultModeString);
}

console.log('Outside of a function (global execution context)');
logThis(this);

console.log('In a function expression call');
const myFunctionExpression = function () {
  logThis(this);
};
myFunctionExpression();

console.log('In a function expression call');

function myFunctionDeclaration() {
  logThis(this);
}
myFunctionDeclaration();

console.log('In a constructor call (function + new)');

function MyObject() {
  this.test = 'ok';
  logThis(this);
  this.method = function () {
    logThis(this);
  };
  this.arrowMethod = () => logThis(this);
}
const obj = new MyObject(); // eslint-disable-line no-unused-vars

console.log('In a method call');
obj.method();

console.log('Using call(thisArg) or apply(thisArg)');
const fakeThis = {
  fake: 'This'
};
myFunctionDeclaration.call(fakeThis);

console.log('Arrow function in the global execution context');
const arrowFunction = () => logThis(this);
arrowFunction();

console.log('Arrow function as a method');
const objWithMethod = {
  id: 'objWithMethod',
  method1: () => logThis(this),
  method2: function createMethod() {
   return () => logThis(this);
  }
};
objWithMethod.method1();
objWithMethod.method2()();
const fn = objWithMethod.method2;
fn()();
obj.arrowMethod();

console.log('setTimeout');
setTimeout(logThis, 0);
setTimeout(function () {
  logThis();
}, 0);

class Square {
  constructor(side) {
    this.side = side;
    logThis(this);
  }
  method() {
    logThis(this);
  }
  static methodStatic(){
    logThis(this);
  }
}

console.log('classes es6');
console.log('constructor');
const s = new Square(4);
console.log('method');
s.method();
console.log('static method');
Square.methodStatic();

if (console.group) {
  console.groupEnd(defaultModeString);
} else {
  console.log('************************************************************************\n\r');
}