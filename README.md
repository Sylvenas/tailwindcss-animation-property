# tailwindcss-animation-property

A plugin that provides utilities for animation property. Not only does the plugin provide the usual animation properties, these also support dynamic writing using [JIT mode](https://v2.tailwindcss.com/docs/just-in-time-mode), even you can add new properties by using [configuration](#configuration).

The example can be previewed on CodeSandbox: [Check out DEMO](https://codesandbox.io/s/nice-bell-czxzix)

- [animation-duration](#animation-duration)
- [animation-delay](#animation-delay)
- [animation-iteration-count](#animation-iteration-count)
- [animation-fill-mode](#animation-fill-mode)
- [animation-direction](#animation-direction)
- [animation-timing-function](#animation-timing-function)
- [animation-play-state](#animation-play-state)

> If you don't want to write all the keyframes yourself. Try [tailwindcss-magic](https://github.com/Sylvenas/tailwindcss-magic).

## Usage

### Installation

```sh
# npm
npm i tailwindcss-animation-property

# yarn
yarn add tailwindcss-animation-property
```

### Import plugin

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    // ...
    require("tailwindcss-animation-property")(),
  ],
};
```

### Used in HTML element class

```html
<div className="animation-duration-3s"></div>
```

### Used with @apply

```css
@layer components {
  .animation-magic-repert-2 {
    @apply magic-magic animate-iteration-2;
  }
}
```

```html
<div className="animation-magic-repert-2"></div>
```

## Default & Customized animation property

### animation-duration

Use the `animation-duration-{number}ms` or `animation-duration-{number}s` utilities to sets the length of time that an animation takes to complete one cycle.

defalut:

- animation-duration-1s -> `animation-duration: 1s`
- ...
- animation-duration-5s -> `animation-duration: 5s`

JIT mode Example:

- animation-duration-[100ms] -> `animation-duration: 100ms`
- animation-duration-[10s] -> `animation-duration: 10s`

### animation-delay

Use the `animation-delay-{number}ms` or `animation-delay-{number}s` utilities to sets the amount of time to wait from applying the animation to an element before beginning to perform the animation.

defalut:

- animation-delay-0s -> `animation-delay: 0s`
- ...
- animation-delay-5s -> `animation-delay: 5s`

JIT mode Example:

- animation-delay-[100ms] -> `animation-delay: 100ms`
- animation-delay-[10s] -> `animation-delay: 10s`

### animation-iteration-count

Use the `animation-iteration-{number}` utilities to sets the number of times an animation sequence should be played before stopping.

defalut:

- animation-iteration-1 -> `animation-iteration-count: 1`
- ...
- animation-iteration-5 -> `animation-iteration-count: 5`

JIT mode Example:

- animation-iteration-[6] -> `animation-iteration-count: 6`
- animation-iteration-[10] -> `animation-iteration-count: 10`

### animation-fill-mode

Use the `animation-fill-{mode}` utilities to sets how a CSS animation applies styles to its target before and after its execution.

defalut:

- animation-fill-forwards -> `animation-fill-mode: forwards`
- animation-fill-backwards -> `animation-fill-mode: backwards`
- animation-fill-both -> `animation-fill-mode: both`
- animation-fill-none -> `animation-fill-mode: none`

JIT mode Example:

- animation-fill-[forwards] -> `animation-fill-mode: forwards`

### animation-direction

Use the `animation-direction-{dir}` utilities sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

defalut:

- animation-direction-normal -> `animation-direction: normal`
- animation-direction-reverse -> `animation-direction: reverse`
- animation-direction-alternate -> `animation-direction: alternate`
- animation-direction-alternate-reverse -> `animation-direction: alternate-reverse`

### animation-timing-function

Use the `animation-timing-{function}` utilities to sets how an animation progresses through the duration of each cycle.

defalut:

- animation-timing-linear -> `animation-timing-function: linear`
- animation-timing-in -> `animation-timing-function: in`
- animation-timing-out -> `animation-timing-function: out`
- animation-timing-in-out -> `animation-timing-function: in-out`
- animate-steps-start-{1...5} -> `animation-timing-function: steps(1...5, jump-start)`
- animate-steps-end-{1...5} -> `animation-timing-function: steps(1...5, jump-end)`
- animate-steps-both-{1...5} -> `animation-timing-function: steps(1...5, jump-both)`
- animate-steps-none-{1...5} -> `animation-timing-function: steps(1...5, jump-none)`

JIT mode Example:

- animation-timing-[linear] -> `animation-timing-function: linear`
- animation-timing-[p0,p1,p2,p3] -> `animation-timing-function: cubic-bezier(p0, p1, p2, p4);`
- animate-steps-start-[n] -> `animation-timing-function: steps(n, jump-start)`
- animate-steps-end-[n] -> `animation-timing-function: steps(n, jump-end)`
- animate-steps-both-[n] -> `animation-timing-function: steps(n, jump-both)`
- animate-steps-none-[n] -> `animation-timing-function: steps(n, jump-none)`

### animation-play-state

Use the `animation-play-{state}` utilities to sets whether an animation is running or paused.

defalut:

- animation-play-paused -> `animation-play-state: paused`
- animation-play-running -> `animation-play-state: running`

## Configuration

You can configure custom animation properties by passing parameters to the plugin.

```js
require("tailwindcss-animation-property")({
  animationDuration: ["500ms", "6s", "0.5s"]
  // `animation-duration-500ms`, `animation-duration-6s`, `animation-duration-0.5s`

  animationDelay: ["2000ms", "3s"],
  // `animation-delay-2000ms`, `animation-delay-3s`

  animationIterationCount: [6, 7],
  // `animation-iteration-6`, `animation-iteration-7`

  animationFillMode: ['xxx'],
  // `animation-fill-xxx`

  animationDirection: ['xxx'],
  // `animation-direction-xxx`

  animationTimingFunction: {
    "in-out-cubic": ".65,0,.35,1",
  },
  // `animation-timing-in-out-cubic`

  animationPlayState: ['xxx'],
  // `animation-direction-xxx`

  animationStepsStart: [6,8],
  // `animate-steps-start-6`,`animate-steps-start-8`

  animationStepsEnd: [],  // same as animationStepsStart
  animationStepsBoth: [], // ...
  animationStepsNone: [], // ...
});
```

## Q & A

- How do I remember so many animation names?
  `tailwindcss-animation-property` and [Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) work well together, so take it easy!

## Develop & test

- 📦 package

```
yarn
yarn build
```

- unit test

```
npm run test
```

## TODO

- add the online DEMO

## License

[MIT](./LICENSE)
