import { AxiosResponse } from "axios";
import { api } from "./axios.config";
import { StarwarsData } from "@/interfaces";

export const axiosFetcher = async (url: string) => {
  const res: AxiosResponse<StarwarsData> = await api.get(url);
  return res.data;
};
