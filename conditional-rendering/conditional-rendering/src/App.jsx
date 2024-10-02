function ToCleanOriginal({ name, isDone}) {
    return <li className="item">{name}</li>
}

function ToCleanWithChecks({ name, isDone}) {
  if (isDone) {
    return <li className="item">{name} ✅</li>
  }
  return <li className="item">{name}</li>
}

function ToIgnore({ name, isDone}) {  
  if (!isDone) {
    return null;
  }
  return <li className="item">{name}</li>

}

function ToCleanWithChecksTernary ({ name, isDone }) {
	return (
		<li className="item">
			{/* {isDone ? name + ' ✅' : name} */}
			{/* {isDone ? (<del> {name + ' ✅'} </del>) : (name)} */}
			{name} {isDone && '✅'}
		</li>
		);
}

export default function MyList() {
  return (
    <section>
      <h1>My original list of things to clean</h1>
      <ul>
        <ToCleanOriginal
          isDone={true}
          name="Laundry Room"
          />

        <ToCleanWithChecks
          isDone={true}
          name="Car"
          />

        <ToCleanWithChecks
          isDone={false}
          name="Kitchen"
          />
      </ul>
      <h1>List of things to clean with checks</h1>
      <ul>
        <ToCleanWithChecks
          isDone={true}
          name="Laundry Room"
          />

        <ToCleanOriginal
          isDone={true}
          name="Car"
          />

        <ToCleanOriginal
          isDone={false}
          name="Kitchen"
          />
      </ul>
      <h1>List of things to ignore</h1>
      <ul>
        <ToIgnore
          isDone={true}
          name="Laundry Room"
          />

        <ToIgnore
          isDone={true}
          name="Car"
          />

        <ToIgnore
          isDone={false}
          name="Kitchen"
          />
      </ul>

      <h1>List of checks and ternary</h1>
      <ul>
        <ToCleanWithChecksTernary
          isDone={true}
          name="Laundry Room"
          />

        <ToCleanWithChecksTernary
          isDone={true}
          name="Car"
          />

        <ToCleanWithChecksTernary
          isDone={false}
          name="Kitchen"
          />
      </ul>
    </section>
  )
}