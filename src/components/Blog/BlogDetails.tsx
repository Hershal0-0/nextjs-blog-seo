import { Blog } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import React from "react";
import ViewCounter from "./ViewCounter";

interface BlogDetailsInterface {
  blog?: Blog;
  blogSlug: string;
}
const BlogDetails = ({ blog, blogSlug }: BlogDetailsInterface) => {
  return (
    <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      {blog && (
        <time className="m-3">
          {format(parseISO(blog?.publishedAt), "LLLL d, yyyy")}
        </time>
      )}
      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <div className="m-3">{blog?.readingTime.text}</div>
      <Link href={`/categories/${blog?.tags ? slug(blog?.tags[0]) : ""}`}>
        #{blog?.tags ? slug(blog?.tags[0]) : ""}
      </Link>
    </div>
  );
};

export default BlogDetails;
