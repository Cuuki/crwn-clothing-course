import React from 'react';

import {SpinnerOverlay, SpinnerContainer} from './withSpinner.styles';

const withSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default withSpinner;
