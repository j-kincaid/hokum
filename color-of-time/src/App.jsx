const currentHour = 18;
const greeting = "";
let color = "";

function ColorTimeTernary({ greeting, currentHour }) {

    { greeting ? (currentHour >= 6 && currentHour <= 12) : (greeting = "Good Morning") } 
    { greeting ? (currentHour > 12 && currentHour <= 18) : (greeting = "Good Afternoon" ) }
    { greeting ? (currentHour > 18 && currentHour <= 24) : (greeting = "Good Evening") }    
    { greeting ? (currentHour >= 1 && currentHour <= 6) : (greeting = "Good Night") }

  const greetingStyle = 'greeting.style.color'; 


    {color ? (currentHour >= 6 && currentHour < 12) : 'orange' } 
    {color ? (currentHour > 12 && currentHour < 18) : 'blue' } 
    {color ? (currentHour > 18 && currentHour < 24) : 'purple' } 
    {color ? (currentHour >= 1 && currentHour < 6) : 'darkblue' } 

    return (
      <h1 style={greetingStyle}>
        {greeting}
      </h1>
    );
};

      export default function MyApp() {
        return (
          <section>
          
              <ColorTimeTernary />

              <ColorTimeTernary />
              
              <ColorTimeTernary />

              <ColorTimeTernary />

          </section>
      )
}