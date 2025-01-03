import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { CalendarMonthRegular } from "@fluentui/react-icons";
import { Button, Tooltip } from "@fluentui/react-components";

import { Flex } from "@components/layout";
import ButtonGroup from "@components/molecules/ButtonGroup";
import useFuiProviderNode from "@hooks/useFuiProviderNode";

const meta: Meta = {
  title: "Components/Molecules/ButtonGroup",
  component: ButtonGroup,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Index: Story = {
  render: () => {
    const [activeOption, setActiveOption] = useState(1);
    const { fuiProviderNode } = useFuiProviderNode();

    return (
      <ButtonGroup>
        <Button
          appearance={activeOption === 1 ? "primary" : "secondary"}
          onClick={() => {
            setActiveOption(1);
          }}
        >
          Button 1
        </Button>
        <Button
          appearance={activeOption === 2 ? "primary" : "secondary"}
          onClick={() => {
            setActiveOption(2);
          }}
        >
          Button 2
        </Button>
        <Button
          appearance={activeOption === 3 ? "primary" : "secondary"}
          onClick={() => {
            setActiveOption(3);
          }}
          disabledFocusable
        >
          Button 3
        </Button>
        <Tooltip
          content="Button 4"
          relationship="label"
          mountNode={fuiProviderNode}
        >
          <Button
            icon={<CalendarMonthRegular />}
            appearance={activeOption === 4 ? "primary" : "secondary"}
            onClick={() => {
              setActiveOption(4);
            }}
          />
        </Tooltip>
        <Button
          appearance={activeOption === 5 ? "primary" : "secondary"}
          onClick={() => {
            setActiveOption(5);
          }}
        >
          Button 5
        </Button>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import { useState } from "react";
import { Button, Tooltip } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import ButtonGroup from "@components/molecules/ButtonGroup";
import useFuiProviderNode from "@hooks/useFuiProviderNode";

const Example = () => {
  const [activeOption, setActiveOption] = useState(1);
  const { fuiProviderNode } = useFuiProviderNode();

  return (
    <ButtonGroup>
      <Button
        appearance={activeOption === 1 ? "primary" : "secondary"}
        onClick={() => {
          setActiveOption(1);
        }}
      >
        Button 1
      </Button>
      <Button
        appearance={activeOption === 2 ? "primary" : "secondary"}
        onClick={() => {
          setActiveOption(2);
        }}
      >
        Button 2
      </Button>
      <Button
        appearance={activeOption === 3 ? "primary" : "secondary"}
        onClick={() => {
          setActiveOption(3);
        }}
        disabledFocusable
      >
        Button 3
      </Button>
      <Tooltip
        content="Button 4"
        relationship="label"
        mountNode={fuiProviderNode}
      >
        <Button
          icon={<CalendarMonthRegular />}
          appearance={activeOption === 4 ? "primary" : "secondary"}
          onClick={() => {
            setActiveOption(4);
          }}
        />
      </Tooltip>
      <Button
        appearance={activeOption === 5 ? "primary" : "secondary"}
        onClick={() => {
          setActiveOption(5);
        }}
      >
        Button 5
      </Button>
    </ButtonGroup>
  );
};

export default Example;
        `,
      },
    },
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <Flex gap="L" direction="column">
        <ButtonGroup>
          <Button size="small">One</Button>
          <Button size="small">Two</Button>
          <Button size="small">Three</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large">One</Button>
          <Button size="large">Two</Button>
          <Button size="large">Three</Button>
        </ButtonGroup>
      </Flex>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Button } from "@fluentui/react-components";
import ButtonGroup from "@components/molecules/ButtonGroup";
import { Flex } from "@components/layout";

const Example = () => {
  return (
    <Flex gap="L" direction="column">
      <ButtonGroup>
        <Button size="small">One</Button>
        <Button size="small">Two</Button>
        <Button size="small">Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="large">One</Button>
        <Button size="large">Two</Button>
        <Button size="large">Three</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Example;
        `,
      },
    },
  },
};

export const Shapes: Story = {
  render: () => {
    return (
      <Flex gap="L" direction="column">
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button shape="square">One</Button>
          <Button>Two</Button>
          <Button shape="square">Three</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button shape="circular">One</Button>
          <Button>Two</Button>
          <Button shape="circular">Three</Button>
        </ButtonGroup>
      </Flex>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Button } from "@fluentui/react-components";
import ButtonGroup from "@components/molecules/ButtonGroup";
import { Flex } from "@components/layout";

const Example = () => {
  return (
    <Flex gap="L" direction="column">
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button shape="square">One</Button>
        <Button>Two</Button>
        <Button shape="square">Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button shape="circular">One</Button>
        <Button>Two</Button>
        <Button shape="circular">Three</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Example;
        `,
      },
    },
  },
};
