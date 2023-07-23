import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
export async function getStaticPaths() {
    const response = await axios.get(
        `http://localhost:1337/api/posts?populate=Image`
      );
  console.log('props', response.data.data);
  const paths = response.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // http://localhost:1337/api/posts?populate=Image
  // console.log("Params", params);
  const response = await axios.get(`http://localhost:1337/api/posts/${params.id}?populate=Image`);

  console.log("id is", response);
  return {
    props: {
      post: response.data.data,
    },
  };
}

const Details = ({ post }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // useEffect hook to update window width on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Update the window width on component mount
    setWindowWidth(window.innerWidth);

    // Add resize event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Remove the resize event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageWidth = windowWidth < 780 ? 520 : 805;
  const imageHeight = windowWidth < 780 ? 350 : 650;

  console.log('imageWidth',imageWidth);

  return (
    <div className="blog_post_page">
      <div className="blog_post_page_preview">
        <div className="blog_post_page_image">
          {post.attributes.Image.data.map((singleItem) => (
            <Image
              className="image"
              key={singleItem.id}
              src={"http://localhost:1337" + singleItem.attributes.url}
              alt="My Image"
              width={imageWidth}
              height={imageHeight}
              priority
            />
          ))}
        </div>

        <div className="blog_post_page_details">
          <h1 className="blogs_post_title">{post.attributes.Title}</h1>
          <p className="blogs_post_description">{post.attributes.Content}</p>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};
export default Details;
