import LinkPost from "./comments/linkPost";

const fetchSinglePost = (id) => {
  console.log(id);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 }, //Incrementar static regeneration
  }).then((res) => res.json());
};

export default async function PostPage({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LinkPost postId={id} />
      {children}
    </article>
  );
}
