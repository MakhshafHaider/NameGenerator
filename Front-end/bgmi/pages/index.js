import { Inter } from "@next/font/google";
import HomeLatestPosts from "../components/HomeLatestPosts";
import axios from "axios";
import HomeHeader from "@/components/HomeHeader";
import {NameGenerator} from "@/components/NameGenerator";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <HomeHeader />
      <NameGenerator />
      <HomeLatestPosts posts={posts} />
    </>
  );
}
export async function getServerSideProps() {
  const {data} = await axios.get(
    `${process.env.API_ENDPOINT}/api/posts?populate=Image`
  );
  return {
    props: {
      posts: data.data,
    },
  };
}
