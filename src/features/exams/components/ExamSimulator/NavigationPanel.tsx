import { Button, Grid } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

interface Props {
  canGoNext: boolean,
  canGoPrevious: boolean,
  onGoNext: () => void,
  onGoPrevious: () => void
};

export const NavigationPanel = ({
  canGoNext, canGoPrevious, onGoNext, onGoPrevious
}: Props) => {

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item>
        <Button variant="contained" color="primary" disabled={!canGoPrevious} onClick={onGoPrevious}>
          <KeyboardArrowLeft /> Previous
        </Button>
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" disabled={!canGoNext} onClick={onGoNext}>
          <KeyboardArrowRight /> Next
        </Button>
      </Grid>
    </Grid>
  );
};
