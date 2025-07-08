import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./input.atom";

describe("Input component", () => {
  it("renders with given id and className", () => {
    render(<Input id="test-input" className="custom-class" />);

    const input = screen.getByRole("textbox"); // input type text role= textbox
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("custom-class");
    expect(input).toHaveAttribute("id", "test-input");
  });

  it("accepts and displays value", () => {
    render(<Input id="input-value" value="hello" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("hello");
  });

  it("calls onChange handler when typing", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input id="input-change" onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "abc");

    expect(handleChange).toHaveBeenCalled();
  });

  it("supports placeholder prop", () => {
    render(<Input id="input-placeholder" placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });
});
