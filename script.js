function logThis(obj) {
  console.log('this = ' + obj + '\n\r');
}


(function () {
  console.group('************************* default mode (non strict) ********************');

  const myFunctionExpression = function () {
    console.log('function expression call');
    logThis(this);
  };

  function myFunctionDeclaration() {
    console.log('function expression call');
    logThis(this);
  }

  function MyConstructor() {
    console.log('constructor call (function + new)');
    logThis(this);
    this.method = function () {
      console.log('method call');
      logThis(this);
    };
  }

  // TESTS START HERE
  logThis(this);

  myFunctionExpression();
  myFunctionDeclaration();
  const obj = new MyConstructor(); // eslint-disable-line no-unused-vars
  obj.method();
  // TODO : fonction dans une fonction (perte du this)
  // arrow function

  console.groupEnd('************************* default mode (non strict) ********************');
}());


(function () {
  'use strict';
  console.group('************************* strict mode **********************************');

  const myFunctionExpression = function () {
    console.log('function expression call');
    logThis(this);
  };

  function myFunctionDeclaration() {
    console.log('function expression call');
    logThis(this);
  }

  function MyConstructor() {
    console.log('constructor call (function + new)');
    logThis(this);
    this.method = function () {
      console.log('method call');
      logThis(this);
    };
  }

  // TESTS START HERE
  logThis(this);

  myFunctionExpression();
  myFunctionDeclaration();
  const obj = new MyConstructor(); // eslint-disable-line no-unused-vars
  obj.method();

  console.groupEnd('************************* strict mode **********************************');
}());