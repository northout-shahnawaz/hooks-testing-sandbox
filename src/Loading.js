import React, { useEffect, useState, useRef } from "react";
import { LOADING_SPINNER_CONTAINER_TEST_ID } from "./constants";

const Loading = ({ showAfterDelay }) => {
  const [visible, setVisibility] = useState(false);
  const timeout = useRef();

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setVisibility(true);
    }, showAfterDelay);

    return () => clearTimeout(timeout.current);
  }, []);

  if (visible) {
    return (
      <div data-testid={LOADING_SPINNER_CONTAINER_TEST_ID}>Loading...</div>
    );
  }

  return null;
};

export default Loading;
