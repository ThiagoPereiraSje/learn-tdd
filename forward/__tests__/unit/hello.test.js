import { Hello } from "../../src/hello";

describe("Hello function", () => {
  test('When say hello should be return "Hello World!"', () => {
    expect(Hello()).toBe("Hello World!");
  });
});
