import React from "react";
import { cleanup, render } from "react-testing-library";
import LoadingWithHooks from "./Loading";
import LoadingWithLifecycle from "./LoadingClass";
import {
  LOADING_SPINNER_CONTAINER_TEST_ID,
  LOADING_DELAY_MS
} from "./constants";

jest.useFakeTimers();

afterEach(() => {
  cleanup();
  jest.clearAllTimers();
});

// WARNING!!!
//
// These tests don't work in CodeSandbox environment,
// because it doesn't support Jest fake timers API.
// Please it run on localhost instead.

test("hooks", () => {
  const { getByTestId, rerender } = render(
    <LoadingWithHooks showAfterDelay={LOADING_DELAY_MS} />
  );

  // no spinner initially
  expect(() => getByTestId(LOADING_SPINNER_CONTAINER_TEST_ID)).toThrow();

  rerender(<LoadingWithHooks showAfterDelay={LOADING_DELAY_MS} />);
  jest.advanceTimersByTime(LOADING_DELAY_MS);
  rerender(<LoadingWithHooks showAfterDelay={LOADING_DELAY_MS} />);

  // spinner appeared
  expect(getByTestId(LOADING_SPINNER_CONTAINER_TEST_ID)).toBeTruthy();
});

test("lifecycle methods", () => {
  const { getByTestId } = render(
    <LoadingWithLifecycle showAfterDelay={LOADING_DELAY_MS} />
  );

  // no spinner initially
  expect(() => getByTestId(LOADING_SPINNER_CONTAINER_TEST_ID)).toThrow();
  jest.advanceTimersByTime(LOADING_DELAY_MS);

  // spinner appeared
  expect(getByTestId(LOADING_SPINNER_CONTAINER_TEST_ID)).toBeTruthy();
});
