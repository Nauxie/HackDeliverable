import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className='formback'>
      <h3>Hack UCI Application</h3>
      <form>
        <div className='group'>
          <label>Name</label>
          <div>
            <input placeholder='Name'></input>
          </div>
        </div>
        <div className='group'>
          <label>Email</label>
          <div>
            <input placeholder='Email'></input>
          </div>
        </div>
        <div className='group2'>
          <label>Fun Fact</label>
          <div>
            <textarea placeholder='Fun Fact...'></textarea>
          </div>
        </div>
        <input className='submitbutton' type='submit' value='Submit' />
      </form>
    </div>
  );
}
export default Form;
