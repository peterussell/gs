import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { TextFieldSet } from "features/shared/components/TextFieldSet";
import { useExamState } from "features/exams/store";
import useStyles from "./submitQuestionFormStyle";

export const SubmitQuestionForm = () => {
  const classes = useStyles();
  const { exams, loadExams } = useExamState();
  const [redirect, setRedirect] = useState("");
  const [selectedLicenseType, setSelectedLicenseType] = useState("");
  const [selectedExam, setSelectedExam] = useState("");

  useEffect(() => { if (!exams) { loadExams(); } }, [exams]);

  const handleLicenseTypeChange = (event: any) => {
    setSelectedLicenseType(event?.target.value);
  };

  const handleExamTypeChange = (event: any) => {
    setSelectedExam(event?.target.value);
  };

  const getExamItems = () => {
    const matchingExams = exams?.filter(e => e.licenseType === selectedLicenseType);
    return matchingExams?.map(e => (
      <MenuItem value={e.id} key={e.id}>{e.name}</MenuItem>
    ));
  };

  const initialValues = {
    licenseType: "",
    examId: "",
    question: "",
    correctAnswer: "",
    incorrectAnswer1: "",
    incorrectAnswer2: "",
    incorrectAnswer3: "",
    authorName: ""
  };

  const schema = Yup.object().shape({
    // licenseType: Yup.string().required("License type is required"),
    // examId: Yup.string().required("Exam is required"),
    question: Yup.string().required("Question is required").max(1000, "Max 1000 characters"),
    correctAnswer: Yup.string().required("Correct answer is required").max(1000, "Max 1000 characters"),
    incorrectAnswer1: Yup.string().max(1000, "Max 1000 characters"),
    incorrectAnswer2: Yup.string().max(1000, "Max 1000 characters"),
    incorrectAnswer3: Yup.string().max(1000, "Max 1000 characters"),
    authorName: Yup.string().max(1000, "Max 1000 characters")
  });

  const handleFormSubmit = (values: any) => {
    console.log('form submit, values:');
    console.log(values);
  };

  if (redirect) {
    return <Redirect push to={redirect} />;
  }

  return (
    <>
      {/* Select exam */}
      <Typography variant="h5" className={classes.sectionTitle}>
        Choose exam
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={schema}
        validateOnChange
      >
        {({
          handleSubmit,
          isSubmitting,
          isValid,
          errors,
          touched
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body1">License type*</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    value={selectedLicenseType}
                    onChange={handleLicenseTypeChange}
                    name="licenseType"
                    error={(errors.licenseType && touched.licenseType) || false}
                  >
                    <MenuItem value="PPL" key="ppl">PPL</MenuItem>
                    <MenuItem value="CPL" key="cpl">CPL</MenuItem>
                    <MenuItem value="IR" key="ir">IR</MenuItem>
                  </Select>
                </FormControl>
                {errors.licenseType && touched.licenseType && <div className={classes.error}>{errors.licenseType}</div>}
              </Grid>
              <Grid item xs={6}>{/* Spacer */}</Grid>

              <Grid item xs={2}>
                <Typography variant="body1">Exam*</Typography>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    value={selectedExam}
                    onChange={handleExamTypeChange}
                    disabled={!selectedLicenseType}
                    name="examId"
                    error={(errors.examId && touched.examId) || false}
                  >
                    {getExamItems()}
                  </Select>
                </FormControl>
                {errors.examId && touched.examId && <div className={classes.error}>{errors.examId}</div>}
              </Grid>
              <Grid item xs={6}>{/* Spacer */}</Grid>
            </Grid>

            <Box mt={3} mb={3}>
              <Divider />
            </Box>

            {/* Questions & answers */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body1">Question*</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextFieldSet name="question" />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">Correct answer*</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextFieldSet name="correctAnswer" />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">Incorrect answer 1</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextFieldSet name="incorrectAnswer1" />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">Incorrect answer 2</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextFieldSet name="incorrectAnswer2" />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">Incorrect answer 3</Typography>
              </Grid>
              <Grid item xs={10}>
                <TextFieldSet name="incorrectAnswer3" />
              </Grid>
            </Grid>

            <Box mt={3} mb={3}>
              <Divider />
            </Box>

            {/* Acknowledgement information */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body1">Your name</Typography>
                <Typography variant="subtitle2">Question will be credited to you if specified</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextFieldSet name="authorName" />
              </Grid>
            </Grid>

            <Box mt={3} mb={3}>
              <Divider />
            </Box>

            {/* Submit button */}
            <Grid container>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!isValid || isSubmitting}
                  type="submit"
                >
                  Submit question
                </Button>
              </Grid> 
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};
