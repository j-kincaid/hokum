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
  function handleChangeClick() {
    <button>
      {message}
    </button>
  }

    // ButtonThreeHandler was the part that was almost exactly what it needed to be.

    // function ButtonThreeHandler(event) {
    //   event.target.disabled = true;
    //   event.target.innerText = "I cannot be clicked!";
    //   }


    return (
      <button onClick={handleChangeClick}>
        Disable Me
      </button>
    );
}
    // function ButtonThreeHandlerProps(message, children) {
    //   // JS change textContent;
    //       return (
    //         <button onClick={() => button.textContent={message}}>
    //           {children}
    //         </button>
    //     );
      
    // function ButtonThree(onClick) {
    //    function handleDisableClick() {
    //     <button onClick={() => .disabled = true;
    //     <button onClick={() => textContent = "I am changed!"
    //   }
    //   }

      // function ButtonThreeHandlerProps(message, children) {
      //   // JS change textContent;
      //       return (
      //         <button onClick={() => button.textContent={message}}>
      //           {children}
      //         </button>
      //     );
      //   }


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
        <h1>It seems so simple and yet.</h1>
        <ButtonOne />
        <ButtonTwo />
        <ButtonThree />
        <ButtonFour />
        </>
      )
    }
    