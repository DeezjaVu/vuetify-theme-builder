import ThemePresetNames from "@/utils/theme/theme-preset-names";

import { blue, green, red, slate, yellow, zinc } from "@/utils/color/tailwind-colors";

/**
 * The default colors for the Tailwind theme.
 *
 * @see https://tailwindcss.com/
 */
export default Object.freeze({
  name: ThemePresetNames.TAILWIND,
  light: {
    primary: blue.base,
    secondary: slate.lighten1,
    success: green.base,
    info: blue.base,
    warning: yellow.base,
    danger: red.base,
    background: zinc.lighten5,
    surface: slate.lighten4,
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: blue.base,
    secondary: slate.darken1,
    success: green.base,
    info: blue.base,
    warning: yellow.base,
    danger: red.base,
    background: zinc.darken4,
    surface: slate.darken3,
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#A3A3A3"
  }
});
