import { render, screen } from "@test-utils";
import "@testing-library/jest-dom";

import { Button } from "@fluentui/react-components";
import ButtonGroup from "@components/molecules/ButtonGroup";

describe("ButtonGroup", () => {
  it("should render with defaults", () => {
    render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>,
    );
    const ButtonGroupElement = screen.getByRole("group");
    expect(ButtonGroupElement).toBeInTheDocument();
    expect(ButtonGroupElement).toHaveAttribute("aria-label", "Button group");
  });
  it("should render with custom aria label", () => {
    render(
      <ButtonGroup ariaLabel="Custom aria label">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>,
    );
    const ButtonGroupElement = screen.getByRole("group");
    expect(ButtonGroupElement).toBeInTheDocument();
    expect(ButtonGroupElement).toHaveAttribute(
      "aria-label",
      "Custom aria label",
    );
  });
  it("should render the given buttons with appropriate styles", () => {
    render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>,
    );
    const ButtonOne = screen.getByText("Button 1");
    expect(ButtonOne).toHaveStyle("border-radius: var(--borderRadiusMedium)");
    expect(ButtonOne).toHaveStyle("border-top-right-radius: 0");
    expect(ButtonOne).toHaveStyle("border-bottom-right-radius: 0");

    const ButtonTwo = screen.getByText("Button 2");
    expect(ButtonTwo).toHaveStyle("border-radius: 0");
    expect(ButtonTwo).toHaveStyle("border-left: none");

    const ButtonThree = screen.getByText("Button 3");
    expect(ButtonThree).toHaveStyle("border-radius: var(--borderRadiusMedium)");
    expect(ButtonThree).toHaveStyle("border-top-left-radius: 0");
    expect(ButtonThree).toHaveStyle("border-bottom-left-radius: 0");
  });
});
