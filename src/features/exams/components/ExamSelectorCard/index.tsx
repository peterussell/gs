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

import { Exam } from "models";
import useStyles from "./examSelectorCardStyle";

interface Props {
  exam: Exam,
  onClick?: (e: Exam) => void
};

export const ExamSelectorCard = ({ exam, onClick }: Props) => {
  const classes = useStyles();

  return (
    <Card elevation={1} onClick={() => { onClick && onClick(exam); }}>
      <CardActionArea>
        <CardMedia image={`/images/exams/${exam.slug}.png`} title={exam.name} className={classes.media} />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {exam.licenseType !== "Other" ? exam.licenseType : null} {exam.name}
          </Typography>

          <Box mt={2} mb={1}>
            <Grid container spacing={1} >
              <Grid item xs={12}>
                <FormatListNumbered className={classes.icon} />
                <Typography variant="body2" color="secondary">
                  {exam.availableQuestions} questions available
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <School className={classes.icon} />
                <Typography variant="body2" color="secondary">
                  Exam: {exam.aspeqExamInfo.durationMinutes} min / {exam.aspeqExamInfo.numberOfQuestions} questions
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};
