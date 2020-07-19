import React from "react";
import { render } from "@testing-library/react";
import PdfLink from "./PdfLink";

test("renders learn react link", () => {
  const props = {
    href: "www.google.com",
    title: "gogole"
  };
  const { getByText } = render(<PdfLink {...props} />);
  const linkElement = getByText(/google/i);
  expect(linkElement).toBeInTheDocument();
});
