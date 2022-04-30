import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the main app", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/would you rather/i);
  expect(linkElement).toBeInTheDocument();
});
