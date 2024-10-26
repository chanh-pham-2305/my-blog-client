import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostsProp } from "@/types";

const Post = ({
  _id,
  title,
  description,
  author,
  urlImages,
  createdAt,
}: PostsProp) => {
  const id = _id.toString();
  return (
    <Link
      href={{
        pathname: `/p/`,
        query: { _id: id },
      }}
      key={id}
    >
      <div className="flex flex-col md:flex-row gap-10 bg-white text-black rounded-md rounded-tr-md rounded-br-md hover:shadow-md duration-200">
        <div className="w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md relative">
          <Image
            src={urlImages[0]}
            width={500}
            height={500}
            alt="blog post image"
            className="w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
          />
          <div className="absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200" />
          <div className="absolute hidden group-hover:inline-flex bottom-0 left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 justify-center duration-200">
            <p className="text-lg font-semibold">Click to Read</p>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold hover:text-orange-600 duration-200 cursor-pointer">
              {title}
            </h2>
            <p className="text-gray-500">{description}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">
              {createdAt.toString()}
            </p>
            <div className="flex items-center gap-2">
              <Image
                src={urlImages[0]}
                width={200}
                height={200}
                alt="author image"
                className="rounded-full object-cover w-10 h-10"
              />
              <p className="text-sm font-medium">{author.toString()}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { Post };
