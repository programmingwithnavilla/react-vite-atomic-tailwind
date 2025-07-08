import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./label.atom";

describe("Label component", () => {
  it("renders with children text", () => {
    render(<Label htmlFor="input-id">Username</Label>);
    const label = screen.getByText("Username");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "input-id");
  });

  it("accepts additional className", () => {
    render(
      <Label htmlFor="input-id" className="custom-class">
        Email
      </Label>
    );
    const label = screen.getByText("Email");
    expect(label).toHaveClass("custom-class");
  });

  it("supports additional props like aria-label", () => {
    render(
      <Label htmlFor="input-id" aria-label="Custom aria label">
        Password
      </Label>
    );
    const label = screen.getByText("Password");
    expect(label).toHaveAttribute("aria-label", "Custom aria label");
  });
});
