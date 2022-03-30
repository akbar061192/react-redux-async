const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        error: null,
        loading: true,
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        posts: action.payload.data,
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        posts: [],
      };
    default:
      return state;
  }
};
