import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({
  posts: postsReducer
});

//rule of reducers
//1. must return any value besides "undefined"
//2. produce "state" or "data' to be used indise app using pervious state and the action
//3. must not reac out of itself to decide what value toreturn( reduecers are pure)
