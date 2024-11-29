/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DynamicScheme } from "@material/material-color-utilities";
import { TemperatureCache } from "@material/material-color-utilities";
import { Variant } from "@/utils/dynamiccolor/variant.js";
import { TonalPalette } from "@material/material-color-utilities";
import * as math from "@material/material-color-utilities";

/**
 * A custom Dynamic Color scheme based on the <code>`Analogous`</code> color principle.
 * Analogous produces a harmonious effect with colors adjacent to each other.
 *
 * The source color is used as the primary palette.
 * The secondary and tertiary palettes are equally distributed from the source color by 30 degrees in each direction.
 * Primary, secondary, and tertiary palettes use the same chroma as the source color.
 *
 * @see https://www.figma.com/dictionary/analogous-colors/
 */
export class SchemeAnalogous extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    const { secondaryHct, tertiaryHct } = SchemeAnalogous.analogous(sourceColorHct);
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.ANALOGOUS,
      contrastLevel,
      isDark,
      // TODO: Use a chroma of 36 for primary/secondary/tertiary palettes.
      primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
      secondaryPalette: TonalPalette.fromHueAndChroma(secondaryHct.hue, secondaryHct.chroma),
      tertiaryPalette: TonalPalette.fromHueAndChroma(tertiaryHct.hue, tertiaryHct.chroma),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 4.0),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8.0)
    });
  }
}

/**
 * Returns an object with two HCT colors: secondaryHct, and tertiaryHct.
 * Ssecondary is the higher analogous color (source Hue+30),
 * and tertiary is the lower analogous color (source Hue-30).
 *
 * @param {Hct} sourceHct
 * @returns {Object} An object with two properties: secondaryHct, tertiaryHct.
 * @example
 * const { secondaryHct, tertiaryHct } = SchemeAnalogous.analogous(sourceHct);
 */
SchemeAnalogous.analogous = (sourceHct) => {
  console.log("SchemeAnalogous ::: analogous");
  let sourceTempCache = new TemperatureCache(sourceHct);
  // 3 HCT colors:
  // - first index = lower analogous (source Hue-30)
  // - second index = source
  // - third index = higher analogous (source Hue+30)
  let analogousHcts = sourceTempCache.analogous(3);
  // let analogousHcts = sourceTempCache.analogous();
  let secondaryHct = analogousHcts[0];
  let tertiaryHct = analogousHcts[2];
  return { secondaryHct, tertiaryHct };
};
