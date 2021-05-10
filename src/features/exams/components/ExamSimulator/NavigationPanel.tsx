import { Button, Grid } from "@material-ui/core";
import { Done, KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

interface Props {
  canGoNext: boolean,
  canGoPrevious: boolean,
  onFinish: () => void,
  onGoNext: () => void,
  onGoPrevious: () => void
};

export const NavigationPanel = ({
  canGoNext, canGoPrevious, onFinish, onGoNext, onGoPrevious
}: Props) => {

  return (
    <Grid container>
      <Grid item style={{ flexGrow: 1 }}>
        <Grid container justify="flex-start" spacing={2}>
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
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" onClick={onFinish}>
          <Done style={{ marginRight: 5 }} /> Finish exam
        </Button>
      </Grid>
    </Grid>
  );
};
