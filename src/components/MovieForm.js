import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


import Poster from './Poster';
import SelectGenres3 from './SelectGenres3';
import { moviePramsMax } from '../appConsts';
//import MoviePopUp from './MoviePopUp';
//console.log(MoviePopUp)


export default class MovieForm extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         title: props.movie ? props.movie.title : '',
         description: props.movie ? props.movie.description : '',
         releaseDate: props.movie ? moment(props.movie.releaseDate) : moment(),

         trailerUrl: props.movie ? props.movie.trailerUrl : '',
         posterUrl: props.movie ? props.movie.posterUrl : null,
         poster: null,
         genres: props.movie ? props.movie.genres : [],

         calendarFocused: false,
         error: ''
      };
   }

   onTitleChange = (e) => {
      const title = e.target.value;
      this.setState(() => ({ title }));
   };

   onGenresChanged = (genres) => {
      this.setState(() => ({ genres }))
   }

   onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
   };

   onTrailerChange = (e) => {
      const trailerUrl = e.target.value;
      this.setState(() => ({ trailerUrl }));
   }

   onDateChange = (releaseDate) => {
      if (releaseDate) {
         this.setState(() => ({ releaseDate }));
      }
   };

   onFocusChange = ({ focused }) => {
      const focusedObj = { calendarFocused: focused }
      this.setState(() => focusedObj);
   };

   onSelectPoster = (event) => {
      const poster = event.target.files[0];

      if (poster) {
         if (poster.size > moviePramsMax.posterBytes)
            return alert("File is too big!");
         const posterUrl = URL.createObjectURL(poster);
         const posterObj = { poster, posterUrl };
         this.setState(() => posterObj);
      }
   }

   onRemovePoster = (e) => {
      e.preventDefault();

      this.setState(() => ({
         poster: null,
         posterUrl: null
      }));
   }

   onSubmit = (e) => {
      e.preventDefault();

      const { title, description, poster, posterUrl, trailerUrl, genres } = this.state;

      const setError = text => {
         const errorObj = { error: text };
         this.setState(() => errorObj);
      };

      if (!title)
         return setError('Please provide title.');

      if (genres.length === 0 || genres.length > moviePramsMax.genresAmount)
         return setError(`Please provide between 1-${moviePramsMax.genresAmount} genres.`);

      setError('');

      
      const releaseDate = this.state.releaseDate.valueOf();
      const movieData = { title, description, poster, releaseDate, trailerUrl, genres };
      if (!posterUrl)
         movieData.posterUrl = null;

      this.props.onSubmit(movieData);
   };


   render() {
      return (
         <form className="form" onSubmit={this.onSubmit}>

            {
               this.state.error &&
               <p className="form__error">
                  {this.state.error}
               </p>
            }

            <input
               type="text"
               placeholder="title"
               maxLength={moviePramsMax.titleLength}
               autoFocus
               className="text-input"
               value={this.state.title}
               onChange={this.onTitleChange}
            />

            <SelectGenres3
               onGenresChanged={this.onGenresChanged}
               initGenres={this.state.genres}
            />

            <Poster url={this.state.posterUrl} />

            <input
               type="file"
               id="poster"
               name="poster"
               accept="image/png, image/jpeg, image/jpg"
               onChange={this.onSelectPoster}
            ></input>

            <button
               onClick={this.onRemovePoster}
               disabled={!this.state.posterUrl}>
               Remove poster
            </button>


            <SingleDatePicker
               date={this.state.releaseDate}
               onDateChange={this.onDateChange}
               focused={this.state.calendarFocused}
               onFocusChange={this.onFocusChange}
               numberOfMonths={1}
               isOutsideRange={() => false}
            />

            <textarea
               placeholder="Add a description for your movie (optional)"
               className="textarea"
               value={this.state.description}
               onChange={this.onDescriptionChange}
            ></textarea>

            <input
               type="text"
               placeholder="paste here youtube trailer url"
               maxLength={moviePramsMax.descriptionLength}
               autoFocus
               className="text-input"
               value={this.state.trailerUrl}
               onChange={this.onTrailerChange}
            />

            <div>
               <button className="button">
                  Save Movie
               </button>
            </div>

         </form>
      )
   }
}


/*
     <label htmlFor="poster">
         Upload a poster image for the movie:
       </label>
*/
