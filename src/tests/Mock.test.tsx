import { expect, test, vi } from "vitest";

test("test how look mock method", function testMock() {
  const mock = vi.fn((x: string) => x);

  const testVariable = mock("test");

  expect(testVariable).toBe("test");
});
