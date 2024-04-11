import { Blog } from "@/.contentlayer/generated";
import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayout1 from "../Blog/BlogLayout1";
import BlogLayout2 from "../Blog/BlogLayout2";

const FeaturedPosts = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center ">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        Featured Post
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="col-span-1 row-span-2 relative">
          <BlogLayout1 blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayout2 blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayout2 blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
