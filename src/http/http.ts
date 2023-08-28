import axios, { AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_SERVER as string,
      timeout: 3000,
    });
  }
}

const http = new Http().instance;
export default http;
