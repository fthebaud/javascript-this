  'use strict';

  const strictModeString = '************************* strict mode **********************************';


  function logThis2(obj) {
    console.log(obj);
    console.log('\n\r');
  }









  if (console.group) {
    console.group(strictModeString);
  } else {
    console.log(strictModeString);
  }

  console.log('Outside of a function (global execution context)');
  logThis2(this);

  console.log('In a function expression call');
  const myFunctionExpression2 = function () {
    logThis2(this);
  };
  myFunctionExpression2();

  console.log('In a function expression call');

  function myFunctionDeclaration2() {
    logThis2(this);
  }
  myFunctionDeclaration2();

  console.log('In a constructor call (function + new)');

  function MyObject2() {
    this.test = 'ok';
    logThis2(this);
    this.method = function () {
      logThis2(this);
    };
    this.arrowMethod = () => logThis2(this);
  }
  const obj2 = new MyObject2(); // eslint-disable-line no-unused-vars

  console.log('In a method call');
  obj2.method();

  console.log('Using call(thisArg) or apply(thisArg)');
  const fakeThis2 = {
    fake: 'This'
  };
  myFunctionDeclaration2.call(fakeThis2);

  console.log('Arrow function in the global execution context');
  const arrowFunction2 = () => logThis2(this);
  arrowFunction2();

  console.log('Arrow function as a method');
  const objWithMethod2 = {
    id: 'objWithMethod',
    method1: () => logThis2(this),
    method2: function createMethod() {
      return () => logThis2(this);
    }
  };
  objWithMethod2.method1();
  objWithMethod2.method2()();
  const fn2 = objWithMethod2.method2;
  fn2()();
  obj2.arrowMethod();

  console.log('setTimeout');
  setTimeout(logThis2, 0);
  setTimeout(function () {
    logThis2();
  }, 0);

  class Square2 {
  constructor(side) {
    this.side = side;
    logThis2(this);
  }
  method() {
    logThis2(this);
  }
  static methodStatic(){
    logThis2(this);
  }
}

console.log('classes es6');
console.log('constructor');
const s2 = new Square2(5);
console.log('method');
s2.method();
console.log('static method');
Square2.methodStatic();

  if (console.group) {
    console.groupEnd(strictModeString);
  } else {
    console.log('************************************************************************\n\r');
  }