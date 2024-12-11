<template>
  <!-- MODAL PALETTE -->
  <PaletteDialog v-model="modalPaletteOpen" :selected-theme="currentTheme" @cancel="paletteCancelHandler" @submit="paletteSubmitHandler" />
  <v-app>
    <!-- APP TOOLBAR -->
    <v-app-bar class="px-2 px-sm-12 mx-auto" color="primary">
      <template v-slot:prepend>
        <!-- -->
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          density="comfortable"
          @click.stop="navDrawerOpen = !navDrawerOpen"
        ></v-app-bar-nav-icon>
      </template>
      <v-toolbar-title class="text-uppercase pr-8"> Vuetify Theme Builder </v-toolbar-title>

      <v-tabs class="hidden-sm-and-down" align-tabs="start" @update:model-value="tabUpdateHandler">
        <v-tab
          class="font-weight-light"
          v-for="item in menuItems"
          :key="item.value"
          :text="item.title"
          :value="item.value"
          :to="item.href"
        ></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <template v-slot:append>
        <v-btn icon density="comfortable" @click="modalPaletteOpen = true">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <!-- -->
    <v-navigation-drawer class="hidden-md-and-up" v-model="navDrawerOpen" location="top" temporary>
      <v-list :items="menuItems" :item-props="true" v-model:selected="selectedNavItem" :selected="selectedNavItem" nav> </v-list>
    </v-navigation-drawer>
    <!-- <AppFooter /> -->

    <v-main class="mt-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import PaletteDialog from "./components/modal/PaletteDialog.vue";

  import { ref, onMounted } from "vue";
  import { useDisplay } from "vuetify";

  import colors from "vuetify/lib/util/colors";

  const modalPaletteOpen = ref(false);
  const navDrawerOpen = ref(false);

  const { mobile } = useDisplay();

  const currentTheme = ref("builder-dark");

  /**
   * interface ThemeInstance {
   *   readonly isDisabled: boolean;
   *   readonly themes: Ref<Record<string, InternalThemeDefinition>>;
   *   readonly name: Readonly<Ref<string>>;
   *   readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
   *   readonly computedThemes: DeepReadonly<Ref<Record<string, InternalThemeDefinition>>>;
   *   readonly themeClasses: Readonly<Ref<string | undefined>>;
   *   readonly styles: Readonly<Ref<string>>;
   *   readonly global: {
   *       readonly name: Ref<string>;
   *       readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
   *   };
   * }
   */

  // const tab = "about";
  const menuItems = ref([
    { title: "Home", value: "app-view", href: "/" },
    { title: "About", value: "about-view", href: "/about" },
    { title: "Colors", value: "colors-view", href: "/builder/colors" },
    { title: "Variables", value: "variables-view", href: "/builder/variables" },
    { title: "Utilities", value: "utilities-view", href: "/builder/utilities" }
    // { title: "Carousel", value: "carousel-view", href: "/builder/carousel" }
  ]);
  const selectedNavItem = ref(["app-view"]);

  /**
   * Called when the app is mounted.
   */
  onMounted(() => {
    console.log("APP ::: onMounted");
  });

  /**
   * Handles the tab update event.
   * @param {string} tabValue - The newly selected tab value.
   */
  function tabUpdateHandler(tabValue) {
    console.log("App ::: tabUpdateHandler");
    console.log(" - param tabValue: ", tabValue);
    console.log(" - selectedNavItem: ", selectedNavItem.value);
    selectedNavItem.value = [tabValue];
  }

  /**
   * Handles menu item clicks.
   * @param {string} item - The title of the menu item clicked.
   */
  function navUpdateHandler(item) {
    console.log("APP ::: navUpdateHandler");
    console.log(" - item", item);
  }

  /**
   * Closes the PaletteDialog modal.
   */
  function paletteCancelHandler() {
    console.log("APP ::: paletteCancelHandler");
    modalPaletteOpen.value = false;
  }

  /**
   * Handles the update of the selected theme from the PaletteDialog.
   * Sets the App's current theme to the selected theme and closes the PaletteDialog modal.
   *
   * @todo Figure out wether to use this or dismiss it entirely.
   *
   * @param {string} theme - The selected theme name.
   */
  function paletteSubmitHandler(theme) {
    console.log("APP ::: paletteSubmitHandler");
    console.log(" - theme: ", theme);
    currentTheme.value = theme;
    modalPaletteOpen.value = false;
  }
</script>

<style lang="scss">
  .v-toolbar-title {
    flex: 0 1 fit-content;
    // font-size: 1.25rem;
    min-width: fit-content;
  }

  /**
   * V-COLOR-PICKER OVERRIDES
   */

  // Change color picker swatches padding and justify-content.
  .v-color-picker-swatches {
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: normal !important;
      // padding: 0px !important;
      // limit width of swatch rows
      max-width: 260px !important;
      // add margin to swatch rows, so it centers nicely
      margin: auto !important;
      // WARNING: swatches border should be disabled
      // border: 1px solid #000;
    }
  }

  .v-swatches-pt-0 {
    > div div {
      padding-top: 0px !important;
    }
  }

  // Change color picker swatches direction to row
  // and make rows wrap.
  // Decrease margin-bottom.
  .v-color-picker-swatches__swatch {
    display: flex;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    // vuetify default margin-bottom is 10px
    // margin-bottom: 20px !important;
    margin-bottom: 2px !important;
  }

  // Change color picker swatches width and height
  // and reduce margins.
  .v-color-picker-swatches__color {
    width: 20px !important;
    height: 20px !important;
    max-height: 20px !important;
    margin: 2px !important;
  }
</style>
