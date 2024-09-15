// Import Function Picture1()
import { Cat1 } from './Images.jsx';

// Cat key:
// 1. hacking keyboard
// 2. playing under computer
// 3. looking at itself on computer


// Export Function Picture2()
export function Cat2() {
    return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/22/Apple_computer_cat.jpg"
      alt="Cat playing under a computer"
      />
      )
}

// Function Picture3()
function Cat3() {
      return (
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Cat_stares_at_itself_on_computer_monitor.jpg"
      alt="Cat looking at itself on computer"
      />
      );
    }



// Export Default Function AllThePictures(Picture1, Picture3)

export default function App() {

  return (
    <>
      <Cat1 />
      <Cat2 />
      <Cat3 />
    </>

  );
}
//     return (
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/2/22/Apple_computer_cat.jpg"
//       alt="Cat playing under a computer"
//       />
//       )
// }
