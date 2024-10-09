// You are given an array of movies where each movie has an ID, a title, a genre, and a rating. 
function MovieList() {
    return (
      <ul>
        <li>Inception (Sci-Fi) - Rating: 8.8</li>
        <li>The Godfather (Crime) - Rating: 9.2</li>
        <li>The Dark Knight (Action) - Rating: 9.0</li>
        <li>Pulp Fiction (Crime) - Rating: 8.9</li>
        <li>The Matrix (Sci-Fi) - Rating: 8.5</li>
        <li>The The Lion King (Animation) - Rating: 8.5</li>
      </ul>
    );
  }
// Create three components:

// Component #1: Render a list of the movie titles, genres and ratings inside of a <ul> -- each movie/info should be in an <li> element. Make sure that each item has a unique key prop using the ID of the movie, otherwise it will throw an error in the browser.

function MovieConst() {

  const listItems = movies.map(theMovie =>
    <li>{theMovie}</li>); 

    return (
    <ul>{listItems}</ul>
    );
}
// Use this to bold the titles 
// const listItems = starfish.map(filteredCharacter =>
// 	<li key={filteredCharacter.id}>
// 		<b>{filteredCharacter.name}</b>
// 		{' '} is known to be a {' '}
// 		{filteredCharacter.species}
// 	</li>);
// 	// saves a filtered character id
// return <ul>{listItems}</ul>



function MovieData() {
  const movies = [
  {
  id: 1, 
  title: 'Inception',
  genre: 'Sci-Fi',
  rating: 8.8, 
  }, 
  {
  id: 2, 
  title: 'The Godfather',
  genre: 'Crime', 
  rating: 9.2,
},  
{ 
  id: 3, 
  title: 'The Dark Knight', 
  genre: 'Action', 
  rating: 9.0, 
}, 
{ 
  id: 4, 
  title: 'Pulp Fiction', 
  genre: 'Crime', 
  rating: 8.9, 
}, 
{ 
  id: 5, 
  title: 'The Matrix', 
  genre: 'Sci-Fi', 
  rating: 8.7, 
},
{ 
  id: 6, 
  title: 'The Lion King',
  genre: 'Animation', 
  rating: 8.5, 
}];


// Component #2: Filter the movies by genre-- specifically, those of the "Sci-Fi" genre, and change the color of those movies to be red. (hint: create a const to hard-code the "sci-fi" genre. Then, in your <li> style, you can use ternary operators to set the color. For example, you can do something like:

// <li style={{color: nameOfArray.genre === nameOfGenreConst ? 'red' : 'black', }}



// Component #3: Filter the movies by ratings higher than 8.8. Display only these movies in this component.


// Put all three components in your export default.  You can do these in separate component files if you would like, or all inside App.jsx
}
export default function App() {
  return (
    
  <>
    <MovieList />
    <MovieConst />
    <MovieData />
  </>
  );

}
