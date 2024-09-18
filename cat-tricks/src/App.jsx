// Assignment # 3
// Create a component in App.jsx (or App.js) that includes:





// Put all of these into separate functions, and call all the functions in the export default function of your component. If you'd like to break these up into separate files, that is totally fine.

function Tricks() {
  return (
    <img 
    className="shake" 
    src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Cat_shaking_hands.jpg"
    alt="Cat shaking hands"
    />
  );
}

// Using curly braces for attributes
function BracesInAttributes() {
  const image = 'https://upload.wikimedia.org/wikipedia/commons/9/98/Patterned_Tabby_Cat_Standing.jpg';
  const description = 'This is a cat standing and reaching for a treat';
  return (
    <img
      className="cat"
      src={image}
      alt={description}
    />
  );
}

// Using curly braces inside an HTML tag
function BracesInHTML() {
  const trick1 = 'handshake'
  const trick2 = 'stand'
  return (
    <h3>Your cat can learn to do a {trick1} and it can learn to {trick2} on its hind legs and beg for treats!</h3>
  );
}

// Using curly braces for in-line CSS
function InlineStyles() {
	return (
		<div style={
		{
			backgroundColor: 'orange', 
			color: 'black'
		}
	}>
  <p>Your cat will enjoy the challenge!</p>

    </div>
  );
}


// Using curly braces for an object with both a name and a theme
const catPerformer = {
  name: 'Sweetums',
  theme: {
    backgroundColor: 'goldenrod',
    color: 'black'
  }
};




export default function App() {
  return (
    <>
      <Tricks />
      <BracesInAttributes />
      <BracesInHTML />
      <InlineStyles />
      <catPerformer />
    </>
  )
}