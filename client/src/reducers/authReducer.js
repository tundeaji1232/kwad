// import {
//     LOGIN_USER,
//     SIGNUP_USER,
//     FETCH_USER
// } from '../actions/types';

// export default function(state= null, action){
//     switch (action.type){
//         case LOGIN_USER:
//         case SIGNUP_USER:
//         case FETCH_USER:
//         if(action.payload){
//             return action.payload;
//         }
//         return state;
        
//         default:
//     return state;
  
//     }
// }


import { AUTH_USER, UNAUTH_USER } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case AUTH_USER:
      return true;
    case UNAUTH_USER:
      return false;
    default:
      return state;
  }
};