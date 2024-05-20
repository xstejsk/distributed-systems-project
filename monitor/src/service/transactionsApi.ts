import axiosInstance from "./baseApi";
import { Transaction, Page } from "../models/common";

const getAll = async (params: URLSearchParams): Promise<Page<Transaction>> => {
  const response = await axiosInstance.get(`/api/v1/transactions`, { params });
  return response.data;
};

export default {
  getAll,
};
