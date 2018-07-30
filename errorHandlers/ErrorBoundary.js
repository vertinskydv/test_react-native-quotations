import React, {Component} from 'react';
import { inject } from 'mobx-react'

class ErrorBoundary extends Component {

  componentDidCatch(error, info) {
    debugger;
    this.props.setError(error);
  }

  render() {
    return this.props.children;
  }
}

export default inject(((store) => {
  return {
    error: store.quotationStore.setError
  }
}))(ErrorBoundary);