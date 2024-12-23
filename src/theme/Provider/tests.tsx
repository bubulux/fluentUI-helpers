import { render, screen } from "@test-utils";
import "@testing-library/jest-dom";

import ThemeProvider from "@theme/Provider/func";

describe("ThemeProvider", () => {
  it("should render the provider node with correct className for useFuiProviderNode hook", () => {
    render(<ThemeProvider>Test</ThemeProvider>);
    const ProviderNodeByChildren = screen.getByText("Test");

    const ProviderNodeByClassName =
      document.getElementsByClassName("fui-FluentProvider");

    expect(ProviderNodeByChildren).toBeInTheDocument();
    // strict mode makes is so two providers are rendered
    expect(ProviderNodeByClassName).toHaveLength(2);
  });
});
