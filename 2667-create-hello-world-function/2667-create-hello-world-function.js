
const createHelloWorld = () => {
  return (...args) => {
    return "Hello World"
  }  
  
}


const f = createHelloWorld();
f(); // "Hello World"
 