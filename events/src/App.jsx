 // Button 1: Create a button that triggers an alert when it is clicked.

    function ButtonOne() {
      function handleClick() {
        alert('This is your alert!');
      }
      return (
        <button onClick={handleClick}>
          Click for Alert
        </button>
      );
    }

    // Button 2: Create a button that triggers a console log when it is clicked.

    function ButtonTwo() {
      function handleClick() {
        console.log('Hello from the console!');
      }

      return (
        <button onClick={handleClick}>
        Click to log to console
        </button>
      );
    }

    // Button 3: Create a button that becomes disabled and changes the text when it is clicked.


    function ButtonThree() {
      function handleClick(event) {
           event.target.disabled = true;
           event.target.innerText = "I cannot be clicked!";
      }
      return (
          <button onClick={handleClick}>
              Disable Me
          </button>
      );
    }


{/* Button 4: Create a button that triggers an alert when it is DOUBLE clicked. */}


    function ButtonFour() {
      function handleDoubleClick() {
        alert('You DOUBLE clicked!');
      }

      return (
        <button onDoubleClick={handleDoubleClick}>
          Double-click me
        </button>
      );
    }

    export default function App() {

      return (
      
        <>
        <h1>Debugged!</h1>
        <ButtonOne />
        <ButtonTwo />
        <ButtonThree />
        <ButtonFour />
        </>
      )
    }
    