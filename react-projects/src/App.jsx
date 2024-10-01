function BeeCat() {
  return (
    <img
    className="beeCat"
    src="https://imgur.com/9uGZxCw"
    alt="Bee Cat rolling off a bed"
    width={280}
    height={300}
    />
  );
}

function ScaredyCat() {
  return (
    <img
    className="beeCat"
    src="https://imgur.com/gallery/bee-cat-jn5e6ef"
    alt="Black cat running from something"
    width={280}
    height={300}
    />
  );
}
function BeeCatCostume({things, size}) {
  return (
    <>
      <img
        className="beeCatCostume"
        src={getUrl(things)}
        alt={getAltText(things)}
    />
<h1>{getAltText(things)}</h1>
    </>
  )
}

function getAltText(things) {
  return (
    'This is a picture of ' +
    things.action + 
    ' and they are from ' +
    things.origin
  );
}

function getUrl(things) {
  return (
    'https://imgur.com/' + 
    things.id +
    '.jpeg'
  );
}

export default function App() {
  return (
    <>
    <BeeCat />
      <BeeCatCostume
        things={{ origin: 'Birmingham', action: 'a Bee Cat', id: '9uGZxCw'}}
        />
    <ScaredyCat />
      <BeeCatCostume
        things={{ origin: 'Austin', action: 'a Scaredy Cat', id: '2uro99U'}}
        />


        </>
    );
}