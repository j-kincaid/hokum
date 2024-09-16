import { Picture1 } from './Component1.jsx';

export function Picture2() {
    return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/22/Apple_computer_cat.jpg"
      alt="Cat playing under a computer"
      />
      )
}

function Picture3() {
      return (
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Cat_stares_at_itself_on_computer_monitor.jpg"
      alt="Cat looking at itself on computer"
      />
      );
    }


export default function AllThePictures(Picture1, Picture3) {
	return (
	<section>
	<Picture1 />
	<Picture2 />
	<Picture3 />
	</section>
	);
	}