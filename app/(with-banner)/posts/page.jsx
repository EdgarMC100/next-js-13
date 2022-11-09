// "use client";
// import { useEffect, useState } from "react";

import { Suspense } from "react";
import Loader from "../../../components/Loader";
import { ListOfPosts } from "./ListOfPosts";

export default function PostsPage() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, []);

  return (
    <>
      <h1>Este es el layout</h1>
      <small>Home &bull; Posts</small>
      <Suspense fallback={<Loader></Loader>}>
        <ListOfPosts />
      </Suspense>
    </>
  );
}
