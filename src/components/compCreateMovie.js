import React from 'react';
import ReactDOM from 'react-dom';

import Movie from './movieClass.js';

export default class CreateMovie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movie: new Movie('','',''),
      name: '',
      year: '',
      duration: '',
      favorite: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render(){
    return(
      <div>
        <h1>Create New Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label><br/>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          /><br/>
          <label>Year:</label><br/>
          <input
            name="year"
            type="text"
            value={this.state.year}
            onChange={this.handleInputChange}
          /><br/>
          <label>Duration:</label><br/>
          <input
            name="duration"
            type="text"
            value={this.state.duration}
            onChange={this.handleInputChange}
          /><br/>
          <label>Favorite </label>
          <input
            name="favorite"
            type="checkbox"
            checked={this.state.favorite}
            onChange={this.handleInputChange}
          /><br/>
          <button
            type="submit"
            onClick={() => this.props.onClick(this.state.movie)}>
            Create Movie
          </button>
        </form>
      </div>
    );
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const movie = this.state.movie;

    switch(name){
      case 'name': {movie.setName(value); break;}
      case 'year': {movie.setYear(value); break;}
      case 'duration': {movie.setDuration(value); break;}
      case 'favorite': {movie.setFavorite(value); break;}
    }

    this.setState({
      [name]: value,
      movie: movie
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      movie: new Movie('','',''),
      name: '',
      year: '',
      duration: '',
      favorite: false,
    });
  }
}
