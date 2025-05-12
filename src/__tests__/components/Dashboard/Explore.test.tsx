import React from "react";
import { render, screen } from "@testing-library/react";
import Explore from "../../../components/Dashboard/Explore";

// Mock the Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className: string;
  }) => <img src={src} alt={alt} className={className} />,
}));

// Mock the Icon component
jest.mock("@iconify/react/dist/iconify.js", () => ({
  Icon: ({ icon, className }: { icon: string; className?: string }) => (
    <span data-testid={`icon-${icon}`} className={className}>
      {icon}
    </span>
  ),
}));

describe("Explore Component", () => {
  it("renders the component with correct sections", () => {
    render(<Explore />);

    // Check for section headings
    expect(screen.getByText(/For you in/)).toBeInTheDocument();
    expect(screen.getByText("Kuala Lumpur")).toBeInTheDocument();
    expect(screen.getByText("Jump back in")).toBeInTheDocument();
    expect(screen.getByText("Get inspired")).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.getByText("View all")).toBeInTheDocument();
    expect(screen.getByText("See all")).toBeInTheDocument();

    // Check for location icon
    expect(screen.getByTestId("icon-bytesize:location")).toBeInTheDocument();

    // Check for food items (should appear in each section, so total of 9)
    const foodTitles = screen.getAllByText("Nasi Lemak Wanjo Kg Bharu");
    expect(foodTitles).toHaveLength(9);
  });
});
