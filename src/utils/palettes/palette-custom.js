import { argbFromHex, hexFromArgb, Blend, Hct, TonalPalette } from "@material/material-color-utilities";

/**
 * Creates a new PaletteCustom object.
 *
 * Unlike a `PaletteCore`, a `PaletteCustom` is not generated from a Variant scheme.
 *
 * When a scheme is created, it will contain these custom palettes:
 * - Success (success)
 * - Info (info)
 * - Warning (warning)
 * - Error (error)
 *
 * The difference between `PaletteCustom` and a `PaletteCore` is that a custom palette
 * can be harmonized (blended) with the scheme's source color.
 *
 * When `blend` is set to `true`, the custom palette is harmonized with the source color.
 * The harmonized color are available via the `customArgb` and `customHex` properties and
 * are used for display in the UI and generation of the Vuetify theme.
 *
 * The `hex` and `argb` properties always return the unblended color and should be used when editing the palette.
 *
 * @param {string} title - The title of the theme color. Used for display in the UI.
 * @param {string} name - The name of the theme color. Will be used as the key in the theme object.
 * @param {string} [hex="#000000"] - The hex color of the theme color.
 * @param {number} [source=0xff000000] - The source color of the scheme. This is needed for blending.
 * @param {boolean} [blend=false] - Whether the theme color should be blended with the source color. The default is `false`.
 */
export default class PaletteCustom {
  constructor(title, name, hex = "#000000", source = 0xff000000, blend = false) {
    this.title = title;
    Object.defineProperty(this, "name", { value: name, enumerable: true });
    this.hex = hex;
    this.source = source;
    this.blend = blend;
  }

  /**
   * The ARGB representation of the hex color.
   *
   * This always returns the unblended color, regardless of the blend setting.
   *
   * @type {number}
   */
  get argb() {
    return argbFromHex(this.hex);
  }

  /**
   * The HCT representation of the custom hex color.
   * @type {Hct}
   */
  get hct() {
    return Hct.fromInt(this.argb);
  }

  /**
   * The `TonalPalette` representation of the `ThemeColor`.
   * Uses the `customArgb` property, which results in a harmonized `TonalPalette` when blend is enabled.
   * @type {TonalPalette}
   */
  get tonalPalette() {
    let tp = TonalPalette.fromInt(this.customArgb);
    return tp;
  }

  /**
   * Indicates whether this instance represents a custom palette.
   * @type {boolean} Always `true` for a `PaletteCustom` instance.
   */
  get isCustom() {
    return true;
  }

  /**
   * The ARGB representation of the hex color, after applying the
   * blend mode if enabled.
   *
   * If blend mode is disabled, this returns the same value as
   * the `argb` property.
   *
   * @type {number}
   */
  get customArgb() {
    if (!this.blend) return this.argb;
    const sourceArgb = this.source;
    const designArgb = argbFromHex(this.hex);
    const blendArgb = Blend.harmonize(designArgb, sourceArgb);
    return blendArgb;
  }

  /**
   * The hex representation of the custom color, after applying the
   * blend mode if enabled.
   *
   * If the blend mode is disabled, this returns the same value as
   * the `hex` property.
   *
   * @type {string}
   */
  get customHex() {
    if (!this.blend) return this.hex;
    const blendHex = hexFromArgb(this.customArgb);
    return blendHex;
  }
}
