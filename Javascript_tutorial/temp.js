
/**
 *  Difference between var and let
 *  let has block scope, while var has function scope. 
 */

function exampleVar() {
    if (true) {
      var varVariable = 'I am a var variable';
      console.log(varVariable); // Output: I am a var variable
    }
  
    console.log(varVariable); // Output: I am a var variable
  }
  
  function exampleLet() {
    if (true) {
      let letVariable = 'I am a let variable';
      console.log(letVariable); // Output: I am a let variable
    }
  
    // Uncommenting the line below would result in an error
    // console.log(letVariable); // Error: letVariable is not defined
  }
  
  exampleVar();
  exampleLet();
  
//   -------------------------------  -------------------------------  -------------------------------  -------------------------------

