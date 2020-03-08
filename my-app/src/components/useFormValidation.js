import React from 'react';
import axios from 'axios';

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://hack-uci-test-endpoint.herokuapp.com/test', {
          params: {
            name: values.name,
            email: values.email,
            funfact: values.funFact
          }
        })
        .then(function(response) {
          console.log(response);
          alert('Successfully submitted!');
        });
    }
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log(
          'authenticated!',
          values.name,
          values.email,
          values.funFact
        );
        fetchData();
        setSubmitting(false);
        setValues(initialState);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values, initialState]);
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
    event.preventDefault();
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
