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
import { DynamicScheme, Hct, TemperatureCache, TonalPalette } from "@material/material-color-utilities";
import { Variant } from "@/utils/dynamiccolor/variant.js";
import * as math from "@material/material-color-utilities";

/**
 * A Split Complimentary theme - the source color is used as the primary palette.
 * The secondary and tertiary palettes are split from the source color by 135 degrees in each direction.
 *
 * Primary, secondary, and tertiary palettes use the same chroma as the source color,
 * but the tone is normalized to 50.
 *
 * @see https://www.figma.com/resource-library/what-are-split-complementary-colors/
 */
export class SchemeSplit extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    const { secondaryHct, tertiaryHct } = SchemeSplit.split(sourceColorHct);
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.SPLIT,
      contrastLevel,
      isDark,
      primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
      secondaryPalette: TonalPalette.fromHueAndChroma(math.sanitizeDegreesDouble(secondaryHct.hue), secondaryHct.chroma),
      tertiaryPalette: TonalPalette.fromHueAndChroma(math.sanitizeDegreesDouble(tertiaryHct.hue), tertiaryHct.chroma),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 6.0),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12.0)
    });
  }
}

SchemeSplit.split = (sourceHct) => {
  console.log("SchemeSplit ::: split");
  let sourceTempCache = new TemperatureCache(sourceHct);
  let compHtc = sourceTempCache.complement;
  let compTempCache = new TemperatureCache(compHtc);
  // 3 HCT colors:
  // - first index = lower comp split (complementary Hue - 45)
  // - second index = source (complementary color)
  // - third index = higher comp split (complementary Hue + 45)
  let analogousHcts = compTempCache.analogous(3, 12);
  // let analogousHcts = sourceTempCache.analogous();
  let secondaryHct = analogousHcts[0];
  let tertiaryHct = analogousHcts[2];
  return { secondaryHct, tertiaryHct };
};
