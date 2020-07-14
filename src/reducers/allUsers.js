import { reducersActions } from '../appConsts';
const { ADD, EDIT, SET_ALL } = reducersActions.ALL_USERS;

const allUsersDefaultState = {};

export default (state = allUsersDefaultState, action) => {
   switch (action.type) {
      case ADD: {
         const { user, uid } = action;
         return {
            ...state,
            [uid]: user
         };
      }
      
      case EDIT:
         const { updates, uid } = action;
         const updatedUser = {
            ...state[uid],
            ...updates
         };
         return {
            ...state,
            [uid]: updatedUser
         };

      case SET_ALL:
         return action.users;

      default:
         return state;
   }
};

/*
   case 'REMOVE_USER':
      const isDiffrentUser = ({ id }) => id !== action.id;
      return state.filter(isDiffrentUser);
*/
