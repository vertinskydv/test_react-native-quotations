import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

class ErrorBoundary extends Component {
  componentDidCatch(error) {
    this.props.setError(error);
  }

  render() {
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default inject(store => (
  { error: store.quotationStore.setError }
))(ErrorBoundary);
