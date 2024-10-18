<template>
  <v-container class="fill-height px-12 mx-auto">
    <v-responsive class="align-centerfill-height mx-auto">
      <!-- <div class="text-center"> -->
      <!-- <v-icon icon="mdi-account-box"></v-icon> -->
      <!-- <v-icon icon="$vuetify"></v-icon> -->
      <!-- <h1 class="text-h2 font-weight-bold">About Theme Builder</h1> -->
      <v-card color="primary" height="auto">
        <v-card-text>
          <v-row>
            <!-- BOOTSTRAP COLOR LIST COLUMN  -->
            <v-col>
              <v-select
                min-width="200"
                :items="bsColorNames"
                v-model="selectedBootstrapName"
                label="Bootstrap Colors"
                item-title="title"
                item-value="name"
                @update:model-value="bsNameUpdateHandler"
              ></v-select>

              <v-list min-width="200" color="surface-variant">
                <v-list-item
                  v-for="(clr, key) of selectedBSColor"
                  :value="clr.toUpperCase()"
                  :base-color="clr"
                  :active="selectedColor === clr.toUpperCase()"
                  @click="setSelection(clr, key)"
                >
                  {{ key }} - {{ clr }}
                </v-list-item>
              </v-list>
            </v-col>

            <!-- BOOTSTRAP DARK & LIGHT GENERATED COLORS COLUMN -->
            <v-col>
              <div class="text-body-1 my-7">Base Color: {{ selectedBSColor.base }}</div>

              <v-list min-width="200" color="surface-variant">
                <v-list-item
                  v-for="(clr, key) of bsMixColors"
                  :value="clr.toUpperCase()"
                  :base-color="clr"
                  :active="selectedColor === clr.toUpperCase()"
                  @click="
                    selectedItem = key;
                    selectedColor = clr.toUpperCase();
                  "
                >
                  {{ key }} - {{ clr }}
                </v-list-item>
              </v-list>
            </v-col>

            <!-- COLOR PICKER COLUMN -->
            <!-- :model-value="selectedColor" -->
            <v-col>
              <v-color-picker
                mode="hex"
                v-model="selectedColor"
                :swatches="bsColorsHex"
                hide-sliders
                show-swatches
                swatches-max-height="300"
                @update:model-value="colorPickerUpdateHandler"
              >
              </v-color-picker>
            </v-col>

            <!-- MATERIAL COLOR LIST COLUMN  -->
            <v-col>
              <v-select
                min-width="200"
                :items="materialColorsNames"
                v-model="selectedMaterialName"
                label="Material Colors"
                item-title="name"
                item-value="name"
                @update:model-value="materialNameUpdateHandler"
              ></v-select>

              <v-list min-width="200" color="surface-variant">
                <v-list-item
                  v-for="(clr, key) of selectedMaterialColor"
                  :value="clr.toUpperCase()"
                  :active="selectedColor === clr.toUpperCase()"
                  :base-color="clr"
                  @click="
                    selectedItem = key;
                    selectedColor = clr.toUpperCase();
                  "
                >
                  {{ key }}: {{ clr.toUpperCase() }}
                </v-list-item>
              </v-list>
            </v-col>

            <!-- GENERATE BOOTSTRAP DARK / LIGHT COLOR COLUMN -->
            <v-col>
              <div class="text-body-1 my-7">Base Color: {{ selectedMaterialColor.base }}</div>

              <v-list min-width="200" color="surface-variant">
                <v-list-item
                  v-for="(clr, key) of materialMixColors"
                  :value="clr.toUpperCase()"
                  :active="selectedColor === clr.toUpperCase()"
                  :base-color="clr"
                  @click="
                    selectedItem = key;
                    selectedColor = clr.toUpperCase();
                  "
                >
                  {{ key }} - {{ clr }}
                </v-list-item>
              </v-list>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <!-- </div> -->
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import * as bootstrap from "@/utils/color/bootstrap-colors";
  import { mix, darken, lighten, parseColor, RGBtoHex } from "@/utils/colorUtils.js";
  import { useAppStore } from "@/stores/app";
  import { useBuilderColorsStore } from "@/stores/builder-colors";

  const appStore = useAppStore();
  const colorsStore = useBuilderColorsStore();

  const flatColorsHex = appStore.flatColorsHex;

  const materialColors = colorsStore.materialColors;
  console.log("AboutView ::: materialColors: ", materialColors);

  const materialColorsNames = Object.keys(materialColors);
  console.log("AboutView ::: materialColorsNames: ", materialColorsNames);

  const selectedBSColor = ref(bootstrap.blue);
  console.log("AboutView ::: selectedBSColor: ", selectedBSColor);

  const selectedMaterialColor = ref(materialColors.red);
  console.log("AboutView ::: selectedMatColor: ", selectedMaterialColor);

  const bsMixColors = ref(bootstrap.blue);
  const materialMixColors = ref(materialColors.red);

  const bsColorNames = bootstrap.baseColors;
  console.log("AboutView ::: bsColorNames: ", bsColorNames);
  const selectedBootstrapName = ref("blue");

  const selectedMaterialName = ref("red");

  const selectedColor = ref("#0d6efd");
  const selectedItem = ref("");

  const lightHex = "#FFFFFF";
  const darkHex = "#000000";

  const bsColorsHex = ref(bootstrap.swatches);
  console.log("AboutView ::: bsColorsHex: ", bsColorsHex);

  const blueBaseHex = "#0d6efd";

  const newColor = ref("");

  const mixedLighten = {
    lighten5: mix("FFFFFF", "0d6efd", 90),
    lighten4: mix("FFFFFF", "0d6efd", 80),
    lighten3: mix("FFFFFF", "0d6efd", 60),
    lighten2: mix("FFFFFF", "0d6efd", 40),
    lighten1: mix("FFFFFF", "0d6efd", 20)
  };
  console.log("AboutView ::: mixedLighten: ", JSON.stringify(mixedLighten, null, 2));

  const mixedDarken = {
    darken4: mix("000000", "0d6efd", 80),
    darken3: mix("000000", "0d6efd", 60),
    darken2: mix("000000", "0d6efd", 40),
    darken1: mix("000000", "0d6efd", 20)
  };
  console.log("AboutView ::: mixedDarken: ", JSON.stringify(mixedDarken, null, 2));

  console.log("AboutView ::: bootstrap red: ", bootstrap.red);
  console.log("AboutView ::: bootstrap orange: ", bootstrap.orange);

  const selectedSwatch = ref("");

  onMounted(() => {
    console.log("AboutView ::: onMounted");
  });

  function setSelection(clr, key) {
    console.log("AboutView ::: setSelection");
    console.log(" - clr: ", clr);
    console.log(" - key: ", key);
    selectedColor.value = clr.toUpperCase();
    selectedItem.value = key;
  }

  function colorPickerUpdateHandler(value) {
    console.log("AboutView ::: colorPickerUpdateHandler");
    console.log(" - value:", value);
    let val = String(value).toUpperCase();
    console.log(" - val: ", val);
    console.log(" - selectedColor: ", selectedColor.value);
    console.log(" - selectedItem value: ", selectedItem.value);
  }

  function bsNameUpdateHandler(value) {
    console.log("AboutView ::: bsNameUpdateHandler");
    console.log(" - value: ", value);
    console.log(" - selectedBootstrapName: ", selectedBootstrapName.value);
    selectedBSColor.value = bootstrap[value];
    generateVColors();
  }

  function generateVColors() {
    console.log("AboutView ::: generateVColors");
    const base = selectedBSColor.value.base;
    const parsedBase = parseColor(base);
    console.log(" - base: ", base);
    console.log(" - parsed base: ", parsedBase);

    const colors = {
      lighten5: RGBtoHex(lighten(parsedBase, 6.25)),
      lighten4: RGBtoHex(lighten(parsedBase, 5)),
      lighten3: RGBtoHex(lighten(parsedBase, 3.75)),
      lighten2: RGBtoHex(lighten(parsedBase, 2.5)),
      lighten1: RGBtoHex(lighten(parsedBase, 1.25)),
      base: base,
      darken1: RGBtoHex(darken(parsedBase, 1.25)),
      darken2: RGBtoHex(darken(parsedBase, 2.5)),
      darken3: RGBtoHex(darken(parsedBase, 3.75)),
      darken4: RGBtoHex(darken(parsedBase, 5)),
      base: base
    };
    console.log(" - colors: ", JSON.stringify(colors, null, 2));
    bsMixColors.value = colors;
    // dark shades
    let darkshades = {};
    for (let i = 1; i < 20; i++) {
      let num = i / 10;
      let dshade = RGBtoHex(darken(parsedBase, num));
      if (dshade !== "#000000") darkshades["darken" + i] = dshade;
      else break;
    }
    // light shades
    let lightshades = {};
    for (let i = 1; i < 20; i++) {
      let num = i / 10;
      let lshade = RGBtoHex(lighten(parsedBase, num));
      if (lshade !== "#FFFFFF") lightshades["lighten" + i] = lshade;
      else break;
    }
    console.log(" - dark shades: ", JSON.stringify(darkshades, null, 2));
    console.log(" - light shades: ", JSON.stringify(lightshades, null, 2));

    const swatches = [
      Object.values(selectedBSColor.value).reverse(),
      Object.values(colors).reverse(),
      Object.values(darkshades).reverse(),
      Object.values(lightshades)
    ];
    console.log(" - swatches: ", JSON.stringify(swatches, null, 2));

    bsColorsHex.value = swatches;
  }

  function materialNameUpdateHandler(value) {
    console.log("AboutView ::: materialNameUpdateHandler");
    console.log(" - value: ", value);
    console.log(" - selectedMaterialName: ", selectedMaterialName.value);
    selectedMaterialColor.value = materialColors[value];
    // generateVColors();
    const base = selectedMaterialColor.value.base;
    const parsedBase = parseColor(base);
    console.log(" - base: ", base);
    console.log(" - parsed base: ", parsedBase);
    const white = "#FFFFFF";
    const black = "#000000";
    // Generate Material Colors
    const colors = {
      base: base,
      lighten5: mix(white, base, 89),
      lighten4: mix(white, base, 74),
      lighten3: mix(white, base, 53),
      lighten2: mix(white, base, 36),
      lighten1: mix(white, base, 14),
      darken1: mix(black, base, 6),
      darken2: mix(black, base, 13),
      darken3: mix(black, base, 19),
      darken4: mix(black, base, 25),
      accent1: mix(white, base, 36),
      accent2: mix(white, base, 14)
      // accent3: base,
      // accent4: base
    };
    // const matDarken1 = selectedMaterialColor.value.darken1; // weight: 6
    // const matDarken2 = selectedMaterialColor.value.darken2; // weight: 13
    // const matDarken3 = selectedMaterialColor.value.darken3; // weight: 19
    // const matDarken4 = selectedMaterialColor.value.darken4; // weight: 25

    const matLighten1 = selectedMaterialColor.value.lighten1; // weight: 14
    const matLighten2 = selectedMaterialColor.value.lighten2; // weight: 36
    const matLighten3 = selectedMaterialColor.value.lighten3; // weight: 53
    const matLighten4 = selectedMaterialColor.value.lighten4; // weight: 74
    const matLighten5 = selectedMaterialColor.value.lighten5; // weight: 89

    let matShades = {};
    for (let i = 74; i <= 95; i++) {
      let dshade = mix(white, base, i);
      matShades["lighten" + i] = dshade;
      console.log(" - lighten: ", i, dshade);
    }

    const swatches = [Object.values(selectedMaterialColor.value), Object.values(colors)];
    // const swatches = [[matLighten1, matLighten2, matLighten3, matLighten4, matLighten5], Object.values(matShades)];
    console.log(" - swatches: ", JSON.stringify(swatches, null, 2));

    bsColorsHex.value = swatches;

    console.log(" - colors: ", JSON.stringify(colors, null, 2));
    materialMixColors.value = colors;
  }
</script>
