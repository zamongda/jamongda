export const pxToVw = (px: number) => {
  const viewportWidth = 375;
  const vwValue = (px / viewportWidth) * 100;

  return Math.round(vwValue) + "vw";
};
