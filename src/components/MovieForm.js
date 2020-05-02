import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import Poster from './Poster';
import StarsRating from './StarsRating';
import StarsRating2 from './StarsRating2';

const posterMaxSizeInBytes = 2000000;


export default class MovieForm extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         title: props.movie ? props.movie.title : '',
         description: props.movie ? props.movie.description : '',
         releaseDate: props.movie ? moment(props.movie.releaseDate) : moment(),

         posterUrl: props.movie ? props.movie.posterUrl : null,
         poster: null,
         isPosterSelect: false,

         calendarFocused: false,
         error: ''
      };
   }

   onTitleChange = (e) => {
      const title = e.target.value;
      this.setState(() => ({ title }));
   };

   onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
   };

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
         if (poster.size > posterMaxSizeInBytes)
            return alert("File is too big!");
         const posterUrl = URL.createObjectURL(poster);
         const posterObj = { poster, posterUrl, isPosterSelect: true };
         this.setState(() => posterObj);
      }
   }

   onRemovePoster = (e) => {
      e.preventDefault();

      this.setState(() => ({
         poster: null,
         posterUrl: null,
         isPosterSelect: false
      }));
   }

   onSubmit = (e) => {
      e.preventDefault();

      if (!this.state.title)
         return this.setState(() => ({ error: 'Please provide title.' }));
      this.setState(() => ({ error: '' }));
      
      let movieData = {
         title: this.state.title,
         releaseDate: this.state.releaseDate.valueOf(),
         description: this.state.description,
         poster: this.state.isPosterSelect && this.state.poster,
      };

      this.props.onSubmit(movieData);
   };


   render() {
      return (
         <form className="form" onSubmit={this.onSubmit}>

         <StarsRating/>
         <StarsRating2/>

            {
               this.state.error &&
               <p className="form__error">
                  {this.state.error}
               </p>
            }

            <input
               type="text"
               placeholder="title"
               autoFocus
               className="text-input"
               value={this.state.title}
               onChange={this.onTitleChange}
            />

            <Poster url={this.state.posterUrl}/>

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
