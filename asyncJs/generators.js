function* createFlow() {
  yield 4;
  yield 5;
  yield 6;
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next();

//Generator function is a function that can pause its execution at any timeand resume later

//yiels keyword is used to pause the execution and return a value

//next() method is used to resume the execution and retrive the next value

//when generator function is called it does not execute its body immediately instead it return a iterator object (generator object) and this can be used to control the execution of the generator

//Use Cases

//Lazy execution values are computed only when needed
