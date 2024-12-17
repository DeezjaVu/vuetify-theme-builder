import ThemePresetNames from "@/utils/theme/theme-preset-names";

import { blue, green, neutral, grey, red } from "@/utils/color/salesforce-colors";

/**
 * The default colors for the Salesforce Lightning Design theme.
 *
 * @see https://www.lightningdesignsystem.com/
 * @see https://www.lightningdesignsystem.com/guidelines/color/overview/
 * @see https://www.lightningdesignsystem.com/design-tokens/
 */
export default Object.freeze({
  name: ThemePresetNames.SALESFORCE,
  light: {
    primary: blue.lighten1,
    secondary: "#d8e3f8",
    success: green.lighten3,
    info: neutral.base,
    warning: "#fe9339",
    error: "#fe5c4c",
    background: "#f8f9ff",
    surface: "#ededf4",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: blue.base,
    secondary: grey.darken1,
    success: green.base,
    info: neutral.base,
    warning: "#fe9339",
    error: red.darken1,
    background: "#181818",
    surface: "#23262b",
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#A3A3A3"
  }
});
