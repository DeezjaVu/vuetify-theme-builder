/**
 * Metro is the nickname of Microsoft Design Language (MDL).
 * Metro is focused on flat design and modern colors.
 *
 * Each color in the Metro palette has a base color of which lighten and darken variants are derived.
 *
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
 * @see https://materialui.co/metrocolors
 * @see https://colorlib.com/etc/metro-colors.html
 * @see https://www.w3schools.com/Colors/colors_metro.asp
 */

import { mix } from "../colorUtils.js";

const lightMix = (color, weight) => mix("#FFFFFF", color, weight);
const darkMix = (color, weight) => mix("#000000", color, weight);

const lightGreenColor = "#99B433";

export const lightGreen = {
  lighten5: lightMix("#99B433", 90),
  lighten4: lightMix("#99B433", 80),
  lighten3: lightMix("#99B433", 60),
  lighten2: lightMix("#99B433", 40),
  lighten1: lightMix("#99B433", 20),
  base: lightGreenColor,
  darken1: darkMix("#99B433", 20),
  darken2: darkMix("#99B433", 40),
  darken3: darkMix("#99B433", 60),
  darken4: darkMix("#99B433", 80)
};

export const lightGreenHex = Object.values(lightGreen).reverse();

export const green = {
  lighten5: lightMix("#00A300", 90),
  lighten4: lightMix("#00A300", 80),
  lighten3: lightMix("#00A300", 60),
  lighten2: lightMix("#00A300", 40),
  lighten1: lightMix("#00A300", 20),
  base: "#00A300",
  darken1: darkMix("#00A300", 20),
  darken2: darkMix("#00A300", 40),
  darken3: darkMix("#00A300", 60),
  darken4: darkMix("#00A300", 80)
};

export const greenHex = Object.values(green).reverse();

export const darkGreen = {
  lighten5: lightMix("#1E7145", 90),
  lighten4: lightMix("#1E7145", 80),
  lighten3: lightMix("#1E7145", 60),
  lighten2: lightMix("#1E7145", 40),
  lighten1: lightMix("#1E7145", 20),
  base: "#1E7145",
  darken1: darkMix("#1E7145", 20),
  darken2: darkMix("#1E7145", 40),
  darken3: darkMix("#1E7145", 60),
  darken4: darkMix("#1E7145", 80)
};

export const darkGreenHex = Object.values(darkGreen).reverse();

export const magenta = {
  lighten5: lightMix("#FF0097", 90),
  lighten4: lightMix("#FF0097", 80),
  lighten3: lightMix("#FF0097", 60),
  lighten2: lightMix("#FF0097", 40),
  lighten1: lightMix("#FF0097", 20),
  base: "#FF0097",
  darken1: darkMix("#FF0097", 20),
  darken2: darkMix("#FF0097", 40),
  darken3: darkMix("#FF0097", 60),
  darken4: darkMix("#FF0097", 80)
};

export const magentaHex = Object.values(magenta).reverse();

export const lightPurple = {
  lighten5: lightMix("#9F00A7", 90),
  lighten4: lightMix("#9F00A7", 80),
  lighten3: lightMix("#9F00A7", 60),
  lighten2: lightMix("#9F00A7", 40),
  lighten1: lightMix("#9F00A7", 20),
  base: "#9F00A7",
  darken1: darkMix("#9F00A7", 20),
  darken2: darkMix("#9F00A7", 40),
  darken3: darkMix("#9F00A7", 60),
  darken4: darkMix("#9F00A7", 80)
};

export const lightPurpleHex = Object.values(lightPurple).reverse();

export const purple = {
  lighten5: lightMix("#7E3878", 90),
  lighten4: lightMix("#7E3878", 80),
  lighten3: lightMix("#7E3878", 60),
  lighten2: lightMix("#7E3878", 40),
  lighten1: lightMix("#7E3878", 20),
  base: "#7E3878",
  darken1: darkMix("#7E3878", 20),
  darken2: darkMix("#7E3878", 40),
  darken3: darkMix("#7E3878", 60),
  darken4: darkMix("#7E3878", 80)
};

export const purpleHex = Object.values(purple).reverse();

export const darkPurple = {
  lighten5: lightMix("#603CBA", 90),
  lighten4: lightMix("#603CBA", 80),
  lighten3: lightMix("#603CBA", 60),
  lighten2: lightMix("#603CBA", 40),
  lighten1: lightMix("#603CBA", 20),
  base: "#603CBA",
  darken1: darkMix("#603CBA", 20),
  darken2: darkMix("#603CBA", 40),
  darken3: darkMix("#603CBA", 60),
  darken4: darkMix("#603CBA", 80)
};

export const darkPurpleHex = Object.values(darkPurple).reverse();

export const darken = {
  lighten5: lightMix("#1D1D1D", 90),
  lighten4: lightMix("#1D1D1D", 80),
  lighten3: lightMix("#1D1D1D", 60),
  lighten2: lightMix("#1D1D1D", 40),
  lighten1: lightMix("#1D1D1D", 20),
  base: "#1D1D1D",
  darken1: darkMix("#1D1D1D", 20),
  darken2: darkMix("#1D1D1D", 40),
  darken3: darkMix("#1D1D1D", 60),
  darken4: darkMix("#1D1D1D", 80)
};

export const darkenHex = Object.values(darken).reverse();

export const teal = {
  lighten5: lightMix("#00ABA9", 90),
  lighten4: lightMix("#00ABA9", 80),
  lighten3: lightMix("#00ABA9", 60),
  lighten2: lightMix("#00ABA9", 40),
  lighten1: lightMix("#00ABA9", 20),
  base: "#00ABA9",
  darken1: darkMix("#00ABA9", 20),
  darken2: darkMix("#00ABA9", 40),
  darken3: darkMix("#00ABA9", 60),
  darken4: darkMix("#00ABA9", 80)
};

export const tealHex = Object.values(teal).reverse();

export const lightBlue = {
  lighten5: lightMix("#2D89EF", 90),
  lighten4: lightMix("#2D89EF", 80),
  lighten3: lightMix("#2D89EF", 60),
  lighten2: lightMix("#2D89EF", 40),
  lighten1: lightMix("#2D89EF", 20),
  base: "#2D89EF",
  darken1: darkMix("#2D89EF", 20),
  darken2: darkMix("#2D89EF", 40),
  darken3: darkMix("#2D89EF", 60),
  darken4: darkMix("#2D89EF", 80)
};

export const lightBlueHex = Object.values(lightBlue).reverse();

export const blue = {
  lighten5: lightMix("#2D89EF", 90),
  lighten4: lightMix("#2D89EF", 80),
  lighten3: lightMix("#2D89EF", 60),
  lighten2: lightMix("#2D89EF", 40),
  lighten1: lightMix("#2D89EF", 20),
  base: "#2D89EF",
  darken1: darkMix("#2D89EF", 20),
  darken2: darkMix("#2D89EF", 40),
  darken3: darkMix("#2D89EF", 60),
  darken4: darkMix("#2D89EF", 80)
};

export const blueHex = Object.values(blue).reverse();

export const darkBlue = {
  lighten5: lightMix("#2B5797", 90),
  lighten4: lightMix("#2B5797", 80),
  lighten3: lightMix("#2B5797", 60),
  lighten2: lightMix("#2B5797", 40),
  lighten1: lightMix("#2B5797", 20),
  base: "#2B5797",
  darken1: darkMix("#2B5797", 20),
  darken2: darkMix("#2B5797", 40),
  darken3: darkMix("#2B5797", 60),
  darken4: darkMix("#2B5797", 80)
};

export const darkBlueHex = Object.values(darkBlue).reverse();

export const yellow = {
  lighten5: lightMix("#FFC40D", 90),
  lighten4: lightMix("#FFC40D", 80),
  lighten3: lightMix("#FFC40D", 60),
  lighten2: lightMix("#FFC40D", 40),
  lighten1: lightMix("#FFC40D", 20),
  base: "#FFC40D",
  darken1: darkMix("#FFC40D", 20),
  darken2: darkMix("#FFC40D", 40),
  darken3: darkMix("#FFC40D", 60),
  darken4: darkMix("#FFC40D", 80)
};

export const yellowHex = Object.values(yellow).reverse();

export const orange = {
  lighten5: lightMix("#E3A21A", 90),
  lighten4: lightMix("#E3A21A", 80),
  lighten3: lightMix("#E3A21A", 60),
  lighten2: lightMix("#E3A21A", 40),
  lighten1: lightMix("#E3A21A", 20),
  base: "#E3A21A",
  darken1: darkMix("#E3A21A", 20),
  darken2: darkMix("#E3A21A", 40),
  darken3: darkMix("#E3A21A", 60),
  darken4: darkMix("#E3A21A", 80)
};

export const orangeHex = Object.values(orange).reverse();

export const darkOrange = {
  lighten5: lightMix("#DA532C", 90),
  lighten4: lightMix("#DA532C", 80),
  lighten3: lightMix("#DA532C", 60),
  lighten2: lightMix("#DA532C", 40),
  lighten1: lightMix("#DA532C", 20),
  base: "#DA532C",
  darken1: darkMix("#DA532C", 20),
  darken2: darkMix("#DA532C", 40),
  darken3: darkMix("#DA532C", 60),
  darken4: darkMix("#DA532C", 80)
};

export const darkOrangeHex = Object.values(darkOrange).reverse();

export const red = {
  lighten5: lightMix("#EE1111", 90),
  lighten4: lightMix("#EE1111", 80),
  lighten3: lightMix("#EE1111", 60),
  lighten2: lightMix("#EE1111", 40),
  lighten1: lightMix("#EE1111", 20),
  base: "#EE1111",
  darken1: darkMix("#EE1111", 20),
  darken2: darkMix("#EE1111", 40),
  darken3: darkMix("#EE1111", 60),
  darken4: darkMix("#EE1111", 80)
};

export const redHex = Object.values(red).reverse();

export const darkRed = {
  lighten5: lightMix("#B91D47", 90),
  lighten4: lightMix("#B91D47", 80),
  lighten3: lightMix("#B91D47", 60),
  lighten2: lightMix("#B91D47", 40),
  lighten1: lightMix("#B91D47", 20),
  base: "#B91D47",
  darken1: darkMix("#B91D47", 20),
  darken2: darkMix("#B91D47", 40),
  darken3: darkMix("#B91D47", 60),
  darken4: darkMix("#B91D47", 80)
};

export const darkRedHex = Object.values(darkRed).reverse();

/**
 * A list of swatches that can be used in [Vuetify's ColorPicker](https://vuetifyjs.com/en/components/color-pickers/)
 *  `v-color-picker` component.
 *
 * @see https://vuetifyjs.com/en/components/color-pickers/
 */
export const swatches = [
  lightGreenHex,
  greenHex,
  darkGreenHex,
  magentaHex,
  lightPurpleHex,
  purpleHex,
  darkPurpleHex,
  tealHex,
  darkenHex,
  lightBlueHex,
  blueHex,
  darkBlueHex,
  yellowHex,
  orangeHex,
  darkOrangeHex,
  redHex,
  darkRedHex
];

export const metroBaseColors = [
  { title: "Light Green", name: "lightGreen", base: lightGreen.base },
  { title: "Green", name: "green", base: green.base },
  { title: "Dark Green", name: "darkGreen", base: darkGreen.base },
  { title: "Magenta", name: "magenta", base: magenta.base },
  { title: "Light Purple", name: "lightPurple", base: lightPurple.base },
  { title: "Purple", name: "purple", base: purple.base },
  { title: "Dark Purple", name: "darkPurple", base: darkPurple.base },
  { title: "Teal", name: "teal", base: teal.base },
  { title: "Darken", name: "darken", base: darken.base },
  { title: "Light Blue", name: "lightBlue", base: lightBlue.base },
  { title: "Blue", name: "blue", base: blue.base },
  { title: "Dark Blue", name: "darkBlue", base: darkBlue.base },
  { title: "Yellow", name: "yellow", base: yellow.base },
  { title: "Orange", name: "orange", base: orange.base },
  { title: "Dark Orange", name: "darkOrange", base: darkOrange.base },
  { title: "Red", name: "red", base: red.base },
  { title: "Dark Red", name: "darkRed", base: darkRed.base }
];

// TODO: metro-colors.js ::: Set proper theme colors. This is just for testing.
export const theme = {
  primary: blue.base,
  secondary: darken.base,
  success: green.base,
  info: lightBlue.base,
  warning: yellow.base,
  danger: red.base,
  light: gray.lighten1,
  dark: gray.darken3
};

export default {
  lightGreen,
  lightGreenHex,
  green,
  greenHex,
  darkGreen,
  darkGreenHex,
  magenta,
  magentaHex,
  lightPurple,
  lightPurpleHex,
  purple,
  purpleHex,
  darkPurple,
  darkPurpleHex,
  teal,
  tealHex,
  darken,
  darkenHex,
  lightBlue,
  lightBlueHex,
  blue,
  blueHex,
  darkBlue,
  darkBlueHex,
  yellow,
  yellowHex,
  orange,
  orangeHex,
  darkOrange,
  darkOrangeHex,
  red,
  redHex,
  darkRed,
  darkRedHex,
  metroBaseColors,
  theme
};
