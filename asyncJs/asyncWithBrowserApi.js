//javascript does not have the functionality of async

//Browser api's gives us the functionality of asynchronous execution

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000);
//setTimeout executes after 1000 milliseconds

//setTimeout is stored in the macro task queue

//async functions are stored in macro or micro task queue and when the call stack is empty event loop checks the call and and pushes the contents of task queue

//memory
//thread of execution
//call stack (maintains the order of execution context)
//browser api
//task queue
//event loop

//6 elements of js program execution

//promises

//whereever we use fetch api it returns a promise

//promise is an object which has value and onfullfillment array

//we use .then to consume the promise

//.then take the function which is passed and stores it in the onfullfillment array
