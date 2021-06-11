import { useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { useExamState } from "features/exams/store";
import { Exam } from "models";
import useStyles from "./questionSubmitterStyle";

export const ExamSelector = () => {
  const classes = useStyles();
  const { exams, loadExams } = useExamState();

  useEffect(() => {
    if (!exams) { loadExams(); }
  }, [exams]);

  return (
    <>
      <Box mt={4}>
        {
          exams?.map((e: Exam) => (
            <>
              <p>{e.name}</p>
            </>
          ))
        }
      </Box>
    </>
  );
};
