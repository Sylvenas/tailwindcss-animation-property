# tailwindcss animation plugin

[English](./README.md) | 简体中文

声明式编写 animation 属性的插件，提供了常用的 animation 属性，同时可以使用[配置](#Config mode)添加新的属性，或者可以采用[JIT](https://tailwindcss.com/blog/just-in-time-the-next-generation-of-tailwind-css)动态编写 animaton 属性。

[Check out DEMO]()

## 使用方法

### install

```sh
# Using npm
npm i tailwindcss-animation-property

# Using yarn
yarn add tailwindcss-animation-property
```

### 引入插件

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

### 在 HTML 元素中使用

```html
<div className="animation-duration-1s"></div>
```

## 默认 animation property

### animation-duration

`animation-duration-1s` 解析成 `animation-duration:1s`, 插件内置时间为 `1s`,`2s`,`3s`,`4s`,`5s`.

## 自定义 animation property

### JIT mode

- animation-duration
  - animation-duration-[100ms] -> `animation-duration: 100ms`
  - animation-duration-[10s] -> `animation-duration: 10s`

### Config mode

插件可以通过传递 animation property 参数的方式，传递自定义的属性值

```js
require("../dist/index.js")({
  animationDuration: ["500ms", "6s", "0.5s"],
  animationDelay: ["2000ms", "3s"],
  animationIterationCount: [10, 20],
});
```

## 动画名称

所有的动画名称均以 `magic` 开头，然后下划线之后是“真正的”动画名称(`magic-puffIn`, `magic-openDownLeft`...)，全部的动画名称列表如下：

```
.
├── magic
│   |── magic
│   |── twisterInDown
│   |── twisterInUp
│   └── swap
├── bling
│   |── puffIn
│   |── puffOut
│   |── vanishIn
│   └── vanishOut
├── staticEffects
│   |── openDownLeft
│   |── openDownLeftReturn
│   |── openDownRight
│   |── openDownRightReturn
│   |── openUpLeft
│   |── openUpLeftReturn
│   |── openUpRight
│   └── openUpRightReturn
├── staticEffectsOut
│   |── openDownLeftOut
│   |── openDownRightOut
│   |── openUpLeftOut
│   └── openUpRightOut
├── perspective
│   |── perspectiveDown
│   |── perspectiveDownReturn
│   |── perspectiveLeft
│   |── perspectiveLeftReturn
│   |── perspectiveRight
│   |── perspectiveRightReturn
│   |── perspectiveUp
│   └── perspectiveUpReturn
├── rotate
│   |── rotateDownIn
│   |── rotateDownOut
│   |── rotateLeftIn
│   |── rotateLeftOut
│   |── rotateRightIn
│   |── rotateRightOut
│   |── rotateUpIn
│   └── rotateUpOut
├── slide
│   |── slideDown
│   |── slideDownReturn
│   |── slideLeft
│   |── slideLeftReturn
│   |── slideRight
│   |── slideRightReturn
│   |── slideUp
│   └── slideUpReturn
├── math
│   |── foolishIn
│   |── foolishOut
│   |── holeIn
│   |── holeOut
│   |── swashIn
│   └── swashOut
├── tin
│   |── tinDownIn
│   |── tinDownOut
│   |── tinLeftIn
│   |── tinLeftOut
│   |── tinRightIn
│   |── tinRightOut
│   |── tinUpIn
│   └── tinUpOut
├── bomb
│   |── bombLeftOut
│   └── bombRightOut
├── boing
│   |── boingInUp
│   └── boingOutDown
├── space
│   |── spaceInDown
│   |── spaceInLeft
│   |── spaceInRight
│   |── spaceInUp
│   |── spaceOutDown
│   |── spaceOutLeft
│   |── spaceOutRight
│   └── spaceOutUp
```

### 开发与测试

- 📦 打包

```
yarn
yarn build
```

- 单元测试

```
npm run test
```

## TODO

- 添加线上 DEMO

## License

[MIT](./LICENSE)
