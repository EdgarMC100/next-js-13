// "use client";
// import { useEffect, useState } from "react";

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

  return <ListOfPosts />;
}
