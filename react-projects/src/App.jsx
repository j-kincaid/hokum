

function Malaysia() {
  return (
    <img
    className="flag"
    src="https://imgur.com/ViRKEIZ"
    alt="Scene from Kuala Lumpur"
    width={280}
    height={300}
    />
  );
}

function Spain() {
  return (
    <img
    className="flag"
    src="https://imgur.com/ttMADwx"
    alt="A cat rainy night in Madrid"
    width={280}
    height={300}
    />
  );
}

function Estonia() {
  return (
    <img
    className="beeCat"
    src="https://imgur.com/x1EbrqF"
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

function FlashCardPic({things, size}) {
  return (
    <>
      <img
        className="FlashCardPic"
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
    <h3>Here are the Capital cities of nations from around the world. Name the Countries!</h3>
    <Malaysia />
      <FlashCardPic
        things={{ origin: 'Kuala Lumpur', action: 'scene', id: 'ViRKEIZ'}}
        />

    <Spain />
      <FlashCardPic
        things={{ origin: 'Madrid', action: 'a Rainy Day', id: 'ttMADwx'}}
        />

    <Estonia />
      <FlashCardPic
        things={{ origin: 'Tallinn', action: 'view from above', id: 'x1EbrqF'}}
        />

    <LittleCat />
      <FlashCardPic
        things={{ origin: 'Duluth', action: 'a little cat', id: 'O3EIPHp'}}
        />

    <PirateCat />
          <FlashCardPic
            things={{ origin: 'Baltimore', action: 'a pirate cat', id: 'ZZpVeoY'}}
            />
        </>
    );
}