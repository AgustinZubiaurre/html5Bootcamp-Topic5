import React from 'react';
import ReactDOM from 'react-dom';


export default class ShowMovies extends React.Component{
  render(){
    var favoriteMovies = Array();
    var nonFavoriteMovies = Array();


    this.props.items.forEach(function(movie){
      if (movie.favorite == true)
        favoriteMovies.push(Object.assign({},movie));
      else {
        nonFavoriteMovies.push(Object.assign({},movie));
      }
    });

    if (favoriteMovies.length == 0 & nonFavoriteMovies.length == 0)
      return null;

    else {

    return (
      <div>
        <h1>Favorite Movies</h1>
        <ul>
          {favoriteMovies.map(movie => (
            <li>ID: {movie.id} <br/> Name: {movie.name} <br/> Year {movie.year}  <br/>  <button onClick={() => this.props.onClick(movie.id)}> Delete</button><br/> </li> ))}
        </ul>
        <h2>Non Favorite Movies</h2>
        <ul>
          {nonFavoriteMovies.map(movie => (
            <li>ID: {movie.id} <br/> Name: {movie.name} <br/> Year {movie.year}  <br/>  <button onClick={() => this.props.onClick(movie.id)}> Delete</button><br/> </li> ))}
        </ul>
      </div>
    );
      }
  }
}
