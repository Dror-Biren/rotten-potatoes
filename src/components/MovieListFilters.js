import React from 'react';
import { connect } from 'react-redux';

import SelectGenres from './SelectGenres';
import YearsSlider from './YearsSlider';
import { movieGenres } from '../appConsts';
import { setTextFilter, setSortBy, setGenresfilter } from '../actions/filters';


export class MovieListFilters extends React.Component {

   onTextChange = (e) => {
      this.props.setTextFilter(e.target.value);
   };

   onSortChange = (e) => {
      this.props.setSortBy(e.target.value);
   };

   onGenresChanged = (genresSelected) => {
      //console.log(genres)
      this.props.setGenresfilter(genresSelected);
   }

   render() {


      return (
         <div className="page-margin itemsBackground filters">
            <div className="input-group">

               <div className="input-group__item small-sorters">
                  <input
                     type="text"
                     className="text-input"
                     placeholder="🔎  Search movie title"
                     value={this.props.filters.text}
                     onChange={this.onTextChange}
                  />

                  <select
                     className="select"
                     value={this.props.filters.sortBy}
                     onChange={this.onSortChange}
                  >
                     <option value="rating">Top rated ⭐</option>
                     <option value="viewes">Most viewed 👀</option>
                     <option value="date">Most new 🕥</option>
                  </select>
               </div>



               <SelectGenres
                  onGenresChanged={this.onGenresChanged}
                  initGenres={movieGenres}
               />


               <YearsSlider />
            </div>
         </div>
      );
   }
};

const mapStateToProps = (state) => ({
   filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
   setTextFilter: (text) => dispatch(setTextFilter(text)),
   setSortBy: (sorter) => dispatch(setSortBy(sorter)),
   setGenresfilter: (genres) => dispatch(setGenresfilter(genres))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListFilters);


/*
<div className="input-group__item">
                  <select
                     className="select"
                     value={this.props.filters.sortBy}
                     onChange={this.onSortChange}
                  >
                     <option value="rating">Top rated ⭐</option>
                     <option value="viewes">Most viewed 👀</option>
                     <option value="date">Most new 🕥</option>
                  </select>
               </div>
*/