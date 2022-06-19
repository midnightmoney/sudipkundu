import React from "react";
import Head from "next/head";
import { Layout } from "../components/PageLayout";
import { blogsDB } from "../data/blogs.data";

const BlogCard = ({ blog }) => {
  const { name, date, readTime, teaser, live, img } = blog;
  return (
    <div className="flex flex-col border pt-3 px-5 rounded-xl">
      <h2 className="text-cyan-600 font-bold text-xl 500px:text-lg">{name}</h2>
      <span className="text-sm mb-2">
        {date} - {readTime}
      </span>
      <article>{teaser}..</article>
      <span className="flex flex-row gap-4 m-auto my-1.5">
        <a href={live} target="_blank" rel="noopener noreferrer">
          <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-full text-base px-3 py-1 text-center mr-2 mb-2">
            Read
          </button>
        </a>
      </span>
    </div>
  );
};

const blogs = () => {
  return (
    <Layout>
      <Head>
        <title>Sudip Kundu | Blogs</title>
      </Head>
      <h1 className="font-bold text-2xl text-cyan-600">Blogs</h1>I love reading
      blogs more than I like writing blogs. If I find a topic that grabs my
      attention, I dig deeper, and in the process of jotting down my thoughts I
      end up writing a blog.
      <div className="flex flex-col gap-4 my-4">
        {blogsDB.reverse().map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </Layout>
  );
};

export default blogs;
