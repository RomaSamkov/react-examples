import PostList from "modules/PostList/PostList";
import React, { useEffect, useState } from "react";
import { getPosts } from "shared/services/posts";

const Posts = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const result = await getPosts();
        setState((prevState) => {
          return {
            ...prevState,
            items: [...prevState.items, ...result],
          };
        });
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error,
        }));
      } finally {
        setState((prevState) => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchPosts();
  }, [setState]);

  const { items, loading, error } = state;

  return (
    <div>
      {items.length > 0 && <PostList items={items} />}
      {loading && <p>...load posts</p>}
      {error && <p>...Posts load failed</p>}
    </div>
  );
};

export default Posts;
