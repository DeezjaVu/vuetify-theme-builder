<template>
  <v-container class="fill-height px-12 mx-auto">
    <!--  -->
    <!-- TOP ROW - IMAGE CARDS -->
    <!--  -->
    <ColorDialog
      id="utilities-color-dialog"
      v-model="modalColorOpen"
      :color-name="selectedColorName"
      v-model:picker-color="selectedColor"
      @update:picker-color="editColorChangeHandler"
      @update="editColorUpdateHandler"
      @cancel="editColorCancelHandler"
    />
    <v-window class="v-container pa-0 mt-2 mb-6 mx-auto" show-arrows>
      <v-window-item v-for="(i, idx1) in Math.ceil(picsum.length / rowNumItems)" :key="`row-${idx1}`">
        <v-row class="align-sm-stretch">
          <!--  -->
          <!-- IMAGE CARDS -->
          <!--  -->
          <v-col cols="3" v-for="(k, idx2) in rowNumItems" :key="`card-${idx1}-${idx2}`">
            <v-card
              v-if="idx1 * rowNumItems + idx2 < picsum.length"
              :id="`img-card-${idx1 * rowNumItems + idx2}`"
              :image="picsum[idx1 * rowNumItems + idx2]"
              density="compact"
              color="white"
              variant="outlined"
            >
              <v-card-item class="card-item-img">
                <v-card-title class="d-sm-none d-lg-flex">Color from image</v-card-title>
                <v-card-subtitle>Image {{ idx1 * rowNumItems + k }}</v-card-subtitle>
                <template #append>
                  <v-btn icon="mdi-select-color" size="small" variant="text" @click="imageButtonClickHandler(idx1, idx2)"> </v-btn>
                </template>
              </v-card-item>
              <!-- <v-card-text class="fill-height"> extract color </v-card-text> -->
              <template #image>
                <!-- img `src` is automatically applied from the v-card's `image` prop -->
                <v-img gradient="to top, rgb(255 255 255 / 5%), rgb(0 0 0 / 40%)" crossorigin="anonymous"></v-img>
                <!-- <v-img crossorigin="anonymous"></v-img> -->
              </template>
              <!--  style="text-shadow: black 0px 0px 6px; background: rgb(255 255 255 / 12%)" -->
              <v-card-actions>
                <v-icon icon="mdi-check" v-if="idx1 * rowNumItems + idx2 === selectedImageIdx"></v-icon>
                <v-spacer></v-spacer>
                <!-- <v-btn @click="imageButtonClickHandler(idx1, idx2)">Get Color</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>

    <!-- BOTTOM ROW CARDS -->
    <v-row>
      <!-- LEFT SIDE COLUMN -->
      <v-col cols="12" sm="6" md="6" lg="4" xl="3" mobile-break-point="700" class="d-flex flex-column">
        <!-- SOURCE COLOR ROW -->
        <v-row class="flex-grow-0">
          <v-col>
            <!-- SOURCE COLOR CARD -->
            <v-card :color="cardColor">
              <v-card-item>
                <v-card-title>Color Palette</v-card-title>
                <v-card-subtitle>Source</v-card-subtitle>
                <template #append>
                  <v-btn variant="text" size="small" icon="mdi-export"> </v-btn>
                </template>
              </v-card-item>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
                voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- PALETTE COLORS NAV BUTTONS -->
        <v-card class="d-flex flex-column flex-grow-1" density="compact">
          <v-card-text>
            <!-- PALETTE COLORS ROWS -->
            <template v-for="item in paletteColors" :key="item.name">
              <v-row>
                <v-col class="py-1">
                  <!-- PALETTE COLOR CARD -->
                  <v-card class="rounded-e-pill rounded-s-pill" variant="flat" color="secondary" density="compact">
                    <v-card-item class="px-3">
                      <template #prepend>
                        <v-btn class="mr-4" :color="item.hex" icon @click="paletteButtonClickHandler(item)"></v-btn>
                      </template>
                      <v-card-title class="text-body-1 font-weight-light">
                        {{ item.title }}
                      </v-card-title>
                      <v-card-subtitle class="text-subtitle-2 font-mono font-weight-light">
                        {{ item.hex }}
                      </v-card-subtitle>
                      <template #append v-if="item.name === `source`">
                        <v-tooltip
                          text="Random color."
                          close-on-content-click
                          v-model="randomTooltipOpen"
                          @update:model-value="randomTooltipUpdateHandler"
                        >
                          <template v-slot:activator="{ props }">
                            <v-btn
                              icon="mdi-tools"
                              v-bind="props"
                              size="small"
                              variant="text"
                              aria-label="Random color"
                              @click="randomButtonClickHandler(item)"
                            ></v-btn>
                          </template>
                        </v-tooltip>
                      </template>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- RIGHT SIDE COLUMN CARDS -->
      <v-col>
        <v-row>
          <template v-for="item in paletteColors" :key="item.name">
            <v-col v-if="item.name !== `source`" cols="12" sm="12" md="12" lg="6" xl="4">
              <!-- <v-card title="Color" :subtitle="item.title" :color="item.hex"> -->
              <v-card :color="item.hex">
                <v-card-item>
                  <v-card-subtitle>{{ item.title }}</v-card-subtitle>
                  <template #append>
                    <!-- <v-chip size="small" label="P-40">P-40</v-chip> -->
                    <v-btn variant="text" size="small" icon="mdi-content-copy"> </v-btn>
                  </template>
                </v-card-item>
                <!-- 
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum pariatur animi obcaecati dolor labore quos nobis, ea
                  voluptatem officiis quibusdam molestias odio aliquam eligendi sapiente porro eveniet blanditiis optio et?
                </v-card-text> 
                -->
                <v-card-actions class="ga-0">
                  <!--  font-mono mono-sm--text font-weight-light -->
                  <template v-for="tone in getTonePaletteFromHex(item.hex).reverse()" :key="`tone-${item.name}-${tone.tone}`">
                    <!-- TODO: UtitlitiesView ::: implement hover dialog with tone details -->
                    <!-- border="md" elevation="2" -->
                    <v-sheet class="d-flex align-center justify-center" width="100%" height="50" :color="tone.hex" elevation="3">
                      <code class="mono-sm--text font-weight-light">
                        {{ tone.tone }}
                      </code>
                    </v-sheet>
                  </template>
                </v-card-actions>
              </v-card>
            </v-col>
          </template>
        </v-row>

        <!-- HCT COLOR ROW -->
        <v-row>
          <v-col>
            <v-card>
              <v-card-item>
                <v-card-title>HCT Color Picker</v-card-title>
              </v-card-item>
              <v-card-text>
                <v-row>
                  <v-col cols="4">
                    <v-list class="font-mono">
                      <v-list-item>
                        <pre>HCT: {{ JSON.stringify(selectedHct, null, 2) }}</pre>
                      </v-list-item>
                      <v-list-item>HCT ARGB: {{ selectedHct.argb }} - HCT HEX: {{ argbToHex(selectedHct.argb) }}</v-list-item>
                      <v-list-item>Hue: {{ selectedHue }} - HCT Hue: {{ selectedHct.hue }}</v-list-item>
                      <v-list-item>Chroma: {{ selectedChroma }} - HCT Chroma: {{ selectedHct.chroma }}</v-list-item>
                      <v-list-item>Tone: {{ selectedTone }} - HCT Tone: {{ selectedHct.tone }}</v-list-item>
                      <v-list-item> Palette Primary: {{ JSON.stringify(getPalettePrimary(), null, 2) }} </v-list-item>
                      <v-list-item>Scheme Primary: {{ getDarkPrimary() }}</v-list-item>
                    </v-list>
                  </v-col>

                  <v-col cols="4">
                    <!-- HEX COLOR CARD -->
                    <v-row>
                      <v-col>
                        <v-card :color="argbToHex(selectedHct.argb)" density="compact">
                          <v-card-item>
                            <v-card-title class="text-body-1 font-weight-light">Source</v-card-title>
                            <v-card-subtitle class="font-mono">{{ argbToHex(selectedHct.argb) }}</v-card-subtitle>
                            <template #append>
                              <v-btn icon="mdi-content-copy" size="small" variant="text" @click="copySelectedColorClickHandler" />
                              <v-btn icon="mdi-select-color" size="small" variant="text" @click="useSelectedColorClickHandler" />
                            </template>
                          </v-card-item>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card-subtitle> Hue: </v-card-subtitle>
                        <v-slider
                          class="hue-slider-track"
                          v-model="selectedHue"
                          min="0"
                          max="360"
                          step="1"
                          @update:model-value="hueSliderUpdateHandler"
                        >
                          <template v-slot:append>
                            <v-text-field
                              class="font-mono--input mono-sm--input"
                              v-model="selectedHue"
                              width="80"
                              type="number"
                              min="0"
                              max="360"
                              step="1"
                              density="compact"
                              single-line
                              hide-details
                              @update:model-value="hueSliderUpdateHandler"
                            >
                            </v-text-field>
                          </template>
                        </v-slider>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card-subtitle> Chroma: </v-card-subtitle>
                        <!-- gradient track background - gray to color -->
                        <!-- background: linear-gradient(90deg, rgba(119,119,119,1) 0%, rgba(228,0,123,1) 100%); -->
                        <v-slider
                          class="chroma-slider-track"
                          v-model="selectedChroma"
                          min="0"
                          max="100"
                          step="1"
                          @update:model-value="chromaSliderUpdateHandler"
                        >
                          <template v-slot:append>
                            <v-text-field
                              class="font-mono--input mono-sm--input"
                              v-model="selectedChroma"
                              width="80"
                              type="number"
                              min="0"
                              max="100"
                              step="1"
                              density="compact"
                              single-line
                              hide-details
                              @update:model-value="chromaSliderUpdateHandler"
                            >
                            </v-text-field>
                          </template>
                        </v-slider>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-card-subtitle>Tone:</v-card-subtitle>
                        <!-- gradient track background - black to color to white -->
                        <!-- background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(228,0,123,1) 50%, rgba(255,255,255,1) 100%)' -->
                        <v-slider
                          class="tone-slider-track"
                          v-model="selectedTone"
                          min="0"
                          max="100"
                          step="1"
                          @update:model-value="toneSliderUpdateHandler"
                        >
                          <template v-slot:append>
                            <v-text-field
                              class="font-mono--input mono-sm--input"
                              v-model="selectedTone"
                              width="80"
                              type="number"
                              density="compact"
                              single-line
                              hide-details
                              max="100"
                              min="0"
                              step="1"
                              @update:model-value="toneSliderUpdateHandler"
                            >
                            </v-text-field>
                          </template>
                        </v-slider>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="4">
                    <!-- <v-list> -->
                    <template v-for="(item, idx) in customThemeColors" :key="`card-${item.name}-${idx}`">
                      <!-- <v-sheet :color="item.hex" class="mb-2 pa-2 d-flex flex-column">
                        <v-list-item-title> {{ item.title }} </v-list-item-title>
                        <v-list-item-subtitle> {{ item.hex }} </v-list-item-subtitle>
                      </v-sheet> -->
                      <v-card class="mb-4" :color="item.hex" density="compact">
                        <v-card-item>
                          <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                          <v-card-subtitle class="font-mono text-subtitle-2">{{ item.hex }}</v-card-subtitle>
                          <template #append>
                            <v-btn icon="mdi-content-copy" size="small" variant="text" />
                            <v-btn icon="mdi-select-color" size="small" variant="text" />
                          </template>
                        </v-card-item>
                      </v-card>
                    </template>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- THEME COLORS ROW -->
    <v-row>
      <v-col>
        <v-card title="Light Theme">
          <v-card-text>
            <v-row>
              <!-- HCT GENERATED LIGHT THEME COLORS -->
              <v-col>
                <template v-for="(item, idx) in lightThemeColors" :key="`card-light-01-${item.name}-${idx}`">
                  <v-card class="mb-4" :color="item.hex" density="compact">
                    <v-card-item>
                      <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                      <v-card-subtitle class="text-uppercase">
                        <code class="mono-sm--text font-weight-light">{{ item.hex }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-chip size="small">
                          <code class="mono-sm--text font-weight-light"> {{ item.label }} </code>
                        </v-chip>
                        <v-btn icon="mdi-content-copy" size="small" variant="text" />
                        <v-btn icon="mdi-select-color" size="small" variant="text" />
                      </template>
                    </v-card-item>
                  </v-card>
                </template>
              </v-col>
              <!-- HCT TONAL LIGHT THEME COLORS -->
              <v-col>
                <template v-for="(item, idx) in lightToneContainerColors" :key="`card-light-02-${item.name}-${idx}`">
                  <v-card class="mb-4" :color="item.hex" density="compact">
                    <v-card-item>
                      <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                      <v-card-subtitle class="text-uppercase">
                        <code class="mono-sm--text font-weight-light">{{ item.hex }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-chip size="small">
                          <code class="mono-sm--text font-weight-light"> {{ item.label }} </code>
                        </v-chip>
                        <v-btn icon="mdi-content-copy" size="small" variant="text" />
                        <v-btn icon="mdi-select-color" size="small" variant="text" />
                      </template>
                    </v-card-item>
                  </v-card>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card title="Dark Theme">
          <v-card-text>
            <v-row>
              <!-- HCT GENERATED LIGHT THEME COLORS -->
              <v-col>
                <template v-for="(item, idx) in darkThemeColors" :key="`card-dark-01-${item.name}-${idx}`">
                  <v-card class="mb-4" :color="item.hex" density="compact">
                    <v-card-item>
                      <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                      <v-card-subtitle class="text-uppercase">
                        <code class="mono-sm--text font-weight-light">{{ item.hex }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-chip size="small">
                          <code class="mono-sm--text font-weight-light"> {{ item.label }} </code>
                        </v-chip>
                        <v-btn icon="mdi-content-copy" size="small" variant="text" />
                        <v-btn icon="mdi-select-color" size="small" variant="text" />
                      </template>
                    </v-card-item>
                  </v-card>
                </template>
              </v-col>
              <!-- HCT TONAL DARK THEME COLORS -->
              <v-col>
                <template v-for="(item, idx) in darkToneContainerColors" :key="`card-dark-02-${item.name}-${idx}`">
                  <v-card class="mb-4" :color="item.hex" density="compact">
                    <v-card-item>
                      <v-card-title class="text-body-1 font-weight-light">{{ item.title }}</v-card-title>
                      <v-card-subtitle class="text-uppercase">
                        <code class="mono-sm--text font-weight-light">{{ item.hex }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-chip size="small">
                          <code class="mono-sm--text font-weight-light"> {{ item.label }} </code>
                        </v-chip>
                        <v-btn icon="mdi-content-copy" size="small" variant="text" />
                        <v-btn icon="mdi-select-color" size="small" variant="text" />
                      </template>
                    </v-card-item>
                  </v-card>
                </template>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  // https://github.com/material-foundation/material-color-utilities/tree/main/typescript
  // https://github.com/material-foundation/material-color-utilities#readme
  // https://material-foundation.github.io/material-theme-builder/
  // https://m3.material.io/styles/color/roles
  // https://m3.material.io/styles/color/system/how-the-system-works
  // https://github.com/material-foundation/material-color-utilities/issues/90

  import { ref, onMounted, reactive, warn } from "vue";
  import {
    argbFromHex,
    hexFromArgb,
    themeFromSourceColor,
    themeFromImage,
    Hct,
    CorePalette,
    TonalPalette
  } from "@material/material-color-utilities";
  import * as colorUtils from "@/utils/colorUtils.js";
  import { applyTheme, sourceColorFromImage } from "@material/material-color-utilities";
  import tinycolor from "tinycolor2";
  import { imgAssets } from "@/utils/images/image-assets.js";

  const randomTooltipOpen = ref(false);

  const modalColorOpen = ref(false);

  const tempColor = ref("");
  const selectedColorName = ref("");
  const selectedColor = ref("");

  const selectedImageIdx = ref(-1);
  const rowNumItems = ref(8);

  const cardColor = ref("#769CDF");
  const randomColor = ref(null);

  // https://picsum.photos/
  const picsum = [
    "https://picsum.photos//440/128?random=1",
    "https://picsum.photos//440/128?random=2",
    "https://picsum.photos//440/128?random=3",
    "https://picsum.photos//440/128?random=4",
    "https://picsum.photos/id/2/440/128",
    "https://picsum.photos/id/18/440/128",
    "https://picsum.photos/id/56/440/128",
    "https://picsum.photos/id/78/440/128",
    "https://picsum.photos/id/113/440/128",
    ...imgAssets
  ];

  const hctTheme = ref(null);

  const paletteColors = reactive([
    { title: "Source", name: "source", hex: "#769CDF" },
    { title: "Primary", name: "primary", hex: "#769CDF" },
    { title: "Secondary", name: "secondary", hex: "#8991A2" },
    { title: "Tertiary", name: "tertiary", hex: "#A288A6" },
    { title: "Error", name: "error", hex: "#FF5449" },
    { title: "Neutral", name: "neutral", hex: "#919093" },
    { title: "Neutral Variant", name: "neutralVariant", hex: "#8E9098" }
  ]);

  const customThemeColors = reactive([
    { title: "Success", name: "success", hex: "#4CAF50" },
    { title: "Info", name: "info", hex: "#2196F3" },
    { title: "Warning", name: "warning", hex: "#FB8C00" },
    { title: "Error", name: "error", hex: "#CF6679" }
  ]);

  const darkThemeColors = reactive([
    // { title: "Source", name: "source", hex: "#3f4b2c" },
    { title: "Primary", name: "primary", hex: "#5f8128", label: "P-80" },
    { title: "Secondary", name: "secondary", hex: "#717b60", label: "S-80" },
    { title: "Tertiary", name: "tertiary", hex: "#527f7a", label: "T-80" },
    { title: "Error", name: "error", hex: "#de3730", label: "E-80" },
    { title: "Background", name: "background", hex: "#777771", label: "N-10" },
    { title: "Surface", name: "surface", hex: "#75786c", label: "N-10" },
    { title: "Surface Variant", name: "surfaceVariant", hex: "#75786c", label: "NV-10" }
  ]);

  const darkToneColors = reactive([
    // { title: "Source", name: "source", hex: "#3f4b2c" },
    { title: "Primary", name: "primary", hex: "#5f8128", label: "P-80" },
    { title: "Secondary", name: "secondary", hex: "#717b60", label: "S-80" },
    { title: "Tertiary", name: "tertiary", hex: "#527f7a", label: "T-80" },
    { title: "Error", name: "error", hex: "#de3730", label: "E-80" },
    { title: "Background", name: "background", hex: "#777771", label: "N-10" },
    { title: "Surface", name: "surface", hex: "#75786c", label: "N-10" },
    { title: "Surface Variant", name: "surfaceVariant", hex: "#75786c", label: "NV-30" }
  ]);

  const darkToneContainerColors = reactive([
    // { title: "Source", name: "source", hex: "#3f4b2c" },
    { title: "Primary", name: "primary", hex: "#5f8128", label: "P-30" },
    { title: "Secondary", name: "secondary", hex: "#717b60", label: "S-30" },
    { title: "Tertiary", name: "tertiary", hex: "#527f7a", label: "T-30" },
    { title: "Error", name: "error", hex: "#de3730", label: "E-30" },
    { title: "Background", name: "background", hex: "#777771", label: "N-10" },
    { title: "Surface", name: "surface", hex: "#75786c", label: "N-10" },
    { title: "Surface Variant", name: "surfaceVariant", hex: "#75786c", label: "NV-30" }
  ]);

  const lightThemeColors = reactive([
    // { title: "Source", name: "source", hex: "#3f4b2c" },
    { title: "Primary", name: "primary", hex: "#5f8128", label: "P-40" },
    { title: "Secondary", name: "secondary", hex: "#717b60", label: "S-40" },
    { title: "Tertiary", name: "tertiary", hex: "#527f7a", label: "T-40" },
    { title: "Error", name: "error", hex: "#de3730", label: "E-40" },
    { title: "Background", name: "background", hex: "#777771", label: "N-99" },
    { title: "Surface", name: "surface", hex: "#777771", label: "N-99" },
    { title: "Surface Variant", name: "surfaceVariant", hex: "#75786c", label: "NV-90" }
  ]);

  const lightToneColors = reactive([
    // { title: "Source", name: "source", hex: "#3f4b2c" },
    { title: "Primary", name: "primary", hex: "#5f8128", label: "P-40" },
    { title: "Secondary", name: "secondary", hex: "#717b60", label: "S-40" },
    { title: "Tertiary", name: "tertiary", hex: "#527f7a", label: "T-40" },
    { title: "Error", name: "error", hex: "#de3730", label: "E-40" },
    { title: "Background", name: "background", hex: "#777771", label: "N-99" },
    { title: "Surface", name: "surface", hex: "#777771", label: "N-99" },
    { title: "Surface Variant", name: "surfaceVariant", hex: "#75786c", label: "NV-90" }
  ]);

  const lightToneContainerColors = reactive([
    // { title: "Source", name: "source", hex: "#3f4b2c" },
    { title: "Primary", name: "primary", hex: "#5f8128", label: "P-90" },
    { title: "Secondary", name: "secondary", hex: "#717b60", label: "S-90" },
    { title: "Tertiary", name: "tertiary", hex: "#527f7a", label: "T-90" },
    { title: "Error", name: "error", hex: "#de3730", label: "E-90" },
    { title: "Background", name: "background", hex: "#777771", label: "N-99" },
    { title: "Surface", name: "surface", hex: "#777771", label: "N-99" },
    { title: "Surface Variant", name: "surfaceVariant", hex: "#75786c", label: "NV-90" }
  ]);

  const selectedHct = ref(Hct.fromInt(argbFromHex(cardColor.value)));
  console.log("UtilitiesView ::: selectedHct: ", selectedHct.value);
  // console.log("UtilitiesView ::: selectedHct HEX: ", hexFromArgb(selectedHct.value.argb));
  // console.log("UtilitiesView ::: cardColor HEX: ", cardColor.value);

  const selectedHue = ref(Math.round(selectedHct.value.hue)); // selectedHct.value.hue);
  const selectedChroma = ref(Math.round(selectedHct.value.chroma)); //selectedHct.value.chroma);
  const selectedTone = ref(Math.round(selectedHct.value.tone)); // selectedHct.value.tone);

  const chromaSliderTrack = ref(null);
  const toneSliderTrack = ref(null);

  // If you want to get a color from the Tonal Palette, use the following:
  // const primary98 = TonalPalette.fromInt(primary).tone(98);

  onMounted(() => {
    console.log("UtilitiesView ::: onMounted");
    // get references to slider elements
    chromaSliderTrack.value = document.querySelector(".chroma-slider-track .v-slider-track .v-slider-track__background");
    toneSliderTrack.value = document.querySelector(".tone-slider-track .v-slider-track .v-slider-track__background");

    console.log(" - chromaSliderTrack: ", chromaSliderTrack);
    console.log(" - toneSliderTrack: ", toneSliderTrack);

    updateSliderBackgrounds();

    const colors = [
      Hct.from(0, 100, 50),
      Hct.from(60, 100, 50),
      Hct.from(120, 100, 50),
      Hct.from(180, 100, 50),
      Hct.from(240, 100, 50),
      Hct.from(300, 100, 50),
      Hct.from(360, 100, 50)
    ];

    const hexColors = colors.map((color) => argbToHex(color.argb));

    const gradientCss = `linear-gradient(to right, ${hexColors.join(", ")})`;
    // linear-gradient(to right, #E7007D, #B26300, #6D7F00, #008673, #007FB4, #8851FF, #E7007D)

    console.log(gradientCss);
  });

  function imageButtonClickHandler(idx1, idx2) {
    console.log("UtilitiesView ::: imageButtonClickHandler");
    console.log(" - index 1: ", idx1);
    console.log(" - index 2: ", idx2);
    let idx = idx1 * rowNumItems.value + idx2;

    selectedImageIdx.value = idx;

    // get the source color object from palette
    const sourceObject = paletteColors.find((item) => item.name === "source");
    console.log(" - sourceObject: ", sourceObject);

    // update the title to reflect an image source
    sourceObject.title = "Source (from image)";

    const cardId = "img-card-" + idx.toString();
    console.log(" - cardId: ", cardId);

    // get the card matching the cardId
    const card = document.getElementById(cardId);
    console.log(" - card: ", card);

    // get the image from the card
    const imgObj = card.querySelector("img");

    // set crossOrigin to allow CORS (generating color from image won't work without it)
    imgObj.setAttribute("crossOrigin", "anonymous");
    // TODO: may have to add a date to the image url to make crossorigin stick.
    // https://stackoverflow.com/a/33135803
    // If there's still a problem on live server, get around it by converting to base64
    // https://stackoverflow.com/a/67120628
    console.log(" - img: ", idx, imgObj);

    getThemeFromImage(imgObj);
  }

  async function getThemeFromImage(imgObj) {
    console.log("UtilitiesView ::: getThemeFromImage");

    const successCustom = {
      name: "success",
      value: argbFromHex("#4CAF50"),
      blend: true
    };
    const infoCustom = {
      name: "info",
      value: argbFromHex("#2196F3"),
      blend: true
    };
    const warningCustom = {
      name: "warning",
      value: argbFromHex("#FB8C00"),
      blend: true
    };
    const errorCustom = {
      name: "error",
      value: argbFromHex("#CF6679"),
      blend: true
    };

    // get the theme from the image
    const theme = await themeFromImage(imgObj, [successCustom, infoCustom, warningCustom, errorCustom]);
    console.log(" - theme from image: ", theme);

    hctTheme.value = reactive(theme); // set the reactive theme;

    const hexColor = argbToHex(theme.source);
    console.log(" - theme source: ", hexColor);

    cardColor.value = hexColor;
    paletteColors.find((entry) => entry.name === "source").hex = hexColor;

    // update the hct colors with new source color
    setSelectedHctColors();

    console.log("=============== PALETTES ==============");

    const primaryRGB = theme.palettes.primary.keyColor.argb;
    console.log(" - primaryRGB: ", primaryRGB);
    const primaryHex = argbToHex(primaryRGB);
    console.log(" - primary HEX: ", primaryHex);
    paletteColors.find((entry) => entry.name === "primary").hex = primaryHex;

    const secondaryRGB = theme.palettes.secondary.keyColor.argb;
    console.log(" - secondaryRGB: ", secondaryRGB);
    const secondaryHex = argbToHex(secondaryRGB);
    console.log(" - secondary HEX: ", secondaryHex);
    paletteColors.find((entry) => entry.name === "secondary").hex = secondaryHex;

    const tertiaryRGB = theme.palettes.tertiary.keyColor.argb;
    console.log(" - tertiaryRGB: ", tertiaryRGB);
    const tertiaryHex = argbToHex(tertiaryRGB);
    console.log(" - tertiary HEX: ", tertiaryHex);
    paletteColors.find((entry) => entry.name === "tertiary").hex = tertiaryHex;

    const errorRGB = theme.palettes.error.keyColor.argb;
    console.log(" - errorRGB: ", errorRGB);
    const errorHex = argbToHex(errorRGB);
    console.log(" - error HEX: ", errorHex);
    paletteColors.find((entry) => entry.name === "error").hex = errorHex;

    const neutralRGB = theme.palettes.neutral.keyColor.argb;
    console.log(" - neutralRGB: ", neutralRGB);
    const neutralHex = argbToHex(neutralRGB);
    console.log(" - neutral HEX: ", neutralHex);
    paletteColors.find((entry) => entry.name === "neutral").hex = neutralHex;

    const neutralVariantRGB = theme.palettes.neutralVariant.keyColor.argb;
    console.log(" - neutralVariantRGB: ", neutralVariantRGB);
    const neutralVariantHex = argbToHex(neutralVariantRGB);
    console.log(" - neutralVariant HEX: ", neutralVariantHex);
    paletteColors.find((entry) => entry.name === "neutralVariant").hex = neutralVariantHex;

    console.log(paletteColors);

    console.log("=========== CUSTOM COLORS ===========");

    const customColors = theme.customColors;
    customColors.forEach((entry) => {
      console.log(" - custom color: ", entry.color.name);
      console.log(" - custom color ARGB: ", entry.value);
      console.log(" - custom color HEX: ", argbToHex(entry.value));
      customThemeColors.find((item) => item.name === entry.color.name).hex = argbToHex(entry.value);
    });

    console.log("=========== SCHEMES LIGHT ===========");
    console.log(" - light scheme: ", theme.schemes.light);

    let schemeLight = theme.schemes.light;

    lightThemeColors.forEach((entry) => {
      entry.hex = argbToHex(schemeLight[entry.name]);
      console.log(" - light theme entry: ", `${entry.title} - ${entry.name} - ${entry.hex}`);
    });

    console.log("=========== SCHEMES LIGHT TONES ============");

    // WARNING: Material Theme Builder uses different tone values for background (87), surface (98) and surfaceVariant (98).
    // For more information about this, see: https://github.com/material-foundation/material-theme-builder/issues/27
    lightToneColors.forEach((entry) => {
      if (theme.palettes[entry.name]) {
        entry.hex = argbToHex(theme.palettes[entry.name].tone(40));
      } else if (entry.name === "background" || entry.name === "surface") {
        entry.hex = argbToHex(theme.palettes.neutral.tone(99));
      } else if (entry.name === "surfaceVariant") {
        entry.hex = argbToHex(theme.palettes.neutralVariant.tone(90));
      }
      console.log(" - light tone entry: ", `${entry.title} - ${entry.name} - ${entry.hex}`);
    });

    lightToneContainerColors.forEach((entry) => {
      if (theme.palettes[entry.name]) {
        entry.hex = argbToHex(theme.palettes[entry.name].tone(90));
      } else if (entry.name === "background" || entry.name === "surface") {
        entry.hex = argbToHex(theme.palettes.neutral.tone(99));
      } else if (entry.name === "surfaceVariant") {
        entry.hex = argbToHex(theme.palettes.neutralVariant.tone(90));
      }
      console.log(" - light tone container entry: ", `${entry.title} - ${entry.name} - ${entry.hex}`);
    });

    console.log("=========== SCHEMES DARK ============");
    console.log(" - dark scheme: ", theme.schemes.dark);

    let schemeDark = theme.schemes.dark;

    darkThemeColors.forEach((entry) => {
      entry.hex = argbToHex(schemeDark[entry.name]);
      console.log(" - dark theme entry: ", `${entry.title} - ${entry.name} - ${entry.hex}`);
    });

    console.log("=========== SCHEMES DARK TONES ============");

    darkToneColors.forEach((entry) => {
      if (theme.palettes[entry.name]) {
        entry.hex = argbToHex(theme.palettes[entry.name].tone(80));
      } else if (entry.name === "background" || entry.name === "surface") {
        entry.hex = argbToHex(theme.palettes.neutral.tone(10));
      } else if (entry.name === "surfaceVariant") {
        entry.hex = argbToHex(theme.palettes.neutralVariant.tone(30));
      }
      console.log(" - dark tone entry: ", `${entry.title} - ${entry.name} - ${entry.hex}`);
    });

    darkToneContainerColors.forEach((entry) => {
      if (theme.palettes[entry.name]) {
        entry.hex = argbToHex(theme.palettes[entry.name].tone(30));
      } else if (entry.name === "background" || entry.name === "surface") {
        entry.hex = argbToHex(theme.palettes.neutral.tone(10));
      } else if (entry.name === "surfaceVariant") {
        entry.hex = argbToHex(theme.palettes.neutralVariant.tone(30));
      }
      console.log(" - dark tone container entry: ", `${entry.title} - ${entry.name} - ${entry.hex}`);
    });

    console.log("=========== LIGHT SCHEME HEX ============");
    const lightThemeHex = Object.fromEntries(Object.entries(theme.schemes.light.props).map(([key, value]) => [key, argbToHex(value)]));
    console.log(" - light theme HEX: ", lightThemeHex);

    console.log("=========== DARK SCHEME HEX ============");
    const darkThemeHex = Object.fromEntries(Object.entries(theme.schemes.dark.props).map(([key, value]) => [key, argbToHex(value)]));
    console.log(" - dark theme HEX: ", darkThemeHex);
  }

  function generateTheme(seedColor) {
    console.log("UtilitiesView ::: generateTheme");
    // seedColor is a hex color
    console.log(" - seedColor: ", seedColor);
    console.log(" - is valid color: ", tinycolor(seedColor).isValid());
    console.log(" - seedColor format: ", tinycolor(seedColor).getFormat());
    let tinySeedColor = tinycolor(seedColor);
    console.log(" - tinySeedColor: ", tinySeedColor);

    if (seedColor && tinySeedColor.isValid() && tinySeedColor.getFormat() === "hex") {
      seedColor = seedColor.toUpperCase();
    } else {
      warn("[UtilitiesView] - Seed color is not a valid hex color: ", seedColor);
      return;
    }

    const successCustom = {
      name: "success",
      value: argbFromHex("#4CAF50"),
      blend: true
    };
    const infoCustom = {
      name: "info",
      value: argbFromHex("#2196F3"),
      blend: true
    };
    const warningCustom = {
      name: "warning",
      value: argbFromHex("#FB8C00"),
      blend: true
    };
    const errorCustom = {
      name: "error",
      value: argbFromHex("#CF6679"),
      blend: true
    };

    const corePalette = new CorePalette(argbFromHex(seedColor), false);
    console.log(" - corePalette: ", corePalette);

    // Get the theme from a hex color (#F44336 --> material red.base)
    // const theme = themeFromSourceColor(argbFromHex(seedColor), [custom1]);

    const theme = themeFromSourceColor(argbFromHex(seedColor), [successCustom, infoCustom, warningCustom, errorCustom]);
    // Print out the theme as JSON
    // console.log(JSON.stringify(theme, null, 2));

    hctTheme.value = reactive(theme);

    const palette = theme.palettes;
    console.log(" - palette: ", palette);
    const colorScheme = theme.schemes;
    console.log(" - colorScheme: ", colorScheme);

    const customColors = theme.customColors;
    customColors.forEach((entry) => {
      console.log(" - custom color: ", entry.color.name);
      console.log(" - custom color ARGB: ", entry.value);
      console.log(" - custom color HEX: ", argbToHex(entry.value));
      customThemeColors.find((item) => item.name === entry.color.name).hex = argbToHex(entry.value);
    });

    const sourceColorRGB = theme.source;
    const sourceColorHex = argbToHex(sourceColorRGB);
    console.log(" - sourceColorRGB: ", sourceColorRGB);
    console.log(" - sourceColorHex: ", sourceColorHex);

    // set new source color
    let sourceObject = paletteColors.find((entry) => entry.name === "source");
    sourceObject.hex = seedColor.toUpperCase();
    sourceObject.title = "Source (random color)";

    cardColor.value = seedColor;
    setSelectedHctColors();

    const primaryRGB = palette.primary.keyColor.argb;
    console.log(" - primaryRGB: ", primaryRGB);
    const primaryHEX = argbToHex(primaryRGB);
    console.log(" - primaryHEX: ", primaryHEX);
    // set new primary color
    paletteColors.find((entry) => entry.name === "primary").hex = primaryHEX;

    const secondaryRGB = palette.secondary.keyColor.argb;
    console.log(" - secondaryRGB: ", secondaryRGB);
    const secondaryHEX = argbToHex(secondaryRGB);
    console.log(" - secondaryHEX: ", secondaryHEX);
    // set new secondary color
    paletteColors.find((entry) => entry.name === "secondary").hex = secondaryHEX;

    const tertiaryRGB = palette.tertiary.keyColor.argb;
    console.log(" - tertiaryRGB: ", tertiaryRGB);
    const tertiaryHEX = argbToHex(tertiaryRGB);
    console.log(" - tertiaryHEX: ", tertiaryHEX);
    // set new tertiary color
    paletteColors.find((entry) => entry.name === "tertiary").hex = tertiaryHEX;

    const errorRGB = palette.error.keyColor.argb;
    console.log(" - errorRGB: ", errorRGB);
    const errorHEX = argbToHex(errorRGB);
    console.log(" - errorHEX: ", errorHEX);
    // set new error color
    paletteColors.find((entry) => entry.name === "error").hex = errorHEX;

    const neutralRGB = palette.neutral.keyColor.argb;
    console.log(" - neutralRGB: ", neutralRGB);
    const neutralHEX = argbToHex(neutralRGB);
    console.log(" - neutralHEX: ", neutralHEX);
    // set new neutral color
    paletteColors.find((entry) => entry.name === "neutral").hex = neutralHEX;

    const neutralVariantRGB = palette.neutralVariant.keyColor.argb;
    console.log(" - neutralVariantRGB: ", neutralVariantRGB);
    const neutralVariantHEX = argbToHex(neutralVariantRGB);
    console.log(" - neutralVariantHEX: ", neutralVariantHEX);
    // set new neutralVariant color
    paletteColors.find((entry) => entry.name === "neutralVariant").hex = neutralVariantHEX;

    getTinyInfo(palette);
  }

  function randomButtonClickHandler(clrItem) {
    console.log("UtilitiesView ::: randomButtonClickHandler");
    console.log(" - clrItem: ", clrItem);
    const clr = (randomColor.value = tinycolor.random());
    console.log(" - clr: ", clr);
    const hex = clr.toHexString().toUpperCase();
    console.log(" - hex: ", hex);
    cardColor.value = hex;
    selectedImageIdx.value = -1;
    generateTheme(hex);
  }

  function copySelectedColorClickHandler() {
    console.log("UtilitiesView ::: copySelectedColorClickHandler");
    let hex = argbToHex(selectedHct.value.argb);
    console.log(" - hex: ", hex);
    // Clipboard.writeText(hex);
    navigator.clipboard.writeText(hex);
    // TODO: inform user that color was copied to clipboard.
  }

  function useSelectedColorClickHandler() {
    console.log("UtilitiesView ::: useSelectedColorClickHandler");
    let hex = argbToHex(selectedHct.value.argb);
    console.log(" - hex: ", hex);
    cardColor.value = hex;
    selectedImageIdx.value = -1;
    generateTheme(hex);
  }

  function getTinyInfo(palette) {
    console.log("UtilitiesView ::: getTinyInfo");
    let primary = tinycolor(argbToHex(palette.primary.keyColor.argb));
    // let secondary = tinycolor(palette.secondary.keyColor.argb);
    // let tertiary = tinycolor(palette.tertiary.keyColor.argb);
    // let error = tinycolor(palette.error.keyColor.argb);
    // let neutral = tinycolor(palette.neutral.keyColor.argb);
    // let neutralVariant = tinycolor(palette.neutralVariant.keyColor.argb);
    console.log(" - palette primary: ", palette.primary);

    console.log(" - primary: ", primary);
    // console.log(" - secondary: ", secondary);
    // console.log(" - tertiary: ", tertiary);
    // console.log(" - error: ", error);
    // console.log(" - neutral: ", neutral);
    // console.log(" - neutralVariant: ", neutralVariant);
    console.log(" - dark: ", primary.isDark());
    console.log(" - brightness: ", primary.getBrightness());
    console.log(" - luminance: ", primary.getLuminance());
  }

  function paletteButtonClickHandler(clrItem) {
    console.log("UtilitiesView ::: paletteButtonClickHandler");
    console.log(" - clrItem: ", clrItem);
    let item = paletteColors.find((item) => item.name === clrItem.name);
    if (item) {
      selectedColor.value = item.hex;
      tempColor.value = item.hex;
      selectedColorName.value = item.name;
    }
    modalColorOpen.value = true;
  }

  function randomTooltipUpdateHandler(value) {
    console.log("UtilitiesView ::: randomTooltipUpdateHandler");
    console.log(" - value: ", value);
    console.log(" - randomTooltipOpen:", randomTooltipOpen.value);
    if (value) {
      setTimeout(() => {
        randomTooltipOpen.value = false;
      }, 3000);
    }
  }

  function getTonePaletteFromHex(hex) {
    console.log("UtilitiesView ::: getPaletteTone");
    console.log(" - hex: ", hex);
    let hctColor = Hct.fromInt(argbFromHex(hex));
    let tonal = TonalPalette.fromInt(hctColor.argb);
    console.log(" - tonal: ", tonal);
    // tonal.tone(60);
    console.log(" - tonal 60: ", tonal);
    let tones = [];
    [90, 80, 70, 60, 50, 40, 30, 20, 10].forEach((t) => {
      let argb = tonal.tone(t);
      tones.push({ tone: t, argb: argb, hct: Hct.fromInt(argb), hex: argbToHex(argb) });
    });
    console.log(" - tones: ", tones);
    // return argbToHex(hctColor.toInt());
    return tones;
  }

  function editColorChangeHandler(color) {
    console.log("UtilitiesView ::: editColorChangeHandler");
    console.log(" - picker color: ", color);
    console.log(" - selectedColor: ", selectedColor.value);
    // Update the palette color with the new value.
    // Assigning the color to the paletteColors object
    // will automatically update the theme store (not applicable here for now).
    let colorName = selectedColorName.value;
    paletteColors.find((item) => item.name === colorName).hex = color;
    // If editing source color, update the card color as well.
    if (colorName === "source") {
      cardColor.value = color;
      // also update the selectedHct
      setSelectedHctColors();
    }
    // TODO: remove test code below
    if (colorName === "primary") {
      console.log("MODIFYING THE PRIMARY HCT COLOR");
      console.log(" - hctTheme: ", hctTheme.value);

      const primaryBefore = hctTheme.value.palettes.primary;
      console.log(" - hctTheme palette primary before: ", primaryBefore);
      const schemeBefore = hctTheme.value.schemes;
      console.log(" - hctTheme schemes before: ", schemeBefore);

      let colorRgb = argbFromHex(color);
      console.log(" - colorRgb: ", colorRgb);
      hctTheme.value.palettes.primary.keyColor.argb = colorRgb;
      console.log(" - hctTheme palette primary after: ", hctTheme.value.palettes.primary);
      console.log(" - hctTheme schemes after: ", hctTheme.value.schemes);
    }
  }

  function editColorUpdateHandler(color) {
    console.log("UtilitiesView ::: editColorUpdateHandler");
    console.log(" - color: ", color);
  }

  function editColorCancelHandler() {
    console.log("UtilitiesView ::: editColorCancelHandler");
  }

  function setSelectedHctColors() {
    console.log("UtilitiesView ::: setSelectedHctColors");
    if (cardColor && cardColor.value !== "") {
      let colorRgb = argbFromHex(cardColor.value);
      console.log(" - card color rgb: ", colorRgb);
      selectedHct.value = Hct.fromInt(colorRgb);
      console.log(" - selectedHct: ", selectedHct.value);
      selectedHue.value = Math.round(selectedHct.value.hue);
      selectedChroma.value = Math.round(selectedHct.value.chroma);
      selectedTone.value = Math.round(selectedHct.value.tone);
    } else {
      warn("[UtilitiesView] - `cardColor` is null or undefined.");
    }
    // set the slider backgrounds to match the new HCT color.
    updateSliderBackgrounds();
  }

  function hueSliderUpdateHandler(hue) {
    console.log("UtilitiesView ::: hueSliderUpdateHandler");
    console.log(" - hue: ", hue);
    console.log(" - selectedHue: ", selectedHue.value);
    console.log(" - selectedHct: ", selectedHct.value);

    let hct = selectedHct.value;
    hct.hue = Math.round(Number(hue));
    hct.chroma = Math.round(Number(selectedChroma.value));
    hct.tone = Math.round(Number(selectedTone.value));

    let hctColor = Hct.from(hue, Math.round(Number(selectedChroma.value)), Math.round(Number(selectedTone.value)));
    console.log(" - selected hctColor: ", hct);
    console.log(" - new hctColor: ", hctColor);

    // update the slider backgrounds with new hct color
    updateSliderBackgrounds();
  }

  function chromaSliderUpdateHandler(chroma) {
    console.log("UtilitiesView ::: chromaSliderUpdateHandler");
    console.log(" - chroma: ", chroma);
    console.log(" - typeof chroma: ", typeof chroma);

    console.log(" - selectedChroma: ", selectedChroma.value);
    console.log(" - selectedHct: ", selectedHct.value);
    let hct = selectedHct.value;
    hct.chroma = Number(chroma) || Number(selectedChroma.value);
    hct.tone = Number(selectedTone.value);
    hct.hue = Number(selectedHue.value);
  }

  function toneSliderUpdateHandler(tone) {
    console.log("UtilitiesView ::: toneSliderUpdateHandler");
    console.log(" - tone: ", tone, " - isNaN: ", isNaN(tone));
    console.log(" - typeof tone: ", typeof tone);

    tone = Math.max(1, Number(tone));

    console.log(" - Math.mex tone: ", tone);
    if (selectedTone.value < tone) {
      // selectedTone.value = tone;
    }

    console.log(" - selectedTone: ", selectedTone.value);
    console.log(" - selectedHct: ", selectedHct.value);
    // if tone is NaN (e.g. when the user clears the text field), set the hct tone to its current value
    selectedHct.value.tone = Number(tone);

    // set the hct chroma so that the HCT color is properly updated when accessing its argb value
    console.log(" - selectedChroma: ", selectedChroma.value);
    selectedHct.value.chroma = Number(selectedChroma.value);
    selectedHct.value.hue = Number(selectedHue.value);

    // TODO: update all properties in the hct object
    // TODO: or even just create a new one from the hue, chroma, and tone values.
  }

  // chroma-slider-track - hue-slider-track - tone-slider-track
  // .chroma-slider-track -> .v-slider-track -> .v-slider-track__background

  function updateSliderBackgrounds() {
    console.log("UtilitiesView ::: updateSliderBackgrounds");

    // new HCT color with the same hue, full chroma (100), and full tone (50)
    let bgHct = Hct.from(Math.round(Number(selectedHct.value.hue)), 100, 50);
    console.log(" - HCT from ARGB: ", bgHct);
    let bgHex = argbToHex(bgHct.argb);

    // console.log(" - chromaSliderTrack: ", chromaSliderTrack.value);
    if (chromaSliderTrack && chromaSliderTrack.value !== null) {
      let chromaStyle = chromaSliderTrack.value.style;
      // console.log(" - chromaStyle: ", chromaStyle);
      let chromaBgStyle = "linear-gradient(to right, #777777 0%, #555555 100%)".replace("#555555", bgHex);
      console.log(" - chromaBgStyle: ", chromaBgStyle);
      chromaStyle.setProperty("background", chromaBgStyle, "important");
    } else {
      console.warn("[UtilitiesView] chromaSliderTrack.value is null");
    }

    // console.log(" - toneSliderTrack: ", toneSliderTrack.value);
    if (toneSliderTrack && toneSliderTrack.value !== null) {
      let toneStyle = toneSliderTrack.value.style;
      // console.log(" - toneStyle: ", toneStyle);
      let toneBgStyle = "linear-gradient(to right, #000000 0%, #555555 50%, #FFFFFF 100%)".replace("#555555", bgHex);
      console.log(" - toneBgStyle: ", toneBgStyle);
      toneStyle.setProperty("background", toneBgStyle, "important");
    } else {
      console.warn("[UtilitiesView] toneSliderTrack.value is null");
    }
  }

  const getDarkPrimary = () => {
    console.log("UtilitiesView ::: getDarkPrimary");
    console.log("hctTheme: ", hctTheme.value);
    let answer = "";
    if (hctTheme && hctTheme.value) {
      console.log("hctTheme schemes: ", hctTheme.value.schemes);
      console.log("hctTheme schemes dark: ", hctTheme.value.schemes.dark);
      answer = hctTheme.value.schemes.dark.props.primary;
    }
    return answer;
  };

  const getPalettePrimary = () => {
    console.log("UtilitiesView ::: getPalettePrimary");
    console.log("hctTheme: ", hctTheme.value);
    let answer = "";
    if (hctTheme && hctTheme.value) {
      console.log("hctTheme palettes: ", hctTheme.value.palettes);
      console.log("hctTheme palettes primary: ", hctTheme.value.palettes.primary);
      (answer = hctTheme.value.palettes.primary.keyColor), null, 2;
    }
    return answer;
  };

  // TODO: UtilitisView - move argbToHex function to a util file.
  /**
   * Converts an ARGB color value to a hex color string and makes it uppercase (e.g. "#RRGGBB")
   *
   * @param {number} argb - the ARGB color value
   * @returns {string} the hex color string
   */
  function argbToHex(argb) {
    return hexFromArgb(argb).toUpperCase();
  }

  /**
   * Random / Favorite Hex Colors
   * #F9C3D3
   * #F4AB82
   * #BEC4b2
   * #6A6B63
   * #6584A6
   * #3C444D
   * #494F60
   * #434943
   * #4d491d
   * #3B503C
   * #890D3C
   */
</script>

<style lang="scss">
  .card-item-img {
    // text-shadow: black 0px 0px 6px;
    // background: rgb(255 255 255 / 12%);
    .v-card-title {
      font-size: 1.15rem !important;
      font-weight: 300 !important;
    }
  }

  .hue-slider-track,
  .chroma-slider-track,
  .tone-slider-track {
    .v-slider-track__background {
      height: 24px !important;
      // border-radius: 24px !important;
      border-radius: 0 !important;
      opacity: 1 !important;
    }
    .v-slider-track__fill {
      display: none !important;
      visibility: hidden !important;
    }
    .v-input__details {
      display: none !important;
      visibility: hidden !important;
    }
    input {
      height: 32px !important;
      min-height: 32px !important;
    }
  }

  .hue-slider-track {
    .v-slider-track__background {
      // material theme builder hue values: 0, 60, 120, 180, 240, 300, 360 (chroma: 100, tone: 50)
      // material theme builder gradient: #E7007D, #B66500 , #6D7F00 , #008673 , #007FB4 , #8851FF , #E7007D
      background: linear-gradient(to right, #e7007d, #b26300, #6d7f00, #008673, #007fb4, #8851ff, #e7007d) !important;
      // background: linear-gradient(to right, #E7007D, #B26300, #6D7F00, #008673, #007FB4, #8851FF, #E7007D) !important;
    }
  }

  .chroma-slider-track {
    .v-slider-track__background {
      background: linear-gradient(to right, #777777 0%, #e4007b 100%) !important;
    }
  }

  .tone-slider-track {
    .v-slider-track__background {
      background: linear-gradient(to right, #000000 0%, #e4007b 50%, #ffffff 100%) !important;
    }
  }
</style>
