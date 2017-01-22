# JavaScript and the mysterious case of the ever changing this

## Global Context

### In the global execution context (outside of a function) 
* in default mode: the global object (window in the browser)
* in strict mode: undefined

## Function Context

### In a function call
* in default mode: the global object (window in the browser)
* in strict mode: undefined (Or whatever this was before the function call?)

### In a constructor call
* the object being created

### In a method call
* the object owning the method

### call/apply

### bind

### In a callback (settimeout, adddEventListener, method ?)

### arrow function