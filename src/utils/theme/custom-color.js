import { argbFromHex, Hct } from "@material/material-color-utilities";

export default class CustomColor {
  constructor(title, name, hex = "#000000") {
    this.title = title;
    this.name = name;
    this.hex = hex;
    this.tone = 30;
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
    return CustomColor.getLabelPrefix(this.name) + "-" + this.tone.toString();
  }
}

CustomColor.getLabelPrefix = function (name) {
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
