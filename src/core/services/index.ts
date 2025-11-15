import axios from "axios";
import type { UrlServicesModel } from "./models/UrlServicesModel";

const baseURL = import.meta.env.VITE_API_URL;

export const baseAPI = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function createShortUrl(
  url: UrlServicesModel.CreateShortUrl.Request
): Promise<UrlServicesModel.CreateShortUrl.Response> {
  const response = await baseAPI.post("/", { url });
  return response.data;
}
export async function getUrlInformation(
  shortUrl: UrlServicesModel.GetUrlInformations.Request
): Promise<UrlServicesModel.GetUrlInformations.Response> {
  const response = await baseAPI.get("/", { params: { shortUrl } });
  return response.data;
}
