import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => {
  return function() {
    const response = jsonPlaceHolder.get("/posts");
    return {
      type: "FETCH_POSTS",
      payload: response
    };
  };
};
