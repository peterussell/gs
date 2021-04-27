import { ChangeEvent, ReactNode, useState } from "react";
import { Box, Tabs, Tab, Typography } from "@material-ui/core";

export const CourseSelector = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary">
        <Tab label="PPL" id="tab-0" />
        <Tab label="CPL" id="tab-1" />
        <Tab label="IR" id="tab=2" />
        <Tab label="Other" id="tab=2" />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <Typography variant="h6">PPL Exams</Typography>
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
    </>
  )
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