import React from "react";
import { render, screen } from "@testing-library/react";
import Chat from "../../../components/Dashboard/Chat";

// Mock the Icon component
jest.mock("@iconify/react/dist/iconify.js", () => ({
  Icon: ({ icon, className }: { icon: string; className?: string }) => (
    <span data-testid={`icon-${icon}`} className={className}>
      {icon}
    </span>
  ),
}));

describe("Chat Component", () => {
  it("renders the chat interface correctly", () => {
    render(<Chat />);

    // Check for heading
    expect(screen.getByText("Where to today?")).toBeInTheDocument();

    // Check for assistant message
    expect(
      screen.getByText(/Hey there, where would you like to go\?/)
    ).toBeInTheDocument();

    // Check for help button
    expect(screen.getByText("What can I ask Midtrip?")).toBeInTheDocument();

    // Check for input field
    const inputField = screen.getByPlaceholderText("Ask me anything...");
    expect(inputField).toBeInTheDocument();

    // Check for icons
    expect(screen.getByTestId("icon-ri:gemini-fill")).toBeInTheDocument();
    expect(
      screen.getByTestId("icon-mdi:help-circle-outline")
    ).toBeInTheDocument();
    expect(screen.getByTestId("icon-ic:baseline-plus")).toBeInTheDocument();
    expect(
      screen.getByTestId("icon-pajamas:paper-airplane")
    ).toBeInTheDocument();

    // Check for send button
    const sendButton = screen
      .getByTestId("icon-pajamas:paper-airplane")
      .closest("button");
    expect(sendButton).toHaveAttribute("type", "submit");
  });
});
