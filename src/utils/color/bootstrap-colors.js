import { mix } from "../colorUtils.js";

/**
 *
 * @see https://getbootstrap.com/docs/5.3/customize/color/#all-colors
 */
export const blue = {
  lighten5: mix("#FFFFFF", "#0D6EFD", 90),
  lighten4: mix("#FFFFFF", "#0D6EFD", 80),
  lighten3: mix("#FFFFFF", "#0D6EFD", 60),
  lighten2: mix("#FFFFFF", "#0D6EFD", 40),
  lighten1: mix("#FFFFFF", "#0D6EFD", 20),
  base: "#0D6EFD",
  darken1: mix("#000000", "#0D6EFD", 20),
  darken2: mix("#000000", "#0D6EFD", 40),
  darken3: mix("#000000", "#0D6EFD", 60),
  darken4: mix("#000000", "#0D6EFD", 80)
};

export const blueHex = Object.values(blue).reverse();

export const indigo = {
  lighten5: mix("#FFFFFF", "#6610F2", 90),
  lighten4: mix("#FFFFFF", "#6610F2", 80),
  lighten3: mix("#FFFFFF", "#6610F2", 60),
  lighten2: mix("#FFFFFF", "#6610F2", 40),
  lighten1: mix("#FFFFFF", "#6610F2", 20),
  base: "#6610F2",
  darken1: mix("#000000", "#6610F2", 20),
  darken2: mix("#000000", "#6610F2", 40),
  darken3: mix("#000000", "#6610F2", 60),
  darken4: mix("#000000", "#6610F2", 80)
};

export const indigoHex = Object.values(indigo).reverse();

export const purple = {
  lighten5: mix("#FFFFFF", "#6F42C1", 90),
  lighten4: mix("#FFFFFF", "#6F42C1", 80),
  lighten3: mix("#FFFFFF", "#6F42C1", 60),
  lighten2: mix("#FFFFFF", "#6F42C1", 40),
  lighten1: mix("#FFFFFF", "#6F42C1", 20),
  base: "#6F42C1",
  darken1: mix("#000000", "#6F42C1", 20),
  darken2: mix("#000000", "#6F42C1", 40),
  darken3: mix("#000000", "#6F42C1", 60),
  darken4: mix("#000000", "#6F42C1", 80)
};

export const purpleHex = Object.values(purple).reverse();

export const pink = {
  lighten5: mix("#FFFFFF", "#D63384", 90),
  lighten4: mix("#FFFFFF", "#D63384", 80),
  lighten3: mix("#FFFFFF", "#D63384", 60),
  lighten2: mix("#FFFFFF", "#D63384", 40),
  lighten1: mix("#FFFFFF", "#D63384", 20),
  base: "#D63384",
  darken1: mix("#000000", "#D63384", 20),
  darken2: mix("#000000", "#D63384", 40),
  darken3: mix("#000000", "#D63384", 60),
  darken4: mix("#000000", "#D63384", 80)
};

export const pinkHex = Object.values(pink).reverse();

export const red = {
  lighten5: mix("#FFFFFF", "#DC3545", 90),
  lighten4: mix("#FFFFFF", "#DC3545", 80),
  lighten3: mix("#FFFFFF", "#DC3545", 60),
  lighten2: mix("#FFFFFF", "#DC3545", 40),
  lighten1: mix("#FFFFFF", "#DC3545", 20),
  base: "#DC3545",
  darken1: mix("#000000", "#DC3545", 20),
  darken2: mix("#000000", "#DC3545", 40),
  darken3: mix("#000000", "#DC3545", 60),
  darken4: mix("#000000", "#DC3545", 80)
};

export const redHex = Object.values(red).reverse();

export const orange = {
  lighten5: mix("#FFFFFF", "#FD7E14", 90),
  lighten4: mix("#FFFFFF", "#FD7E14", 80),
  lighten3: mix("#FFFFFF", "#FD7E14", 60),
  lighten2: mix("#FFFFFF", "#FD7E14", 40),
  lighten1: mix("#FFFFFF", "#FD7E14", 20),
  base: "#FD7E14",
  darken1: mix("#000000", "#FD7E14", 20),
  darken2: mix("#000000", "#FD7E14", 40),
  darken3: mix("#000000", "#FD7E14", 60),
  darken4: mix("#000000", "#FD7E14", 80)
};

export const orangeHex = Object.values(orange).reverse();

export const yellow = {
  lighten5: mix("#FFFFFF", "#FFC107", 90),
  lighten4: mix("#FFFFFF", "#FFC107", 80),
  lighten3: mix("#FFFFFF", "#FFC107", 60),
  lighten2: mix("#FFFFFF", "#FFC107", 40),
  lighten1: mix("#FFFFFF", "#FFC107", 20),
  base: "#FFC107",
  darken1: mix("#000000", "#FFC107", 20),
  darken2: mix("#000000", "#FFC107", 40),
  darken3: mix("#000000", "#FFC107", 60),
  darken4: mix("#000000", "#FFC107", 80)
};

export const yellowHex = Object.values(yellow).reverse();

export const green = {
  lighten5: mix("#FFFFFF", "#198754", 90),
  lighten4: mix("#FFFFFF", "#198754", 80),
  lighten3: mix("#FFFFFF", "#198754", 60),
  lighten2: mix("#FFFFFF", "#198754", 40),
  lighten1: mix("#FFFFFF", "#198754", 20),
  base: "#198754",
  darken1: mix("#000000", "#198754", 20),
  darken2: mix("#000000", "#198754", 40),
  darken3: mix("#000000", "#198754", 60),
  darken4: mix("#000000", "#198754", 80)
};

export const greenHex = Object.values(green).reverse();

export const teal = {
  lighten5: mix("#FFFFFF", "#20C997", 90),
  lighten4: mix("#FFFFFF", "#20C997", 80),
  lighten3: mix("#FFFFFF", "#20C997", 60),
  lighten2: mix("#FFFFFF", "#20C997", 40),
  lighten1: mix("#FFFFFF", "#20C997", 20),
  base: "#20C997",
  darken1: mix("#000000", "#20C997", 20),
  darken2: mix("#000000", "#20C997", 40),
  darken3: mix("#000000", "#20C997", 60),
  darken4: mix("#000000", "#20C997", 80)
};

export const tealHex = Object.values(teal).reverse();

export const cyan = {
  lighten5: mix("#FFFFFF", "#0DCAF0", 90),
  lighten4: mix("#FFFFFF", "#0DCAF0", 80),
  lighten3: mix("#FFFFFF", "#0DCAF0", 60),
  lighten2: mix("#FFFFFF", "#0DCAF0", 40),
  lighten1: mix("#FFFFFF", "#0DCAF0", 20),
  base: "#0DCAF0",
  darken1: mix("#000000", "#0DCAF0", 20),
  darken2: mix("#000000", "#0DCAF0", 40),
  darken3: mix("#000000", "#0DCAF0", 60),
  darken4: mix("#000000", "#0DCAF0", 80)
};

export const cyanHex = Object.values(cyan).reverse();

export const gray = {
  lighten5: mix("#FFFFFF", "#ADB5BD", 90),
  lighten4: mix("#FFFFFF", "#ADB5BD", 80),
  lighten3: mix("#FFFFFF", "#ADB5BD", 60),
  lighten2: mix("#FFFFFF", "#ADB5BD", 40),
  lighten1: mix("#FFFFFF", "#ADB5BD", 20),
  base: "#ADB5BD",
  darken1: mix("#000000", "#ADB5BD", 20), //#6c757d
  darken2: mix("#000000", "#ADB5BD", 40),
  darken3: mix("#000000", "#ADB5BD", 60),
  darken4: mix("#000000", "#ADB5BD", 80)
};

export const grayHex = Object.values(gray).reverse();

export const shades = {
  black: "#000000",
  white: "#FFFFFF",
  transparent: "#FFFFFF00"
};

export const shadesHex = Object.values(shades);

export const baseColors = [
  { name: "blue", base: blue.base },
  { name: "indigo", base: indigo.base },
  { name: "purple", base: purple.base },
  { name: "pink", base: pink.base },
  { name: "red", base: red.base },
  { name: "orange", base: orange.base },
  { name: "yellow", base: yellow.base },
  { name: "green", base: green.base },
  { name: "teal", base: teal.base },
  { name: "cyan", base: cyan.base },
  { name: "gray", base: gray.base },
  { name: "black", base: shades.black },
  { name: "white", base: shades.white }
];

export const swatches = [
  blueHex,
  indigoHex,
  purpleHex,
  pinkHex,
  redHex,
  orangeHex,
  yellowHex,
  greenHex,
  tealHex,
  cyanHex,
  grayHex,
  shadesHex
];

export const theme = {
  primary: "#0D6EFD",
  secondary: "#6C757D",
  success: "#198754",
  info: "#0DCAF0",
  warning: "#FFC107",
  danger: "#DC3545",
  light: "#F8F9FA",
  dark: "#212529"
};

export default {
  blue,
  blueHex,
  indigo,
  indigoHex,
  purple,
  purpleHex,
  pink,
  pinkHex,
  red,
  redHex,
  orange,
  orangeHex,
  yellow,
  yellowHex,
  green,
  greenHex,
  teal,
  tealHex,
  cyan,
  cyanHex,
  gray,
  grayHex,
  shades,
  shadesHex,
  baseColors,
  swatches,
  theme
};
