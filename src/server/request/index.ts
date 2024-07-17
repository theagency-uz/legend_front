import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL;

const request: AxiosInstance = axios.create({
  baseURL: url,
  timeout: 30000,
});

export const initRequestInterceptor = (
  req: AxiosRequestConfig
): AxiosRequestConfig => {
  req.headers = {
    ...(req.headers || {}),
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  };

  return req;
};

const initResponseInterceptor = (baseURL: string) => {
  return [
    (response: AxiosResponse) => {
      return response;
    },
    async (error: any) => {
      const errorCode = error?.response?.data?.error?.code;
      return Promise.reject(errorCode);
    },
  ];
};

request.interceptors.request.use(initRequestInterceptor as any);
request.interceptors.response.use(...initResponseInterceptor(`${url}`));

function setJwt(jwt: string) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export const httpClient = {
  get: request.get,
  post: request.post,
  put: request.put,
  delete: request.delete,
  setJwt,
};

export const tokenKey = "legend_auth_token";
