import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

export default function HomeLatestPosts({ posts }) {
  console.log("posts is", posts);
  
  const [latestPosts, setLatestPost] = useState([]);

  useEffect(() => {
    setLatestPost(posts.slice(0, 3));
  }, [posts]);

  function renderPostPreviews() {
    return latestPosts.map((post) => {
      return <PostPreview post={post} key={post.id} />;
    });
  }

  return (
    <div className="latest_blogs_section">
      <h2 className="latest_blog_heading">Our Latest Posts</h2>
      <div className="latest_blogs_render">
      {renderPostPreviews()}
      </div>
    </div>
  );
}
