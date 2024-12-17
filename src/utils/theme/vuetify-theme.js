import ThemePresetNames from "@/utils/theme/theme-preset-names";

/**
 * The default colors for the builder theme.
 */
export default Object.freeze({
  name: ThemePresetNames.VUETIFY,
  light: {
    primary: "#1867C0",
    secondary: "#48A9A6",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    surface: "#FFFFFF",
    background: "#FFFFFF",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242",
    "on-surface-variant": "#EEEEEE"
  },
  dark: {
    primary: "#2196F3",
    secondary: "#54B6B2",
    error: "#CF6679",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    background: "#121212",
    surface: "#212121",
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#A3A3A3",
    "on-surface-variant": "#424242"
  }
});
