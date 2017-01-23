# JavaScript and the mysterious case of the ever changing this

What is this ?

## **Global Context**

### In the global execution context (outside of a function) 
* **default mode:** the global object (window in the browser)
* **strict mode:** *undefined*

## **Function Context**

### In a **function** call: *f()*
* **default mode:** the global object (window in the browser)
* **strict mode:** *undefined* (Or whatever this was before the function call)

### In a **constructor** call: *new F()*
* the object being created

### In a **method** call: *obj.f()*
* the object the method is called on

It doesn't matter if the function was defined inline before being affected as a member of the object. It matters only that the function was invoked as a member of the object.

If the method is on the prototype chain, this still refers to the object the method was called on, as if the method was on the object.

### With **call(thisArg) / apply(thisArg)**: *f.call(thisArg)*
* the object passed as an argument to call/apply. (if it's a primitive, it will be converted to an object)

*The difference between call and apply is how the function parameters are passed  (call: one by one, apply: in an array)*

### With **bind(thisArg)**: f2 = *f.call(thisArg)*
* the object passed as an argument to bind. 

*The difference with call/apply is that bind creates a new function where this is permanently bound to the first argument of bind, regardless of how the function is called*

### In an **arrow function** call: *f() with const f = () => {...}*
* the value of the enclosing execution context's this when the arrow function is created (this is said to be set "lexically")
* /!\ No matter what, this is what it was when the arrow function was created, even if the arrow function is called with call/apply/bind. (no point using call/apply/bind with arrow function ?)
* /!\ global context: global object, event in strict mode

## **Callback**

### **DOM event** handler *(addEventListener)*
* the DOM element on which the listener is placed.
* /!\ unless a function is declared in an in-line event handler: *onclick="alert((function(){return this})())"*

### **settimeout()**
* If this has not been set (through call, bind or using an arrow function), it will default to *undefined*

## In a es6 **class**

### constructor, method
* same as above

### static method
* the constructor function 
 