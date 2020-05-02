import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default class StarsRating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 