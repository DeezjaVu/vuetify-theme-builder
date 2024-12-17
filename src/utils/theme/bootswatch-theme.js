import ThemePresetNames from "@/utils/theme/theme-preset-names";

/**
 * Bootswatch Darkly theme.
 *
 * @see https://bootswatch.com/darkly/
 */
export const darkly = Object.freeze({
  name: ThemePresetNames.BOOTSWATCH_DARKLY,
  light: {
    primary: "#375a7f",
    secondary: "#444444",
    success: "#00bc8c",
    info: "#3498db",
    warning: "#f39c12",
    error: "#e74c3c",
    background: "#F7F8F8", //gray.lighten5,
    surface: "#f8f9fa",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: "#375a7f",
    secondary: "#444444",
    success: "#00bc8c",
    info: "#3498db",
    warning: "#f39c12",
    error: "#e74c3c",
    background: "#222222",
    surface: "#303030",
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#DEE2E6"
  }
});

/**
 * Bootswatch Flatly theme.
 *
 * @see https://bootswatch.com/flatly/
 */
export const flatly = Object.freeze({
  name: ThemePresetNames.BOOTSWATCH_DARKLY,
  light: {
    primary: "#253544",
    secondary: "#95a5a6",
    success: "#18bc9c",
    info: "#3498db",
    warning: "#f39c12",
    error: "#e74c3c",
    background: "#ffffff", //gray.lighten5,
    surface: "#ecf0f1",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: "#253544",
    secondary: "#95a5a6",
    success: "#18bc9c",
    info: "#3498db",
    warning: "#f39c12",
    error: "#e74c3c",
    background: "#212529",
    surface: "#2b3035",
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#7b8a8b"
  }
});

/**
 * Bootswatch Pulse theme.
 *
 * @see https://bootswatch.com/pulse/
 */
export const pulse = Object.freeze({
  name: ThemePresetNames.BOOTSWATCH_PULSE,
  light: {
    primary: "#4c2a80",
    secondary: "#ffffff",
    success: "#13b955",
    info: "#009cdc",
    warning: "#efa31d",
    error: "#fc3939",
    background: "#F7F8F8",
    surface: "#f9f8fc",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: "#4c2a80",
    secondary: "#ffffff",
    success: "#13b955",
    info: "#009cdc",
    warning: "#efa31d",
    error: "#fc3939",
    background: "#17141f",
    surface: "#262730",
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#A3A3A3"
  }
});

/**
 * Bootswatch Simplex theme.
 *
 * @see https://bootswatch.com/simplex/
 */
export const simplex = Object.freeze({
  name: ThemePresetNames.BOOTSWATCH_SIMPLEX,
  light: {
    primary: "#4c2a80",
    secondary: "#ffffff",
    success: "#13b955",
    info: "#009cdc",
    warning: "#efa31d",
    error: "#fc3939",
    background: "#fcfcfc",
    surface: "#f9f8fc",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: "#d9230f",
    secondary: "#ffffff",
    success: "#469408",
    info: "#029acf",
    warning: "#d9831f",
    error: "#9b479f",
    background: "#212529",
    surface: "#373a3c",
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#A3A3A3"
  }
});

/**
 * Bootswatch SuperHero theme.
 *
 * @see https://bootswatch.com/superhero/
 */
export const superhero = Object.freeze({
  name: ThemePresetNames.SUPERHERO,
  light: {
    primary: "#be5915",
    secondary: "#4e5d6c",
    success: "#5cb85c",
    info: "#5bc0de",
    warning: "#ffc107",
    error: "#d9534f",
    background: "#0f2537",
    surface: "#20374c",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#2b3035"
  },
  dark: {
    primary: "#be5915",
    secondary: "#4e5d6c",
    success: "#5cb85c",
    info: "#5bc0de",
    warning: "#ffc107",
    error: "#d9534f",
    background: "#212529",
    surface: "#20374c",
    "surface-bright": "#CCBFD6",
    "surface-light": "#424242",
    "surface-variant": "#abb6c2 "
  }
});

/**
 * Bootswatch United theme.
 *
 * @see https://bootswatch.com/united/
 */
export const united = Object.freeze({
  name: ThemePresetNames.BOOTSWATCH_UNITED,
  light: {
    primary: "#c6471b",
    secondary: "#aea79f",
    success: "#38b44a",
    info: "#17a2b8",
    warning: "#efb73e",
    error: "#df382c",
    background: "#F7F8F8",
    surface: "#e9ecef",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#772953"
  },
  dark: {
    primary: "#c6471b",
    secondary: "#aea79f",
    success: "#38b44a",
    info: "#17a2b8",
    warning: "#efb73e",
    error: "#df382c",
    background: "#212529",
    surface: "#2a2c2e",
    "surface-bright": "#CCBFD6",
    "surface-light": "#772953",
    "surface-variant": "#A3A3A3"
  }
});

export default {
  darkly,
  flatly,
  pulse,
  simplex,
  superhero,
  united
};
