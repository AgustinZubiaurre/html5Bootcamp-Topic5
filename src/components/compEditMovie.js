import React from 'react';
import ReactDOM from 'react-dom';

import Movie from './movieClass.js';

export default class EditMovie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movie: null,
      name: '',
      year: '',
      duration: '',
      favorite: false,
      id: '',
      youcan: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputIdChange = this.handleInputIdChange.bind(this);
  }

  render(){
    return(
      <div>
        <h1>Edit Movie</h1>
        <label>Put the ID Movie to Edit</label><br/>
        <input
          name="id"
          type="text"
          value={this.state.id}
          onChange={this.handleInputIdChange}
        /><br/>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label><br/>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            disabled={this.state.youcan}
          /><br/>
          <label>Year:</label><br/>
          <input
            name="year"
            type="text"
            value={this.state.year}
            onChange={this.handleInputChange}
            disabled={this.state.youcan}
          /><br/>
          <label>Duration:</label><br/>
          <input
            name="duration"
            type="text"
            value={this.state.duration}
            onChange={this.handleInputChange}
            disabled={this.state.youcan}
          /><br/>
          <label>Favorite </label>
          <input
            name="favorite"
            type="checkbox"
            checked={this.state.favorite}
            onChange={this.handleInputChange}
            disabled={this.state.youcan}
          /><br/>
          <button
            disabled={this.state.youcan}
            type="submit"
            onClick={() => this.props.onClick(this.state.movie)}>
            Edit Movie
          </button>
        </form>
      </div>
    );
  }

  handleInputIdChange(event){

    const value = event.target.value;
    var movie = null;

    this.props.movies.forEach(function(item){
      if(item.id == value){
        movie = item;
      }
    });

    if (movie != null){
      this.setState({
        name: movie.name,
        year: movie.year,
        duration: movie.duration,
        favorite: movie.favorite,
        youcan: false,
      });
    }else{
      this.setState({
        name: '',
        year: '',
        duration: '',
        favorite: '',
        youcan: true,
      });
    }

    this.setState({
      id: value,
      movie: movie,
    });
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const movie = this.state.movie;

    switch(name){
      case 'name': {movie.name = value; break;}
      case 'year': {movie.year = value; break;}
      case 'duration': {movie.duration = value; break;}
      case 'favorite': {movie.favorite = value; break;}
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
      id: '',
    });
  }



}
