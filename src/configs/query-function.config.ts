import { PaginationParams, StarwarsData } from "@/interfaces";
import { AxiosResponse } from "axios";
import { api } from "./axios.config";

export const fetchCharacters = async ({
  page = 1,
  limit = 10,
}: PaginationParams = {}): Promise<StarwarsData> => {
  const res: AxiosResponse<StarwarsData> = await api.get("/characters", {
    params: { page, limit },
  });
  return res.data;
};

export const charactersQueryKey = (params: PaginationParams) => [
  "characters",
  params,
];
