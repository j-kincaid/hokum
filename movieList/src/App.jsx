// You are given an array of movies where each movie has an ID, a title, a genre, and a rating. 
const movies = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
  { id: 2, title: 'The Godfather', genre: 'Crime', rating: 9.2 },
  { id: 3, title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
  { id: 4, title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
  { id: 5, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 },
  { id: 6, title: 'The Lion King', genre: 'Animation', rating: 8.5 },
];

// Component #1: Render a list of the movie titles, genres and ratings inside of a <ul> -- each movie/info should be in an <li> element. Make sure that each item has a unique key prop using the ID of the movie, otherwise it will throw an error in the browser.

function MovieTitles() {

    const listItems = movies.map(movie =>
      <li key={movie.id}>
        <b>{movie.title}</b>  ({movie.genre})  - Rating: {movie.rating}</li>
    );

    return (
      <ul>
        {listItems}
      </ul>
      );
  }

// Component #2: Filter the movies by genre-- specifically, those of the "Sci-Fi" genre, and change the color of those movies to be red. (hint: create a const to hard-code the "sci-fi" genre. Then, in your <li> style, you can use ternary operators to set the color. 

function SciFiMovies() {

  // Selects SciFi-genre movies
  const science = movies.filter(filteredMovie =>
    filteredMovie.genre === 'Sci-Fi'
  );

// change the color of those movies to be red. 
// <li style={{color: nameOfArray.genre === nameOfGenreConst ? 'red' : 'black', }}

  const listItems = movies.map(movies => 
    <li key = {movies.id} style={{ color: movies.genre === 'Sci-Fi' ? 'red' : 'black' }}>
     <b>{movies.title}</b>   ({movies.genre})  - Rating: {movies.rating}</li>
  );

  return (
    <ul>
    {listItems}
    </ul>
    );
  }

  // Component #3: Filter the movies by ratings higher than 8.8. Display only these movies in this component.

function CriticsChoice() {
  const topRated = movies.filter(filteredMovie =>
    filteredMovie.rating >= 8.8);

  const topItems = topRated.map(filteredMovie =>
  <li key={filteredMovie.id}>
    <b>{filteredMovie.title}</b>  ({filteredMovie.genre})  - Rating: {filteredMovie.rating}</li>);

return  (
<ul>
  {topItems}
</ul>  
);
}

export default function App() {
	
	return (
    <>
<h2>Movie List</h2>
    <MovieTitles/>
    <h2>Movie List</h2>
    <SciFiMovies />
    <h2>Movie List (Rating 8.8 and Higher)</h2>
    <CriticsChoice />
    </>
  );
}
 
// Put all three components in your export default.  You can do these in separate component files if you would like, or all inside App.jsx

