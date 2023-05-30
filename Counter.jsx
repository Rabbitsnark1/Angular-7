import React, {useState} from 'react';

const Counter = function () {
    const [count, setCount] = useState(0)

    function Increment() {
        setCount(count + 1)
      }
  
      function Decrement() {
        setCount(count - 1)
      }
  
    return (
      <div className="App">
        <h1>{count}</h1>
        <input 
        type="text"
         value = {value}
         onChange={event => setValue(event.target.value)}
         />
        <button> onClick={Increment}&gt;Increment</button>
        <button> onClick={decrement}&gt;Decrement</button>
      </div>
    );

};