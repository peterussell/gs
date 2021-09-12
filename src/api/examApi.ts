import { ApiClient, AxiosCallbackOptions } from "api/apiClient";
import { AxiosPromise } from "axios";

import {
  GetExamsResponse,
  GetQuestionsResponse
} from "api/responses"

export interface GetExamQuestionsOptions
  extends AxiosCallbackOptions<GetQuestionsResponse> {
    examId: string,
    numberOfQuestions: number
};

export class ExamApi extends ApiClient {
  public getExams(): AxiosPromise<GetExamsResponse> {
    return this.get<GetExamsResponse>("/exams");
  };

  public getExamQuestions(
    { examId, numberOfQuestions }: GetExamQuestionsOptions
  ):
    AxiosPromise<GetQuestionsResponse> {
    return this.get<GetQuestionsResponse>(
      `/exams/${examId}/questions?count=${numberOfQuestions}`)
  };
};
