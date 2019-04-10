// Test away
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard.js";

afterEach(() => {
  cleanup();
});

describe("<Dashboard />", () => {
  it.skip("matches snapshot of Dashboard", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders Dashboard component successfully", () => {
    render(<Dashboard />);
  });
});
