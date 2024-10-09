const currentHour = 18;
const greeting = "";


function ColorTimeTernary({ greeting, currentHour }) {

  // Another if/else format

  //  greeting = (currentHour >= 6 && currentHour <= 12) ? "Good Morning" 
  //  : (currentHour >= 6 && currentHour <= 12) ? "Good Afternoon"
  //   : (currentHour > 18 && currentHour <= 24) ? "Good Evening"
  //    : "Good Night";
  
    { greeting ? (currentHour >= 6 && currentHour <= 12) : (greeting = "Good Morning") } 
    { greeting ? (currentHour > 12 && currentHour <= 18) : (greeting = "Good Afternoon") }
    { greeting ? (currentHour > 18 && currentHour <= 24) : (greeting = "Good Evening") }    
    { greeting ? (currentHour >= 1 && currentHour <= 6) : (greeting = "Good Night") }

  const greetingStyle = 'greeting.style.color'; 

//  greetingStyle = (currentHour >= 6 && currentHour <= 12) ? color: 'orange'
//     : (currentHour > 12 && currentHour < 18) ? color: 'blue'
//       : (currentHour > 18 && currentHour <= 24) ? color: 'purple'
//         : color: 'darkblue'


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
          
              <ColorTimeTernary 
                currentHour={3}
              />

              <ColorTimeTernary 
                currentHour={13}
              />
              <ColorTimeTernary 
                currentHour={20}
              />

              <ColorTimeTernary 
                currentHour={5}
              />

          </section>
      )
}