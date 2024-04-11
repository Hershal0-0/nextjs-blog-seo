import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

interface TagProps {
  link: string;
  name: string;
  className?: string; // Define className as optional
}

const Tag: React.FC<TagProps> = ({ link = "#", name, className, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200",
        className ? className : ""
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
