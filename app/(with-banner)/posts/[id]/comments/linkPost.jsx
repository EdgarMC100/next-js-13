"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LinkPost({ postId }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!isOpen) {
      router.push(`/posts/${postId}`);
    }
  }, [isOpen]);

  return (
    <Link
      href={`/posts/${postId}/comments`}
      // as={`/posts/${postId}/comments`}
      style={{ textDecoration: "underline" }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "Hide Comments" : "Show Comments"}
    </Link>
  );
}
