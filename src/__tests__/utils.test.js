import { isPalindrome } from "../utils"; // adjust path as needed

describe("isPalindrome", () => {
  it("returns true for a basic palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isPalindrome("Mom")).toBe(true);
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic input", () => {
    expect(() => isPalindrome("hello123")).toThrow();
    expect(() => isPalindrome("wow!")).toThrow();
    expect(() => isPalindrome("😊")).toThrow();
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow();
    expect(() => isPalindrome(null)).toThrow();
    expect(() => isPalindrome(undefined)).toThrow();
  });
});
