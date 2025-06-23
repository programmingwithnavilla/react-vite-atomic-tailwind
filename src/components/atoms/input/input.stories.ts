import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.atom";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    id: "input-id",
    value: "Test",
    onChange: () => {},
    placeholder: "Enter text...",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Password: Story = {
  args: {
    type: "password",
    value: "secret",
  },
};
