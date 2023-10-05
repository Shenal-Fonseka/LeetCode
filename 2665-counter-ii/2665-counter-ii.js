
var createCounter = function(init) {
    const reset = init
    return{
        increment: ()=> {
            init++
            return init
        },
        decrement: ()=> {
            init--
            return init    
        },
        reset: ()=> {
            init = reset
            return init
        }
    }
};


  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
