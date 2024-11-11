import { argbFromHex, Hct } from "@material/material-color-utilities";

/**
 * Creates a new ThemeColor object.
 *
 * @param {string} title - The title of the theme color.
 * @param {string} name - The name of the theme color. Will be used as the key in the theme object.
 * @param {string} [hex="#000000"] - The initial hex color of the theme color.
 * @param {number} [tone=30] - The initial tone value of the theme color.
 */
export default class ThemeColor {
  constructor(title, name, hex = "#000000", tone = 30) {
    this.title = title;
    Object.defineProperty(this, "name", { value: name, enumerable: true });
    this.hex = hex;
    this.tone = tone;
    Object.defineProperty(this, "initialTone", { value: tone });
    this.toggle = false;
  }
  /**
   * The ARGB representation of the hex color.
   * @type {number}
   */
  get argb() {
    return argbFromHex(this.hex);
  }

  /**
   * The HCT representation of the hex color.
   * @type {Hct}
   */
  get hct() {
    return Hct.fromInt(this.argb);
  }

  /**
   * The label of the color.
   *
   * The label is in the format `"{prefix}-{tone}"`, where `{prefix}` indicates the Palette
   * the color is derived from (e.g. "P" for primary, "S" for secondary, "N" for neutral etc.),
   * and `{tone}` is the tone amount used on the Palette to achieve the theme color (e.g. "30", "60", etc.).
   *
   * So for example a theme color with label `"P-30"` means that the theme color is derived from the `primary` Palette with a tone of 30 applied to it.
   * Some theme colors are not derived from a Palette with the same name, for instance `background` and `surface` are derived from the `neutral` Palette.
   * So the label of the background theme color looks like: "N-10".
   *
   * @type {string}
   */
  get label() {
    return ThemeColor.getLabelPrefix(this.name) + "-" + this.tone.toString();
  }
}

ThemeColor.getLabelPrefix = function (name) {
  switch (name) {
    case "primary":
      return "P";
    case "secondary":
      return "S";
    case "tertiary":
      return "T";
    case "success":
      return "CS";
    case "info":
      return "CI";
    case "warning":
      return "CW";
    case "error":
      return "E";
    case "background":
    case "surface":
      return "N";
    case "surfaceVariant":
      return "NV";
    default:
      return "";
  }
};
