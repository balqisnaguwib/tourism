import React from "react";
import { render, screen } from "@testing-library/react";
import ProfilePage from "../../../src/pages/profile/index";

describe("Profile Page", () => {
  it("renders the profile page correctly", () => {
    render(<ProfilePage />);

    // Check that the page text is rendered
    expect(screen.getByText("Page")).toBeInTheDocument();
  });
});
