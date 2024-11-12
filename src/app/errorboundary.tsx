// src/app/ErrorBoundary.tsx

import React, { Component, ErrorInfo } from 'react';
import ErrorPage from './error'; // Assuming error.tsx is the ErrorPage component

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<React.PropsWithChildren, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    // Update state to indicate that an error has occurred
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      // If there's an error, display the error page but don't crash the whole app
      return <ErrorPage error={this.state.error} reset={() => this.setState({ hasError: false, error: null })} />;
    }

    // Otherwise, render children
    return this.props.children;
  }
}

export default ErrorBoundary;
