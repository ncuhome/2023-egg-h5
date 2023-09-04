import axios from "axios";
import { QueryResponse } from "./interface";
import { networkModule } from "mincu-react";

const fetcher = axios.create();
networkModule.useAxiosInterceptors(fetcher);

// 查询次数
export const getChance = async () => {
  const data = await fetcher.get<QueryResponse>("https://egg.ncuos.com/chance");
  return data?.data;
};

// 消耗次数
export const postChance = async () => {
  const data = await fetcher.post("https://egg.ncuos.com/chance");
  return data?.data;
};
