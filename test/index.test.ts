import {
  expandArray,
  distinctionMsAndS,
  range,
  unique,
} from "../src/utils/utils";

describe("utils", () => {
  test("expandArray without inKey and transform", () => {
    expect(expandArray([1, 2, 3], "ms")).toMatchObject({
      "1": "1ms",
      "2": "2ms",
      "3": "3ms",
    });
  });

  test("expandArray with inKey and no transform", () => {
    expect(expandArray([1, 2, 3], "ms", true)).toMatchObject({
      "1ms": "1ms",
      "2ms": "2ms",
      "3ms": "3ms",
    });
  });

  test("expandArray with inKey and transform", () => {
    expect(expandArray([1, 2, 3], "ms", true, (x: any) => x * 2)).toMatchObject(
      {
        "1ms": "2ms",
        "2ms": "4ms",
        "3ms": "6ms",
      }
    );
  });

  test("distinctionMsAndS", () => {
    expect(distinctionMsAndS([])).toMatchObject([[], []]);
    expect(distinctionMsAndS(["1s"])).toMatchObject([[1], []]);
    expect(distinctionMsAndS(["2ms"])).toMatchObject([[], [2]]);
    expect(distinctionMsAndS(["1s", "2ms"])).toMatchObject([[1], [2]]);
  });

  test("range", () => {
    expect(range(1, 2)).toMatchObject([1, 2]);
    expect(range(3, 5)).toMatchObject([3, 4, 5]);
    expect(range(10, 10)).toMatchObject([10]);
  });

  test("unique", () => {
    expect(unique([], [])).toMatchObject([]);
    expect(unique([1], [])).toMatchObject([1]);
    expect(unique([], [2])).toMatchObject([2]);
    expect(unique([1], [2])).toMatchObject([1, 2]);
    expect(unique([1, 2], [1, 2])).toMatchObject([1, 2]);
    expect(unique([2, 4], [3, 5])).toMatchObject([2, 4, 3, 5]);
  });
});
