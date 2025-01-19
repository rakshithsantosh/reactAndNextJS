//currying

//currying breaks up a multi argument function into a series of single argument ones

//example one

//normal function

function greeting(greeting, name) {
  return `${greeting} ${name}`;
}

//if we create this with currying

function greeting(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

const greetEng = greeting("hello");

// now if we write greetEng("name") it returns hello name

// this is an application of closures
