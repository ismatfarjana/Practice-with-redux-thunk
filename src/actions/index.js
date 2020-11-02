import _ from "lodash"; // useing lodash to stop overfetching user by memoizing
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

//fetchpost function returning another function that gets the object
export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

//memoized version

export const fetchUser = id => {
  return dispatch => {
    _fetchUser(id, dispatch);
  };
};
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
