import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './store/actionCreators';

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <h1>Posts Page</h1>
      {state.loading ? (
        <h3>Loading...</h3>
      ) : (
        state.posts.map(post => {
          return <h2 key={post.id}>{post.title}</h2>;
        })
      )}
    </>
  );
};

export default Posts;
