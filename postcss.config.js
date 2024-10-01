module.exports = {
  plugins: {
    "postcss-px-to-viewport-8-plugin": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: "vw",
      landscapeWidth: 812,
    },
  },
};
