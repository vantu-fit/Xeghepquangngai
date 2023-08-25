import React from "react";
import TitleBlock from "./TitleBlock";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../apis/api";
import { Post } from "../types/types";
function Title() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });
  // console.log(data?.data);
  return (
    <section className="w-full px-4 py-2 lg:w-5/6 lg:mx-auto">
      <h2 className="text-center text-[16px] lg:text-4xl uppercase font-semibold border-[1px] py-2">
        thông tin mới nhất
      </h2>
      <div className="">
        {data?.data.map((post: Post) => (
          <TitleBlock
            title={post.title}
            content={post.content}
            image={post.image}
            _id={post._id}
            key={post._id}
          />
        ))}
      </div>
    </section>
  );
}

export default Title;
