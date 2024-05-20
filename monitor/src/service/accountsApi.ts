import axiosInstance from "./baseApi";
import { Account, Page } from "../models/common";

const getAll = async (params: URLSearchParams): Promise<Page<Account>> => {
  const response = await axiosInstance.get(`/api/v1/accounts`, { params });
  return response.data;
};

export default {
  getAll,
};
