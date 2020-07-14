export const deafultUser = {
   nickname: "Anonymous",
   avatarIndex: 0,
   themeIndex: 0
}

export const moviePramsMax = {
   titleLength: 24,
   descriptionLength: 800,
   posterBytes: 2000000,
   genresAmount: 4
}

export const maxCommentLength = 300;
export const maxNicknameLength = 13;


//export const minMovieReleaseYear = 1960;
const curYear = new Date().getFullYear();
export const yearsRangeFilter = [2000, curYear];

export const themesClassesNames = [
   "bright", 
   "dark"
]

export const movieGenres = [
   "Action 💥",
   "Animation 🎨",
   "Comedy 😂",
   //"Crime 🔪", 
   "Documentary 🎥",  
   "Drama 😲",  
   //"Historical 🗿",
   "Horror 🎃", 
   "Romantic 💖",
   "Science-Fiction 👽",  
   //"Scientific 🔬"
];


export const avatarsUrls = [
   "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/avatars%2Favatar1.jpg?alt=media&token=63bbadd6-5d9c-4fe3-aee0-00a8fde36c2d",
   "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/avatars%2Favatar2.jpg?alt=media&token=957dd031-3793-4590-be2d-5a48064c388f",
   "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/avatars%2Favatar3.jpg?alt=media&token=56c43c4a-cd45-46d7-92e2-fc1d9d28b6e8",
   "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/avatars%2Favatar4.jpg?alt=media&token=e8fa3ebf-1745-4f7f-8291-1d95d73fdb05",
   "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/avatars%2Favatar5.jpg?alt=media&token=f110cec9-cc92-4c8c-8041-e62968ec5478",
   "https://firebasestorage.googleapis.com/v0/b/rotten-potatoes-3ad5b.appspot.com/o/avatars%2Favatar6.jpg?alt=media&token=7805881d-ea94-4b23-8367-f66a02f543d6"
]


export const reducersActions = {
   MOVIES: {
      ADD: "a0",
      REMOVE: "a1",
      EDIT: "a2",
      SET_ALL: "a3"
   },
   FILTERS: {
      SET_SEARCH: "b0",
      SET_SORT_BY: "b1",
      SET_YEARS_RANGE: "b2",
      SET_GENRES: "b3"
   },
   ALL_USERS: {
      ADD: "c0",
      EDIT: "c1",
      SET_ALL: "c2"
   },
   USER: {
      LOGIN: "d0",
      LOGOUT: "d1",
      SET_THEME_INDEX: "d2"
   }
}
