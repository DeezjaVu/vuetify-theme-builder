<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" style="max-width: 75vw">
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <v-color-picker
                v-model="selectedColor"
                mode="hex"
                hide-sliders
                show-swatches
                swatches-max-height="420"
                @update:model-value="colorPickerUpdateHandler"
              >
              </v-color-picker>
            </v-col>
            <v-col cols="2">
              <v-list width="200" max-width="200" color="surface-variant">
                <v-list-item
                  v-for="(clr, key) of materialRed"
                  :value="clr.toUpperCase()"
                  :base-color="clr"
                  :active="selectedColor === clr.toUpperCase()"
                  @click="
                    selectedItem = key;
                    selectedColor = clr.toUpperCase();
                  "
                >
                  {{ key }}: {{ clr.toUpperCase() }}
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="2">
              <v-list width="200" max-width="200" color="surface-variant">
                <v-list-item
                  v-for="(clr, key) of materialRed"
                  :value="clr.toUpperCase()"
                  :base-color="clr"
                  :active="selectedColor === clr.toUpperCase()"
                  @click="
                    selectedItem = key.toUpperCase();
                    selectedColor = clr.toUpperCase();
                  "
                >
                  {{ key }}: {{ clr.toUpperCase() }}
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- COLOR PALETTES CARD -->
      <v-card>
        <v-toolbar align-tabs="center">
          <v-toolbar-title class="text-uppercase"> Color Palettes </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tabs v-model="currentTab">
            <v-tab class="font-weight-light" v-for="item in presetMenuItems" :key="item" :text="item.title" :value="item.value"></v-tab>
          </v-tabs>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </v-toolbar>

        <!-- COLOR PRESET TAB WINDOWS -->
        <v-card-text>
          <v-tabs-window v-model="currentTab">
            <!-- TABS WINDOW ITEM -->
            <v-tabs-window-item :value="currentTab">
              <!-- PRESET BASE COLORS -->
              <v-container
                v-for="base in colorSets[currentTab].baseColors"
                :key="base"
                class="text-body-2 font-mono"
                style="padding-top: 2px; padding-bottom: 2px"
              >
                <v-card class="my-0" density="compact" style="max-width: fit-content; margin: 0 auto">
                  <v-card-item class="pt-1 pb-0 pl-1">
                    <v-card-subtitle class="text-body-2 font-mono">{{ base.title }}</v-card-subtitle>
                  </v-card-item>
                  <v-row>
                    <v-col
                      class="text-center"
                      v-for="(clr, key) in colorSets[currentTab][base.name]"
                      :key="clr"
                      cols="auto"
                      md="2"
                      xl="auto"
                    >
                      <v-btn
                        class="btn-hover-text font-mono"
                        :color="clr"
                        density="comfortable"
                        style="min-width: 100%"
                        @click="paletteButtonClickHandler(clr, key)"
                      >
                        {{ clr }}
                      </v-btn>
                      <v-card-subtitle class="text-body-2 font-mono pt-1 pb-2">
                        {{ key }}
                      </v-card-subtitle>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </v-card>
              </v-container>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
  // Vuetify Theme Variables:
  // @see https://vuetifyjs.com/en/features/theme/#javascript

  import { onMounted, ref } from "vue";
  import { useBuilderColorsStore } from "@/stores/builder-colors";

  import tailwindColors from "@/utils/color/tailwind-colors.js";
  import bootstrapColors from "@/utils/color/bootstrap-colors";
  import flatColors from "@/utils/color/flat-colors";
  import metroColors from "@/utils/color/metro-colors";

  const colorsStore = useBuilderColorsStore();

  const twBaseColors = tailwindColors.baseColors;
  console.log("VariablesView ::: twBaseColors: ", twBaseColors);
  const twColorsHex = tailwindColors.swatches;

  const bsBaseColors = bootstrapColors.baseColors;
  console.log("VariablesView ::: bsBaseColors: ", bsBaseColors);
  const bwColorsHex = bootstrapColors.swatches;

  const flatBaseColors = flatColors.baseColors;
  console.log("VariablesView ::: flatBaseColors: ", flatBaseColors);
  const flatColorsHex = flatColors.swatches;

  const metroBaseColors = metroColors.baseColors;
  console.log("VariablesView ::: metroBaseColors: ", metroBaseColors);
  const metroColorsHex = metroColors.swatches;

  const materialColors = colorsStore.materialColors;
  console.log("VariablesView ::: materialColors: ", materialColors);

  const materialRed = materialColors.red;
  console.log("VariablesView ::: materialRed: ", materialRed);

  const materialBaseHex = colorsStore.materialBaseHex;
  const materialRedHex = colorsStore.materialRedHex;
  const bsDarklyHex = colorsStore.bsDarklyHex;

  // const metroHex = colorsStore.metroHex;
  // const metroGreen = colorsStore.metroGreen;

  const selectedColor = ref("");
  const selectedItem = ref("");

  const presetMenuItems = [
    { title: "Tailwind", value: "tailwind" },
    { title: "Bootstrap", value: "bootstrap" },
    { title: "Flat Colors", value: "flat" },
    { title: "Metro UI", value: "metro" }
  ];

  const colorSets = {
    tailwind: tailwindColors,
    bootstrap: bootstrapColors,
    flat: flatColors,
    metro: metroColors
  };

  // TODO: VariablesView ::: move the currentXYZ constants to a VariablesViewStore store.
  const currentTab = ref("tailwind");
  /**
   * LIFECYCLE HOOKS
   */
  onMounted(() => {
    console.log("VariablesView ::: onMounted");
  });

  /**
   * Handles color changes from the color picker.
   * @param value - The color value chosen by the user.
   */
  function colorPickerUpdateHandler(value) {
    console.log("VariablesView ::: colorPickerUpdateHandler");
    console.log(" - value:", value);
    let val = String(value).toUpperCase();
    console.log(" - val: ", val);
    // selectedColor and selectedItem are automatically set via component bindings
    console.log(" - selectedColor value: ", selectedColor.value);
    console.log(" - selectedItem value: ", selectedItem.value);
  }

  /**
   * Handles color button clicks from the color palettes.
   *
   * Sets the color of the button that was clicked as the selected color,
   * which is used in the color picker.
   *
   * @param {string} clr - The color value chosen by the user.
   * @param {string} key - The key of the color button chosen by the user.
   */
  function paletteButtonClickHandler(clr, key) {
    console.log("VariablesView ::: paletteButtonClickHandler");
    console.log(" - clr: ", clr);
    console.log(" - key: ", key);
    selectedColor.value = clr.toUpperCase();
    // selectedItem.value = "";
  }
</script>

<style lang="scss">
  // for some reason these styles won't work if the `<style>` is set to `scoped`
  .btn-hover-text {
    font-size: small !important;
    font-weight: normal !important;
    > .v-btn__content {
      // font-weight: bold !important;
      opacity: 0 !important;
    }
  }

  .btn-hover-text:hover {
    font-size: small !important;
    font-weight: normal !important;
    > .v-btn__content {
      opacity: 1 !important;
    }
  }
</style>
