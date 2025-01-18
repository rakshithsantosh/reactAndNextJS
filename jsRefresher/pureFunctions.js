//pure functions

function greet(name) {
  return `Hello ${name}`;
}

//not pure function
let name = "name";

function greetV2() {
  console.log("Hello ${name}");
}

//data in coupled in pure function but in not pure function the function does not have control over the output there is an external dependency

//pure function is deterministic and its predictable
