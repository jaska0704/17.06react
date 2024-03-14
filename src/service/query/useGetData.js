import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request,js";

export const useGetCategory = (key) => {
  return useQuery({
    queryKey: ["getData"],
    queryFn: () => request.get(`/${key}`).then((res) => res.data),
  });
};
