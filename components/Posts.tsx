import React from "react";
import { Post } from "./Post";
import { PostsProp } from "@/types";

const Posts = async () => {
  const response = await fetch("http://localhost:8080/v1/p");
  const data = await response.json();
  const { posts } = data.posts;

  return (
    <div>
      {posts.map((post: PostsProp, idx: number) => {
        return (
          <Post
            _id={post._id}
            title={post.title}
            description={post.description}
            author={post.author}
            urlImages={post.urlImages}
            createdAt={post.createdAt}
            key={idx}
          />
        );
      })}
    </div>
  );
};
export { Posts };
