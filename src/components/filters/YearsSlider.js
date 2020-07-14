import React from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import { setYearsRangeFilter } from '../../actions/filters';
import { yearsRangeFilter } from '../../appConsts';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


const CustomSlider = withStyles({
   root: {
     color: '#52af77',
     height: 8,
   },
   thumb: {
     height: 24,
     width: 24,
     backgroundColor: '#fff',
     border: '2px solid currentColor',
     marginTop: -5,
     marginLeft: -12,
     '&:focus, &:hover, &$active': {
       boxShadow: 'inherit',
     },
   },
   active: {},
   valueLabel: {
     left: 'calc(-50% + 4px)',
   },
   track: {
     height: 13,
     borderRadius: 4,
   },
   rail: {
     height: 13,
     borderRadius: 4,
   },
 })(Slider);
 


export function YearsSlider(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(props.yearsRange);

  const handleChange = (event, newYears) => {
    props.setYearsRangeFilter(newYears);
    setValue(newYears);
  };

  /*classes.root*/
  return (
    <div className="yearsSlider-container">
      <h1 className="yearsSlider-title">
         years
      </h1>
      {
      <CustomSlider
        min={yearsRangeFilter[0]}
        max={yearsRangeFilter[1]}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
   yearsRange: state.filters.yearsRange
});

const mapDispatchToProps = (dispatch) => ({
   setYearsRangeFilter: (yearsRange) => dispatch(setYearsRangeFilter(yearsRange))
});

export default connect(mapStateToProps, mapDispatchToProps)(YearsSlider);
 

/*
import { Slider } from 'material-ui-slider';

export default function test() {
   return (
     <Slider defaultValue={10}></Slider>
   );
 }
 */