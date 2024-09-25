// Assignment # 3

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

// I want to be able to see all of the images so I reduced their size. It didn't work to assign maxWidth inline so I put it in index.css

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
  const title1 = 'Cat Tricks'
  const trick1 = 'handshake'
  const trick2 = 'stand on its hind legs and beg'
  return (
    <>
    <h1>{title1}.</h1>
    <h3>Your cat can learn to do a {trick1} and {trick2} for treats!</h3>
    </>
  );
}

// Using curly braces for in-line CSS
function InlineStyles() {
  return (
		<div style = {
      {
      backgroundColor: 'darkgoldenrod', 
			color: '#fff',
      fontSize: '1.5rem',
      margin: '5%',
      padding: '0.25rem'
      }
    }
    >
<h5>Everyone will enjoy the challenge!</h5>
  </div>
  )
}

// Using curly braces for an object with both a name and a theme
const catPerformer = {
  name: 'Marvin',
  theme: {
    backgroundColor: 'brown',
    color: 'white',
    textAlign: 'center',
  }
};


function CombinedExpressions() {
  const human="https://upload.wikimedia.org/wikipedia/commons/c/cc/Handshaking_with_my_master_%284303758332%29.jpg"
  const description = "Cat shaking hands with human"
  return (
    <div style={catPerformer.theme}>
      <h2>{catPerformer.name} is a talented cat</h2>
    <img 
    className="cat"
    src={human}
    alt={description}
    />
        <img
        className="pyramid"
        src="https://upload.wikimedia.org/wikipedia/commons/6/65/Rat%2C_cat_%26_dog_pyramid_at_Fisherman%27s_Wharf.JPG" 
        alt="pyramid of animals: rat, cat and dog" 
        />
    </div>
  )
}


export default function App() {
  return (
    <>
      <BracesInHTML />
      <Tricks />
      <BracesInAttributes />
      <CombinedExpressions />
      <InlineStyles />
      <catPerformer />
    </>
  )
}