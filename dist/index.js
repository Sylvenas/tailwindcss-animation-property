'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function createPlugin(plugin, config) {
  return {
    handler: plugin,
    config,
  }
}

createPlugin.withOptions = function (pluginFunction, configFunction = () => ({})) {
  const optionsFunction = function (options) {
    return {
      __options: options,
      handler: pluginFunction(options),
      config: configFunction(options),
    }
  };

  optionsFunction.__isOptionsFunction = true;

  // Expose plugin dependencies so that `object-hash` returns a different
  // value if anything here changes, to ensure a rebuild is triggered.
  optionsFunction.__pluginFunction = pluginFunction;
  optionsFunction.__configFunction = configFunction;

  return optionsFunction
};

var expandArray = function (arr, append, inKey, transform) {
    if (append === void 0) { append = ""; }
    if (inKey === void 0) { inKey = false; }
    if (transform === void 0) { transform = function (v) { return v; }; }
    return arr.reduce(function (a, v) {
        var _a;
        return (__assign(__assign({}, a), (_a = {}, _a["" + v + (inKey ? append : "")] = "" + transform(v) + append, _a)));
    }, {});
};
var distinctionMsAndS = function (list) {
    var sList = [];
    var msList = [];
    list.forEach(function (item) {
        if (item.endsWith("ms")) {
            msList.push(+item.replace("ms", ""));
            return;
        }
        if (item.endsWith("s")) {
            sList.push(+item.replace("s", ""));
        }
    });
    return [sList, msList];
};
var range = function (start, end) {
    return new Array(end - start + 1).fill(start).map(function (start, index) { return start + index; });
};
var unique = function (list1, list2) {
    return Array.from(new Set(__spreadArrays(list1, list2)));
};

// default animation duration
// {1,2,3,4,5} (unit "s")
var duration = range(1, 5);
// default animation delay
// {0,1,2,3,4,5} (unit "s")
var delay = range(0, 5);
// default animation iteration count
// {1,2,3,4,5}
var iteration = range(1, 5);
// default animation time function
var timeFun = {
    linear: "0,0,1,1",
    "in": ".42,0,1,1",
    out: "0,0,.58,1",
    "in-out": ".42,0,.58,1",
};
// default animation fill mode
var fill = ["none", "forwards", "backwards", "both"];
// default animation direction
var direction = [
    "normal",
    "reverse",
    "alternate",
    "alternate-reverse",
];
// default animation playState;
var playState = ["paused", "running"];
// default animation steps;
var steps = range(1, 5);

function AnimationPropertyPlugin(_a) {
    var _b = _a.animationDuration, animationDuration = _b === void 0 ? [] : _b, _c = _a.animationDelay, animationDelay = _c === void 0 ? [] : _c, _d = _a.animationIterationCount, animationIterationCount = _d === void 0 ? [] : _d, _e = _a.animationFillMode, animationFillMode = _e === void 0 ? [] : _e, _f = _a.animationDirection, animationDirection = _f === void 0 ? [] : _f, _g = _a.animationTimingFunction, animationTimingFunction = _g === void 0 ? {} : _g, _h = _a.animationPlayState, animationPlayState = _h === void 0 ? [] : _h, _j = _a.animationStepsStart, animationStepsStart = _j === void 0 ? [] : _j, _k = _a.animationStepsEnd, animationStepsEnd = _k === void 0 ? [] : _k, _l = _a.animationStepsBoth, animationStepsBoth = _l === void 0 ? [] : _l, _m = _a.animationStepsNone, animationStepsNone = _m === void 0 ? [] : _m;
    return createPlugin(function (_a) {
        var matchUtilities = _a.matchUtilities;
        var _b = distinctionMsAndS(animationDuration), durationS = _b[0], durationMS = _b[1];
        var _c = distinctionMsAndS(animationDelay), delayS = _c[0], delayMS = _c[1];
        matchUtilities({
            "animation-duration": function (value) { return ({ animationDuration: value }); },
        }, {
            values: __assign(__assign({}, expandArray(unique(duration, durationS), "s", true)), expandArray(durationMS, "ms", true)),
        });
        matchUtilities({ "animation-delay": function (value) { return ({ animationDelay: value }); } }, {
            values: __assign(__assign({}, expandArray(unique(delay, delayS), "s", true)), expandArray(delayMS, "ms", true)),
        });
        matchUtilities({
            "animation-iteration": function (value) { return ({ animationIterationCount: value }); },
        }, { values: expandArray(__spreadArrays(iteration, animationIterationCount)) });
        matchUtilities({ "animation-fill": function (value) { return ({ animationFillMode: value }); } }, { values: expandArray(unique(animationFillMode, fill)) });
        matchUtilities({ "animation-direction": function (value) { return ({ animationDirection: value }); } }, { values: expandArray(unique(animationDirection, direction)) });
        matchUtilities({ "animation-play": function (value) { return ({ animationPlayState: value }); } }, { values: expandArray(unique(animationPlayState, playState)) });
        matchUtilities({
            "animation-timing": function (value) { return ({
                animationTimingFunction: "cubic-bezier(" + value + ")",
            }); },
        }, { values: __assign(__assign({}, timeFun), animationTimingFunction) });
        matchUtilities({
            "animation-steps-start": function (value) { return ({
                animationTimingFunction: "steps(" + value + ",jump-start)",
            }); },
        }, { values: expandArray(unique(animationStepsStart, steps)) });
        matchUtilities({
            "animation-steps-end": function (value) { return ({
                animationTimingFunction: "steps(" + value + ",jump-end)",
            }); },
        }, { values: expandArray(unique(animationStepsEnd, steps)) });
        matchUtilities({
            "animation-steps-both": function (value) { return ({
                animationTimingFunction: "steps(" + value + ",jump-both)",
            }); },
        }, { values: expandArray(unique(animationStepsBoth, steps)) });
        matchUtilities({
            "animation-steps-none": function (value) { return ({
                animationTimingFunction: "steps(" + value + ",jump-none)",
            }); },
        }, { values: expandArray(unique(animationStepsNone, steps)) });
    });
}

module.exports = AnimationPropertyPlugin;
//# sourceMappingURL=index.js.map
