// Set Current Hour
// Manually set a const variable called currentHour to a specific time (e.g., 18, which is 6 PM).
const currentHour = 13;
// Define a Function
function DisplayGreeting() {


// Inside the function:

// const greeting;
// Create a const called greeting and then check the value of currentHour:
// If the hour is between 6 AM and 12 PM, set the greeting to "Good Morning". 'orange'
const greeting = currentHour >= 6 && currentHour < 12 ? "Good Morning"
// Else, if the hour is between 12 PM and 6 PM, set the greeting to "Good Afternoon". 'blue'
: currentHour >= 12 && currentHour < 18 ? "Good Afternoon"
// Else, if the hour is between 6 PM and 12 AM, set the greeting to "Good Evening". 'purple'
: currentHour >= 18 && currentHour < 24 ? "Good Evening"
// Otherwise, set the greeting to "Good Night".
: "Good Night";
// Create a const called greetingStyle and then check the value of currentHour:
// const greetingStyle;
// If the hour is between 6 AM and 12 PM, set the color to orange (Morning).
const greetingStyle = currentHour >= 6 && currentHour < 12 ? { color: 'orange' }
// Syntax hint: { color: 'orange' }
// Else, if the hour is between 12 PM and 6 PM, set the color to blue (Afternoon).
: currentHour >= 12 && currentHour < 18 ? { color: 'blue' }
// Syntax hint: { color: 'blue' }
// Else, if the hour is between 6 PM and 12 AM, set the color to purple (Evening).
: currentHour >= 18 && currentHour < 24 ? { color: 'purple' }
// Syntax hint: { color: 'purple' }
// Otherwise, set the color to dark blue (Night).
// Syntax hint: { color: 'darkblue' }
: { color: 'darkblue' }


// Return JSX (HTML-like structure)

// Create an <h1> element with the dynamically set style (text color) and greeting text.
// Syntax hint: <h1 style={the name of your const for style}>{the name of your const for the greeting}</h1>
return <h1 style={greetingStyle}>{greeting}</h1>

}
// Create your export default function and return your component.

export default function MyApp() {
    return (
        <DisplayGreeting />
    )
}

