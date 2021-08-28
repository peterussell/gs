export interface FormMapper<A, B> {
  map: (formValues: A) => B
};
