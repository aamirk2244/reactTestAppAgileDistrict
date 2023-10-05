import autoBind from "react-autobind";
import React from "react";
import PropTypes from "prop-types";

// https://reactjs.org/docs/error-boundaries.html
//
// Catch JavaScript errors anywhere in their child component tree, log those errors,
// and display a fallback UI instead of the component tree that crashed.
//
// Error boundaries catch errors during rendering, in lifecycle methods,
// and in constructors of the whole tree below them.
//
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  handleRecoveryClick(e) {
    e.preventDefault();

    const { onRecovery } = this.props;

    onRecovery();
  }

  render() {
    const recoveryLink = (
      <a href="#refresh" onClick={this.handleRecoveryClick}>
        Click here to reload
      </a>
    );
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="alert alert-warning">
          Oh shoot, looks like we had an issue. {recoveryLink}.
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: null,
  onRecovery: () => false,
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onRecovery: PropTypes.func,
};

export default ErrorBoundary;
