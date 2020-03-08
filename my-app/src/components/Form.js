import React from 'react';
import './Form.css';
import useFormValidation from './useFormValidation';
import validateAuth from './validateAuth';

const INITIAL_STATE = {
  name: '',
  email: '',
  funFact: ''
};
function Form() {
  const {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth);
  return (
    <div className='formback'>
      <h3>Hack UCI Application</h3>
      <form onSubmit={handleSubmit}>
        <div className='group'>
          <label>
            <span>Name</span>
            {errors.name && <span className='error-text'> Invalid</span>}
          </label>
          <div>
            <input
              className={errors.name ? 'error-input' : 'regular-input'}
              placeholder='Name'
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          </div>
        </div>
        <div className='group'>
          <label>
            <span>Email</span>
            {errors.email && <span className='error-text'> Invalid</span>}
          </label>
          <div>
            <input
              className={errors.email ? 'error-input' : 'regular-input'}
              placeholder='Email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          </div>
        </div>
        <div className='group2'>
          <label>
            <span>Fun Fact</span>
            {errors.funFact && <span className='error-text'> Invalid</span>}
          </label>
          <div>
            <textarea
              className={errors.funFact ? 'error-area' : 'regular-area'}
              placeholder='Fun Fact...'
              name='funFact'
              value={values.funFact}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
        </div>
        <input
          disabled={isSubmitting}
          className='submitbutton'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
}
export default Form;
