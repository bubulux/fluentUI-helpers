import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip, Button } from "@fluentui/react-components";
import useFuiProviderNode from "@hooks/useFuiProviderNode";

/**
 * @description
 * - when you use a component in fluent that requires the parent provider node, for example for relative positioning, you can use this hook to get the parent provider node
 * - some components like Tooltip for example allow to set a mountNode prop, which is the parent provider node
 * - this will only work if you have exactly one provider node in your app
 *
 * @example
 *
 * ```tsx
 * import { Tooltip, Button } from "@fluentui/react-components";
 * import useFuiProviderNode from "@hooks/useFuiProviderNode";
 *
 * export default function SomeHigherComponent() {
 *  const { fuiProviderNode } = useFuiProviderNode();
 *  return (
 *    <Tooltip
 *     content="This is a tooltip that uses the provider node"
 *     mountNode={fuiProviderNode}
 *     relationship="label"
 *    >
 *     <Button>Hover me</Button>
 *    </Tooltip>
 *  );
 * }
 * ```
 */
export function Wrapper({ hasProviderNode }: { hasProviderNode: boolean }) {
  const { fuiProviderNode } = useFuiProviderNode();
  return hasProviderNode ? (
    <Tooltip
      content="This is a tooltip that uses the provider node"
      mountNode={fuiProviderNode}
      relationship="label"
    >
      <Button>Hover me</Button>
    </Tooltip>
  ) : (
    <Tooltip
      content="This is a tooltip that relies on a unspecified provider node"
      relationship="label"
    >
      <Button>Hover me</Button>
    </Tooltip>
  );
}

const meta: Meta = {
  title: "Hooks/Specific/useFuiProviderNode",
  component: Wrapper,
  args: {
    hasProviderNode: true,
  },
};

export default meta;

type Story = StoryObj<typeof Wrapper>;

export const WithNodeFromHook: Story = {};

export const DefaultProviderNode: Story = {
  args: { hasProviderNode: false },
};
