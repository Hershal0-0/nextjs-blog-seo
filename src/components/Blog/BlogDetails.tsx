import { Blog } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";

interface BlogDetailsInterface {
  blog?: Blog;
  slug: string;
}
const BlogDetails = ({ blog, slug }: BlogDetailsInterface) => {
  return (
    <div className="px-10 mt-4 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      {blog && (
        <time>{format(parseISO(blog?.publishedAt), "LLLL d, yyyy")}</time>
      )}
      <span>10 views</span>
      <div>{blog?.readingTime.text}</div>
      <Link href={`/categories/${blog?.tags ? blog?.tags[0] : ""}`}>
        #{blog?.tags ? blog?.tags[0] : ""}
      </Link>
    </div>
  );
};

export default BlogDetails;
