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
import { Variant } from "@/utils/dynamiccolor/variant.js";
import { TonalPalette } from "@material/material-color-utilities";
import * as math from "@material/material-color-utilities";

/**
 * A reversed Split Complementary theme - primary palette's hue is the source color + 180 degrees (the complementary color).
 * The secondary and tertiary palettes are split from the source color by 30 degrees in each direction,
 * which is the same as the Split Complementary theme, but offset by 180 degrees.
 *
 * Primary, secondary, and tertiary palettes have a fixed chroma of 20.
 *
 * @see https://www.figma.com/resource-library/what-are-split-complementary-colors/
 */
export class SchemeSplitReverse extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.SPLIT,
      contrastLevel,
      isDark,
      primaryPalette: TonalPalette.fromHueAndChroma(math.sanitizeDegreesDouble(sourceColorHct.hue + 180.0), 20),
      secondaryPalette: TonalPalette.fromHueAndChroma(math.sanitizeDegreesDouble(sourceColorHct.hue + 30.0), 20),
      tertiaryPalette: TonalPalette.fromHueAndChroma(math.sanitizeDegreesDouble(sourceColorHct.hue - 30.0), 20),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 4.0),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8.0)
    });
  }
}
