const currentHour = 18;
const greeting = "";
const greetingStyle = "";
function ColorTimeOriginal({ currentHour, greeting}) {
  return <h1 className="day">{currentHour}</h1>
}
function ColorTimeWithChecks({ currentHour, greeting}) {
  if (greeting) {
    return <li className="day">{currentHour} + ' ' + {greeting}</li>
  }
  return <li className="day">{currentHour}</li>
}

function ToIgnore({ currentHour, greeting}) {  
  if (!currentHour) {
    return null;
  }
  return <li className="day">{greeting}</li>
}


function ColorHourTernary({ currentHour, greeting }) {
  return (
    <h1 className="day">

     {greeting ? (currentHour >= 6 && currentHour <= 12) : (greetingStyle = "orange") } 
     {greeting ? (currentHour > 12 && currentHour <= 18) : (greetingStyle = "blue") } 
     {greeting ? (currentHour > 18 && currentHour <= 24) : (greetingStyle = "purple") }
     {greeting ? (currentHour > 24 && currentHour <= 0) : (greetingStyle = "darkblue") }
  
    </h1>
  );
}


      export default function MycurrentHour() {
        return (
          <section>
            <ColorTimeOriginal
            currentHour
            greeting="Good Morning"
            />
            <ColorTimeWithChecks
            currentHour
            greeting="Good Afternoon"
            />
            <ColorHourTernary
              currentHour
              greeting = "Good Morning"
              />

            <ColorHourTernary
              currentHour={14}
              greeting = "Good Afternoon"
              />

            <ColorHourTernary
              currentHour={21}
              greeting = "Good Afternoon"
              />

            <ColorHourTernary
              currentHour={2}
              greeting = "Good Night"
              />
            </section>
        )
      }