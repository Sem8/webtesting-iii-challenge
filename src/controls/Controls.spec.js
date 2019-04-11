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
describe("disable button functionality of Gate using mock", () => {
  it("the closed toggle button is disabled if the gate is closed", () => {
    const closeMock = jest.fn();
    const control = render(<Controls toggleClosed={closeMock} />);
    const closeGateBtn = control.getByText("Close Gate");
    expect(closeMock()).toBeDefined;
    fireEvent.click(closeGateBtn);
    expect(closeMock).toHaveBeenCalledTimes(2);
    expect(closeMock()).toBeUndefined;
    expect(closeGateBtn).toBeFalsy;
  });
  it("the locked toggle button is disabled if the gate is open", () => {
    const lockMock = jest.fn();
    const control = render(<Controls toggleLocked={lockMock} />);
    const lockGateBtn = control.getByText("Lock Gate");
    expect(lockMock()).toBeUnDefined;
    expect(lockGateBtn).toBeTruthy;
    fireEvent.click(lockGateBtn);
    expect(lockMock).toHaveBeenCalledTimes(1);
    expect(lockMock()).toBeDefined;
    // expect(lockMock()).toBeTruthy;
    expect(lockGateBtn).toBeTruthy;
  });
});
