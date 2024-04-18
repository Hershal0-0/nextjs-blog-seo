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
    <div className="px-10 mt-4 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      {blog && (
        <time>{format(parseISO(blog?.publishedAt), "LLLL d, yyyy")}</time>
      )}
      <span>
        <ViewCounter slug={blogSlug} />
      </span>
      <div>{blog?.readingTime.text}</div>
      <Link href={`/categories/${blog?.tags ? slug(blog?.tags[0]) : ""}`}>
        #{blog?.tags ? slug(blog?.tags[0]) : ""}
      </Link>
    </div>
  );
};

export default BlogDetails;
