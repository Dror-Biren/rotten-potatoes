import React from 'react';
import { connect } from 'react-redux';
import MovieForm from './MovieForm';
import { startAddMovie } from '../actions/movies';

export class AddMoviePage extends React.Component {
   returnToMainPage = () => {
      this.props.history.push('/');
   };
   
   onSubmit = (movie) => {
      this.props.startAddMovie(movie);
      this.props.history.push('/');
   };

   render() {
      return (
         <div>
            <div className="page-header">
               <div className="content-container">
                  <h1 className="page-header__title">Add Movie</h1>
               </div>
               <img
                  src="/images/goBack5.png"
                  className="goBack"
                  onClick={this.returnToMainPage}>
               </img>
            </div>
            <div className="content-container">
               <MovieForm
                  onSubmit={this.onSubmit}
               />
            </div>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   startAddMovie: (movie) => dispatch(startAddMovie(movie))
});

export default connect(undefined, mapDispatchToProps)(AddMoviePage);
