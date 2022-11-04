// "use client";
import React from "react";
import { LikeButton } from "./LikeButton";

const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
  // .then((data) => {
  //   setPosts(data);
  // });
};
export async function ListOfPosts() {
  const posts = await getPosts();
  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  );
}
