import React from "react";
import Image from "next/image";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 }, //Incrementar static regeneration
  })
    .then((res) => res.json())
    .catch((error) => {
      return undefined;
    });
};
export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Comments</h1>
      {Object.keys(comments).length > 0 &&
        comments.map(({ name, email, body }) => (
          <>
            <h2>{name}</h2>
            <Image
              width={100}
              height={100}
              src={`https://avatars.dicebear.com/api/adventurer/${name}.svg`}
              alt={`${name}`}
            />
            <address>
              <a href={`mailto:${email}`}>{name}</a>
            </address>
          </>
        ))}
      {Object.keys(comments).length <= 0 && <>Empty comments</>}
    </div>
  );
}
