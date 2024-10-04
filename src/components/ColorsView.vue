<template>
  <v-container class="fill-height px-12 mx-auto" grid-list-xs>
    <!-- <v-responsive class="align-centerfill-height mx-auto"> -->
    <!-- <div class="text-center"> -->
    <!-- <v-icon icon="mdi-account-box"></v-icon> -->
    <!-- <v-icon icon="$vuetify"></v-icon> -->
    <!-- <h1 class="text-h2 font-weight-bold">Theme Builder Colors</h1> -->
    <!-- </div> -->
    <!-- </v-responsive> -->

    <!-- <v-container> -->
    <v-row class="align-sm-stretch">
      <!-- LEFT SIDE COLUMN - COLOR MENU -->
      <v-col class="d-flex flex-column col-menu">
        <!-- COLOR DIALOG -->
        <!-- :selected-color="selectedColor" -->
        <!-- @change="changeColorHandler" -->
        <ColorDialog
          :modal-color-open="modalColorOpen"
          :color-name="selectedColorName"
          v-model:picker-color="selectedColor"
          @update:picker-color="editColorChangeHandler"
          @update="editColorUpdateHandler"
          @cancel="editColorCancelHandler"
        />

        <v-card title="Theme Colors" subtitle="Material Design" variant="outlined">
          <v-card-text>
            <v-list class="d-flex flex-column" density="compact" lines="two" active-class="active-disabled">
              <v-list-item title="Primary:" value="primary" @click="editColorClickHandler('primary')">
                <v-sheet class="px-2 my-1 border-thin" :color="themeColors.primary"> color: {{ themeColors.primary }} </v-sheet>
              </v-list-item>
              <v-list-item title="Secondary:" value="secondary" @click="editColorClickHandler('secondary')">
                <v-sheet class="px-2 my-1 border-thin" :color="themeColors.secondary"> color: {{ themeColors.secondary }} </v-sheet>
              </v-list-item>
              <v-list-item title="Surface:" value="surface" @click="editColorClickHandler('surface')">
                <v-sheet class="px-2 my-1 border-thin" :color="themeColors.surface"> color: {{ themeColors.surface }} </v-sheet>
              </v-list-item>
              <v-list-item title="Background:" value="background" @click="editColorClickHandler('background')">
                <v-sheet class="px-2 my-1 border-thin" :color="themeColors.background"> color: {{ themeColors.background }} </v-sheet>
              </v-list-item>
              <v-list-item title="Success:" value="success" @click="editColorClickHandler('success')">
                <v-sheet class="px-2 my-1 border-thin" :color="themeColors.success"> color: {{ themeColors.success }} </v-sheet>
              </v-list-item>
              <v-list-item title="Info:" value="info" @click="editColorClickHandler('info')">
                <v-sheet class="px-2 my-1 border-thin" :color="themeColors.info"> color: {{ themeColors.info }} </v-sheet>
              </v-list-item>
              <v-list-item title="Warning:" value="warning" @click="editColorClickHandler('warning')">
                <v-sheet class="px-2 my-1 border-thin" :color="themeColors.warning"> color: {{ themeColors.warning }} </v-sheet>
              </v-list-item>
              <v-list-item title="Error:" value="error" @click="editColorClickHandler('error')">
                <v-sheet class="px-2 my-1 border-thin" :color="themeColors.error"> color: {{ themeColors.error }} </v-sheet>
              </v-list-item>
            </v-list>
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
              <v-row>
                <v-col>
                  <ColorButtonCard subtitle="Elevated Variant" btn-variant="elevated" />
                </v-col>
                <v-col>
                  <ColorButtonCard subtitle="Flat Variant" btn-variant="flat" />
                </v-col>
                <v-col>
                  <ColorButtonCard subtitle="Outlined Variant" btn-variant="outlined" />
                </v-col>
                <v-col>
                  <ColorButtonCard subtitle="Plain Variant" btn-variant="plain" />
                </v-col>
                <v-col>
                  <ColorButtonCard subtitle="Tonal Variant" btn-variant="tonal" />
                </v-col>
                <v-col>
                  <ColorButtonCard subtitle="Text Variant" btn-variant="text" />
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <!-- V-CARD ACTIONS -->
            <!-- 
              <v-card-actions>
                <v-btn color="success">Success</v-btn>
                <v-btn color="info">Info</v-btn>
                <v-btn color="warning">Warning</v-btn>
                <v-btn color="error">Error</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="secondary">Secondary</v-btn>
                <v-btn color="primary">Primary</v-btn>
              </v-card-actions> 
              -->
            <!-- <v-overlay opacity="0.12" scrim="warning" contained model-value persistent /> -->
          </v-card>
        </v-theme-provider>
      </v-col>
    </v-row>
    <!-- </v-container> -->
    <!-- </v-responsive> -->
  </v-container>
</template>

<script setup>
  import { onMounted, ref, reactive } from "vue";
  // import { useTheme } from "vuetify";

  import { useBuilderThemeStore } from "@/stores/builder-theme";

  console.log("=========================");
  console.log("ColorsView ::: setup");
  console.log("=========================");

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

  onMounted(() => {
    console.log("ColorsView onMounted");
    // set default colors
    let colors = builderThemeDark.colors;

    console.log(" - themeStore - currentThemeName: ", themeStore.currentThemeName);
  });

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
    opacity: 0;
  }
  // sets border color of outlined v-card
  .v-card--variant-outlined {
    /* eslint-disable */
    border: thin solid #37474f !important;
    /* eslint-enable */
  }
  .col-grow-2 {
    flex-grow: 2;
  }

  .col-grow-3 {
    flex-grow: 3;
  }

  .col-menu {
    // grow 1
    // shrink 1
    // basis 300px
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
