import React, {useState} from 'react'

export default function Movies(){

    const [movies, setMovies] = useState(
        [
            {
            'id': 101,
            'title': 'Star Wars IV: A New Hope',
            'director': 'George Lucas'
            },
            {
            'id': 102,
            'title': 'The Lord of the Rings: The Fellowship of the Ring',
            'director': 'Peter Jackson'
            }
        ]
    )
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [index, setindex] = useState(0);

    function getMovie(id)
    {
      for (const m of movies) {
        if(m.id === id)
          return m;
      }
      return null;
    }
 
    function handleEdit(id)
    {
      const movie = getMovie(id);
      setindex(id);
      setTitle(movie.title);
      setDirector(movie.director);
      setIsEditing(true);
    }

    function updateMovie() {
        // 1. create the updated movie object.
        // hint: replace the null below with the correct code
        // hint 2: where is the data for the new movie currently stored?
        let updatedMovie  = {
            id: index,
            title: title,
            director: director
        }

        // 2. find the original index of the updated movie
        let indexToEdit = movies.findIndex((value) => {
          return value.id === index;
        })

        // 3. clone the array
        let clonedMovies = movies.slice();

        // 4. add the updated movie object back to its original index in
        // the array
        clonedMovies.splice(indexToEdit,1,updatedMovie);

        // 5. set the cloned array back into the state
        setMovies(clonedMovies);

        setIsEditing(false);
    }


    return <React.Fragment>
      <div class="container">
        <div class="col">
          {movies.map(m => (
            <React.Fragment>
              <div class="movie">
                <h1> {m.title} <button onClick={() => handleEdit(m.id)} value={m.id}>Edit</button> </h1>
                <h2> Directed by {m.director} </h2>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div class="col" style={{display: isEditing ? "block" : "none"}}>
            <h3>Edit Movie</h3>
            <div>
                <label>Movie Title:</label>
                <input type="text" name="title" value={title} onChange={(event)=> setTitle(event.target.value)} />
            </div>
            <div>
                <label>Director</label>
                <input type="text" name="director" value={director} onChange={(event)=> setDirector(event.target.value)} />
            </div>
            <button onClick={updateMovie}>Update Movie</button>
        </div>
      </div>
    </React.Fragment>
}
