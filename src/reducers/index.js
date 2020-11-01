import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({
  posts: postsReducer
});

//rule of reducers
//1. must return any value besides "undefined"
//2. produce "state" or "data' to be used indise app using pervious state and the action
//3. must not reac out of itself to decide what value toreturn( reduecers are pure)-> no axios returning/ query selector returning. some type of combination of starte and action returnign is good
//4. must not mutate its input state argument << misleading: cause i can mutate the state all day, because its easier then to tell when to mutate or not, :P
//inside js strings and numbers are immutable
//corner cases wher to mutate or not the state argument:
