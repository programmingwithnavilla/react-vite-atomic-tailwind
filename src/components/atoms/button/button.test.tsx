import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Button } from "./button.atom";

describe("Button", () => {
  it("renders with label and handles click", () => {
    const onClick = vi.fn();
    render(<Button label="Click me" onClick={onClick} />);
    const btn = screen.getByText("Click me");
    btn.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
