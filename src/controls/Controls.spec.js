// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import renderer from "react-test-renderer";

import Controls from "./Controls.js";

describe("<Controls />", () => {
  it("renders Controls component successfully", () => {
    render(<Controls />);
  });
});
