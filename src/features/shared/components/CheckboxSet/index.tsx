import { useField, FieldHookConfig } from "formik";
import {
  Checkbox,
  CheckboxProps,
  Grid,
  Typography
} from "@material-ui/core";

import useStyles from "./checkboxSetStyle";

type Props = CheckboxProps & FieldHookConfig<boolean>;

export const CheckboxSet: React.FC<Props> = ({ placeholder, ...props }) => {
  const classes = useStyles();

  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <Grid container>
      <Grid item>
        <Grid container justify="center" className={classes.checkboxContainer}>
          <Checkbox
            {...props}
            {...field}
            checked={field.value}
            color="secondary"
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center" className={classes.checkboxLabelContainer}>
          <Typography variant="body1" display="inline">
            {props.title}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
