import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { CalendarMonthRegular } from "@fluentui/react-icons";
import ButtonGroup from "@components/molecules/ButtonGroup";
import { Button } from "@fluentui/react-components";

const meta: Meta = {
  title: "Components/Molecules/ButtonGroup",
  component: ButtonGroup,
  args: {},
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const ImperativeConfig: Story = {
  render: () => {
    const [activeOption, setActiveOption] = useState(1);

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
        >
          Button 3
        </Button>
        <Button
          icon={<CalendarMonthRegular />}
          appearance={activeOption === 4 ? "primary" : "secondary"}
          onClick={() => {
            setActiveOption(4);
          }}
        />
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
};
