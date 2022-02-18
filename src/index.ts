import createPlugin from "tailwindcss/src/public/create-plugin";

import { distinctionMsAndS, expandArray, unique } from "./utils/utils";
import {
  duration,
  delay,
  iteration,
  timeFun,
  fill,
  direction,
  playState,
  steps,
} from "./utils/config";

function AnimationPropertyPlugin({
  animationDuration = [],
  animationDelay = [],
  animationIterationCount = [],
  animationFillMode = [],
  animationDirection = [],
  animationTimingFunction = {},
  animationPlayState = [],
  animationStepsStart = [],
  animationStepsEnd = [],
  animationStepsBoth = [],
  animationStepsNone = [],
}) {
  return createPlugin(function ({ matchUtilities }) {
    const [durationS, durationMS] = distinctionMsAndS(animationDuration);
    const [delayS, delayMS] = distinctionMsAndS(animationDelay);

    matchUtilities(
      {
        "animation-duration": (value) => ({ animationDuration: value }),
      },
      {
        values: {
          ...expandArray(unique(duration, durationS), "s", true),
          ...expandArray(durationMS, "ms", true),
        },
      }
    );

    matchUtilities(
      { "animation-delay": (value) => ({ animationDelay: value }) },
      {
        values: {
          ...expandArray(unique(delay, delayS), "s", true),
          ...expandArray(delayMS, "ms", true),
        },
      }
    );

    matchUtilities(
      {
        "animation-iteration": (value) => ({ animationIterationCount: value }),
      },
      { values: expandArray([...iteration, ...animationIterationCount]) }
    );

    matchUtilities(
      { "animation-fill": (value) => ({ animationFillMode: value }) },
      { values: expandArray(unique(animationFillMode, fill)) }
    );

    matchUtilities(
      { "animation-direction": (value) => ({ animationDirection: value }) },
      { values: expandArray(unique(animationDirection, direction)) }
    );

    matchUtilities(
      { "animation-play": (value) => ({ animationPlayState: value }) },
      { values: expandArray(unique(animationPlayState, playState)) }
    );

    matchUtilities(
      {
        "animation-timing": (value) => ({
          animationTimingFunction: `cubic-bezier(${value})`,
        }),
      },
      { values: { ...timeFun, ...animationTimingFunction } }
    );

    matchUtilities(
      {
        "animation-steps-start": (value) => ({
          animationTimingFunction: `steps(${value},jump-start)`,
        }),
      },
      { values: expandArray(unique(animationStepsStart, steps)) }
    );

    matchUtilities(
      {
        "animation-steps-end": (value) => ({
          animationTimingFunction: `steps(${value},jump-end)`,
        }),
      },
      { values: expandArray(unique(animationStepsEnd, steps)) }
    );

    matchUtilities(
      {
        "animation-steps-both": (value) => ({
          animationTimingFunction: `steps(${value},jump-both)`,
        }),
      },
      { values: expandArray(unique(animationStepsBoth, steps)) }
    );

    matchUtilities(
      {
        "animation-steps-none": (value) => ({
          animationTimingFunction: `steps(${value},jump-none)`,
        }),
      },
      { values: expandArray(unique(animationStepsNone, steps)) }
    );
  });
}

export default AnimationPropertyPlugin;
