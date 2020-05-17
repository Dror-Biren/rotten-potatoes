import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
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
      flexWrap: 'wrap',
      "font-size": '30px'
   },
   chip: {
      margin: 2,
      "font-size": '30px',
      
   },
   noLabel: {
      marginTop: 3,
   },
   root: {
      "font-size": '30px'
   },
   "MuiChip-root": {
      border: "5px solid red"
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



function getStyles(name, personName, theme) {
   return {
      /*
     fontWeight:
       personName.indexOf(name) === -1
         ? theme.typography.fontWeightRegular
         : theme.typography.fontWeightMedium,
       */
   };
}

export default function SelectGenres({ initGenres, onGenresChanged }) {

   const classes = useStyles();
   //const theme = useTheme();
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
         <p className="selectedGenresPreview">
            {text}
         </p>
      );

      const createChip = genre => {
         const removeSelf = () => {
            const isDiffrentFromThis = other => other !== genre;
            const newGenres = genres.filter(isDiffrentFromThis);
            fullSetGenres(newGenres);
         }
         
         return (
            <Chip 
               key={genre} 
               label={genre}
               className={classes.chip}
               onDelete={removeSelf}
               root={{border: "5px solid red"}} 
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
            { selected.map(createChip) }
         </div>
      );

   }

   return (
      <FormControl className={classes.formControl}>
         <Select
            labelid="selectGenres"
            id="selectGenres"
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
   );
}

 /*
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';

      const select1 = (
         <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
            <Select
               labelid="demo-mutiple-name-label"
               id="demo-mutiple-name"
               multiple
               value={genres}
               onChange={handleChange}
               input={<Input />}
               MenuProps={MenuProps}
            >
               {selectOptions.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, genres, theme)}>
                     {name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      );
   
      const select2 = (
         <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
            <Select
               labelid="demo-mutiple-checkbox-label"
               id="demo-mutiple-checkbox"
               multiple
               value={genres}
               onChange={handleChange}
               input={<Input />}
               renderValue={(selected) => selected.join(', ')}
               MenuProps={MenuProps}
            >
               {selectOptions.map((name) => (
                  <MenuItem key={name} value={name}>
                     <Checkbox checked={genres.indexOf(name) > -1} />
                     <ListItemText primary={name} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      );
   
      const select3 = (
         <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
            <Select
               labelid="demo-mutiple-chip-label"
               id="demo-mutiple-chip"
               multiple
               value={genres}
               onChange={handleChange}
               input={<Input id="select-multiple-chip" />}
               renderValue={(selected) => (
                  <div className={classes.chips}>
                     {selected.map((value) => (
                        <Chip key={value} label={value} className={classes.chip} />
                     ))}
                  </div>
               )}
               MenuProps={MenuProps}
            >
               {selectOptions.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, genres, theme)}>
                     {name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      );
   
      const select4 = (
         <FormControl className={clsx(classes.formControl, classes.noLabel)}>
            <Select
               multiple
               displayEmpty
               value={genres}
               onChange={handleChange}
               input={<Input />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return <em>Placeholder</em>;
                  }
   
                  return selected.join(', ');
               }}
               MenuProps={MenuProps}
               inputProps={{ 'aria-label': 'Without label' }}
            >
               <MenuItem disabled value="">
                  <em>Placeholder</em>
               </MenuItem>
               {selectOptions.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, genres, theme)}>
                     {name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      );
      */