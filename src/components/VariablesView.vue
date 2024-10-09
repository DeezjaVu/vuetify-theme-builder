<template>
  <v-container class="fill-height" grid-list-xs>
    <v-responsive class="align-centerfill-height mx-auto">
      <!-- <div class="text-center"> -->
      <!-- <v-icon icon="mdi-account-box"></v-icon> -->
      <!-- <v-icon icon="$vuetify"></v-icon> -->
      <!-- <h1 class="text-h2 font-weight-bold">Theme Builder Variables</h1> -->
      <!-- </div> -->
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="4">
              <v-color-picker
                v-model="selectedColor"
                :swatches="laraSwatches"
                mode="hex"
                hide-sliders
                show-swatches
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
      <!-- PRIMEVUE COLORS -->
      <v-card>
        <v-container v-for="base in baseColors" :key="base" class="py-0">
          <v-card class="my-0" density="compact" style="max-width: fit-content; margin: 0 auto">
            <v-card-item class="pt-1 pb-0 pl-1">
              <v-card-subtitle class="">{{ base.title }}</v-card-subtitle>
            </v-card-item>
            <v-row>
              <v-col class="text-center" v-for="(clr, key) in laraColors[base.name]" :key="clr">
                <v-btn v-bind="props" :color="clr" density="comfortable" style="min-width: 100%">
                  {{ clr }}
                </v-btn>
                <div class="v-card-subtitle pt-1 pb-0">
                  {{ key }}
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-card>
        </v-container>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import { useBuilderColorsStore } from "@/stores/builder-colors";

  import laraColors from "@/utils/color/pv-lara-colors";

  console.log("VariablesView ::: laraColors: ", laraColors.baseColors);
  const baseColors = laraColors.baseColors;
  const laraSwatches = laraColors.swatches;

  const colorsStore = useBuilderColorsStore();

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

  onMounted(() => {
    console.log("VariablesView ::: onMounted");
  });
  function colorPickerUpdateHandler(value) {
    console.log("VariablesView ::: colorPickerUpdateHandler");
    console.log(" - value:", value);
    let val = String(value).toUpperCase();
    console.log(" - val: ", val);
    // selectedColor and selectedItem are automatically set via component bindings
    console.log(" - selectedColor value: ", selectedColor.value);
    console.log(" - selectedItem value: ", selectedItem.value);
  }
</script>

<style scoped lang="scss">
  // .code {
  //   background-color: rgb(var(--v-theme-code));
  //   color: rgb(var(--v-theme-on-code));
  // }
</style>
