import { defineConfig } from "@pandacss/dev";

import { textStyles } from "./text-style.config";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          black: { value: "#3A3A3A" },
          white: { value: "#FFFFFF" },
          gray: {
            "01": { value: "#FAFAFA" },
            "02": { value: "#EAEAEA" },
            "03": { value: "#E1E1E1" },
            "04": { value: "#CCCCCC" },
            "05": { value: "#888888" },
          },
          lightOrange: { value: "#FAB7A0" },
          orange: { value: "#FF8168" },
          green: { value: "#618B7B" },
          lightGreen: { value: "#7CAB99" },
          pink: { value: "#FD4B50" },
        },
        zIndex: {
          toast: { value: 12000 },
          modal: { value: 11000 },
          header: { value: 10000 },
          headerExtension: { value: 9999 },
          mobileGnb: { value: 10000 },
          mobileGnbExtension: { value: 9999 },
          mobileTab: { value: 9998 },
        },
      },
      textStyles: textStyles,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
