import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false}); //하나는 state거, 하나는 axios에서 온거
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading 
          ? (<div className="loader">
            <span className="loader_text">Loading...</span>
            </div>)
             : (
               <div className="movies">
                 {movies.map(movie => (
                    <Movie 
                      key={movie.id} 
                      id={movie.id} 
                      year={movie.year}
                      genres={movie.genres}
                      title={movie.title} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image}/>))}
               </div>
             )}
      </section>
    );
  }
}

export default App;