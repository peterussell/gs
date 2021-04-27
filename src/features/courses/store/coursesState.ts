import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectAllCourses } from "./coursesSelector";
import { fetchCourses } from "./coursesSlice";

export const useContactNotesState = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const courses = useSelector(selectAllCourses);

  const load = () => {
    dispatch(fetchCourses());
  };

  return {
    load,
    isLoading,
    courses
  };
};
