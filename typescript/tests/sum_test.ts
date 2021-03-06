import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { iterate, recursive, std } from "../src/sum.ts";

const tests: { list: number[]; want: number }[] = [
  { list: [1], want: 1 },
  { list: [1, 2], want: 3 },
  { list: [1, 2, 3, 4, 5], want: 15 },
  { list: [], want: 0 },
  { list: [-1, -1], want: -2 },
  { list: [-1, -1, 0, 0, 0], want: -2 },
  { list: [0, 0, 0], want: 0 },
  { list: [-1, 0, 1], want: 0 },
  { list: [1, 0, -1], want: 0 },
  { list: [43, 67, 65, 42, 74, 95, 100, 21], want: 507 },
  { list: [26, 26, 94, 55, 71, 57, 7, 72], want: 408 },
  { list: [78, 11, 48, 91, 13, 26, 74, 99], want: 440 },
  { list: [31, 96, 10, 55, 41, 13, 92, 5], want: 343 },
  { list: [14, 39, 18, 39, 3, 29, 8, 29], want: 179 },
  { list: [-95, -46, -65, -63, 10], want: -259 },
];

Deno.test("iterate sum items of an array", () => {
  tests.forEach((tc) => {
    assertEquals(iterate(tc.list), tc.want);
  });
});

Deno.test("recursive sum items of an array", () => {
  tests.forEach((tc) => {
    assertEquals(recursive(tc.list), tc.want);
  });
});

Deno.test("std sum items of an array", () => {
  tests.forEach((tc) => {
    assertEquals(std(tc.list), tc.want);
  });
});
