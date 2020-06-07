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
            <div className="sub-header">
               
                  <h2 className="sub-header__title">
                     Add a new movie to the site
                  </h2>
               
               <img
                  src="/images/goBack5.png"
                  className="button--go-back"
                  onClick={this.returnToMainPage}>
               </img>
            </div>
            <div className="page-margin">
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
