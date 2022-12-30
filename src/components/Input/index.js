import React from 'react';

const index = ({value, id,inputId, ...props}) => {
  return (
    <>
      <label htmlFor={inputId}>Введите логин</label>
      <input
        id={inputId}
        type="text"
        value={value}
        {...props}
      />
      <br/>
    </>
  );
};

export default index;
