//iteration - imperatie looping and stateful
//recursion - functional self-referential stateless

function recursiveFactorial(n) {
  if (n === 0) return 1; //base case
  return n * recursiveFactorial(n - 1); //recursive case
}

//base case prevents us from getting into infinite loop its an exit clause

//In recursive case we call the same function with modified arguments and with some logic

//fibonaci series using recursion

function recursiveFibonacci(n) {
  if (n == 0) {
    return 0; //base case 1
  } else if (n == 1) {
    return 1; //base case 2
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2); //recursive case
  }
}

//In the above example we have two base cases and in recursive case we are returning the same function with different arguments
