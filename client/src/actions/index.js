
import axios from "axios";
import history from './history';
import { UNAUTH_USER,AUTH_USER,OPPORTUNITIES,GET_DATA,DISPLAY_ERROR,RESET_ERROR } from './types'
// require("env2")("./../env")
//  import { youtubeToken } from "../token";

// export const signupUser = data => async dispatch => {
//     try {
//        const userData= await axios.post("/api/signup", data);
//         localStorage.setItem("token", userData.data.token)
//         dispatch({ type: AUTH_USER });
//         // console.log("userdata payload from action index",userData.data);
//         history.push("/dashboard");
//     }
//     catch (err) {
//         console.log(err);
//     }
// };


export const fetchUser = () => {
  return(dispatch) => {
    axios.get("/api/fetchUser", {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: AUTH_USER
      })
    })
    .catch(err => {
      dispatch({
        type: UNAUTH_USER
      })
    })
  }
}
///////////////////////////////////////////////////////////////////
// async await equivalent
//   export const fetchUser = () => async dispatch => {
//     try {
//          await axios.get ("/api/fetchUser", {
//             headers: { authorization: localStorage.getItem("token") }
//           });
//         dispatch ({ type: AUTH_USER });
//     }
//     catch (err)
// {
//     dispatch({
//         type: UNAUTH_USER
//       });
//     console.log(err);
// }  }
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////


// export function fetchUser() {
//   return function(dispatch) {
//     // submit email password to server
//     axios.get("/api/fetchUser", {
//         headers: { authorization: localStorage.getItem('token') }
//       })
//       .then(response => {
//         console.log('action creator',response.data.message);
//         dispatch({
//           type: FETCH_MESSAGE,
//           payload: response.data.message
//         });
//       })
//       .catch((err) => {
//         // if request bad, return error to user
//         dispatch(authError('Bad login info'));
//       });

//   }
// }

//////////////////////////////////////////////////////////////////////////

export const signupUser= values => {
  return dispatch => {
    axios.post("/api/signup", values)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      dispatch({
        type: AUTH_USER
      })
      history.push("/dashboard")
    })
    .catch(err => {
      dispatch(displayError(err.response.data.error));
    })
  }
}
//////////////////////////////////////////////////////////////////////////
//async await equivalent
// export const signupUser = data => async dispatch => {
//     try {
//        const userData= await axios.post("/api/signup", data);
//         localStorage.setItem("token", userData.data.token)
//         dispatch({ type: AUTH_USER });
//         // console.log("userdata payload from action index",userData.data);
//         history.push("/dashboard");
//     }
//     catch (err) {
//         console.log(err);
//     }
// };
//////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// export function signupUser(value) {
//   return function(dispatch) {
//     // submit email password to server
//     axios.post("/api/signup", value)
//       .then(response => {
//         // if req is good, update state to indicate authentication
//         dispatch({ type: AUTH_USER });
//         // save jwt token
//         localStorage.setItem('token', response.data.token);
//         // redirect to the route /dashboard
//         browserHistory.push("/dashboard");
//       })
//       .catch(error => {
//         // if request bad, return error to user
//         console.log('error', error.response.data.error);
//         dispatch(authError(error.response.data.error));
//       });

//   }
// }
///////////////////////////////////////////////////////////////////////////
export const loginUser = values => {
  return dispatch => {
    axios.post("/api/login", values)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      dispatch({
        type: AUTH_USER
      })
      history.push("/dashboard")
    })
    .catch(err => {
      if (err.message.includes('401')){
        console.log("error>>>>>",err.message)
        dispatch(displayError('Email or password was incorrect'));
      } else {
        dispatch(displayError("There was an issue with our server. Please try again later"));
      }
    })
  
  }
}
//////////////////////////////////////////////////////////
//async await equivalent 
// export const loginUser = data => async dispatch => {
//     try {
//      const userData= await axios.post("/api/login", data);
//       localStorage.setItem('token', userData.data.token)
//       dispatch({ type: AUTH_USER });
//       history.push("/dashboard");

//       // console.log("userdata payload from action index",userData.data);
//     } 
//     catch (err) {
//       console.log(err);
//     }
//   };
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// export function loginUser(values) {
//   return function(dispatch) {
//     // submit email password to server
//     axios.post("/api/login", { email, password })
//       .then(response => {
//         // if req is good, update state to indicate authentication
//         dispatch({ type: AUTH_USER });
//         // save jwt token
//         localStorage.setItem('token', response.data.token);
//         // redirect to the route /feature
//         browserHistory.push("/dashboard");
//       })
//       .catch((err) => {
//         // if request bad, return error to user
//         dispatch(authError('Bad login info'));
//       });

//   }
// }
/////////////////////////////////////////////////////////////////////////
// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   }
// }
/////////////////////////////////////////////////////////////////////////

export const logoutUser = () => {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export const fetchOpportunities = () => {
	return dispatch => {
		axios
			.get("/api/opportunities")
			.then(res => {
				dispatch({
					type: OPPORTUNITIES,
					payload: res.data
                });
                console.log(res.data);
			})
			.catch(err => console.log(err));
	};
};
///////////////////////////////////////////////////////////////////////////
//async await equivalent to the above code
//   export const fetchOpportunities = () => async dispatch => {
//       try {
//           const opportData= await axios.get("/api/opportunities") 
//           console.log("result;", opportData)                        
//           dispatch ({type:  OPPORTUNITIES , payload: opportData.data});
//       }
//       catch (err) {
//           console.log(err);
//       }
//   }
////////////////////////////////////////////////////////////////////////// 
 
export const getData = term => async dispatch => {
  try {
    const YOUTUBE_API_BASE = " https://www.googleapis.com/youtube/v3/channels?part=statistics";
    const url = `${YOUTUBE_API_BASE}&id=${term}`;
   const youtubeToken= 'AIzaSyAiQqpzKfLL3Gj_qR4gAUHGkVZf3H0TAjY';
    const youtubeData= await axios.get (`${url}&key=${youtubeToken}`)

                                  .then(res => res.data)
                                  console.log("youtube data:",youtubeData)
                                  console.log("youtube data:",youtubeData.items[0].statistics)
    dispatch({ type: GET_DATA , payload: youtubeData.items[0].statistics})
  } catch (err) {
    console.log(err);
  }
}

//testing code for returning youtube channel details above
// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC98x5I1LVPhtnUHDyujq7zg&key=AIzaSyAiQqpzKfLL3Gj_qR4gAUHGkVZf3H0TAjY




export const displayError = err => {
  return {
    type: DISPLAY_ERROR,
    payload: err
  };
}

export const resetError = () => {
  return {
    type: RESET_ERROR
  };
}