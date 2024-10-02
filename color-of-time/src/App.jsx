// Create a react app using ternary operators that displays a different greeting in a different color depending on the time of day:

// If the time is between 6 AM and 12 PM, show "Good Morning." in orange
// If the time is between 12 PM and 6 PM (18:00), show "Good Afternoon." in blue
// If the time is between 6 PM (18:00) and 12 AM (24:00), show "Good Evening." in purple
// If the time is between 12 AM (24:00) and 6 AM, show "Good Night." in dark blue

let currentHour = new Date.getHours();
let color = '';
if (currentHour > 6 && currentHour < 12) {
  return <h1 style={{color:'orange'}}>Good Morning.</h1>
  } if (currentHour > 12 && currentHour < 18) {
    return <h1 style={{color:'blue'}}>Good Afternoon.</h1>
    } if (currentHour > 18 && currentHour < 24) {
      return <h1 style={{color:'purple'}}>Good Evening.</h1> 
     } if (currentHour > 0 && currentHour < 6) 
      return <h1 style={{color:'darkblue'}}>Good Night.</h1> 
        
      