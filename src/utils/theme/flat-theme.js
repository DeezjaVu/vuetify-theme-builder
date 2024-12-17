import ThemePresetNames from "@/utils/theme/theme-preset-names";

import { midnightBlue, concrete, amethyst, peterRiver, sunflower, pomegranate, silver } from "@/utils/color/flat-colors";

/**
 * The default colors for the Flat theme.
 *
 * @see https://materialui.co/flatuicolors
 * @see https://www.w3schools.com/colors/colors_flatui.asp
 */
export default Object.freeze({
  name: ThemePresetNames.FLAT,
  light: {
    primary: midnightBlue.base,
    secondary: concrete.base,
    success: amethyst.base,
    info: peterRiver.base,
    warning: sunflower.base,
    error: pomegranate.base,
    background: silver.base,
    surface: silver.base,
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: midnightBlue.base,
    secondary: concrete.base,
    success: amethyst.base,
    info: peterRiver.base,
    warning: sunflower.base,
    error: pomegranate.base,
    background: "#121616",
    surface: "#152425",
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#A3A3A3"
  }
});
