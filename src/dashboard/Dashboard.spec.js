// Test away
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard.js";

afterEach(() => {
  cleanup();
});

describe.skip("<Dashboard />", () => {
  it("matches snapshot of Dashboard", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
