import ThemePresetNames from "@/utils/theme/theme-preset-names";

/**
 * Bootstrap theme preset.
 */

export default Object.freeze({
  name: ThemePresetNames.BOOTSTRAP,
  light: {
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
    info: "#0AA2C0",
    warning: "#ffc107",
    error: "#dc3545",
    background: "#F7F8F8",
    surface: "#EFF0F2",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242"
  },
  dark: {
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
    info: "#0AA2C0",
    warning: "#ffc107",
    error: "#dc3545",
    background: "#1a1d20",
    surface: "#212529",
    "surface-bright": "#CCBFD6",
    "surface-light": "#2b3035",
    "surface-variant": "#A3A3A3"
  }
});
