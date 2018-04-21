
import axios from "axios";
import history from './history';
import { UNAUTH_USER,AUTH_USER,OPPORTUNITIES,GET_DATA } from './types'
import { token } from "../token";

export const signupUser = data => async dispatch => {
    try {
       const userData= await axios.post("/api/signup", data);
        localStorage.setItem("token", userData.data.token)
        dispatch({ type: AUTH_USER });
        // console.log("userdata payload from action index",userData.data);
        history.push("/dashboard");
    }
    catch (err) {
        console.log(err);
    }
};


export const loginUser = data => async dispatch => {
    try {
     const userData= await axios.post("/api/login", data);
      localStorage.setItem('token', userData.data.token)
      dispatch({ type: AUTH_USER });
      history.push("/dashboard");

      // console.log("userdata payload from action index",userData.data);
    } 
    catch (err) {
      console.log(err);
    }
  };

  export const fetchUser = () => async dispatch => {
    try {
         await axios.get ("/api/fetchUser", {
            headers: { authorization: localStorage.getItem("token") }
          });
        dispatch ({ type: AUTH_USER });
    }
    catch (err)
{
    dispatch({
        type: UNAUTH_USER
      });
    console.log(err);
}  }


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


 
 
export const getData = term => async dispatch => {
  try {
    const YOUTUBE_API_BASE = " https://www.googleapis.com/youtube/v3/channels?part=statistics";
    const url = `${YOUTUBE_API_BASE}&id=${term}`;
    const youtubeData= await axios.get (`${url}&key=${token}`)
                                  .then(res => res.data)
                                  console.log("youtube data:",youtubeData)
                                  console.log("youtube data:",youtubeData.items[0].statistics)
    dispatch({ type: GET_DATA , payload: youtubeData.items[0].statistics})
  } catch (err) {
    console.log(err);
  }
}


// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC98x5I1LVPhtnUHDyujq7zg&key=AIzaSyAiQqpzKfLL3Gj_qR4gAUHGkVZf3H0TAjY