import React from 'react';

const Button = (props) => {

  const { text, type } = props;

  return (
    <span 
      className={`button ${ type ? type : 'dark' }`}
    >
      {text}
    </span>
  );
}

export default Button;