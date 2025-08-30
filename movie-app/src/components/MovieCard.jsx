import React from "react";
import '../styles/moviecard.css'

const MovieCard = ({movie: {title, vote_average, poster_path, release_date, original_language}}) => {
    return (
        <div className="movie-card">
            <div className="card-image">
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : './no-image.png'} alt={title} />
            </div>
            <div className="card-content">
                <div>
                    <h1>{title}</h1>
                </div>
                <div className="des-lang">
                    <p>{original_language}</p>
                <div className="des-date"></div>
                    <p>{release_date}</p>
                </div>
                
            </div>
                
        </div>
    )
}

export default MovieCard;