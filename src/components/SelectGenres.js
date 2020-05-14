import React from 'react';
import MultiSelect from "@khanacademy/react-multi-select";

import { movieGenres } from '../appConsts'

function createGenres(options) {
   return options.map(option => ({
      label: option,
      value: option
   }));
}

export default class SelectGenres extends React.Component {
   state = {
      selected: this.props.initGenres
   }

   onSelectedChanged = (selected) => {
      this.setState({ selected });
      this.props.onGenresChanged(selected)
      //console.log(selected);
   }

   render() {
      return (
         <div className="genreSelectorContainer">
            <MultiSelect
               options={createGenres(movieGenres)}
               selected={this.state.selected}
               onSelectedChanged={this.onSelectedChanged}
               overrideStrings={{
                  selectSomeItems: "select genres",
                  allItemsAreSelected: "All genres",
                  selectAll: "SELECT ALL",
                  search: "Search",
               }}
            />
         </div>
      );
   }
}