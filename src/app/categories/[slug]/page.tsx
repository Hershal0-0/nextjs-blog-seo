import { Blog, allBlogs } from "@/.contentlayer/generated";
import BlogLayout3 from "@/src/components/Blog/BlogLayout3";
import Categories from "@/src/components/Blog/Categories";
import { slugParamProps } from "@/src/types/blog";
import { siteMetadata } from "@/src/utils/siteMetaData";
import GithubSlugger, { slug } from "github-slugger";
import React from "react";

const slugger = new GithubSlugger();

export async function generateMetadata({ params }: slugParamProps) {
  return {
    title: `${params.slug.replaceAll("-", " ")}`,
    description: `Learn More About ${
      params.slug === "all" ? "web development" : params.slug
    } through of out collection of expert blogs and tutorials`,
  };
}

export async function generateStaticParams() {
  const categories: string[] = [];
  const paths = [{ slug: "all" }];
  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags?.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });
  return paths;
}

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags?.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });
  //   console.log(blogs[0]);
  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => {
          return (
            <article className="col-span-1 row-span-1 relative" key={index}>
              <BlogLayout3 blog={blog} />
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default CategoryPage;
