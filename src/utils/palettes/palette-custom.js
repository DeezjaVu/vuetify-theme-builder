import { argbFromHex, hexFromArgb, Blend, Hct } from "@material/material-color-utilities";

export default class PaletteCustom {
  constructor(title, name, hex = "#000000", source = 0xff000000, blend = false) {
    this.title = title;
    Object.defineProperty(this, "name", { value: name, enumerable: true });
    this.hex = hex;
    this.source = source;
    this.blend = blend;
  }

  /**
   * The ARGB representation of the custom hex color.
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
   * Always returns true, indicating that this is a custom color
   * palette.
   *
   * @type {boolean}
   */
  get isCustom() {
    return true;
  }

  /**
   * The ARGB representation of the custom hex color, after applying the
   * blend mode if enabled.
   *
   * If the blend mode is disabled, this returns the same value as
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

  get customHex() {
    if (!this.blend) return this.hex;
    const blendHex = hexFromArgb(this.customArgb);
    return blendHex;
  }
}
