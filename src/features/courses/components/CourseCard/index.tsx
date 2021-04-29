import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";
import {
  FormatListNumbered,
  School
} from "@material-ui/icons";

import { Course } from "models";
import useStyles from "./courseCardStyle";

interface Props {
  course: Course,
  onClick?: (c: Course) => void
};

export const CourseCard = ({ course, onClick }: Props) => {
  const classes = useStyles();

  return (
    <Card elevation={1} onClick={() => { onClick && onClick(course); }}>
      <CardActionArea>
        <CardMedia image={`/images/exams/${course.slug}.png`} title={course.title} className={classes.media} />
        <CardContent>
          <Typography variant="h6" gutterBottom>{course.title}</Typography>

          <Box mt={2} mb={1}>
            <Grid container spacing={1} >
              <Grid item xs={12}>
                <FormatListNumbered className={classes.icon} />
                <Typography variant="body2" color="secondary">
                  {course.numberOfQuestions} questions available
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <School className={classes.icon} />
                <Typography variant="body2" color="secondary">
                  Exam: {course.examInfo.durationMinutes} minutes / {course.examInfo.numberOfQuestions} questions
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};
