import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Poster from './Poster';

const MovieListItem = ({ id, title, rating, releaseDate, posterUrl }) => (
   <Link className="list-item" to={`/edit/${id}`}>
      <div>
         <Poster url={posterUrl}/>
         <h3 className="list-item__title">{title}</h3>
         <span className="list-item__sub-title">{moment(releaseDate).format('MMMM Do, YYYY')}</span>
      </div>
      <h3 className="list-item__data">{rating}</h3>
   </Link>
);

export default MovieListItem;
