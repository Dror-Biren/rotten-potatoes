import { reducersActions } from '../appConsts';
const { LOGIN, LOGOUT, SET_THEME_INDEX } = reducersActions.USER;

const userReducerDefaultState = {
   themeIndex: 0
};

export default (state = userReducerDefaultState, action) => {
   switch (action.type) {
      case LOGIN:
         return {
            ...state,
            ...action.user
         };
      case LOGOUT:
         return userReducerDefaultState;
      case SET_THEME_INDEX:
         return {
            ...state,
            themeIndex: action.themeIndex
         }
      default:
         return state;
   }
};
