
const createCounter = n => {
    let i = -1
    return () => n + ++i;
};


  const counter = createCounter(10)
  counter() // 10
  counter() // 11
  counter() // 12
 