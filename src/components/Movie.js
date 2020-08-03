import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, year, title, summary, poster, genres}) {

    return(
        <div className="movie">
        <Link style={{textDecoration: 'none'}} 
            to={{
            pathname: `/movie/:${id}`,
            state: {
                title,
                year,
                poster,
                summary,
                genres
            }            
         }}>
            
                
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className="movie__title">{title}</h3> 
            <h5 className="movie__year">{year}</h5>            
            <ul className="movie__genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">
                        {genre}
                    </li>
                ))}
            </ul>
            <p className="movie_summary">{summary.slice(0,140)}...</p>
        </div>        
        
        </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;