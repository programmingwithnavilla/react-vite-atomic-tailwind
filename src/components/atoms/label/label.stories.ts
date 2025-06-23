import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label.atom";

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

export const Default: Story = {};
