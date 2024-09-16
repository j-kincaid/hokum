function Kitten() {
	return (
	<img
	src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Cat_keyboard.jpg"
	alt="Kitten hacking on a keyboard"
	/>
	);
  }
	function Cat2() {
	  return (
	  <img
	  src="https://upload.wikimedia.org/wikipedia/commons/2/22/Apple_computer_cat.jpg"
	  alt="Cat playing under a computer"
	  />
	  );
	}
  
	function App3() {
	  return (
	  <img
	  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Cat_stares_at_itself_on_computer_monitor.jpg"
	  alt="Cat looking at itself on computer"
	  />
	  );
	}
	export default function Gallery() {
	return (
	<section>
	<h1>The Internet. Built for Cats.</h1>
	<p> Next: Let us vote!</p>
	<Kitten />
	<Cat2 />
	<App3 />
	</section>
	);
	}
  