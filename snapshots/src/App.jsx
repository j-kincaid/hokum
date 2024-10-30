import {useState} from 'react';


// Create a simple click counter in React that illustrates how state updates can behave like a snapshot in time, particularly when there are delays. Your counter should feature an increment button that goes up by +1 when clicked.

// What to do:


// Counter Display:
function Counter() {
// Build a component that shows a counter starting at 0.
  const [index, setIndex] = useState(0);

// Before Increment: Log the current count in the console right before the counter increments.

// Add a button labeled "Increment".
// When clicked, the counter should increase by 1 after a 2-second delay.

// Increment Button:

  return (
    <>
    <h3>This count will log the index in the console with a 2-second delay:</h3>
    <button onClick={() => {
      setIndex(index + 1);
        setTimeout(() => {
          console.log('Count:' + index);
        }, 2000);
    }}>Increment</button>
    </>
  );
}


{/* 

// After Delay: Log the updated count in the console after the delay.
// Demonstrating the Delay:

// If the button is clicked multiple times before the 2-second delay ends, the logged updated count will still reflect the initial count from the first click, demonstrating React's state snapshot behavior. */}


export default function App() {
	return (
    <>
      <Counter />
      </>
  )
  
}