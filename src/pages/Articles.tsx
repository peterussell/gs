import { Typography } from "@material-ui/core";

import { CourseSelector } from "features/courses/components";

export const HomePage = () => {
  return (
    <>
      <Typography variant="body1">Home page</Typography>
      <CourseSelector />
    </>
  )
};
