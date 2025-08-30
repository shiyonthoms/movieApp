import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {

  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (query = '') => {

    setIsLoading(true);
    setErrorMessage('');
    try{
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTION);

      // throw new Error('Failed to fetch movies');
    if(!response.ok){
        throw new Error('Failed to fetch movies');
      
      } 
    const data = await response.json();
    if(data.response === 'False'){
      setErrorMessage(data.error || 'Failed to fetch movies');
      setMovieList([]);
      return;
    }

    setMovieList(data.results || []);
    console.log(data);

    }catch(error){
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);



  return (
    <>
    <NavBar />
    <div className="main-content">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Home movieList = {movieList}/>
    </div>
    
    </>
  )
}

export default App
