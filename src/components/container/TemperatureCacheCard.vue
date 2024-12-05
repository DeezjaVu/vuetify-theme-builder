<template>
  <v-card>
    <v-card-item>
      <v-card-title class="text-subtitle-1">Temperature Cache</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row>
        <v-col>
          <!-- [*] SOURCE COLOR CARD -->
          <v-card :color="sourceColor">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Source Color</v-card-title>
              <v-card-subtitle class="text-subtitle-2 font-mono">
                {{ sourceColor }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <pre> {{ JSON.stringify(Hct.fromInt(argbFromHex(sourceColor)), null, 2) }} </pre>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <!-- [*] COMPLEMENT COLOR CARD -->
          <v-card :color="hexFromArgb(complementColor.argb)">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Complement Color</v-card-title>
              <v-card-subtitle class="text-subtitle-2 font-mono">
                {{ hexFromArgb(complementColor.argb) }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <pre> {{ JSON.stringify(complementColor, null, 2) }} </pre>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <!-- [*] COLDEST COLOR CARD -->
          <v-card :color="hexFromArgb(coldestColor.argb)">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Coldest Color</v-card-title>
              <v-card-subtitle class="text-subtitle-2 font-mono">
                {{ hexFromArgb(coldestColor.argb) }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <pre> {{ JSON.stringify(coldestColor, null, 2) }} </pre>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <!-- [*] WARMEST COLOR CARD -->
          <v-card :color="hexFromArgb(warmestColor.argb)">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Warmest Color</v-card-title>
              <v-card-subtitle class="text-subtitle-2 font-mono">
                {{ hexFromArgb(warmestColor.argb) }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <pre> {{ JSON.stringify(warmestColor, null, 2) }} </pre>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>

      <v-row>
        <v-col cols="3">
          <!-- [*] ROTATED HUE CARD -->

          <v-card :color="hexFromArgb(splitHct135.argb)">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Secondary Rotated </v-card-title>
              <v-card-subtitle class="text-subtitle-2 font-mono">
                {{ hexFromArgb(splitHct135.argb) }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <pre> {{ JSON.stringify(splitHct135, null, 2) }} </pre>
              <pre> {{ JSON.stringify(splitHues.toString(), null, 2) }} </pre>
              <pre> {{ JSON.stringify(splitRotationsLeft.toString(), null, 2) }} </pre>
            </v-card-text>
            <v-card-actions>
              <v-slider v-model="rotatedHue" min="0" max="360" step="1.0" @update:model-value="rotatedHueSliderUpdateHandler">
                <template v-slot:append>
                  <v-text-field
                    v-model="rotatedHue"
                    width="80"
                    density="compact"
                    hide-details
                    single-line
                    type="number"
                    @update:model-value="rotatedHueSliderUpdateHandler"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3">
          <!-- [*] ROTATED HUE CARD -->

          <v-card :color="hexFromArgb(splitHct225.argb)">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Tertiary Rotated </v-card-title>
              <v-card-subtitle class="text-subtitle-2 font-mono">
                {{ hexFromArgb(splitHct225.argb) }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <pre> {{ JSON.stringify(splitHct225, null, 2) }} </pre>
              <pre> {{ JSON.stringify(splitHues.toString(), null, 2) }} </pre>
              <pre> {{ JSON.stringify(splitRotationsRight.toString(), null, 2) }} </pre>
            </v-card-text>
            <v-card-actions>
              <v-slider v-model="rotatedHue" min="0" max="360" step="1.0" readonly @update:model-value="rotatedHueSliderUpdateHandler">
                <template v-slot:append>
                  <v-text-field
                    v-model="rotatedHue"
                    width="80"
                    density="compact"
                    hide-details
                    single-line
                    type="number"
                    readonly
                    @update:model-value="rotatedHueSliderUpdateHandler"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>

      <v-row>
        <!-- [*] COMPLEMENT SPLIT -->
        <!-- First and last element are the complement split of source -->
        <v-col v-for="(htc, idx) in complementSplit312" :key="`complement-split-${idx}-${htc.argb}`">
          <!-- [*] COMPLEMENT SPLIT CARD (3-10) -->
          <v-card :color="hexFromArgb(htc.argb)">
            <v-card-item>
              <v-card-title class="text-subtitle-1">Complement Split (3-12) {{ idx + 1 }}</v-card-title>
              <v-card-subtitle class="text-subtitle-2 font-mono">
                {{ hexFromArgb(htc.argb) }}
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <pre> {{ JSON.stringify(htc, null, 2) }} </pre>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
  import { DynamicScheme, TemperatureCache, TonalPalette } from "@material/material-color-utilities";
  import { argbFromHex, hexFromArgb, Hct } from "@material/material-color-utilities";
  import * as math from "@material/material-color-utilities";
  import { computed, onMounted, ref } from "vue";
  import { hctForHue } from "@/utils/hct/hct-utils";

  const props = defineProps(["sourceColor"]);

  const splitHues = [0.0];
  const splitRotationsLeft = [135.0];
  const splitRotationsRight = [225.0];

  const rotatedHue = ref(0);

  const splitHct135 = computed(() => {
    console.log("TemperatureCacheCard ::: computed splitHct150");
    console.log(" - rotatedHue: ", rotatedHue.value);
    let hue150 = math.sanitizeDegreesDouble(Number(rotatedHue.value) + 135.0);
    console.log(" - hue150: ", hue150);
    let chroma = sourceHct.value.chroma;
    let tone = sourceHct.value.tone;
    let tp = TonalPalette.fromHueAndChroma(hue150, chroma);
    console.log(" - tonal palette: ", tp);
    // let secondaryHct = Hct.fromInt(tp.tone(30.0));
    let secondaryHct = Hct.from(hue150, chroma, tone);
    return secondaryHct;
  });

  const splitHct225 = computed(() => {
    console.log("TemperatureCacheCard ::: computed splitHct225");
    console.log(" - rotatedHue: ", rotatedHue.value);
    let hue225 = math.sanitizeDegreesDouble(Number(rotatedHue.value) - 135.0);
    console.log(" - hue225: ", hue225);
    let chroma = sourceHct.value.chroma;
    let tone = sourceHct.value.tone;
    let tp = TonalPalette.fromHueAndChroma(hue225, chroma);
    console.log(" - tonal palette: ", tp);
    // let tertiaryHct = Hct.fromInt(tp.tone(30.0));
    let tertiaryHct = Hct.from(hue225, chroma, tone);
    return tertiaryHct;
  });

  const sourceHct = computed(() => {
    return Hct.fromInt(argbFromHex(props.sourceColor));
  });

  const sourceTempCache = computed(() => {
    let tmp = new TemperatureCache(sourceHct.value);
    return tmp;
  });

  const hctsByHue = computed(() => {
    return sourceTempCache.value.hctsByHue;
  });

  const complementColor = computed(() => {
    return sourceTempCache.value.complement;
  });

  const warmestColor = computed(() => {
    return sourceTempCache.value.warmest;
  });

  const coldestColor = computed(() => {
    return sourceTempCache.value.coldest;
  });

  const hctsByTemp = computed(() => {
    return sourceTempCache.value.hctsByTemp;
  });

  const analogous512 = computed(() => {
    return sourceTempCache.value.analogous(5);
  });

  const analogous310 = computed(() => {
    return sourceTempCache.value.analogous(3, 10);
  });

  const complementSplit312 = computed(() => {
    const compTempCache = new TemperatureCache(complementColor.value);
    return compTempCache.analogous(3, 12);
  });

  onMounted(() => {
    console.log("TemperatureCacheCard ::: onMounted");
    console.log(" - sourceColor: ", props.sourceColor);
    console.log(" - complementColor: ", complementColor.value);
  });

  function rotatedHueSliderUpdateHandler(value) {
    console.log("TemperatureCacheCard ::: rotatedHueSliderUpdateHandler");
    console.log(" - value: ", value);
  }
</script>
