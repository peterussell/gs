import { ApiClient } from "api/apiClient";
import { AxiosPromise } from "axios";

import { AddQuestionRequest } from "api/requests";
import { AddQuestionResponse } from "api/responses"

export class QuestionApi extends ApiClient {
  public addQuestion(req: AddQuestionRequest): AxiosPromise<AddQuestionResponse> {
    return this.post<AddQuestionResponse>("/questions", req);
  };
};
