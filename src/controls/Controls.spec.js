// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import renderer from "react-test-renderer";

import Controls from "./Controls.js";

describe.skip("<Controls />", () => {
  it("renders Controls component successfully", () => {
    render(<Controls />);
  });
});

// describe("display Close Gate by default NOT Open gate", () => {
//   const { getByText, queryByText } = render(<Controls />);
//   expect(getByText(/Close Gate/i)).toBeTruthy();
// //   expect(queryByText(/Close Gate/i)).toBeNull(); // this test should fail
//   expect(queryByText(/Open Gate/i)).toBeNull();
// });
