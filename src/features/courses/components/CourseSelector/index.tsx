
import { ReactNode, useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Typography
} from "@material-ui/core";

import { Course, ExamSimulatorConfig } from "models";
import { useExamState } from "features/exams/store";

import { CourseCard } from "features/courses/components";
import { ExamConfigurator } from "features/exams/components";
import { GSDialog } from "features/shared/components";
import useStyles from "./courseSelectorStyle";

import { pplCourses } from "mocks"; // tmp

export const CourseSelector = () => {
  const classes = useStyles();
  const { setExamConfig } = useExamState();

  const [tabIndex, setTabIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [redirect, setRedirect] = useState<string | null>(null);

  const handleTabChange = (_: any, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleCardClick = (course: Course) => {
    setSelectedCourse(course);
    setShowDialog(true);
  };

  const handleStartExam = (config: ExamSimulatorConfig) => {
    setExamConfig(config);
    setRedirect("/exams/sit");
  };

  const handleCancel = () => {
    setShowDialog(false);
    setSelectedCourse(null);
  };

  if (redirect) {
    return <Redirect push to={redirect} />;
  }

  return (
    <>
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
              {pplCourses.map(c => (
                <Grid item xs={4} key={c.id}>
                  <CourseCard course={c} onClick={(c: Course) => { handleCardClick(c); }} />
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

      {selectedCourse &&
        <GSDialog
          title={`Practice exam: ${selectedCourse.title}`}
          open={showDialog}
          saveText="Start exam"
          fullWidth
          maxWidth="sm"
        >
          <ExamConfigurator
            course={selectedCourse}
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