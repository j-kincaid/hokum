

function BeeCat() {
  return (
    <img
    className="beeCat"
    src="https://imgur.com/9uGZxCw"
    alt="A cat dressed as a bee rolling off a bed"
    width={280}
    height={300}
    />
  );
}

function GamerCat() {
  return (
    <img
    className="beeCat"
    src="https://imgur.com/jhcN1Ke"
    alt="A cat playing an ingenious game"
    width={280}
    height={300}
    />
  );
}

function CarpetShark() {
  return (
    <img
    className="beeCat"
    src="https://imgur.com/UXCBWlW"
    alt="Cat scooting on carpet while wearing slipper"
    width={280}
    height={300}
    />
  );
}

function LittleCat() {
  return (
    <img
    className="beeCat"
    src="https://imgur.com/O3EIPHp"
    alt="A very cute little cat clapping its paws"
    width={500}
    height={500}
    />
  );
}

function PirateCat() {
  return (
    <img
    className="beeCat"
    src="https://imgur.com/ZZpVeoY"
    alt="A cat dressed as a pirate and walking toward the camera"
    width={500}
    height={500}
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
<h2>{getAltText(things)}</h2>
    </>
  )
}

function getAltText(things) {
  return (
    'This is a ' +
    things.action + 
    ' from ' +
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
    <h1>Gallery of cats in costumes and cats doing odd things</h1>
    <BeeCat />
      <BeeCatCostume
        things={{ origin: 'Seattle', action: 'a Bee Cat', id: '9uGZxCw'}}
        />

    <GamerCat />
      <BeeCatCostume
        things={{ origin: 'Austin', action: 'a Gamer Cat', id: 'jhcN1Ke'}}
        />

    <CarpetShark />
      <BeeCatCostume
        things={{ origin: 'Nashville', action: 'a carpet shark', id: 'UXCBWlW'}}
        />

    <LittleCat />
      <BeeCatCostume
        things={{ origin: 'Duluth', action: 'a little cat', id: 'O3EIPHp'}}
        />

    <PirateCat />
          <BeeCatCostume
            things={{ origin: 'Baltimore', action: 'a pirate cat', id: 'ZZpVeoY'}}
            />
        </>
    );
}