import React from 'react'
import '../styles/home.css'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'

const Home = ({movieList}) => {

    console.log({movieList})

    return (
        <main className='main-container'>
                <div className="main-container-movies-avail">
                    <h2>Watch Now</h2>
                </div>
        
        <div className='main-moviecard-container'>
            {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        </main>
    )
}

export default Home