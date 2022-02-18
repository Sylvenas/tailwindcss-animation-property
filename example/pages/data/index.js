export const root = {
  placeholder: {
    backgroundColor: "#eee",
    width: "100px",
    height: "100px",
    left: "12%",
    top: "300px",
    position: "fixed",
    borderRadius: "3px",
    fontFamily:
      '"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif',
  },
  magicAni: {
    backgroundColor: "#FF7374",
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: "3px",
    textAlign: "center",
    color: "#fff",
  },
  cssOptions: {
    width: "50%",
    left: "35%",
    position: "absolute",
    fontFamily:
      '"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif',
    color: "#52616A",
    // userSelect: 'none'
  },
  title: {
    position: "relative",
    left: "10%",
  },
  chunk: {
    padding: "1em 0 0 0",
    left: "10%",
    clear: "both",
    overflow: "hidden",
  },
  h2: {
    // marginTop: '110px',
    marginBottom: "5px",
    fontWeight: 400,
  },
  opts: {
    position: "fixed",
    width: 300,
    left: 50,
    top: 20,
  },
};

export const styles = {
  btnDefault: {
    fontSize: 16,
    display: "block",
    float: "left",
    margin: "10px 10px 10px 0",
    padding: "12px 18px",
    background: "#fff",
    border: "2px solid #C9D6DE",
    color: "#52616A",
    borderRadius: "4px",
    cursor: "pointer",
  },
  btnHover: {},
};

export const PVaule = [
  ["magic", "twisterInDown", "twisterInUp", "swap"],
  ["puffIn", "puffOut", "vanishIn", "vanishOut"],
  [
    "openDownLeft",
    "openDownLeftReturn",
    "openDownRight",
    "openDownRightReturn",
    "openUpLeft",
    "openUpLeftReturn",
    "openUpRight",
    "openUpRightReturn",
  ],
  ["openDownLeftOut", "openDownRightOut", "openUpLeftOut", "openUpRightOut"],
  [
    "perspectiveDown",
    "perspectiveDownReturn",
    "perspectiveLeft",
    "perspectiveLeftReturn",
    "perspectiveRight",
    "perspectiveRightReturn",
    "perspectiveUp",
    "perspectiveUpReturn",
  ],
  [
    "rotateDownIn",
    "rotateDownOut",
    "rotateLeftIn",
    "rotateLeftOut",
    "rotateRightIn",
    "rotateRightOut",
    "rotateUpIn",
    "rotateUpOut",
  ],
  [
    "slideDown",
    "slideDownReturn",
    "slideLeft",
    "slideLeftReturn",
    "slideRight",
    "slideRightReturn",
    "slideUp",
    "slideUpReturn",
  ],
  ["foolishIn", "foolishOut", "holeIn", "holeOut", "swashIn", "swashOut"],
  [
    "tinDownIn",
    "tinDownOut",
    "tinLeftIn",
    "tinLeftOut",
    "tinRightIn",
    "tinRightOut",
    "tinUpIn",
    "tinUpOut",
  ],
  ["bombLeftOut", "bombRightOut"],
  ["boingInUp", "boingOutDown"],
  [
    "spaceInDown",
    "spaceInLeft",
    "spaceInRight",
    "spaceInUp",
    "spaceOutDown",
    "spaceOutLeft",
    "spaceOutRight",
    "spaceOutUp",
  ],
];

export const durationOpts = [
  { label: "animation-duration-1s", value: "animation-duration-1s" },
  { label: "animation-duration-2s", value: "animation-duration-2s" },
  { label: "animation-duration-3s", value: "animation-duration-3s" },
  { label: "animation-duration-4s", value: "animation-duration-4s" },
  { label: "animation-duration-5s", value: "animation-duration-5s" },
];

export const delayOpts = [
  { label: "animation-delay-1s", value: "animation-delay-1s" },
  { label: "animation-delay-2s", value: "animation-delay-2s" },
  { label: "animation-delay-3s", value: "animation-delay-3s" },
  { label: "animation-delay-4s", value: "animation-delay-4s" },
  { label: "animation-delay-5s", value: "animation-delay-5s" },
];

export const animationIterationCountOpts = [
  { label: "animation-iteration-1", value: "animation-iteration-1" },
  { label: "animation-iteration-2", value: "animation-iteration-2" },
  { label: "animation-iteration-3", value: "animation-iteration-3" },
  { label: "animation-iteration-4", value: "animation-iteration-4" },
  { label: "animation-iteration-5", value: "animation-iteration-5" },
];

export const animationFillModeOpts = [
  { label: "animation-fill-forwards", value: "animation-fill-forwards" },
  { label: "animation-fill-backwards", value: "animation-fill-backwards" },
  { label: "animation-fill-both", value: "animation-fill-both" },
  { label: "animation-fill-none", value: "animation-fill-none" },
];

export const animationDirectionOpts = [
  { label: "animation-direction-normal", value: "animation-direction-normal" },
  {
    label: "animation-direction-reverse",
    value: "animation-direction-reverse",
  },
  {
    label: "animation-direction-alternate",
    value: "animation-direction-alternate",
  },
  {
    label: "animation-direction-alternate-reverse",
    value: "animation-direction-alternate-reverse",
  },
];

export const animationTimeFunctionOpts = [
  { label: "animation-timing-linear", value: "animation-timing-linear" },
  { label: "animation-timing-in", value: "animation-timing-in" },
  { label: "animation-timing-out", value: "animation-timing-out" },
  { label: "animation-timing-in-out", value: "animation-timing-in-out" },

  { label: "animation-steps-start-1", value: "animation-steps-start-1" },
  { label: "animation-steps-start-5", value: "animation-steps-start-5" },

  { label: "animation-steps-end-1", value: "animation-steps-end-1" },
  { label: "animation-steps-end-5", value: "animation-steps-end-5" },

  { label: "animation-steps-both-1", value: "animation-steps-both-1" },
  { label: "animation-steps-both-5", value: "animation-steps-both-5" },

  { label: "animation-steps-none-1", value: "animation-steps-none-1" },
  { label: "animation-steps-none-5", value: "animation-steps-none-5" },
];

export const animationPlayStateOpts = [
  { label: "animation-play-paused", value: "animation-play-paused" },
  { label: "animation-play-running", value: "animation-play-running" },
];
