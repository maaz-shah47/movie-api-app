import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Movies from './components/Movies'
import './App.css';
import { CircularProgress } from '@mui/material';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json()
    setMovies(data.results)
    setIsLoading(false)
  }

  return (
   <Fragment>
      <Header showMovies={fetchMoviesHandler} />
      <main className='main'>
        <AddMovie />
        {!isLoading && <Movies movies={movies}/>}
        {isLoading && <CircularProgress color="inherit" />}
      </main>
   </Fragment>
  );
}

export default App;
