import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig
} from "axios";

export interface AxiosCallbackOptions<T> {}

export abstract class ApiClient {
  private readonly api: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.api = axios.create(config);

    this.api.interceptors.request.use(this.addBaseUrlAndCommonHeaders);
    this.api.interceptors.response.use(
      undefined,
      this.handleUnauthorizedErrorResponse
    );
  }

  protected get<R = any>(
    url: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<R> {
      return this.api.get(url, config);
  }

  protected delete<R = any>(
    url: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<R> {
    return this.api.delete(url, config);
  }

  protected post<R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): AxiosPromise<R> {
    return this.api.post(url, data, config);
  }

  protected put<R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): AxiosPromise<R> {
    return this.api.put(url, data, config);
  }

  private getAuthHeader = async () => {
    // TODO: implement when we have an auth header
    return {};
  };

  private addBaseUrlAndCommonHeaders = async (params: AxiosRequestConfig) => ({
    ...params,
    baseURL: "https://0y2ubme7cc.execute-api.ap-southeast-2.amazonaws.com/v1",
    headers: {
      ...params.headers,
    },
  });

  private handleUnauthorizedErrorResponse = (error: AxiosError) => {
    return Promise.reject(error);
  };
}
