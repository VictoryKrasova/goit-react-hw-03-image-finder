import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <div className={css.buttonContainer}>
      <button className={css.btnLoadMore} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;