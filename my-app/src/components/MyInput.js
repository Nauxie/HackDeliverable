import React from 'react';

function MyInput(props) {
  return (
    <div className='group'>
      <div>
        <label>{props.name}</label>
      </div>
      <div>
        <input placeholder={props.name}></input>
      </div>
    </div>
  );
}
export default MyInput;
