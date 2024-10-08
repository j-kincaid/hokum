const currentHour = 18;
const greeting = "";
function ColorTimeTernary({ greeting, currentHour }) {

  
  

    {greeting ? (currentHour >= 6 && currentHour <= 12) : (greeting = "Good Morning") } 
    {greeting ? (currentHour > 12 && currentHour <= 18) : (greeting = "Good Afternoon") }
    {greeting ? (currentHour > 18 && currentHour <= 24) : (greeting = "Good Evening") }    
    {greeting ? (currentHour >= 1 && currentHour <= 6) : (greeting = "Good Night") }

    const greetingStyle = "greeting.style.color";
    let color = "";

    {color ? (currentHour >= 6 && currentHour < 12) : (color = '=orange') } 
    {color ? (currentHour > 12 && currentHour < 18) : (color = '=blue') } 
    {greetingStyle ? (currentHour > 18 && currentHour < 24) : (color = '=purple') } 
    {color ? (currentHour >= 1 && currentHour < 6) : (color = '=darkblue') } 


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