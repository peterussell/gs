import { useField, FieldHookConfig } from "formik";
import { TextFieldSet } from "../TextFieldSet";
import { InputAdornment } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export interface AutocompleteOption<T> {
  label: string,
  value: T
};

interface Props {
  name: string,
  label?: string,
  options: AutocompleteOption<any>[],
  icon?: React.FC
  defaultOption?: string
};

export const AutocompleteSet: React.FC<Props & FieldHookConfig<any>> = ({
  ...props
}) => {
  const { name, label, options, icon, defaultOption } = props;
  const [field, { value }, { setValue }] = useField(name);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={option => option.label}
      getOptionSelected={(option, value) => option.value === value.value }
      openOnFocus
      defaultValue={options.find((o) => o.value === defaultOption ?? "")}
      onChange={(_, option) => { setValue(option?.value || ""); }}
      onBlur={() => {
        // Prevent Formik updating the field value to option.label
        setValue(value);
      }}
      renderInput={(params) => (
        <TextFieldSet
          {...params}
          name={name}
          label={label || null}
          InputProps={{
            ...params.InputProps,
            startAdornment: icon && <InputAdornment position="start">{icon}</InputAdornment>,
          }}
        />
      )}
    />
  );
};
