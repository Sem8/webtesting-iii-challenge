// Test away!
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
// import "react-testing-library/cleanup-after-each";
import renderer from "react-test-renderer";

import Display from "./Display.js";

afterEach(() => {
  cleanup();
});

describe("<Display />", () => {
  it.skip("matches snapshot of Display", () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it.skip("renders Display component successfully", () => {
    render(<Display />);
  });
});

describe("Display component Gate behavior", () => {
  it("defaults to unlocked and open but not closed", () => {
    const { getByText, queryByText } = render(<Display />);
    expect(getByText(/unlocked/i)).toBeTruthy();
    expect(getByText(/open/i)).toBeTruthy();
    expect(queryByText(/closed/i)).toBeNull();
    // expect(queryByText(/locked/i)).toBeNull();
  });
});
