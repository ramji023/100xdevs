import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);
  async function fetchPost() {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data.title);
    setLoading(false);
  }
  useEffect(() => {
    console.log("run fetch post function");
    fetchPost();
  }, [url]);

  return { post,loading };
}
