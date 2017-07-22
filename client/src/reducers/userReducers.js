import { UserData } from '../sampleData';


export const user = (state = null, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return action.payload;
    default:
      return state;
  }
}

export const signupOpen = (state = false, action) => {
  switch(action.type) {
    case 'REQUIRE_SIGNUP':
      return true;
      break;
    case 'FINISH_SIGNUP':
      return false;
      break;
    default:
      return state;
  }
};

export const activeProfile = (state = null, action) => {
  switch (action.type) {
    case 'USER_PROFILE_LOADED':
      return action.payload;
      break;
    default:
      return state;
  };
};