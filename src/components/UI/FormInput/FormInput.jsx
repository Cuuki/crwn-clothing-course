import React from 'react';

import classNames from 'classnames';

import './FormInput.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        htmlFor={otherProps.id}
        className={classNames(
          'form-input-label',
          otherProps.value.length ? 'shrink' : ''
        )}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
