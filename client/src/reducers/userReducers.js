import { UserData } from '../sampleData';


export const user = (state = UserData, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return action.payload;
  }
  return state;
}

// export const activeProfile = (state = null, action) => {
//   switch (action.type) {
//     case 'USER_PROFILE_LOADED':
//       return action.payload
//   };
// };