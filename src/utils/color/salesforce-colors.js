import ThemePresetNames from "@/utils/theme/theme-preset-names";

/**
 * Salesforce Lightning Design System colors
 *
 * @see https://www.lightningdesignsystem.com/guidelines/color/our-color-system/
 * @see https://www.lightningdesignsystem.com/design-tokens/#category-color
 */

export const red = {
  lighten5: "#feded8",
  lighten4: "#feb8ab",
  lighten3: "#fe8f7d",
  lighten2: "#fe7765",
  lighten1: "#fe5c4c",
  base: "#ea001e",
  darken1: "#ba0517",
  darken2: "#8e030f",
  darken3: "#640103",
  darken4: "#4a0c04"
};

export const pink = {
  lighten5: "#fddde3",
  lighten4: "#fdb6c5",
  lighten3: "#fe8aa7",
  lighten2: "#fe7298",
  lighten1: "#ff538a",
  base: "#e3066a",
  darken1: "#b60554",
  darken2: "#8a033e",
  darken3: "#61022a",
  darken4: "#4b0620"
};

export const violet = {
  lighten5: "#f2defe",
  lighten4: "#e5b9fe",
  lighten3: "#d892fe",
  lighten2: "#d17dfe",
  lighten1: "#cb65ff",
  base: "#ba01ff",
  darken1: "#9602c7",
  darken2: "#730394",
  darken3: "#481a54",
  darken4: "#3d0157"
};

export const purple = {
  lighten5: "#ece1f9",
  lighten4: "#d7bff2",
  lighten3: "#c29ef1",
  lighten2: "#b78def",
  lighten1: "#ad7bee",
  base: "#9050e9",
  darken1: "#7526e3",
  darken2: "#5a1ba9",
  darken3: "#401075",
  darken4: "#300b60"
};

export const indigo = {
  lighten5: "#e0e5f8",
  lighten4: "#bec7f6",
  lighten3: "#9ea9f1",
  lighten2: "#8e9bef",
  lighten1: "#7f8ced",
  base: "#5867e8",
  darken1: "#3a49da",
  darken2: "#2f2cb7",
  darken3: "#321d71",
  darken4: "#1f0974"
};

export const blue = {
  lighten5: "#d8e6fe",
  lighten4: "#aacbff",
  lighten3: "#78b0fd",
  lighten2: "#57a3fd",
  lighten1: "#1b96ff",
  base: "#0176d3",
  darken1: "#0b5cab",
  darken2: "#014486",
  darken3: "#032d60",
  darken4: "#03234d"
};

export const cloudBlue = {
  lighten5: "#cfe9fe",
  lighten4: "#90d0fe",
  lighten3: "#1ab9ff",
  lighten2: "#08abed",
  lighten1: "#0d9dda",
  base: "#107cad",
  darken1: "#05628a",
  darken2: "#084968",
  darken3: "#023248",
  darken4: "#0a2636"
};

export const teal = {
  lighten5: "#acf3e4",
  lighten4: "#04e1cb",
  lighten3: "#01c3b3",
  lighten2: "#03b4a7",
  lighten1: "#06a59a",
  base: "#0b827c",
  darken1: "#056764",
  darken2: "#024d4c",
  darken3: "#023434",
  darken4: "#072825"
};

export const green = {
  lighten5: "#cdefc4",
  lighten4: "#91db8b",
  lighten3: "#45c65a",
  lighten2: "#41b658",
  lighten1: "#3ba755",
  base: "#2e844a",
  darken1: "#396547",
  darken2: "#194e31",
  darken3: "#1c3326",
  darken4: "#0c2912"
};

export const yellow = {
  lighten5: "#f9e3b6",
  lighten4: "#fcc003",
  lighten3: "#e4a201",
  lighten2: "#d79304",
  lighten1: "#ca8501",
  base: "#a86403",
  darken1: "#8c4b02",
  darken2: "#6f3400",
  darken3: "#4f2100",
  darken4: "#2e2204"
};

export const orange = {
  lighten5: "#fedfd0",
  lighten4: "#ffba90",
  lighten3: "#fe9339",
  lighten2: "#f38303",
  lighten1: "#dd7a01",
  base: "#a96404",
  darken1: "#825101",
  darken2: "#5f3e02",
  darken3: "#3e2b02",
  darken4: "#371e03"
};

export const hotOrange = {
  lighten5: "#ffded5",
  lighten4: "#feb9a5",
  lighten3: "#ff906e",
  lighten2: "#ff784f",
  lighten1: "#ff5d2d",
  base: "#d83a00",
  darken1: "#aa3001",
  darken2: "#7e2600",
  darken3: "#4a2413",
  darken4: "#421604"
};

export const grey = {
  lighten5: "#f3f2f2",
  lighten4: "#ecebea",
  lighten3: "#dddbda",
  lighten2: "#c9c7c5",
  lighten1: "#b0adab",
  base: "#969492",
  darken1: "#706e6b",
  darken2: "#514f4d",
  darken3: "#3e3e3c",
  darken4: "#2b2826"
};

export const neutral = {
  lighten5: "#f3f3f3",
  lighten4: "#e5e5e5",
  lighten3: "#c9c9c9",
  lighten2: "#aeaeae",
  lighten1: "#939393",
  base: "#747474",
  darken1: "#5c5c5c",
  darken2: "#444444",
  darken3: "#2e2e2e",
  darken4: "#181818"
};

// export const shades = {
//   black: "#000000",
//   white: "#ffffff",
//   transparent: "#ffffff00"
// };

const redHex = Object.values(red).reverse();
const pinkHex = Object.values(pink).reverse();
const violetHex = Object.values(violet).reverse();
const purpleHex = Object.values(purple).reverse();
const indigoHex = Object.values(indigo).reverse();
const blueHex = Object.values(blue).reverse();
const cloudBlueHex = Object.values(cloudBlue).reverse();
const tealHex = Object.values(teal).reverse();
const greenHex = Object.values(green).reverse();
const yellowHex = Object.values(yellow).reverse();
const orangeHex = Object.values(orange).reverse();
const hotOrangeHex = Object.values(hotOrange).reverse();
const greyHex = Object.values(grey).reverse();
const neutralHex = Object.values(neutral).reverse();

export const swatches = [
  redHex,
  pinkHex,
  violetHex,
  purpleHex,
  indigoHex,
  blueHex,
  cloudBlueHex,
  tealHex,
  greenHex,
  yellowHex,
  orangeHex,
  hotOrangeHex,
  greyHex,
  neutralHex
];

export default { swatches };
