import { ApiClient } from "api/apiClient";
import { AxiosPromise } from "axios";

import { GetExamsResponse } from "api/responses"

export class ExamApi extends ApiClient {
  public getExams(
  ): AxiosPromise<GetExamsResponse> {
    return this.get<GetExamsResponse>("/exams");
  };
};
