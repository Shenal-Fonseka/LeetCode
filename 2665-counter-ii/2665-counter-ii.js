
var createCounter = function(init) {
    let reset = init
    return{
        increment: function(){
            init++
            return init
        },
        decrement: function(){
            init--
            return init
            
        },
        reset: function(){
            init = reset
            return init
        }
    }
};


  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
