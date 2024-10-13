/**
 * Bootstrap's color palette is similar to the Material Design color palette.
 * Each color has a base and 5 lighten variants and 4 darken variants.
 *
 * Each color in the Bootstrap  palette has a base color of which lighten and darken variants are derived.
 * This is done using a JS implementaton of the
 * [SASS mix()](https://sass-lang.com/documentation/modules/color/#mix) function.
 *
 * The following percentages are used to create the lighten and darken variants for the base colors:
 * - lighten1 = mix(white, base, 20%)
 * - lighten2 = mix(white, base, 40%)
 * - lighten3 = mix(white, base, 60%)
 * - lighten4 = mix(white, base, 80%)
 * - lighten5 = mix(white, base, 90%)
 * - darken1 = mix(black, base, 20%)
 * - darken2 = mix(black, base, 40%)
 * - darken3 = mix(black, base, 60%)
 * - darken4 = mix(black, base, 80%)
 *
 * @see https://getbootstrap.com/docs/5.3/customize/color/#lighten-and-darken
 * @see https://getbootstrap.com/docs/5.3/customize/color/#all-colors
 * @see https://sass-lang.com/documentation/modules/color/#mix
 */

import { lightMix, darkMix } from "../colorUtils.js";

// Moved to colorUtils
// const lightMix = (color, weight) => mix("#FFFFFF", color, weight);
// const darkMix = (color, weight) => mix("#000000", color, weight);

const blueBase = "#0D6EFD";
export const blue = {
  lighten5: lightMix(blueBase, 90),
  lighten4: lightMix(blueBase, 80),
  lighten3: lightMix(blueBase, 60),
  lighten2: lightMix(blueBase, 40),
  lighten1: lightMix(blueBase, 20),
  base: blueBase,
  darken1: darkMix(blueBase, 20),
  darken2: darkMix(blueBase, 40),
  darken3: darkMix(blueBase, 60),
  darken4: darkMix(blueBase, 80)
};

export const blueHex = Object.values(blue).reverse();

const indigoBase = "#6610F2";
export const indigo = {
  lighten5: lightMix(indigoBase, 90),
  lighten4: lightMix(indigoBase, 80),
  lighten3: lightMix(indigoBase, 60),
  lighten2: lightMix(indigoBase, 40),
  lighten1: lightMix(indigoBase, 20),
  base: indigoBase,
  darken1: darkMix(indigoBase, 20),
  darken2: darkMix(indigoBase, 40),
  darken3: darkMix(indigoBase, 60),
  darken4: darkMix(indigoBase, 80)
};

export const indigoHex = Object.values(indigo).reverse();

const purpleBase = "#6F42C1";
export const purple = {
  lighten5: lightMix(purpleBase, 90),
  lighten4: lightMix(purpleBase, 80),
  lighten3: lightMix(purpleBase, 60),
  lighten2: lightMix(purpleBase, 40),
  lighten1: lightMix(purpleBase, 20),
  base: purpleBase,
  darken1: darkMix(purpleBase, 20),
  darken2: darkMix(purpleBase, 40),
  darken3: darkMix(purpleBase, 60),
  darken4: darkMix(purpleBase, 80)
};

export const purpleHex = Object.values(purple).reverse();

const pinkBase = "#D63384";
export const pink = {
  lighten5: lightMix(pinkBase, 90),
  lighten4: lightMix(pinkBase, 80),
  lighten3: lightMix(pinkBase, 60),
  lighten2: lightMix(pinkBase, 40),
  lighten1: lightMix(pinkBase, 20),
  base: pinkBase,
  darken1: darkMix(pinkBase, 20),
  darken2: darkMix(pinkBase, 40),
  darken3: darkMix(pinkBase, 60),
  darken4: darkMix(pinkBase, 80)
};

export const pinkHex = Object.values(pink).reverse();

const redBase = "#DC3545";
export const red = {
  lighten5: lightMix(redBase, 90),
  lighten4: lightMix(redBase, 80),
  lighten3: lightMix(redBase, 60),
  lighten2: lightMix(redBase, 40),
  lighten1: lightMix(redBase, 20),
  base: redBase,
  darken1: darkMix(redBase, 20),
  darken2: darkMix(redBase, 40),
  darken3: darkMix(redBase, 60),
  darken4: darkMix(redBase, 80)
};

export const redHex = Object.values(red).reverse();

const orangeBase = "#FD7E14";
export const orange = {
  lighten5: lightMix(orangeBase, 90),
  lighten4: lightMix(orangeBase, 80),
  lighten3: lightMix(orangeBase, 60),
  lighten2: lightMix(orangeBase, 40),
  lighten1: lightMix(orangeBase, 20),
  base: orangeBase,
  darken1: darkMix(orangeBase, 20),
  darken2: darkMix(orangeBase, 40),
  darken3: darkMix(orangeBase, 60),
  darken4: darkMix(orangeBase, 80)
};

export const orangeHex = Object.values(orange).reverse();

const yellowBase = "#FFC107";
export const yellow = {
  lighten5: lightMix(yellowBase, 90),
  lighten4: lightMix(yellowBase, 80),
  lighten3: lightMix(yellowBase, 60),
  lighten2: lightMix(yellowBase, 40),
  lighten1: lightMix(yellowBase, 20),
  base: yellowBase,
  darken1: darkMix(yellowBase, 20),
  darken2: darkMix(yellowBase, 40),
  darken3: darkMix(yellowBase, 60),
  darken4: darkMix(yellowBase, 80)
};

export const yellowHex = Object.values(yellow).reverse();

const greenBase = "#198754";
export const green = {
  lighten5: lightMix(greenBase, 90),
  lighten4: lightMix(greenBase, 80),
  lighten3: lightMix(greenBase, 60),
  lighten2: lightMix(greenBase, 40),
  lighten1: lightMix(greenBase, 20),
  base: greenBase,
  darken1: darkMix(greenBase, 20),
  darken2: darkMix(greenBase, 40),
  darken3: darkMix(greenBase, 60),
  darken4: darkMix(greenBase, 80)
};

export const greenHex = Object.values(green).reverse();

const tealBase = "#20C997";
export const teal = {
  lighten5: lightMix(tealBase, 90),
  lighten4: lightMix(tealBase, 80),
  lighten3: lightMix(tealBase, 60),
  lighten2: lightMix(tealBase, 40),
  lighten1: lightMix(tealBase, 20),
  base: tealBase,
  darken1: darkMix(tealBase, 20),
  darken2: darkMix(tealBase, 40),
  darken3: darkMix(tealBase, 60),
  darken4: darkMix(tealBase, 80)
};

export const tealHex = Object.values(teal).reverse();

const cyanBase = "#0DCAF0";
export const cyan = {
  lighten5: lightMix(cyanBase, 90),
  lighten4: lightMix(cyanBase, 80),
  lighten3: lightMix(cyanBase, 60),
  lighten2: lightMix(cyanBase, 40),
  lighten1: lightMix(cyanBase, 20),
  base: cyanBase,
  darken1: darkMix(cyanBase, 20),
  darken2: darkMix(cyanBase, 40),
  darken3: darkMix(cyanBase, 60),
  darken4: darkMix(cyanBase, 80)
};

export const cyanHex = Object.values(cyan).reverse();

const grayBase = "#ADB5BD";
export const gray = {
  lighten5: lightMix(grayBase, 90),
  lighten4: lightMix(grayBase, 80),
  lighten3: lightMix(grayBase, 60),
  lighten2: lightMix(grayBase, 40),
  lighten1: lightMix(grayBase, 20),
  base: grayBase,
  darken1: darkMix(grayBase, 20), //#6c757d
  darken2: darkMix(grayBase, 40),
  darken3: darkMix(grayBase, 60),
  darken4: darkMix(grayBase, 80)
};

export const grayHex = Object.values(gray).reverse();

export const shades = {
  black: "#000000",
  white: "#FFFFFF",
  transparent: "#FFFFFF00"
};

export const shadesHex = Object.values(shades);

/**
 * Bootstrap base color list.
 *
 * Each item in the list is an object with the following properties:
 * - title : name of the color in title case, usable for display.
 * - name: name of the color in camel case.
 * - base: base color of the color in hex.
 *
 * @returns {array} An array of objects.
 *
 * @see https://getbootstrap.com/docs/5.0/customize/color/
 */
export const baseColors = [
  { title: "Blue", name: "blue", base: blue.base },
  { title: "Indigo", name: "indigo", base: indigo.base },
  { title: "Purple", name: "purple", base: purple.base },
  { title: "Pink", name: "pink", base: pink.base },
  { title: "Red", name: "red", base: red.base },
  { title: "Orange", name: "orange", base: orange.base },
  { title: "Yellow", name: "yellow", base: yellow.base },
  { title: "Green", name: "green", base: green.base },
  { title: "Teal", name: "teal", base: teal.base },
  { title: "Cyan", name: "cyan", base: cyan.base },
  { title: "Gray", name: "gray", base: gray.base },
  { title: "Black", name: "black", base: shades.black },
  { title: "White", name: "white", base: shades.white }
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

// TODO: @bootstrap-colors ::: match the theme names to the vuetify names?
export const theme = {
  primary: blueBase,
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
