// All users Reducer

const allUsersDefaultState = {};

export default (state = allUsersDefaultState, action) => {
   switch (action.type) {
      case 'ADD_USER': {
         const { user, uid } = action;
         return {
            ...state,
            [uid]: user
         };
      }
      
      case 'EDIT_USER':
         const { updates, uid } = action;
         const updatedUser = {
            ...state[uid],
            ...updates
         };
         return {
            ...state,
            [uid]: updatedUser
         };

      case 'SET_USERS':
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
