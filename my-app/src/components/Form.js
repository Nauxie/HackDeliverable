import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className='formback'>
      <form action=''>
        <div class='input-field'>
          <input type='text' id='name' required />
          <label for='name'>Your name:</label>
        </div>
      </form>
    </div>
  );
}
export default Form;
