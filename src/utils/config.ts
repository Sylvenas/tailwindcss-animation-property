import { expandArray, range } from "./utils";

// default animation duration
// {1,2,3,4,5} (unit "s")
export const duration = range(1, 5);

// default animation delay
// {0,1,2,3,4,5} (unit "s")
export const delay = range(0, 5);

// default animation iteration count
// {1,2,3,4,5}
export const iteration = range(1, 5);

// default animation time function
export const timeFun = {
  linear: "0,0,1,1",
  in: ".42,0,1,1",
  out: "0,0,.58,1",
  "in-out": ".42,0,.58,1",
};

// default animation fill mode
export const fill = ["none", "forwards", "backwards", "both"];

// default animation direction
export const direction = [
  "normal",
  "reverse",
  "alternate",
  "alternate-reverse",
];

// default animation playState;
export const playState = ["paused", "running"];

// default animation steps;
export const steps = range(1, 5);
