import { ApiClient } from "api/apiClient";
import { AxiosPromise } from "axios";

import { CoursesResponse } from "api/responses"

export class CoursesApi extends ApiClient {
  public getCourses(
  ): AxiosPromise<CoursesResponse> {
    return this.get<CoursesResponse>("/courses");
  };
};
