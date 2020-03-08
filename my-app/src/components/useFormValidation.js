import React from 'react';

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log(
          'authenticated!',
          values.name,
          values.email,
          values.funFact
        );
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }
  function handleSubmit(event) {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }
  return {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  };
}

export default useFormValidation;
