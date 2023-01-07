import React from 'react';
import Head from 'next/head';
import { blogsDB } from '../data/blogs.data';
import { Layout, BlogCard } from '../components';

const blogs = () => {
  return (
    <Layout>
      <Head>
        <title>Sudip Kundu | Blogs</title>
      </Head>
      <h1 className='font-bold text-2xl text-cyan-600'>Blogs</h1>
      <span>
        I love reading blogs more than I like writing blogs. If I find a topic
        that grabs my attention, I dig deeper, and in the process of jotting
        down my thoughts I end up writing a blog.
      </span>
      <div className='flex flex-col gap-4 my-4'>
        {blogsDB.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </Layout>
  );
};

export default blogs;
