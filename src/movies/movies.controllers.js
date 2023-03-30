const moviesDB = [
    {
      id: 1,
      "title": "Avengers: Endgame",
      "description": "The remaining Avengers must find a way to win back their allies for an epic showdown with Thanos, the villain who decimated the planet and the universe.",
      "year": 2019,
      "director": "Anthony Russo, Joe Russo"
    },
    {
      id: 2,
      "title": "Uncharted",
      "description": "Treasure hunter Victor Sullivan recruits Nathan Drake to help him recover a 500-year-old fortune. What starts out as a heist turns into a competition against the ruthless Santiago Moncada.",
      "year": 2022,
      "director": "Ruben Fleischer"
    },
    {
      id: 3,
      "title": "Just friends",
      "description": "Chris confesses his love to Jamie, however, she breaks his heart as she only wants him as a friend. Ten years later, Chris has become a handsome music producer and, on a trip, he meets Jamie again.",
      "year": 2005,
      "director": "Roger Kumble"
    },
    {
      id: 4,
      "title": "Fast & Furious: Hobbs & Shaw",
      "description": "The agent Luke Hobbs and the mercenary Deckard Shaw face a terrorist of supernatural strength, with a brilliant mind and a pathogen capable of annihilating half the world's population.",
      "year": 2019,
      "director": "David Leitche"
    }
  ]
  
  let movieId = 4
  
  const findAllMovies = async () => {
    return moviesDB
  }
  
  const findMovieById = async (id) => {
    const movie = moviesDB.find(movieItem => movieItem.id === id)
    return movie
  }
  
  const createMovie = async (movieObj) => {
    const newMovie = {
      id: movieId++,
      "title": movieObj.title || 'Untitled',
      "description": movieObj.description || null,
      "year": movieObj.year || 1990,
      "director": movieObj.director || 'Anonymous'
    }
    moviesDB.push(newMovie)
    return newMovie
  }
  
  const updateMovie = async (movieId, movieObj) => {
    const updatedMovie = {
      "id": movieId,
      "title": movieObj.title || 'Untitled',
      "description": movieObj.description || null,
      "year": movieObj.year || 1990,
      "director": movieObj.director || 'Anonymous'
    }
  
    for (let i =  0; i < moviesDB.length; i++) {
      if(moviesDB[i].id === movieId){
        moviesDB.splice(i, 1, updatedMovie)
      }
    }
  
    return moviesDB
  }
  
  const removeMovie = async (movieId) => {
    let removed = false
  
      for (let i =  0; i < moviesDB.length; i++) {
        if(moviesDB[i].id === movieId){
          moviesDB.splice(i, 1)
          removed = true
        }
      }
  
    const data = {removed, moviesDB}
    
    return data
  }
  
  module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    updateMovie,
    removeMovie
  }