import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button.atom";

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

export const Default: Story = {};

export const WithCustomStyle: Story = {
  args: {
    className: "bg-green-600 hover:bg-green-700",
  },
};
