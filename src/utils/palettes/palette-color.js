import { argbFromHex, Hct } from "@material/material-color-utilities";

export default class PaletteColor {
  constructor(title, name, hex = "#000000") {
    this.title = title;
    this.name = name;
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
}
