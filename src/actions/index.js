import _ from "lodash"; // useing lodash to stop overfetching user by memoizing
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

//whenever we create an action creator inside of another action creator we have to make sure that we dispatch the result of callling that action creator
export const fetchPostsAndusers = () => async (dispatch, getState) => {
  //fetchpostsand user => 1.call "fetchposts" 2.get list of posts 3.find all uniq users ids from the list of posts 4.iterate over uniq user id's 5.call "fetchuser" with each userid
  console.log("about to fetch post!");
  await dispatch(fetchPosts()); //await to make sure the get reqst of fetchposts get compleated befor moving onto next task

  //debugger statement
  console.log("fetched!!!");

  //get the list of posts with lodash  map version, now we willget the user id as a second argument userid and then will use lodasha gain to get the uniq userids
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  console.log(userIds);

  //iterate over uniq user id's and call fetch user action creator on each user
  userIds.forEach(id => dispatch(fetchUser(id)));
};
//fetchpost function returning another function that gets the object
export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

//memoized version

// export const fetchUser = id => {
//   return dispatch => {
//     _fetchUser(id, dispatch);
//   };
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
