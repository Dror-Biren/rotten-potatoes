import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByRating, sortByViewes, setStartYear, setEndYear } from '../actions/filters';

export class MovieListFilters extends React.Component {
  
  updateStartYear = (e) => {
    const year = e.target.value;
    this.props.setStartYear(year);
  };

  updateEndYear = (e) => {
    const year = e.target.value;
    //console.log({year});
    this.props.setEndYear(year);
  };
  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    switch(e.target.value) {
      case 'viewes':
        this.props.sortByViewes();
        break;
      case 'date':
        this.props.sortByDate();
        break;
      case 'rating':
        this.props.sortByRating();
        break;
    }
  };
  render() {
    const earliestYear = "1960"
    const currentYear = '' + new Date().getFullYear() 

    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search movie title"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="viewes">Most viewed</option>
              <option value="date">Most new</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
          <div className="input-group__item">
            <label>from year:</label>
            <input type="number" min={earliestYear} max={currentYear} 
                   defaultValue={earliestYear}
                   onChange={this.updateStartYear}>
            </input>

            <label>until year:</label>
            <input type="number" min={earliestYear} max={currentYear}
                   defaultValue={currentYear}
                   onChange={this.updateEndYear}>
            </input>
          </div>
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
  sortByViewes: () => dispatch(sortByViewes()),
  sortByDate: () => dispatch(sortByDate()),
  sortByRating: () => dispatch(sortByRating()),
  setStartYear: (year) => dispatch(setStartYear(year)),
  setEndYear: (year) => dispatch(setEndYear(year))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListFilters);
