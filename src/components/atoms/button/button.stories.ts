import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button.atom";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
// Meta configuration
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Click Me",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    onClick: () => console.log("Clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeDisabled();
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toHaveTextContent("Loading...");
    await expect(button).toBeDisabled();
  },
};

export const SubmitType: Story = {
  args: {
    type: "submit",
    label: "Submit",
  },
};

export const WithCustomStyle: Story = {
  args: {
    className: "bg-green-600 hover:bg-green-700",
    label: "Styled Button",
  },
};
