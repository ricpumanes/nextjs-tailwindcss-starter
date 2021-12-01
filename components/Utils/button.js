import React from 'react';
import PropTypes from 'prop-types';
import style from './button.module.scss';

const Button = (props) => {
  return <button className={`${style.default} p-2 rounded-lg`}>Sign Up</button>;
};

Button.propTypes = {};

export default Button;
