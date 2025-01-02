import type { Meta, StoryObj } from "@storybook/react";
import Root from "@preview/elevated-modal/example/root";

const meta: Meta = {
  title: "Preview/Elevated Modal",
  component: Root,
  args: {},
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "500px", backgroundColor: "grey" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Root>;

export const Index: Story = {};
