import { Blog } from "@/.contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";
export const cx = (...classNames: string[]) =>
  classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs: Blog[]) => {
  return blogs.slice().sort((a: Blog, b: Blog): number => {
    return compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt));
  });
};
