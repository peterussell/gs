import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { QuestionApi } from "api";
import { useExamState } from "features/exams/store";
import { SubmitQuestionForm as FormValues } from "models/forms";
import { useSubmitQuestionMapper } from "mappers";

import {
  AutocompleteSet,
  AutocompleteOption,
  CheckboxSet,
  TextFieldSet
} from "features/shared/components";
import useStyles from "./submitQuestionStyle";

export const SubmitQuestionForm = () => {
  const classes = useStyles();
  const { exams, loadExams } = useExamState();
  const { map } = useSubmitQuestionMapper();
  const [redirect, setRedirect] = useState("");

  useEffect(() => { if (!exams) { loadExams(); } }, [exams]);

  const api = new QuestionApi();

  const licenseTypeOptions: AutocompleteOption<string>[] = [
    { label: "PPL", value: "PPL" },
    { label: "CPL", value: "CPL" },
    { label: "IR", value: "IR" }
  ];

  const getExamOptions = (licenseType: string): AutocompleteOption<string>[] => {
    const matchingExams = exams?.filter(e => e.licenseType === licenseType);
    return matchingExams?.length ?
      matchingExams.map(e => ({ label: e.name, value: e.id })) :
      [];
  };

  const initialValues: FormValues = {
    licenseType: "",
    examId: "",
    question: "",
    correctAnswer: "",
    incorrectAnswer1: "",
    incorrectAnswer2: "",
    incorrectAnswer3: "",
    authorName: "",
    addAnother: true
  };

  const schema = Yup.object().shape({
    licenseType: Yup.string().required("License type is required"),
    examId: Yup.string().required("Exam is required"),
    question: Yup.string().required("Question is required").max(1000, "Max 1000 characters"),
    correctAnswer: Yup.string().required("Correct answer is required").max(1000, "Max 1000 characters"),
    incorrectAnswer1: Yup.string().max(1000, "Max 1000 characters"),
    incorrectAnswer2: Yup.string().max(1000, "Max 1000 characters"),
    incorrectAnswer3: Yup.string().max(1000, "Max 1000 characters"),
    authorName: Yup.string().max(1000, "Max 1000 characters")
  });

  const handleFormSubmit = (
    values: FormValues,
    { setSubmitting, setValues }: FormikHelpers<FormValues>
  ) => {
    const req = map(values);
    
    api.addQuestion(req)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // reset form, don't validate on reset
    setValues({
      ...initialValues,
      licenseType: values.licenseType,
      examId: values.examId,
      authorName: values.authorName,
    }, false);

    setSubmitting(false);
  };

  if (redirect) {
    return <Redirect push to={redirect} />;
  }

  return (
    <>
      {/* Select exam */}
      <Typography variant="h5" className={classes.title}>
        Choose exam
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={schema}
        validateOnMount
        validateOnChange
      >
        {({
          handleSubmit,
          isSubmitting,
          isValid,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body1">License type*</Typography>
              </Grid>
              <Grid item xs={4}>
                <AutocompleteSet
                  name="licenseType"
                  options={licenseTypeOptions}
                />
              </Grid>
              <Grid item xs={6}>{/* Spacer */}</Grid>

              <Grid item xs={2}>
                <Typography variant="body1">Exam*</Typography>
              </Grid>
              <Grid item xs={4}>
                <AutocompleteSet
                  name="examId"
                  options={getExamOptions(values.licenseType)}
                />
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
                <Typography variant="subtitle2">Leave blank to submit anonymously</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextFieldSet name="authorName" />
              </Grid>
            </Grid>

            <Box mt={3} mb={3}>
              <Divider />
            </Box>

            {/* Submit button */}
            <Grid container alignItems="center" spacing={3}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!isValid || isSubmitting}
                  type="submit"
                >
                  Submit question
                </Button>
              </Grid>
              <Grid item>
                <CheckboxSet name="addAnother" title="Add another question" />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};
