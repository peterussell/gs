import { useDispatch, useSelector } from "react-redux";
import { selectExamConfig } from "./examSelector";
import { setExamConfig } from "./examSlice";

import { ExamSimulatorConfig } from "models";

export const useExamState = () => {
  const dispatch = useDispatch();

  const examConfig = useSelector(selectExamConfig);

  const dispatchSetExamConfig = (config: ExamSimulatorConfig) => {
    dispatch(setExamConfig(config));
  };


  return {
    examConfig,
    setExamConfig: dispatchSetExamConfig
  };
};
