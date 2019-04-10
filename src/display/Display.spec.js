// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import renderer from "react-test-renderer";

import Display from "./Display.js";

describe("<Display />", () => {
  it.skip("matches snapshot of Display", () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders Display component successfully", () => {
    render(<Display />);
  });
});
