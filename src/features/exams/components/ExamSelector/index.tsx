
import { ReactNode, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Typography
} from "@material-ui/core";

import { Exam, ExamSimulatorConfig } from "models";
import { useExamState } from "features/exams/store";

import { ExamConfigurator, ExamSelectorCard } from "features/exams/components";
import { GSDialog } from "features/shared/components";
import useStyles from "./examSelectorStyle";

// import { pplExams } from "mocks"; // tmp

export const ExamSelector = () => {
  const classes = useStyles();

  const [redirect, setRedirect] = useState<string | null>(null);

  const {
    exams,
    loadExams,
    setExamConfig
  } = useExamState();

  const [tabIndex, setTabIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);

  useEffect(() => {
    loadExams();
  });

  const handleTabChange = (_: any, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleCardClick = (exam: Exam) => {
    setSelectedExam(exam);
    setShowDialog(true);
  };

  const handleStartExam = (config: ExamSimulatorConfig) => {
    setExamConfig(config);
    setRedirect("/exams/sit");
  };

  const handleCancel = () => {
    setShowDialog(false);
    setSelectedExam(null);
  };

  if (redirect) {
    return <Redirect push to={redirect} />;
  }

  return (
    <>
     <Typography variant="h4">Practice exams</Typography>

      <Box mt={2} mb={3}>
        <Grid container>
          <Grid item md={10}>
            <Typography variant="body1">
              GroundSchool question banks are crowd-sourced from the
              kiwi pilot community. Use the exam simulator to practice sitting a full ASPEQ-style
              exam, or select a smaller number of questions for quick review.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary">
        <Tab label="PPL" id="tab-0" className={tabIndex !== 0 ? classes.inactiveTab : undefined} />
        <Tab label="CPL" id="tab-1" className={tabIndex !== 1 ? classes.inactiveTab : undefined} />
        <Tab label="IR" id="tab=2" className={tabIndex !== 2 ? classes.inactiveTab : undefined} />
        <Tab label="Other" id="tab=2" className={tabIndex !== 3 ? classes.inactiveTab : undefined} />
      </Tabs>

      <Grid container className={classes.tabPanelContainer}>
        <Grid item xs={12}>
          <TabPanel value={tabIndex} index={0}>
            <Grid container spacing={4}>
              {exams?.map(e => (
                <Grid item xs={4} key={e.id}>
                  <ExamSelectorCard exam={e} onClick={(e: Exam) => { handleCardClick(e); }} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={tabIndex} index={1}>
            <Typography variant="h6">CPL Exams</Typography>
          </TabPanel>

          <TabPanel value={tabIndex} index={2}>
            <Typography variant="h6">IR Exams</Typography>
          </TabPanel>

          <TabPanel value={tabIndex} index={3}>
            <Typography variant="h6">Other question banks</Typography>
          </TabPanel>
        </Grid>
      </Grid>

      {selectedExam &&
        <GSDialog
          title={`Practice exam: ${selectedExam.name}`}
          open={showDialog}
          saveText="Start exam"
          fullWidth
          maxWidth="sm"
        >
          <ExamConfigurator
            exam={selectedExam}
            onCancel={handleCancel}
            onStartExam={handleStartExam}
          />
        </GSDialog>
      }
    </>
  );
};

interface TabPanelProps {
  children?: ReactNode;
  index: any;
  value: any;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}