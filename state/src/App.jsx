import { useState } from 'react' 

const characterList = [{
  name: 'Spongebob',
  house: 'Pineapple',
  species: 'Sponge'
}, {
  name: 'Squidward',
  house: 'Face',
  species: 'Squid'
}, {
  name: 'Patrick',
  house: 'Rock',
  species: 'Starfish'
}];

function ThisFunctionWillNotWork() {
  var index=0;
// We need to keep track of new data and update

  function handleClick() {
    index = index + 1;
  }
  var characters = characterList[index];

  return (
    <>
      <h1> ----------------------------- </h1>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{characters.name} </i>
          lives in a {characters.house}.
      </h2>

      <h3>
        ({index+1} of {characterList.length})
      </h3>

      <p>
        {characters.name} is a {characters.species}.
      </p>
    </>
  )
}

function ThisFunctionWillWork() {
  const [index, setIndex] = useState(0);
// setIndex triggers the re-render

  function handleClick() {
    setIndex(index + 1); // 1 is saved in useState
  }

  var characters = characterList[index];

  return (
    <>
      <h1> ----------------------------- </h1>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{characters.name} </i>
        lives in a {characters.house}.
      </h2>

      <h3>
        ({index+1} of {characterList.length})
      </h3>

      <p>
        {characters.name} is a {characters.species}.
      </p>
    </>
  )
}

function MultipleStates() {
  const [index, setIndex] = useState(0);
  const [speciesToClick, setSpeciesToClick] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleSpeciesClick() {
    setSpeciesToClick(!speciesToClick);
  }

  var characters = characterList[index];

  return (
    <>
      <h1> ----------------------------- </h1>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{characters.name} </i>
        lives in a {characters.house}.
      </h2>

      <h3>
        ({index+1} of {characterList.length})
      </h3>
      <button onClick={handleSpeciesClick}>
    {/* speciesToClick starts as showing (false) but when you click the button it hides */}
        {speciesToClick ? 'Hide' : 'Show'} species
      </button>
			{speciesToClick && <p>{characters.name} is a {characters.species}.</p>} 
      {/* everything after && is always true */}
    </>
  )
}

export default function App() {
  return (
    <>
    <ThisFunctionWillWork />
    <ThisFunctionWillNotWork />
    <MultipleStates />
    </>
  )
}