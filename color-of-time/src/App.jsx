const d = new Date();
const currentHour = d.getHours() + 1; 
// const currentHour = 18;
const greeting = "";
let greetingStyle = "greeting.style.color";


// if currentHour is within these values ? use these colors and verbiage:


// {greeting ? (currentHour > 24 && currentHour <= 6) : (greetingStyle = "darkblue") }
// {greeting ? (currentHour > 12 && currentHour <= 18) : (greetingStyle = "blue") } 
// {greeting ? (currentHour > 18 && currentHour <= 24) : (greetingStyle = "purple") }
// (currentHour >= 6 ? greetingStyle : "orange") } 

// OR 

// currentHour >= 18 ? : 
// currentHour >= 12 ? :
// currentHour >= 6 ? :
// else


function ColorTimeTernary({ greeting, currentHour }) {
  return (
    <h1 className="day">
    {greeting}
    {currentHour > 18}
    {currentHour > 12}
    {currentHour > 6}
    {currentHour}

     {/* {greeting ? (currentHour >= 6 && currentHour <= 12) : (greeting) }  */}
     {/* {greeting ? (currentHour > 12 && currentHour <= 18) : (greeting) }  */}
     {/* {greeting ? (currentHour > 18 && currentHour <= 24) : (greeting) }  */}
     {greeting}
    </h1>
  );
}

      export default function MycurrentHour() {
        return (
          <section>
          <h1>Color of Time</h1>
          <ul>
            <Day 
              currentHour={7}
              greeting = "Good Morning"
              greetingStyle = 'orange'
              />
          </ul>

            <ColorHourTernary
              currentHour={14}
              greeting = "Good Afternoon"
              greetingStyle = 'blue'
              />

            <ColorHourTernary
              currentHour={21}
              greeting = "Good Afternoon" 
              greetingStyle = 'purple'
              />

            <ColorHourTernary
              currentHour={2}
              greeting = "Good Night"
              greetingStyle = 'darkblue'
              />
            </section>
        )
      }
