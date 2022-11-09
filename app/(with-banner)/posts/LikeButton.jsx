"use client";
import React, { useState } from "react";

export function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        width: "2rem",
        height: "2rem",
      }}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "♥" : "♡"}
    </button>
  );
}
