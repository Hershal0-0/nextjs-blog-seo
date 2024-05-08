import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface TagProps {
  key: string;
  link: string;
  name: string;
  className?: string; // Define className as optional
  active: boolean;
}

const Category: React.FC<TagProps> = ({
  key,
  link = "#",
  name,
  className,
  active,
  ...props
}) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5  md:py-2 px-6  md:px-10   rounded-full1 border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2",
        className ? className : "",
        active
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : "bg-light text-dark dark:bg-dark dark:text-light"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
