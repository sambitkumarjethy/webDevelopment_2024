import React, { useState, useEffect } from "react";
import axios from "axios";
const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/post");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  });

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="mt-8 w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md"
        key={post.id}
      >
        <ul className="space-y-4">
          <li key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{post.title}</h3>
          </li>
        </ul>
      </div>
    );
  });
  return <div>{renderedPosts}</div>;
};

export default PostList;
