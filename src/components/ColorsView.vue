<template>
  <v-container class="fill-height px-12 mx-auto">
    <!-- TODO: look into using the v-row component styles from vuetify docs -->
    <!-- <v-row align="center" class="fill-height" justify="center"> -->
    <v-row class="align-sm-stretch">
      <!-- LEFT SIDE COLUMN - COLOR MENU -->
      <v-col cols="3" class="d-flex flex-column">
        <!-- COLOR DIALOG -->
        <!-- :modal-color-open="modalColorOpen" -->
        <ColorDialog
          id="color-dialog"
          v-model="modalColorOpen"
          :color-name="selectedColorName"
          v-model:picker-color="selectedColor"
          @update:picker-color="editColorChangeHandler"
          @update="editColorUpdateHandler"
          @cancel="editColorCancelHandler"
        />
        <!-- THEME COLORS LIST MENU -->
        <!-- <v-card title="Theme Colors" subtitle="Material Design" variant="outlined"> -->
        <v-card class="bg-surface">
          <!-- V-CARD HEADER -->
          <v-card-item>
            <v-card-title> Theme Colors </v-card-title>
            <v-card-subtitle> Material Design </v-card-subtitle>
            <template v-slot:append>
              <!-- Offset button bottom-margin by 24px (mb-6) to place it in line with the card title -->
              <!-- <v-btn icon="mdi-palette" variant="tonal" density="comfortable" class="mb-6" /> -->
              <v-btn icon density="compact" class="mb-6">
                <v-icon>mdi-dots-vertical</v-icon>
                <v-menu activator="parent" location="end" open-on-hover>
                  <v-list density="comfortable" @update:selected="presetSwatchesUpdateHandler">
                    <v-list-item
                      v-for="(item, index) in presetSwatches"
                      :key="index"
                      :value="item.value"
                      @click="presetSwatchesClickHandler(item.value)"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-btn>
            </template>
          </v-card-item>

          <!-- V-CARD TEXT -->
          <v-card-text class="my-2">
            <template v-for="item in paletteColors" :key="item.name">
              <v-row>
                <v-col class="py-1">
                  <!-- PALETTE COLOR CARD -->
                  <v-card class="rounded-e-pill rounded-s-pill" variant="flat" color="secondary" density="compact">
                    <v-card-item class="px-3">
                      <template #prepend>
                        <v-btn class="mr-4" :color="themeColors[item.name]" icon @click="editColorClickHandler(item.name)"></v-btn>
                      </template>
                      <v-card-title class="text-body-1 font-weight-light d-sm-none d-md-none d-lg-flex">
                        {{ item.title }}
                      </v-card-title>
                      <v-card-subtitle class="text-subtitle-2 font-mono font-weight-light d-sm-none d-md-none d-lg-flex">
                        {{ themeColors[item.name] }}
                      </v-card-subtitle>
                    </v-card-item>
                  </v-card>
                </v-col>
              </v-row>
            </template>
            <!-- </v-responsive> -->
          </v-card-text>
        </v-card>
      </v-col>

      <!-- RIGHT SIDE COLUMN - CONTENT -->
      <v-col class="flex-shrink-1 col-content">
        <v-theme-provider theme="builder-dark" with-background>
          <!-- V-CARD -->
          <v-card title="Button Components" subtitle="Dark Theme" variant="outlined">
            <!-- V-CARD TEXT -->
            <v-card-text>
              <v-row class="d-flex flex-wrap">
                <!-- COLOR BUTTON CARDS LOOP -->
                <v-col v-for="item in variantCards" :key="item" lg="4" xl="2">
                  <ColorButtonCard :subtitle="item.title" :btn-variant="item.variant" />
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <!-- <v-overlay opacity="0.12" scrim="warning" contained model-value persistent /> -->
          </v-card>
        </v-theme-provider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted, ref, reactive } from "vue";
  // import { useTheme } from "vuetify";

  import { useBuilderThemeStore } from "@/stores/builder-theme";

  import { blue, blueHex } from "@/utils/color/bootstrap-colors";

  console.log("=========================");
  console.log("ColorsView ::: setup");
  console.log("=========================");

  const bsBlue = blue;
  console.log("ColorsView ::: bsBlue: ", bsBlue);

  const bsBlueHex = blueHex;
  console.log("ColorsView ::: bsBlueHex: ", bsBlueHex);

  const themeStore = useBuilderThemeStore();

  const themeInstance = themeStore.themeInstance;
  console.log("ColorsView ::: themeInstance: ", themeInstance);

  const modalColorOpen = ref(false);

  const builderThemeDark = themeStore.builderDark;
  const builderThemeLight = themeStore.builderLight;

  const themeColors = builderThemeDark.colors;

  const selectedColor = ref("");
  const tempColor = ref("");
  const selectedColorName = ref("");

  const presetThemes = [
    { title: "Material Design (default)" },
    { title: "Bootswatch Darkly" },
    { title: "Bootstrap 5 Dark" },
    { title: "Bootstrap 5 Light" }
  ];

  const presetSwatches = [
    { title: "Material Design (default)", value: "material" },
    { title: "Flat Colors", value: "flat" },
    { title: "Bootstrap Colors", value: "bootstrap" }
  ];

  const menuItems = [
    { title: "Primary Color", value: "primary" },
    { title: "Secondary Color", value: "secondary" },
    { title: "Surface Color", value: "surface" },
    { title: "Background Color", value: "background" },
    { title: "Success Color", value: "success" },
    { title: "Info Color", value: "info" },
    { title: "Warning Color", value: "warning" },
    { title: "Error Color", value: "error" }
  ];

  const paletteColors = reactive([
    { title: "Primary", name: "primary", hex: "#2196F3" },
    { title: "Secondary", name: "secondary", hex: "#54B6B2" },
    { title: "Surface", name: "surface", hex: "#212121" },
    { title: "Background", name: "background", hex: "#121212" },
    { title: "Success", name: "success", hex: "#4CAF50" },
    { title: "Info", name: "info", hex: "#2196F3" },
    { title: "Warning", name: "warning", hex: "#FB8C00" },
    { title: "Error", name: "error", hex: "#CF6679" }
  ]);

  const variantCards = [
    { title: "Elevated Variant", variant: "elevated" },
    { title: "Flat Variant", variant: "flat" },
    { title: "Outlined Variant", variant: "outlined" },
    { title: "Plain Variant", variant: "plain" },
    { title: "Tonal Variant", variant: "tonal" },
    { title: "Text Variant", variant: "text" }
  ];

  onMounted(() => {
    console.log("ColorsView onMounted");
    // set default colors
    let colors = builderThemeDark.colors;
    console.log(" - themeStore - currentThemeName: ", themeStore.currentThemeName);
  });

  function presetSwatchesUpdateHandler(value) {
    console.log("ColorsView ::: presetSwatchesUpdateHandler");
    console.log(" - value: ", value);
    if (value === "material") {
      //
    } else if (value === "flat") {
      //
    } else if (value === "bootstrap") {
      //
    }
  }

  function presetSwatchesClickHandler(value) {
    console.log("ColorsView ::: presetSwatchesClickHandler");
    console.log(" - value: ", value);
    if (value === "material") {
      //
    } else if (value === "flat") {
      //
    } else if (value === "bootstrap") {
      //
    }
  }

  /**
   * Handles the click event on the colors view component.
   *
   * Opens the modal to edit the selected color.
   *
   * @param {string} propName - The name of the property to update, e.g. "primary", "secondary", ...
   *
   * @example
   *   editColorClickHandler("primary");
   *
   */
  function editColorClickHandler(propName) {
    console.log("ColorsView ::: editColorClickHandler");
    console.log(" - editing color: ", propName, themeColors[propName]);
    selectedColorName.value = propName;
    // Set the selected color to the current theme color.
    selectedColor.value = themeColors[propName];
    // Will be used to cancel the update
    tempColor.value = selectedColor.value;
    modalColorOpen.value = true;
  }

  function editColorChangeHandler(color) {
    console.log("ColorsView ::: editColorChangeHandler");
    console.log(" - modal color: ", color);
    console.log(" - selected color: ", selectedColor.value);
    let colorName = selectedColorName.value;
    // assigning the color to the themeColors object
    // will automatically update the theme store.
    themeColors[colorName] = color;
  }

  /**
   * Handles the update event of the modal to edit a color.
   *
   * Closes the modal and does not update the theme color,
   * as the color was already changed in the `editColorChangeHandler` event handler.
   *
   * @since 0.0.1
   * @param {string} color - The color entered in the modal.
   */
  function editColorUpdateHandler(color) {
    console.log("ColorsView ::: editColorUpdateHandler");
    console.log(" - modal color: ", color);
    console.log(" - selected color: ", selectedColor.value);
    // close the modal
    modalColorOpen.value = false;
  }

  /**
   * Handles the cancel event of the modal to edit a color.
   *
   * Sets the theme color back to its original value before the modal was opened.
   *
   * @since 0.0.1
   */
  function editColorCancelHandler() {
    console.log("ColorsView ::: editColorCancelHandler");

    console.log(" - selectedColor: ", selectedColor.value);
    console.log(" - tempColor: ", tempColor.value);

    let colorName = selectedColorName.value;
    console.log(" - builderThemeDark.colors: ", colorName, themeColors[colorName]);
    // set the theme color back to its original value
    themeColors[colorName] = tempColor.value;
    modalColorOpen.value = false;
  }
</script>

<style scoped lang="scss">
  // Disables the active state of list items.
  // @see https://github.com/vuetifyjs/vuetify/issues/11149#issuecomment-1030649721
  .active-disabled :deep(.v-list-item__overlay) {
    opacity: 0 !important;
  }

  // sets border color of outlined v-card
  .v-card--variant-outlined {
    border: thin solid #37474f !important;
  }
  .col-grow-2 {
    flex-grow: 2;
  }

  .col-grow-3 {
    flex-grow: 3;
  }

  .col-menu {
    // grow 1 - shrink 1 - basis 300px
    flex: 1 1 300px !important;
  }

  .col-content {
    // flex: 0 0 300px !important;
    flex-grow: 1000;
  }

  .btn-subtitle {
    width: 180px;
  }
</style>
