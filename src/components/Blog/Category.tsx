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
        "inline-block py-2 px-10    border-2 border-solid border-dark m-2 hover:scale-105 transition-all ease duration-200",
        className ? className : "",
        active ? "bg-dark text-light" : "bg-light text-dark"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
