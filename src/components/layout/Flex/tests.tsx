import { render, screen } from "@test-utils";
import "@testing-library/jest-dom";

import { makeStyles } from "@fluentui/react-components";
import { Flex } from "@components";

describe("Flex", () => {
  it("should render without required props default config", () => {
    render(<Flex>FlexChild</Flex>);
    const FlexElement = screen.getByText("FlexChild");

    expect(FlexElement).toBeInTheDocument();
    expect(FlexElement).toHaveTextContent("FlexChild");
    expect(FlexElement).toHaveStyle("display: flex");
    expect(FlexElement).toHaveStyle("flex-direction: row");
    expect(FlexElement).toHaveStyle("justify-content: flex-start");
    expect(FlexElement).toHaveStyle("align-items: flex-start");
    expect(FlexElement).toHaveStyle("flex-wrap: nowrap");
    expect(FlexElement).toHaveStyle("gap: 0rem");
    expect(FlexElement).toHaveStyle("margin: 0rem");
    expect(FlexElement).toHaveStyle("padding: 0rem");
    expect(FlexElement).toHaveStyle("height: auto");
    expect(FlexElement).toHaveStyle("width: auto");
    expect(FlexElement).toHaveStyle("position: static");
  });
  describe("when props are passed", () => {
    describe("for direction", () => {
      it("should render with direction column", () => {
        render(<Flex direction="column">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("flex-direction: column");
      });
      it("should render with direction row", () => {
        render(<Flex direction="row">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("flex-direction: row");
      });
    });
    describe("for justifyContent", () => {
      it("should render with justifyContent center", () => {
        render(<Flex justifyContent="center">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: center");
      });
      it("should render with justifyContent end", () => {
        render(<Flex justifyContent="end">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: flex-end");
      });
      it("should render with justifyContent spaceBetween", () => {
        render(<Flex justifyContent="spaceBetween">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: space-between");
      });
      it("should render with justifyContent spaceAround", () => {
        render(<Flex justifyContent="spaceAround">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: space-around");
      });
      it("should render with justifyContent spaceEvenly", () => {
        render(<Flex justifyContent="spaceEvenly">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: space-evenly");
      });
      it("should render with justifyContent stretch", () => {
        render(<Flex justifyContent="stretch">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("justify-content: stretch");
      });
    });
    describe("for alignItems", () => {
      it("should render with alignItems center", () => {
        render(<Flex alignItems="center">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: center");
      });
      it("should render with alignItems end", () => {
        render(<Flex alignItems="end">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: flex-end");
      });
      it("should render with alignItems spaceBetween", () => {
        render(<Flex alignItems="spaceBetween">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: space-between");
      });
      it("should render with alignItems spaceAround", () => {
        render(<Flex alignItems="spaceAround">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: space-around");
      });
      it("should render with alignItems spaceEvenly", () => {
        render(<Flex alignItems="spaceEvenly">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: space-evenly");
      });
      it("should render with alignItems stretch", () => {
        render(<Flex alignItems="stretch">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("align-items: stretch");
      });
    });
    describe("for wrap", () => {
      it("should render with wrap wrap", () => {
        render(<Flex wrap="wrap">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("flex-wrap: wrap");
      });
      it("should render with wrap nowrap", () => {
        render(<Flex wrap="nowrap">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("flex-wrap: nowrap");
      });
    });
    describe("for gap", () => {
      it("should render with gap None", () => {
        render(<Flex gap="None">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 0rem");
      });
      it("should render with gap XXS", () => {
        render(<Flex gap="XXS">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 0.125rem");
      });
      it("should render with gap XS", () => {
        render(<Flex gap="XS">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 0.25rem");
      });
      it("should render with gap SNudge", () => {
        render(<Flex gap="SNudge">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 0.375rem");
      });
      it("should render with gap S", () => {
        render(<Flex gap="S">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 0.5rem");
      });
      it("should render with gap MNudge", () => {
        render(<Flex gap="MNudge">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 0.625rem");
      });
      it("should render with gap M", () => {
        render(<Flex gap="M">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 0.75rem");
      });
      it("should render with gap L", () => {
        render(<Flex gap="L">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 1rem");
      });
      it("should render with gap XL", () => {
        render(<Flex gap="XL">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 1.25rem");
      });
      it("should render with gap XXL", () => {
        render(<Flex gap="XXL">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 1.5rem");
      });
      it("should render with gap XXXL", () => {
        render(<Flex gap="XXXL">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("gap: 2rem");
      });
    });
    describe("for margin", () => {
      it("should render with margin None", () => {
        render(<Flex margin={["None"]}>FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("margin: 0rem");
      });
      it("should render with margin XS, L", () => {
        render(<Flex margin={["XS", "L"]}>FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("margin: 0.25rem 1rem 0.25rem 1rem");
      });
      it("should render with margin XS, L, XL", () => {
        render(<Flex margin={["XS", "L", "XL"]}>FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("margin: 0.25rem 1rem 1.25rem 1rem");
      });
      it("should render with margin XS, L, XL, XXL", () => {
        render(<Flex margin={["XS", "L", "XL", "XXL"]}>FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("margin: 0.25rem 1rem 1.25rem 1.5rem");
      });
    });
    describe("for padding", () => {
      it("should render with padding None", () => {
        render(<Flex padding={["None"]}>FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("padding: 0rem");
      });
      it("should render with padding XS, L", () => {
        render(<Flex padding={["XS", "L"]}>FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("padding: 0.25rem 1rem 0.25rem 1rem");
      });
      it("should render with padding XS, L, XL", () => {
        render(<Flex padding={["XS", "L", "XL"]}>FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("padding: 0.25rem 1rem 1.25rem 1rem");
      });
      it("should render with padding XS, L, XL, XXL", () => {
        render(<Flex padding={["XS", "L", "XL", "XXL"]}>FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("padding: 0.25rem 1rem 1.25rem 1.5rem");
      });
    });
    describe("for shHeight", () => {
      it("should render with height 100%", () => {
        render(<Flex shHeight="100%">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("height: 100%");
      });
      it("should render with height 25%", () => {
        render(<Flex shHeight="25%">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("height: 25%");
      });
      it("should render with height 50%", () => {
        render(<Flex shHeight="50%">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("height: 50%");
      });
      it("should render with height 75%", () => {
        render(<Flex shHeight="75%">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("height: 75%");
      });
      it("should render with height auto", () => {
        render(<Flex shHeight="auto">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("height: auto");
      });
    });
    describe("for shWidth", () => {
      it("should render with width 100%", () => {
        render(<Flex shWidth="100%">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("width: 100%");
      });
      it("should render with width 25%", () => {
        render(<Flex shWidth="25%">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("width: 25%");
      });
      it("should render with width 50%", () => {
        render(<Flex shWidth="50%">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("width: 50%");
      });
      it("should render with width 75%", () => {
        render(<Flex shWidth="75%">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("width: 75%");
      });
      it("should render with width auto", () => {
        render(<Flex shWidth="auto">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("width: auto");
      });
    });
    describe("for className", () => {
      it("should render with the properties applied from the class and override any other props styles", () => {
        const useClasses = makeStyles({
          testClass: {
            height: "100px",
            border: "1px solid black",
          },
        });

        function Wrapper() {
          return <Flex className={useClasses().testClass}>FlexChild</Flex>;
        }

        render(<Wrapper />);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("height: 100px");
        expect(FlexElement).toHaveStyle("border: 1px solid black");
      });
    });
    describe("for testId", () => {
      it("should render with data-testid", () => {
        render(<Flex testId="testId">FlexChild</Flex>);
        const FlexElement = screen.getByTestId("testId");
        expect(FlexElement).toBeInTheDocument();
      });
    });
    describe("for aria-* attributes (only checks some, cannot be exhaustive)", () => {
      // not exhaustive, but at least one example of each type
      const ariaAttributes = [
        { name: "aria-label", value: "test-label" },
        { name: "aria-labelledby", value: "test-labelledby" },
        { name: "aria-describedby", value: "test-describedby" },
        { name: "aria-hidden", value: true },
        { name: "aria-placeholder", value: "test-placeholder" },
        { name: "aria-expanded", value: "true" },
        { name: "aria-controls", value: "test-controls" },
        { name: "aria-pressed", value: "true" },
        { name: "aria-current", value: "page" },
        { name: "aria-invalid", value: "true" },
        { name: "aria-busy", value: "true" },
        { name: "aria-readonly", value: "true" },
        { name: "aria-required", value: "true" },
        { name: "aria-modal", value: "true" },
        { name: "aria-orientation", value: "horizontal" },
        { name: "aria-valuemin", value: "0" },
        { name: "aria-valuemax", value: "100" },
        { name: "aria-valuenow", value: "50" },
        { name: "aria-valuetext", value: "50%" },
      ];

      ariaAttributes.forEach(({ name, value }) => {
        it(`should render with ${name}`, () => {
          const props = { [name]: value };
          // eslint-disable-next-line react/jsx-props-no-spreading
          render(<Flex {...props}>FlexChild</Flex>);
          const FlexElement = screen.getByText("FlexChild");
          if (value === true) {
            // For boolean attributes like aria-hidden
            expect(FlexElement).toHaveAttribute(name);
          } else {
            expect(FlexElement).toHaveAttribute(name, value.toString());
          }
        });
      });
    });
    describe("for position", () => {
      it("should render with position -moz-initial", () => {
        render(<Flex position="-moz-initial">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: -moz-initial");
      });
      it("should render with position -webkit-sticky", () => {
        render(<Flex position="-webkit-sticky">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: -webkit-sticky");
      });
      it("should render with position absolute", () => {
        render(<Flex position="absolute">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: absolute");
      });
      it("should render with position fixed", () => {
        render(<Flex position="fixed">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: fixed");
      });
      it("should render with position inherit", () => {
        render(<Flex position="inherit">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: inherit");
      });
      it("should render with position initial", () => {
        render(<Flex position="initial">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: initial");
      });
      it("should render with position relative", () => {
        render(<Flex position="relative">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: relative");
      });
      it("should render with position revert", () => {
        render(<Flex position="revert">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: revert");
      });
      it("should render with position revert-layer", () => {
        render(<Flex position="revert-layer">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: revert-layer");
      });
      it("should render with position static", () => {
        render(<Flex position="static">FlexChild</Flex>);
        const FlexElement = screen.getByText("FlexChild");
        expect(FlexElement).toHaveStyle("position: static");
      });
    });
  });
});
