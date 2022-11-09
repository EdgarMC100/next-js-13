// "use client"; //-for client - to be rendered from the client but this time is no required.
//This is a React Server Component that is rendered in the server and returned as a HTML string and
//hydrated in the client with the listeners and events.
import Link from "next/link";
import React from "react";
import { LikeButton } from "./LikeButton";

//This fetch will be executed in the server
const getPosts = () => {
  console.log(".....fetching");
  console.log("CHA CHA CHAO");
  //getStaticProps
  //-> return fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json*())
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10, //ISR
    }, //incremental static genereation
    // cache: "no-store", //getServerSideProps - server side fetching not static
  }).then((res) => res.json());
};
export async function ListOfPosts() {
  const posts = await getPosts();
  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
