import React from "react";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="col-lg-12 p-3 h-100">
            <div className="card mb-2 shadow-sm h-100">
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                className="card-img-top img-thumbnail"
                alt={movie.title}
              ></img>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title || movie.name}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button
                    className="btn btn-md btn-outline-danger"
                    onClick={(e) => {
                      props.deleteMovieProp(movie);
                    }}
                  >
                    Delete
                  </button>
                  <h5>
                    <span className="badge bg-secondary bg-sm">
                      {parseFloat(movie.vote_average).toFixed(1)}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
