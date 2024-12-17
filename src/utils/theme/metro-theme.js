import ThemePresetNames from "@/utils/theme/theme-preset-names";

import { blue, lightBlue, darken, green, red, yellow } from "@/utils/color/metro-colors";

/**
 * The default colors for the Metro theme.
 *
 * @see https://materialui.co/metrocolors
 * @see https://www.w3schools.com/colors/colors_metro.asp
 */
export default Object.freeze({
  name: ThemePresetNames.METRO,
  light: {
    primary: blue.base,
    secondary: darken.lighten2,
    success: green.base,
    info: blue.lighten1,
    warning: yellow.base,
    error: red.base,
    background: lightBlue.lighten5,
    surface: lightBlue.base,
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: blue.base,
    secondary: darken.lighten1,
    success: green.base,
    info: blue.lighten1,
    warning: yellow.darken1,
    error: red.base,
    background: darken.darken1,
    surface: darken.base,
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#A3A3A3"
  }
});
