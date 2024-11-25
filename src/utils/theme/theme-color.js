import { argbFromHex, hexFromArgb, Hct, TonalPalette, DynamicColor, Contrast } from "@material/material-color-utilities";

/**
 * Creates a new ThemeColor object.
 *
 * @param {string} title - The title of the theme color.
 * @param {string} name - The name of the theme color. Will be used as the key in the theme object.
 * @param {string} [hex="#000000"] - The initial hex color of the theme color.
 * @param {number} [tone=30] - (Optional) The initial tone value of the theme color. The default value is `30`.
 * @param {boolean} [isCustom=false] - Whether the theme color is a custom color. The default value is `false` and is read only.
 */
export default class ThemeColor {
  constructor(title, name, hex = "#000000", tone = 30, isCustom = false) {
    this.title = title;
    Object.defineProperty(this, "name", { value: name, enumerable: true });
    this.hex = hex;
    this.tone = tone;
    Object.defineProperty(this, "initialTone", { value: tone });
    // Object.defineProperty(this, "onTone", { value: onTone });
    Object.defineProperty(this, "isCustom", { value: isCustom });

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
   * The tone value of the "on" color for this `ThemeColor`.
   *
   * Uses the `DynamicColor.foregroundTone()` method to compute the tone value of the "on" color.
   * @type {number} The tone value of the "on" color.
   */
  get onTone() {
    let ratio = ThemeColor.ratio;
    let fgTone = Math.round(DynamicColor.foregroundTone(this.tone, ratio));
    return fgTone;
  }

  /**
   * Computes the hex color for the "on" color for this `ThemeColor`.
   *
   * The method uses the onTone value to determine the tone of the "on" color.
   * @type {string} The hex representation of the "on" color.
   */
  get onHex() {
    const tp = TonalPalette.fromInt(this.argb);
    // const onArgb = this.name === "surfaceVariant" ? tp.tone(80) : tp.tone(90);
    const onArgb = tp.tone(this.onTone);
    const hex = hexFromArgb(onArgb);
    return hex;
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

ThemeColor.ratio = 8.5;

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
      return "CE";
    case "background":
    case "surface":
      return "N";
    case "surfaceVariant":
      return "NV";
    default:
      return "";
  }
};

ThemeColor.getForegroundTone = function (tone) {
  // Contrast value is defined by tone, regardless of color.
  // Since the theme item's tone just changed, we need to determine the onTone value.

  const ratio = 8.5;
  console.log(" - contrast ratio: ", ratio);

  // Implement contrast ratio for onTone in the store.
  const bgTone = tone;
  console.log(" - original tone: ", bgTone);

  // Measured ratio can only be measured when an onTone value is available.

  // const measuredRatio = Contrast.ratioOfTones(item.tone, item.onTone);
  // console.log(" - measured contrast ratio - tone -> onTone: ", measuredRatio);
  // const measuredRatio10 = Contrast.ratioOfTones(item.tone, 10);
  // console.log(" - measured contrast ratio - tone -> 10: ", measuredRatio10);
  // const measuredRatio90 = Contrast.ratioOfTones(item.tone, 90);
  // console.log(" - measured contrast ratio - tone -> 90: ", measuredRatio90);

  // Get the darker contrasting tone. Returns -1 if contrast ratio can not be met.
  const darker = Contrast.darker(original, ratio);
  console.log(" - darker tone: ", darker);
  // Get the lighter contrasting tone. Returns -1 if contrast ratio can not be met.
  const lighter = Contrast.lighter(original, ratio);
  console.log(" - lighter tone: ", lighter);

  const contrastTone = Math.max(Math.round(darker), Math.round(lighter));
  console.log(" - Contrast onTone: ", contrastTone);

  // If the contrast ratio can not be met (lighter and darker are -1), use the unsafe version.

  const darkerUnsafe = Contrast.darkerUnsafe(original, ratio);
  console.log(" - darker unsafe tone: ", darkerUnsafe);
  const lighterUnsafe = Contrast.lighterUnsafe(original, ratio);
  console.log(" - lighter unsafe onTone: ", lighterUnsafe);

  // Get the highest unsafe contrast tone.
  const contrastToneUnsafe = Math.max(Math.round(darkerUnsafe), Math.round(lighterUnsafe));
  console.log(" - Contrast onToneUnsafe: ", contrastToneUnsafe);

  // Check if safe tone is -1, if not, use it, otherwise use the unsafe tone.
  const onTone = contrastTone !== -1 ? contrastTone : contrastToneUnsafe;
  console.log(" - safe/unsafe onTone: ", onTone);

  const foregroundTone = DynamicColor.foregroundTone(item.tone, ratio);
  console.log(" - DynamicColor foregroundTone: ", foregroundTone);

  return onTone;
};
