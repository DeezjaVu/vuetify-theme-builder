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
 * A custom Dynamic Color scheme based on the <code>`Triadic`</code> color principle.
 * Triadic color schemes tend to be more bold and playful.
 *
 * The source color is used as the primary palette.
 * The secondary and tertiary palettes are equally distributed from the source color by 90 degrees in each direction.
 * Primary, secondary, and tertiary palettes use the same chroma as the source color.
 *
 * @see https://www.figma.com/resource-library/what-are-triadic-colors/
 */
export class SchemeTriadic extends DynamicScheme {
  constructor(sourceColorHct, isDark, contrastLevel) {
    super({
      sourceColorArgb: sourceColorHct.toInt(),
      variant: Variant.TRIADIC,
      contrastLevel,
      isDark,
      primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma),
      secondaryPalette: TonalPalette.fromHueAndChroma(math.sanitizeDegreesDouble(sourceColorHct.hue + 90.0), sourceColorHct.chroma),
      tertiaryPalette: TonalPalette.fromHueAndChroma(math.sanitizeDegreesDouble(sourceColorHct.hue - 90.0), sourceColorHct.chroma),
      neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 6.0),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12.0)
    });
  }
}
