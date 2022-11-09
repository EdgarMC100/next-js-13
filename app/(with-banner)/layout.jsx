export default function PostsLayout({ children }) {
  return (
    <>
      <marquee
        behavior=""
        direction=""
        style={{ background: "#111111", color: "white" }}
      >
        Next.js 13
      </marquee>
      {children}
    </>
  );
}
