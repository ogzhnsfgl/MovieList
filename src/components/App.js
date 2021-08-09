import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
require("dotenv").config();

console.log(process.env);

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/list/7102470?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    this.setState({ movies: response.data.items });
    console.log(response.data.items);
  }

  //   async componentDidMount() {
  //     const baseURL = "http://localhost:3001/movies";
  //     const response = await fetch(baseURL);
  //     console.log(response);
  //     const data = await response.json();
  //     console.log(data);
  //     this.setState({ movies: data });
  //   }

  /*   deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    // this.setState({ movies: newMovieList });
    this.setState((state) => ({
      movies: newMovieList,
    }));
  }; */

  //FETCH API ile delete:

  //   deleteMovie = async (movie) => {
  //     const baseURL = `http://localhost:3001/movies/${movie.id}`;
  //     await fetch(baseURL, {
  //       method: "DELETE",
  //     });
  //     const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
  //     this.setState((state) => ({
  //       movies: newMovieList,
  //     }));
  //   };

  //Axios ile delete:

  deleteMovie = async (movie) => {
    await axios.post(
      `https://api.themoviedb.org/3/list/7102470/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`
    );

    // axios.delete(
    //   `https://api.themoviedb.org/3/list/7102470/remove_item?${movie.id}api_key=${process.env.REACT_APP_API_KEY}`
    // );

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title ||
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
