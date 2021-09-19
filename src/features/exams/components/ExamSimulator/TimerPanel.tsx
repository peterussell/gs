import { useEffect, useState } from "react";
import { Box, Grid, LinearProgress, Typography } from "@material-ui/core";

import useStyles from "./examSimulatorStyle";

interface Props {
  allowedTimeMinutes: number,
  onTimerExpired?: () => void
};

export const TimerPanel = ({
  allowedTimeMinutes,
  onTimerExpired
}: Props) => {
  const classes = useStyles();

  const allowedTimeSeconds = allowedTimeMinutes * 60;
  // tmp
  // const allowedTimeSeconds = 10;
  const [secRemaining, setSecRemaining] = useState(allowedTimeSeconds);

  useEffect(() => {
    setTimeout(() => {
      if (secRemaining === 0) {
        onTimerExpired && onTimerExpired();
        return;
      }
      setSecRemaining(secRemaining-1);
    }, 1000)
  });

  const getTimeString = () => {
    let secs = secRemaining;

    // Calculate hours and subtract from total seconds
    const hours = Math.floor(secs / (60 * 60));
    secs = secs - (hours * 60 * 60);

    // Same for minutes
    const mins = Math.floor(secs / 60);
    secs = secs - (mins * 60);

    const hoursString = formatTwoDigits(hours);
    const minsString = formatTwoDigits(mins);
    const secsString = formatTwoDigits(secs);

    return `${hoursString}:${minsString}:${secsString}`;
  };

  const formatTwoDigits = (value: number): string => {
    return value.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
  };

  const getProgressColor = () => {
    if (secRemaining < 60) { // < 1 min
      return classes.progressStrongWarn;
    } else if (secRemaining < (10 * 60)) { // < 10 min
      return classes.progressWarn;
    } else {
      return classes.progressOk
    }
  };

  const getProgressValue = () => {
    return (allowedTimeSeconds - secRemaining) / allowedTimeSeconds * 100;
  };

  return (
    <Box pt={2}>
      <Grid container spacing={1} justify="center" direction="row">
        <Grid item md={6} xs={12}>
          <LinearProgress
            variant="determinate"
            value={getProgressValue()}
            classes={{ barColorPrimary: getProgressColor() }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center" direction="row">
        <Grid item>
          <Typography variant="h6">
            {getTimeString()} remaining
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
