import vuetifyColors from "@/utils/color/vuetify-colors";
import tailwindColors from "@/utils/color/tailwind-colors";
import salesforceColors from "@/utils/color/salesforce-colors";
import metroColors from "@/utils/color/metro-colors";
import flatColors from "@/utils/color/flat-colors";
import bootstrapColors from "@/utils/color/bootstrap-colors";

import ColorSwatchNames from "@/utils/color/color-swatch-names";

export default class ColorSwatches {
  /**
   * Returns an array of theme presets.
   *
   * Each preset contains a `title` and a `value` property corresponding to the
   * name and identifier of one of the available color swatches, respectively.
   *
   * @returns {Array<{title: string, value: string}>} An array of object items.
   */
  static get presets() {
    return ColorSwatches.colors.map(({ title, value }) => ({ title, value }));
  }

  /**
   * Returns the swatches for the given preset name.
   *
   * Valid preset names are, (available as static properties):
   * - ColorSwatchNames.MATERIAL: "material"
   * - ColorSwatchNames.BOOTSTRAP: "bootstrap"
   * - ColorSwatchNames.TAILWIND: "tailwind"
   * - ColorSwatchNames.FLAT: "flat"
   * - ColorSwatchNames.METRO : "metro"
   * - ColorSwatchNames.SALESFORCE: "salesforce"
   *
   * @param {string} presetName - The name of the preset to get the swatches for.
   * @returns {string[][]} The swatches for the given preset name.
   */
  static getSwatchesFor(presetName) {
    console.log("ColorSwatches ::: getSwatchesFor");
    console.log(" - presetName: ", presetName);
    const swatches = ColorSwatches.colors.find((item) => item.value === presetName).swatches;
    return swatches;
  }
}

ColorSwatches.colors = Object.freeze([
  { title: "Material Design (default)", value: ColorSwatchNames.MATERIAL, swatches: vuetifyColors.swatches },
  { title: "Bootstrap", value: ColorSwatchNames.BOOTSTRAP, swatches: bootstrapColors.swatches },
  { title: "Tailwind", value: ColorSwatchNames.TAILWIND, swatches: tailwindColors.swatches },
  { title: "Flat", value: ColorSwatchNames.FLAT, swatches: flatColors.swatches },
  { title: "Metro UI", value: ColorSwatchNames.METRO, swatches: metroColors.swatches },
  { title: "Salesforce Lighting Design", value: ColorSwatchNames.SALESFORCE, swatches: salesforceColors.swatches }
]);
