//closure

function makeAdjectifier(adjective) {
  return function (noun) {
    return adjective + " " + noun;
  };
}

const coolify = makeAdjectifier("cool");

// in this example if i console log coolify("drink")  it returns cool drink

// The inner function forms a closure from which it is able to access the data from the parent function
