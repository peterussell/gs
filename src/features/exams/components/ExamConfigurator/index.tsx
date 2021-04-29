import { Course } from "models";

interface Props { course: Course };

export const ExamConfigurator = ({ course }: Props) => {
  return <span>Exam configurator: {course.title}</span>;
};
