import { CourseResponse } from "api/responses";
import { Course } from "models";

export const mapCourseResponse = (res: CourseResponse): Course => {
  return res;
};
