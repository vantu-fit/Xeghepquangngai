import React, { useEffect } from "react";
import Home from "./Home";
import PropertiTitle from "../Components/PropertiTitle";
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPost, getPostId } from "../apis/api";
import { ResponseApi } from "../types/response";
import { Post } from "../types/types";
function PropertyTitle() {
  const id = useParams();
  const { data } = useQuery<ResponseApi<Post>>({
    queryKey: ["post", id.id],
    queryFn: () => getPostId((id as { id: string }).id),
  });
  console.log(data);
  return (
    <>
      <Home />
      {data && <PropertiTitle title={data.data.title} content={data.data.content} image={data.data.image} />}
    </>
  );
}

export default PropertyTitle;
