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
    // JS disable this button;
    return (
      <button>
        Click to disable
      </button>
    );
  }

  function ButtonThreeHandlerProps(message, children) {
    // JS change textContent;
        return (
          <button onClick={() => button.textContent={message}}>
            {children}
          </button>
      );
    }

  
    // Button 4: Create a button that triggers an alert when it is DOUBLE clicked.


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
        <ButtonOne />
        <ButtonTwo />
        <ButtonThree />
        <div>
          <ButtonThreeHandlerProps message="Disabled Button">
            Click to disable
          </ButtonThreeHandlerProps>

        </div>
        
 
        <ButtonFour />
        </>
       
      )
    }
    