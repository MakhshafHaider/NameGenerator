import React from "react";
import axios from "axios";
import Image from "next/image";
import AllBlogs from "../components/AllBlogs";
export default function Blog({ posts }) {
  return (
    <div className="all_blogs_page">
      

      <AllBlogs posts={posts} />
    </div>
  );
}

export async function getServerSideProps() {
  // const response = await axios.get("http://localhost:1337/api/posts");
  const response = await axios.get(
    `${process.env.API_ENDPOINT}/api/posts?populate=Image`
  );
  return {
    props: {
      posts: response.data.data,
    },
  };
}
