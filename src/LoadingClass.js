import React from "react";
import { LOADING_SPINNER_CONTAINER_TEST_ID } from "./constants";

class Loading extends React.Component {
  state = { visible: false };

  constructor(props) {
    super(props);
    this.timeout = React.createRef();
  }

  componentDidMount() {
    this.timeout.current = setTimeout(() => {
      this.setState({ visible: true });
    }, this.props.showAfterDelay);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout.current);
  }

  render() {
    if (this.state.visible) {
      return (
        <div data-testid={LOADING_SPINNER_CONTAINER_TEST_ID}>Loading...</div>
      );
    }

    return null;
  }
}

export default Loading;
