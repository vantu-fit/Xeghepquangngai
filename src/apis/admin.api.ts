import http from "../http/http";
import { PriceForm } from "../types/types";

export const createPrice = async (priceForm: PriceForm) => {
  const result = await http.post("/admin/prices", priceForm , { headers: { Authorization : `Bearer ${localStorage.getItem('token')}`} });
  return result;
};
