import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PostPreview({ post }) {
  return (
      
      <div className="latest_blog">
      <div className="blog_image">
      {post.attributes.Image.data.map((singleItem) => (
    <Image
    className="image"
      key={singleItem.id}
      src={"http://localhost:1337"+singleItem.attributes.url}
      alt="My Image"
      width={330}
      height={350}
    />
  ))}

        </div>
        <div className="blogs_section">
          <h1 className="blogs_title">{post.attributes.Title}</h1>
          <p className="blogs_description">{post.attributes.Description}</p>
          <div>
          <Link href={`/namegenerator/${post.id}`} className="disabled">

            <button className="post_preview_button">Read More</button>
       </Link>
          </div>
        </div>
        
 
      </div>
  );
}
