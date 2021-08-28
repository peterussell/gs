import { useEffect, useState } from "react";
import { useField, FieldHookConfig } from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";

type Props = TextFieldProps & FieldHookConfig<{}>;

export const TextFieldSet: React.FC<Props> = ({ ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  const [fieldValue, setFieldValue] = useState(field.value);

  // Listen for value changes to update the component
  useEffect(() => { setFieldValue(field.value); }, [field.value]);

  return (
    <TextField
      {...props}
      {...field}
      fullWidth
      variant="outlined"
      color="primary"
      helperText={errorText}
      error={!!errorText}
      onChange={(e: any) => { setFieldValue(e.target.value); }}
      onBlur={(e: any) => {
        field.onBlur(e);
        field.onChange(e);
      }}
      value={fieldValue}
    />
  );
};
