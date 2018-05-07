import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import opportunitiesReducer from "./opportunitiesReducer";
import getDataReducer from "./getDataReducer";
import errorReducer from "./errorReducer"


const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer, 
    opportunities:opportunitiesReducer,
    getYoutubeData: getDataReducer,
    error:errorReducer
  });
  
  export default rootReducer;
  