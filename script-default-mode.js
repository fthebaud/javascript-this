const defaultModeString = '************************* default mode (non strict) ********************';

function logThis(obj) {
  console.log('this = ' + obj + '\n\r');
}

const myFunctionExpression = function () {
  console.log('In a function expression call');
  logThis(this);
};

function myFunctionDeclaration() {
  console.log('In a function expression call');
  logThis(this);
}

function MyConstructor() {
  console.log('In a constructor call (function + new)');
  logThis(this);
  this.method = function () {
    console.log('In a method call');
    logThis(this);
  };
}

if (console.group) {
  console.group(defaultModeString);
} else {
  console.log(defaultModeString);
}

// TESTS START HERE
console.log('Outside of a function (global execution context)');
logThis(this);

myFunctionExpression();
myFunctionDeclaration();
const obj = new MyConstructor(); // eslint-disable-line no-unused-vars
obj.method();

if (console.group) {
  console.groupEnd(defaultModeString);
} else {
  console.log('************************************************************************\n\r');
}