import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import UserViewMovie from './UserViewMovie';
import AdminEditMovie from './AdminEditMovie';

export class ViewMoviePage extends React.Component {
   returnToMainPage = () => {
      this.props.history.push('/');
   };

   render() {
      const { movie } = this.props;
      const releaseYear = moment(movie.releaseDate).year();

      const adminContent = (
         <AdminEditMovie
            movie={movie}
            returnToMainPage={this.returnToMainPage}
         />
      );

      const userContent = (
         <UserViewMovie
            movie={movie}
            returnToMainPage={this.returnToMainPage}
         />
      );


      return (
         <div>
            <div className="page-header">
               <div className="content-container">
                  <h1 className="page-header__title">
                     {movie.title} &nbsp;&nbsp; ({releaseYear})
                  </h1>
               </div>
               <img
                  src="/images/goBack5.png"
                  className="goBack"
                  onClick={this.returnToMainPage}>
               </img>
            </div>
            <div className="content-container">
               {this.props.isAdmin ? adminContent : userContent}
            </div>
         </div>
      );
   }
};


const mapStateToProps = (state, props) => {
   const matchId = ({ id }) => id === props.match.params.id;
   return {
      movie: state.movies.find(matchId),
      isAdmin: state.auth.isAdmin
   }
};

export default connect(mapStateToProps)(ViewMoviePage);
