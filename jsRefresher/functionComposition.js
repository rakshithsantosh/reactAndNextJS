//Pipelining

//function takes an argument and return a value which is again passed as an argument to another function

function pipeline(...functions) {
  if (length(functions) === 0) return (input) => input;
  if (length(functions) === 1) return (input) => functions[0](input);
  return function (input) {
    return pipeline(...functions.slice(1))(functions[0](input));
  };
}
