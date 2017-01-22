  'use strict';

  const strictModeString = '************************* strict mode **********************************';


  function logThis2(obj) {
    console.log('this = ' + obj + '\n\r');
  }

  const myFunctionExpression2 = function () {
    console.log('In a function expression call');
    logThis2(this);
  };

  function myFunctionDeclaration2() {
    console.log('In a function expression call');
    logThis2(this);
  }

  function MyConstructor2() {
    console.log('In a constructor call (function + new)');
    logThis2(this);
    this.method = function () {
      console.log('In a method call');
      logThis2(this);
    };
  }

  if (console.group) {
    console.group(strictModeString);
  } else {
    console.log(strictModeString);
  }


  // TESTS START HERE
  console.log('Outside of a function (global execution context)');
  logThis2(this);

  myFunctionExpression2();
  myFunctionDeclaration2();
  const objs = new MyConstructor2(); // eslint-disable-line no-unused-vars
  objs.method();

  if (console.group) {
    console.groupEnd(strictModeString);
  } else {
    console.log('************************************************************************\n\r');
  }