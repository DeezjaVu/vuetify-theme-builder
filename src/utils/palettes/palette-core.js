import { argbFromHex, Hct } from "@material/material-color-utilities";

/**
 * Creates a new PaletteCore object.
 *
 * Represents a palette generated from the scheme variants.
 * When a scheme is created, it will contain one of these objects for each color in the scheme.
 * - Source (source)
 * - Primary (primary)
 * - Secondary (secondary)
 * - Tertiary (tertiary)
 * - Error (error)
 * - Neutral (neutral)
 * - Neutral Variant (neutralVariant)
 *
 * Although the (Material Utilities) Variant schemes do not include a `Source` palette,
 * one is created manually and is added to the scheme.
 * The source palette has no theme color equivalent as it is not part of the overal theme.
 * It is however used for blending (harmonizing) custom theme colors.
 *
 * Note that the scheme's `Error` palette is no longer used. Instead a custom `Error` palette is created.
 * This is to group it together with the `Success`, `Info`, and `Warning` custom palettes
 * and to allow blending/harmonizing of the Error palette, as is the case for every `CustomPalette`.
 *
 * @param {string} title - The title of the theme color, used for display.
 * @param {string} name - The name of the theme color. Will be used as the key in the theme object.
 * @param {string} [hex="#000000"] - The hex color of the theme color.
 */
export default class PaletteCore {
  /**
   * Creates a new PaletteCore object.
   */
  constructor(title, name, hex = "#000000") {
    this.title = title;
    Object.defineProperty(this, "name", { value: name, enumerable: true });
    this.hex = hex;
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
   * Returns false, indicating that this is not a custom color palette.
   * Custom color palettes are represented by the PaletteCustom class.
   * @type {boolean}
   */
  get isCustom() {
    return false;
  }
}
