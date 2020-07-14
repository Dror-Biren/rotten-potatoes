import React from 'react';
import { connect } from 'react-redux';

import MovieForm from '../moviesInfo/MovieForm';
import { startEditMovie, startRemoveMovie } from '../../actions/movies';

export class UserViewMovie extends React.Component {
   onSubmit = (movie) => {
      this.props.startEditMovie(this.props.movie.id, movie);
      this.props.returnToMainPage();
   };

   onRemove = () => {
      const isConfirmed = confirm(
         "Are you sure you want to delete this movie? \n" +
         "All the information will be lost..."
      );

      if (isConfirmed) {
         this.props.startRemoveMovie({ id: this.props.movie.id });
         this.props.returnToMainPage();
      }
   };

   render() {
      return (
         <div>
            <MovieForm
               movie={this.props.movie}
               onSubmit={this.onSubmit}
            />
            <button
               className="button button--cancel"
               onClick={this.onRemove}>
               Remove Movie
            </button>
         </div>
      );
   }

};

const mapDispatchToProps = (dispatch, props) => ({
   startEditMovie: (id, movie) => dispatch(startEditMovie(id, movie)),
   startRemoveMovie: (data) => dispatch(startRemoveMovie(data))
});

export default connect(undefined, mapDispatchToProps)(UserViewMovie);