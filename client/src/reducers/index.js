import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import opportunitiesReducer from "./opportunitiesReducer";
import getDataReducer from "./getDataReducer";


const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer, 
    opportunities:opportunitiesReducer,
    getYoutubeData: getDataReducer
  });
  
  export default rootReducer;
  