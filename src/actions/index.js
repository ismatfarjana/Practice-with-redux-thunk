import jsonPlaceHolder from "../apis/jsonPlaceHolder";

//fetchpost function returning another function that gets the object
export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
