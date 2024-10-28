// import { useState } from 'react';
import { useState } from 'react';


// Create a counter using states. The counter should feature an increment button (+1), a decrement button (-1), and a reset button (0).

// React Hooks start with "use" and start at the top of your code. 

function Counter() {
  const [index, setIndex] = useState(0);
  // We want State to remember index and setIndex.


  function handleIncrement() {
    setIndex(index + 1);
  }

//           function handleDecrement()
  function handleDecrement() {
      setIndex(index - 1);
  }

//           function reset()

function handleReset() {
  setIndex(0);
}

return (
  <>
    <h1>Counter: {index}</h1>
    <button onClick={handleIncrement}>
    Increment
    </button>
    <button onClick={handleDecrement}>
    Decrement
    </button>
    <button onClick={handleReset}>
    Reset
    </button>
    </>
)
}
export default function App() {

    return (
        <Counter />
      )
}


