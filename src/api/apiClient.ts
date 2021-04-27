import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export interface AxiosCallbackOptions<T> {
  successCallback?: (response: AxiosResponse<T>) => void;
  errorCallback?: (error: AxiosError<T>) => void;
}

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
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      ...params.headers,
      ...(await this.getAuthHeader()),
    },
  });

  private handleUnauthorizedErrorResponse = (error: AxiosError) => {
    return Promise.reject(error);
  };
}
