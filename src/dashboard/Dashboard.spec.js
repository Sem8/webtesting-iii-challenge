// Test away
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  getByText,
  queryByText
} from "react-testing-library";
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
  it("renders Dashboard component successfully", () => {
    render(<Dashboard />);
  });
});

describe("Gate behavior when locked", () => {
  it("display Close Gate by default NOT Open gate", () => {
    const dashboard = render(<Dashboard />);
    expect(dashboard.getByText(/Close Gate/i)).toBeTruthy();
    //   expect(queryByText(/Close Gate/i)).toBeNull();    // this test should fail
    expect(dashboard.queryByText(/Open Gate/i)).toBeNull();
  });
  it("unlocked and closed and option to Open Gate when Close Gate is pressed", () => {
    const dashboard = render(<Dashboard />);
    fireEvent.click(dashboard.getByText(/Close Gate/));
    expect(dashboard.getByText(/unlocked/i)).toBeTruthy();
    expect(dashboard.getByText(/closed/i)).toBeTruthy();
    expect(dashboard.getByText(/Open Gate/)).toBeTruthy();
  });
  it("cannot be closed or opened if it is locked", () => {
    const dashboard = render(<Dashboard />);
    fireEvent.click(dashboard.getByText(/Close Gate/));
    fireEvent.click(dashboard.getByText(/Open Gate/));
    expect(dashboard.getByText(/unlocked/i)).toBeTruthy();
    expect(dashboard.getByText(/open/i)).toBeTruthy();

    fireEvent.click(dashboard.getByText(/Close Gate/));
    fireEvent.click(dashboard.getByText(/Lock Gate/));
    expect(dashboard.getByText(/locked/i)).toBeTruthy();
    expect(dashboard.getByText(/closed/i)).toBeTruthy();
    fireEvent.click(dashboard.getByText(/Open Gate/));
    expect(dashboard.getByText(/locked/i)).toBeTruthy();
    expect(dashboard.getByText(/closed/i)).toBeTruthy();
  });
});
