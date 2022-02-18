export const expandArray = <T extends number | string>(
  arr: Array<T>,
  append = "",
  inKey = false,
  transform = (v: T): T => v
): Record<string, string> =>
  arr.reduce(
    (a, v) => ({
      ...a,
      [`${v}${inKey ? append : ""}`]: `${transform(v)}${append}`,
    }),
    {}
  );

export const distinctionMsAndS = (list: Array<string>) => {
  const sList: Array<number> = [];
  const msList: Array<number> = [];

  list.forEach((item) => {
    if (item.endsWith("ms")) {
      msList.push(+item.replace("ms", ""));
      return;
    }

    if ((item as string).endsWith("s")) {
      sList.push(+item.replace("s", ""));
    }
  });

  return [sList, msList];
};

export const range = (start: number, end: number): Array<number> =>
  new Array(end - start + 1).fill(start).map((start, index) => start + index);

export const unique = (list1: Array<any>, list2: Array<any>) =>
  Array.from(new Set([...list1, ...list2]));
