import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './ErrorBoundary.styles';

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/QIxIKBH.png" />
          <ErrorImageText>
            <h1>This Page is a Ghost</h1>
            <p>
              Once alive and now dead, this ghost appears to have some
              unfinished business. Could it be with you? Or the treasure hidden
              under the floorboards of the old mansion in the hills that may
              never reach its rightful owner, a compassionate school teacher in
              Brooklyn.
            </p>
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}
