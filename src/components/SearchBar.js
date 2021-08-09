import React from "react";

class SearchBar extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row my-5 d-flex justify-content-center">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Search a movie"
              onChange={this.props.searchMovieProp}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
