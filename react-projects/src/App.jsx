function Strings() {
  return (
    <img
      className="cat" //passed in as a string since in double quotes
      src="https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg" //passed in as string since in double quotes
      alt="This is a Cat"
    />
  );
}


function BracesInAttributes() {
  const image = 'https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg';
  const description = 'This is a cat';
  return (
    <img
      className="cat"
      src={image}
      alt={description}
    />
  );
}

function BracesInTag() {
  const name ='Jessica';
  return (
    <h1>{name}'s Wednesday class!</h1>
  );
}

const today = new Date();
function FormatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

function ObjectsInJSX() {
  return (
		<ul style={
		{
			backgroundColor: 'black', //note inline css syntax differences-- needs to be in camelCase since it's JSX

			color: 'pink'
		}
	}>
      <li>There is a cat.</li>
      <li>It has a face.</li>
      <li>It eats sometimes.</li>
    </ul>
  );
}

const catObject = {
  name: 'Goldfish',
  theme: {
    backgroundColor: 'blue',
    color: 'orange'
  }
};

function ManyExpressions() {
  return (
    <div style={catObject.theme}>
      <h1>{catObject.name} is a cat</h1>
				<img
					className="cat"
					src="https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg"
					alt="This is a cat"
				/>

			<ul>
				<li>He's got a face</li>
				<li>He eats occasionally</li>
				<li>He speaks somsetimes</li>
			</ul>
		</div>
  );
}

export default function App() {
	return(
	<>
  <Strings />
	<BracesInAttributes />
  <BracesInTag />
  <h1>Today's date is: { FormatDate(today) }</h1>
  <ObjectsInJSX />
	</>
	);
}