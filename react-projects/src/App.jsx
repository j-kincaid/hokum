function HalloweenCat() {
  return (
    <img
    className="halloweenCat"
    src="https://i.imgur.com/5MDe0YK.jpeg"
    alt="The Halloween Cat"
    width={581}
    height={436}
    />
  );
}

function HalloweenCatWar({things, size}) {
  return (
    <>
      <img
        className="halloweenCatWar"
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
    ' and his name is ' +
    things.name
  );
}

function getUrl(things) {
  return (
    'https://i.imgur/.com/' + 
    things.id +
    '.jpeg'
  );
}

export default function App() {
  return (
    <>
    <HalloweenCat />
    <HalloweenCatWar
      things={{ name: 'Percy', action: 'the Halloween Cat', id: '5MDe0YK'}}
      />
      </>
  );
}