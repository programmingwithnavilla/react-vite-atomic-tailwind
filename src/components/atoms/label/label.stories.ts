import { Label } from "./label.atom";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { within } from "@storybook/testing-library";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    htmlFor: "email",
    children: "Email Address",
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Email Address");

    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe("LABEL");
    expect(label).toHaveAttribute("for", "email");
  },
};

export const WithCustomStyle: Story = {
  args: {
    className: "text-red-600",
    children: "Required Field",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Required Field");

    expect(label).toHaveClass("text-red-600");
  },
};

export const WithInput: Story = {
  args: {
    htmlFor: "email",
    children: "Email",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Email");
    const input = canvas.getByLabelText("Email");

    expect(input).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "email");
  },
};
