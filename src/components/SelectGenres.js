import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Input from '@material-ui/core/Input';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';


import { movieGenres } from '../appConsts'
const selectOptions = movieGenres;

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: 1,
      minWidth: 200,
      maxWidth: 300,
   },
   chips: {
      display: 'flex',
      flexWrap: 'wrap'
   },
   chip: {
      margin: 2,
      color: "red"
   },
   noLabel: {
      marginTop: 3,
   }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
};


export default function SelectGenres({ initGenres, onGenresChanged }) {

   const classes = useStyles();
   const [genres, setGenres] = React.useState(initGenres);

   const handleChange = event => fullSetGenres(event.target.value);

   const fullSetGenres = newGenres => {
      setGenres(newGenres);
      onGenresChanged(newGenres);
   }

   const createSelectJsx = genre => (
      <MenuItem key={genre} value={genre}>
         <Checkbox checked={genres.indexOf(genre) > -1} />
         <ListItemText primary={genre} />
      </MenuItem>
   );

   const getPreviewSelected = selected => {
      const createParagraph = text => (
         <div className="selectedGenresText-container">
            <p className="selectedGenresText">
               {text}
            </p>
         </div>
      );

      const createChip = genre => {
         function removeSelf() {
            const isDiffrentFromThis = other => other !== genre;
            const newGenres = genres.filter(isDiffrentFromThis);
            fullSetGenres(newGenres);
         }

         function avoidOpenMenu(event) {
            event.stopPropagation();
         }

         return (
            <Chip
               key={genre}
               label={genre}
               className={"aaa " + classes.chip}
               onDelete={removeSelf}
               onMouseDown={avoidOpenMenu}
            />
         );
      };

      if (selected.length === 0)
         return createParagraph("no genres selected");
      if (selected.length === selectOptions.length)
         return createParagraph("all genres");
      //if (selected.length <= 3)
      //return styledText(selected.join(', '));

      return (
         <div className={classes.chips}>
            {selected.map(createChip)}
         </div>
      );
   }

   return (
      <div className="selectGenres-container">
         <FormControl className={classes.formControl}>
            <Select
               labelid="selectGenres"
               id="selectGenres"
               //open={false}
               displayEmpty
               multiple
               value={genres}
               onChange={handleChange}
               input={<Input />}
               renderValue={getPreviewSelected}
               MenuProps={MenuProps}
            >
               {selectOptions.map(createSelectJsx)}
            </Select>
         </FormControl>
      </div>
   );
}
