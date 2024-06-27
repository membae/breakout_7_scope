# breakout_7_scope

## What is scope in JavaScript, and why is it important?

Scope refers to the current context of code, which determines the accessibility of variables and functions at different parts of the code. Scope is crucial because it controls the visibility and lifetime of variables and functions, ensuring that code is organized, modular, and prevents conflicts and unexpected behavior

## Can you explain the difference between global scope and local scope?

|Global scope | Local scope |
|------------|--------------|
| refers to variables and functions that are accessible from anywhere in the code. Variables declared outside any function or block are in the global scope. | refers to variables and functions that are accessible only within a specific part of the code, such as inside a function or block. Variables declared within a function or block (e.g., using let or const in a block) are in the local scope.|
| Accessible throughout the entire codebase. | Local Scope: Accessible only within the function or block where they are declared.|
| Variables persist for the duration of the script or page.|  Variables are created and destroyed within the function/block execution context.|
| Higher risk of variable name conflicts as all scripts share the same global space.| Lower risk of conflicts since variables are confined to their specific local contexts.|
| Global variables remain in memory for the lifetime of the application.| Local variables are garbage collected when their context is exited, leading to better memory |management.


## How does JavaScript handle scope in functions compared to block-level scope?

In JavaScript, variables declared inside a function are scoped to that function. This means they are only accessible within the function and not outside of it. Function scope applies to variables declared with `var`. However, variables declared with `let` or `const` inside a block (denoted by curly braces {}) are only accessible within that block.

##  How do var, let, and const differ in terms of scope?

### `var`: 

Function Scope: Variables declared with var are scoped to the function in which they are declared.

Global Scope: If declared outside any function, var variables have global scope.

### `let`:

Block Scope: Variables declared with let are scoped to the block (denoted by {}) in which they are declared.

### `const` : 

Block Scope: Variables declared with const are also block-scoped, similar to let.

Constant Value: The value of a const variable cannot be reassigned.

## What are the implications of declaring a variable without any keyword (i.e., no var, let, or const)?

On a global scope, a variable declared without a keyword inside a function or a block is automatically created as a property of the global object (which is window in browsers and global in Node.js). This makes the variable accessible globally, even if it was intended to be local.

It increases the risk of accidental global variable creation, which can lead to naming collisions and difficult-to-debug issues. This is especially problematic in large codebases or when using third-party libraries.

Variables declared this way do not respect block scope. They will be accessible outside the block where they were defined.

## What is the scope chain, and how does JavaScript use it to resolve variable access?

The scope chain in JavaScript is a hierarchy of scopes that the JavaScript engine uses to resolve variable access. When a variable is referenced, JavaScript looks for it in the current scope. If not found, it moves up to the next outer scope, continuing this process until it either finds the variable or reaches the global scope. If the variable isn't found in any scope, a reference error is thrown.

## What are some differences between lexical scope and dynamic scope? Which one does JavaScript use?

|lexical scope | dynamic scope|
|--------------|--------------|
| Lexical scope (or static scope) means that the scope of a variable is determined by its location within the source code, and nested functions have access to variables declared in their outer scope.|  Dynamic scope means that the scope of a variable is determined by the call stack, i.e., where the function is called from, not where it was defined.|
| Variables are resolved by looking at the context in which the function was defined, not where it is called. |  Variables are resolved by looking at the call stack at runtime.|
JavaScript uses lexical scope. This means that the scope of a variable is determined by its position in the source code, and functions are executed using the scope chain that was in effect when they were defined.

## What is a closure, and how does it relate to scope in JavaScript?

A closure in JavaScript is a function that retains access to its outer (enclosing) function's scope, even after the outer function has finished executing. Closures are created whenever a function is defined inside another function, allowing the inner function to capture and remember the outer function's variables.
Closures are closely related to scope because they take advantage of JavaScript's lexical scoping. When an inner function is defined within an outer function, it forms a closure and keeps a reference to the variables in its outer scope. This allows the inner function to access those variables even after the outer function has completed execution.
### practical uses of closures
`Data Privacy`: Closures can be used to create private variables that can only be accessed and modified by specific functions.

`Partial Application and Currying`:Closures enable partial application, where a function is partially applied with some arguments fixed, returning a new function with fewer arguments.

`Event Handlers and Callbacks`: Closures are often used in event handlers and callbacks to preserve state or context.