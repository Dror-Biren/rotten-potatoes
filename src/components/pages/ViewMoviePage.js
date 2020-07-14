import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import UserViewMovie from './UserViewMovie';
import AdminEditMovie from './AdminEditMovie';

export class ViewMoviePage extends React.Component {
   returnToMainPage = () => {
      this.props.history.push('/dashboard');
   };

   render() {
      const { movie } = this.props;
      if (!movie) {
         this.props.history.push('/not-found-page');
         return <div></div>;
      }

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
            <div className="sub-header">
                  <h2 className="sub-header__title">
                     <span className="span-bold">
                        {movie.title}
                     </span> 
                     &nbsp; ({releaseYear})
                  </h2>
               <img
                  src="/images/goBack5.png"
                  className="button--go-back"
                  onClick={this.returnToMainPage}>
               </img>
            </div>
            <div className="page-margin page-content-padding moviePage-content">
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
      isAdmin: state.user.isAdmin
   }
};

export default connect(mapStateToProps)(ViewMoviePage);
