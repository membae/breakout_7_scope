function myFunction() {
    var functionScopedVar = "I am function-scoped";
    console.log(functionScopedVar); // Accessible here
  }
  
  myFunction();
  console.log(functionScopedVar); // Error: functionScopedVar is not defined
  