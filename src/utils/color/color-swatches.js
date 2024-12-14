import vuetifyColors from "@/utils/color/vuetify-colors";
import tailwindColors from "@/utils/color/tailwind-colors";
import salesforceColors from "@/utils/color/salesforce-colors";
import metroColors from "@/utils/color/metro-colors";
import flatColors from "@/utils/color/flat-colors";
import bootstrapColors from "@/utils/color/bootstrap-colors";

// const colors = Object.freeze([
//   { title: "Material Design (default)", value: "material", swatches: vuetifyColors.swatches },
//   { title: "Bootstrap", value: "bootstrap", swatches: bootstrapColors.swatches },
//   { title: "Tailwind", value: "tailwind", swatches: tailwindColors.swatches },
//   { title: "Flat", value: "flat", swatches: flatColors.swatches },
//   { title: "Metro UI", value: "metro", swatches: metroColors.swatches },
//   { title: "Salesforce Lighting Design", value: "salesforce", swatches: salesforceColors.swatches }
// ]);

export default class ColorSwatches {
  // static #colors = Object.freeze([
  //   { title: "Material Design (default)", value: "material", swatches: vuetifyColors.swatches },
  //   { title: "Bootstrap", value: "bootstrap", swatches: bootstrapColors.swatches },
  //   { title: "Tailwind", value: "tailwind", swatches: tailwindColors.swatches },
  //   { title: "Flat", value: "flat", swatches: flatColors.swatches },
  //   { title: "Metro UI", value: "metro", swatches: metroColors.swatches },
  //   { title: "Salesforce Lighting Design", value: "salesforce", swatches: salesforceColors.swatches }
  // ]);
  // static presets = () => {
  //   console.log("ColorSwatches ::: presets");
  //   const presetsMap = ColorSwatches.colors.map(({ title, value }) => ({ title, value }));
  //   console.log(" - presetsMap: ", presetsMap);
  //   return presetsMap;
  // };

  static get presets() {
    return ColorSwatches.colors.map(({ title, value }) => ({ title, value }));
  }

  static getSwatchesFor(presetName) {
    console.log("ColorSwatches ::: getSwatchesFor");
    console.log(" - presetName: ", presetName);
    const swatches = ColorSwatches.colors.find((item) => item.value === presetName).swatches;
    return swatches;
  }
}

ColorSwatches.colors = Object.freeze([
  { title: "Material Design (default)", value: "material", swatches: vuetifyColors.swatches },
  { title: "Bootstrap", value: "bootstrap", swatches: bootstrapColors.swatches },
  { title: "Tailwind", value: "tailwind", swatches: tailwindColors.swatches },
  { title: "Flat", value: "flat", swatches: flatColors.swatches },
  { title: "Metro UI", value: "metro", swatches: metroColors.swatches },
  { title: "Salesforce Lighting Design", value: "salesforce", swatches: salesforceColors.swatches }
]);
