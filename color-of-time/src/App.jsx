const greeting = 18;
const currentTime = "";
function ColorTimeOriginal({ greeting, currentTime}) {
  return <h1 className="day">{currentTime}</h1>
}



function ColorcurrentTimeTernary({greeting, currentTime}) {
  return (
    <h1 className="day">
    {/* If the hour is between 6 AM and 12 PM, set the currentTime to "Good Morning". */}

     {currentTime ? (greeting >= 6 && greeting <= 12) : (currentTime.style.color = "orange") } 
     {currentTime ? (greeting > 12 && greeting <= 18) : (currentTime.style.color = "blue") } 
     {currentTime ? (greeting > 18 && greeting <= 24) : (currentTime.style.color = "purple") }
     {currentTime ? (greeting > 24 && greeting <= 0) : (currentTime.style.color = "darkblue") }
    </h1>
  )
}


      export default function MycurrentTime() {
        return (
          <section>
            <ColorTimeOriginal
            currentTime=""
            greeting="Good Morning"
            />

            <ColorcurrentTimeTernary
              greeting={7}
              currentTime = "Good Morning"
              />

            <ColorcurrentTimeTernary
              greeting={14}
              currentTime = "Good Afternoon"
              />

            <ColorcurrentTimeTernary
              greeting={21}
              currentTime = "Good Afternoon"
              />

            <ColorcurrentTimeTernary
              greeting={2}
              currentTime = "Good Night"
              />
            </section>
        )
      }