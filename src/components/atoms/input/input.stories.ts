import { Input } from "./input.atom";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    id: "input-id",
    value: "",
    onChange: () => {},
    placeholder: "Enter text...",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: "username",
    placeholder: "Username",
    value: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Username") as HTMLInputElement;

    await expect(input).toBeInTheDocument();
    await userEvent.type(input, "Navid");

    // NOTE: since state isn't bound here, value won't update in React
    // But DOM reflects the typed input
    await expect(input.value).toBe("Navid");
  },
};

export const Password: Story = {
  args: {
    id: "password",
    type: "password",
    placeholder: "Enter password",
    value: "secret",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(
      "Enter password"
    ) as HTMLInputElement;

    await expect(input).toBeInTheDocument();
    await expect(input.type).toBe("password");
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-input",
    value: "Can't touch this",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue("Can't touch this");
    await expect(input).toBeDisabled();
  },
};

export const ReadOnly: Story = {
  args: {
    id: "readonly-input",
    value: "Read-only value",
    readOnly: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue("Read-only value");
    await expect(input).toHaveAttribute("readonly");
  },
};

export const NumberInput: Story = {
  args: {
    id: "age",
    type: "number",
    value: "25",
    placeholder: "Enter your age",
    min: 0,
    max: 120,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(
      "Enter your age"
    ) as HTMLInputElement;
    await expect(input).toBeInTheDocument();
    await expect(input.type).toBe("number");
  },
};
