import axios from 'axios';

// const fetchPosts = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   return {
//     type: 'FETCH_POSTS',
//     payload: response.data,
//   };
// };

// const fetchPosts = () => {
//   return async dispatch => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     dispatch({
//       type: 'FETCH_POSTS',
//       payload: response.data,
//     });
//   };
// };

const fetchPosts = () => {
  return async dispatch => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        type: 'FETCH_POSTS_SUCCESS',
        payload: {
          data: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_POSTS_FAILURE',
        payload: {
          error: error.message,
        },
      });
    }
  };
};

export { fetchPosts };
