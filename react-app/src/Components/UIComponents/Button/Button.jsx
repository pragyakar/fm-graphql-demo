import React from 'react';

const Button = (props) => {

  const { text, type, onClick } = props;

  return (
    <span 
      className={`button ${ type ? type : 'dark' }`}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

export default Button;