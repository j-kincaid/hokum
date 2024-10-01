
// Replace these with imgur assets and import them as components for Assignment #4
function HalloweenCat() {
	return (
	  <img
	  className="beeCostume"
	  src="https://imgur.com/9uGZxCw"
	  alt="Cat dressed as a bee for Halloween"
	  width={280}
	  height={300}
	  />
	);
  }

function BeeCat1() {
	return (
		<img
		className="beeCostume"
			src="https://imgur.com/9uGZxCw"
			alt="cat"
			/>
			)
}

export function Image2() {
	return (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg"
			alt="cat"
			/>
			)
}

export default function Gallery() {
	return (
		<section>
			<Image />
		</section>
		);
}