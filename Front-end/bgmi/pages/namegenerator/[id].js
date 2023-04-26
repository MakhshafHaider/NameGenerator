import axios from "axios";
import Image from "next/image";

export async function getStaticPaths() {
    const response = await axios.get(
        `${process.env.API_ENDPOINT}/api/posts?populate=Image`
      );

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
  console.log("Params", params);
  const response = await axios.get(`${process.env.API_ENDPOINT}/api/posts/${params.id}?populate=Image`);

  console.log("id is", response.data.data);
  return {
    props: {
      post: response.data.data,
    },
  };
}

const Details = ({ post }) => {
  console.log("first psot", post);
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
              width={1206}
              height={650}
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
