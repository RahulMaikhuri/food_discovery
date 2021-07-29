//bring all the reducers at one place 

import { combineReducers } from "redux";
import cityReducer from "./city.reducer";

export default combineReducers({
    city: cityReducer
})