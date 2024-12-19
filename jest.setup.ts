import { jest, afterEach, beforeEach, expect } from "@jest/globals";

// Global beforeEach and afterEach to check for console warnings and errors
beforeEach(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  // Ensure no console warnings or errors were logged during tests
  expect(console.warn).not.toHaveBeenCalled();
  expect(console.error).not.toHaveBeenCalled();

  // Restore the original console methods
  //@ts-ignore
  console.warn.mockRestore();
  //@ts-ignore
  console.error.mockRestore();
});
