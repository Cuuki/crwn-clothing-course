import React from 'react';

import classNames from 'classnames';

import './FormInput.scss';

const FormInput = ({handleChange, label, id, value, ...otherProps}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        htmlFor={id}
        className={classNames(
          'form-input-label',
          value.length ? 'shrink' : ''
        )}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
