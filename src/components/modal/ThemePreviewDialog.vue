<template>
  <v-dialog fullscreen transition="dialog-top-transition">
    <v-theme-provider :theme="themeName">
      <v-card color="background" variant="flat">
        <v-toolbar color="primary">
          <v-app-bar-nav-icon @click="navDrawerOpen = !navDrawerOpen"></v-app-bar-nav-icon>
          <v-toolbar-title>
            <span>Theme Preview </span>
            <span class="hidden-sm-and-down">
              &mdash;
              <code>[kitchen sink]</code>
            </span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-select
            label="Theme"
            class="mr-4 mr-md-0"
            v-model="themeName"
            :items="themeNames"
            auto-select-first="exact"
            density="compact"
            variant="outlined"
            max-width="100"
            hide-details
          ></v-select>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="ml-4" variant="tonal" @click="closeClickHandler">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer v-model="navDrawerOpen" :color="selectedToggleColor" width="250" temporary>
          <!-- label="Theme" -->
          <v-radio-group
            class="text-label-2 my-2"
            v-model="themeName"
            :color="themeName === `hct-light` ? `tertiary-darken-2` : `tertiary-lighten-2`"
            density="comfortable"
            :ripple="false"
            hide-details
          >
            <v-radio class="text-label-2 mr-2" label="Light Preview" value="hct-light"></v-radio>
            <v-radio class="text-label-2 mr-2" label="Dark Preview" value="hct-dark"></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list nav>
            <v-list-item title="Exit Preview" @click="closeClickHandler"></v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list :items="navFakeItems" nav></v-list>
          <v-divider></v-divider>
          <v-select
            label="Theme"
            class="ma-4"
            v-model="themeName"
            :items="themeNames"
            auto-select-first="exact"
            density="compact"
            variant="outlined"
            hide-details
          ></v-select>
          <v-select
            label="Color"
            class="ma-4"
            v-model="selectedToggleColor"
            :items="toggleButtonColors"
            auto-select-first="exact"
            variant="outlined"
            hide-details
            density="compact"
          ></v-select>
        </v-navigation-drawer>

        <!-- [*] PAGE CONTENT -->

        <v-layout full-height>
          <v-main scrollable>
            <v-container fluid>
              <!-- [*] THEME STYLED CARDS ROW -->
              <!-- class="ga-4" -->
              <v-row>
                <!-- [*] WEATHER CARD -->
                <v-col class="px-0 px-sm-4">
                  <!-- pa-2 = mobile | pa-sm-4 = everything else -->
                  <v-container class="bg-surface pa-2 pa-sm-4 rounded-lg" :width="cardWidth">
                    <WeatherCard :themeName="themeName"></WeatherCard>
                  </v-container>
                </v-col>

                <!-- [*] KEEP CARD -->
                <v-col class="px-0 px-sm-4">
                  <!-- pa-2 = mobile | pa-sm-4 = everything else -->
                  <v-container class="bg-surface pa-2 pa-sm-4 rounded-lg" :width="cardWidth">
                    <KeepCard :themeName="themeName"> </KeepCard>
                  </v-container>
                </v-col>

                <!-- [*] FALLOUT TV SHOW CARD -->
                <!-- 
                  <v-col class="px-0">
                    <v-container class="bg-surface pa-2 pa-sm-4 rounded-lg" :width="cardWidth">
                      <FalloutCard :themeName="themeName"></FalloutCard>
                    </v-container>
                  </v-col> 
                -->

                <!-- [*] RECIPE CARD -->
                <v-col class="px-0 px-sm-4">
                  <!-- pa-2 = mobile | pa-sm-4 = everything else -->
                  <v-container class="bg-surface pa-2 pa-sm-4 rounded-lg" :width="cardWidth">
                    <RecipeCard :themeName="themeName"></RecipeCard>
                  </v-container>
                </v-col>
              </v-row>

              <v-divider class="my-4"></v-divider>

              <!-- [*] CARDS ROW -->
              <v-row dense>
                <!-- [*] DEFAULT CARD -->
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                  <v-card :variant="selectedCardVariant">
                    <v-card-item>
                      <v-card-title>Default Card</v-card-title>
                      <v-card-subtitle>
                        <code class="text-uppercase">{{ getHexFor(`surface`) }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-btn icon="mdi-content-copy" size="small" variant="plain" @click="copyColorClickHandler(getHexFor(`surface`))" />
                      </template>
                    </v-card-item>
                    <v-card-text class="font-weight-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ut tempore eveniet inventore delectus quibusdam.
                    </v-card-text>
                    <v-card-actions>
                      <v-select
                        label="Variant"
                        v-model="selectedCardVariant"
                        :items="cardVariants"
                        auto-select-first="exact"
                        variant="outlined"
                        density="compact"
                        hide-details
                      ></v-select>
                      <v-spacer></v-spacer>
                      <v-btn>Cancel</v-btn>
                      <v-btn>Ok</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <!-- [*] PRIMARY CARD -->
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                  <v-card class="bg-primary" :variant="selectedCardVariant">
                    <!-- <v-card-item> -->
                    <v-card-item class="on-primary">
                      <v-card-title>Primary Card</v-card-title>
                      <v-card-subtitle>
                        <code class="text-uppercase">{{ getHexFor(`primary`) }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-tooltip text="Copy color." close-on-content-click>
                          <template v-slot:activator="{ props }">
                            <v-btn
                              icon="mdi-content-copy"
                              v-bind="props"
                              size="small"
                              variant="plain"
                              @click="copyColorClickHandler(getHexFor(`primary`))"
                            />
                          </template>
                        </v-tooltip>
                      </template>
                    </v-card-item>
                    <v-card-text class="on-primary font-weight-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit nihil, consequuntur fugiat ipsa iste?
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" variant="flat">Cancel</v-btn>
                      <v-btn color="primary-lighten-1" variant="elevated">Ok</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <!-- [*] SECONDARY CARD -->
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                  <v-card class="bg-secondary" :variant="selectedCardVariant">
                    <v-card-item class="on-secondary">
                      <v-card-title>Secondary Card</v-card-title>
                      <v-card-subtitle>
                        <code class="text-uppercase">{{ getHexFor(`secondary`) }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-tooltip text="Copy color." close-on-content-click>
                          <template v-slot:activator="{ props }">
                            <v-btn
                              icon="mdi-content-copy"
                              v-bind="props"
                              size="small"
                              variant="plain"
                              @click="copyColorClickHandler(getHexFor(`secondary`))"
                            />
                          </template>
                        </v-tooltip>
                      </template>
                    </v-card-item>
                    <v-card-text class="on-secondary font-weight-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit nihil, consequuntur fugiat ipsa iste?
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="secondary" variant="flat">Cancel</v-btn>
                      <v-btn color="secondary-lighten-1" variant="elevated">Ok</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <!-- [*] TERTIARY CARD -->
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                  <v-card class="bg-tertiary" :variant="selectedCardVariant">
                    <v-card-item class="on-tertiary">
                      <v-card-title>Tertiary Card</v-card-title>
                      <v-card-subtitle>
                        <code class="text-uppercase">{{ getHexFor(`tertiary`) }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-tooltip text="Copy color." close-on-content-click>
                          <template v-slot:activator="{ props }">
                            <v-btn
                              icon="mdi-content-copy"
                              v-bind="props"
                              size="small"
                              variant="plain"
                              @click="copyColorClickHandler(getHexFor(`tertiary`))"
                            />
                          </template>
                        </v-tooltip>
                      </template>
                    </v-card-item>
                    <v-card-text class="on-tertiary font-weight-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit nihil, consequuntur fugiat ipsa iste?
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="tertiary" variant="flat">Cancel</v-btn>
                      <v-btn color="tertiary-lighten-1" variant="elevated">Ok</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <!-- [*] ALERTS ROW -->
              <v-row dense>
                <!-- [*] DEFAULT ALERT COLUMN -->
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <v-alert class="font-weight-light" title="Default Alert" icon="$vuetify" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
                <!-- [*] SUCCESS ALERT COLUMN -->
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <v-alert class="font-weight-light" title="Success Alert" type="success" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
                <!-- [*] INFO ALERT COLUMN -->
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <v-alert class="font-weight-light" title="Info Alert" type="info" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
                <!-- [*] WARNING ALERT COLUMN -->
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <v-alert class="font-weight-light" title="Warning Alert" type="warning" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
                <!-- [*] ERROR ALERT COLUMN -->
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <v-alert class="font-weight-light" title="Error Alert" type="error" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
              </v-row>
              <v-divider class="my-4"></v-divider>
              <!-- [*] TOGGLE BUTTONS + LIST + ACCORDION ROW -->
              <v-row dense>
                <!-- [*] BUTTONS -->
                <v-col>
                  <ColorButtonCard title="Buttons" color="surface-variant" variant="outlined" has-tertiary></ColorButtonCard>
                </v-col>
                <!-- [*] TOGGLE BUTTONS -->
                <v-col cols="12" lg="6" xl="4" class="d-flex flex-column ga-4">
                  <v-card title="Toggle Buttons" density="compact">
                    <v-card-text>
                      <!-- [*] DEFAULT ROW -->
                      <v-row>
                        <v-col>
                          <!-- DEFAULT EXCLUSIVE -->
                          <v-btn-toggle v-model="toggleExclusive" :color="selectedToggleColor">
                            <v-btn icon="mdi-format-align-left"> </v-btn>
                            <v-btn icon="mdi-format-align-center"> </v-btn>
                            <v-btn icon="mdi-format-align-right"> </v-btn>
                            <v-btn icon="mdi-format-align-justify"> </v-btn>
                          </v-btn-toggle>
                        </v-col>
                        <v-divider class="hidden-sm-and-down" vertical></v-divider>
                        <v-col>
                          <!-- DEFAULT TEXT OPTIONS -->
                          <v-btn-toggle v-model="toggleText" :color="selectedToggleColor" mandatory rounded="0" group>
                            <v-btn value="left"> Left </v-btn>
                            <v-btn value="center"> Center </v-btn>
                            <v-btn value="right"> Right </v-btn>
                            <v-btn value="justify"> Justify </v-btn>
                          </v-btn-toggle>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-select
                        label="Color"
                        :max-width="smAndUp ? `35%` : `100%`"
                        v-model="selectedToggleColor"
                        :items="toggleButtonColors"
                        auto-select-first="exact"
                        variant="outlined"
                        hide-details
                        density="compact"
                      ></v-select>
                    </v-card-actions>
                  </v-card>
                  <!-- <v-divider></v-divider> -->
                  <v-card title="Lists" density="compact">
                    <v-card-text>
                      <!-- TODO: Fix list styles in ThemePreviewDialog -->
                      <v-list :lines="false" density="compact" nav>
                        <v-list-item v-for="(item, i) in listItems" :key="i" :value="item" :color="selectedToggleColor">
                          <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                          </template>
                          <v-list-item-title
                            :class="themeName === `hct-dark` ? 'text-surface-bright' : 'text-black'"
                            v-text="item.text"
                          ></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-card>
                </v-col>
                <!-- [*] LIST COLUMN -->
                <!-- <v-col cols="12" lg="6" xl="4"> </v-col> -->
                <!-- [*] ACCORDION COLUMN -->
                <v-col cols="12" lg="6" xl="4">
                  <v-card title="Accordion" density="compact">
                    <v-card-text>
                      <div>
                        <v-expansion-panels :variant="selectedXpanelVariant">
                          <v-expansion-panel v-for="i in 3" :key="i" :color="selectedToggleColor">
                            <v-expansion-panel-title>Item {{ i }}</v-expansion-panel-title>
                            <v-expansion-panel-text>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dolorem quo exercitationem perferendis
                              facere labore fugit, rerum expedita a obcaecati.
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-select
                        label="Variant"
                        :max-width="smAndUp ? `35%` : `100%`"
                        v-model="selectedXpanelVariant"
                        :items="xPanelVariants"
                        auto-select-first="exact"
                        variant="outlined"
                        hide-details
                        density="compact"
                      >
                      </v-select>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col> </v-col>
                <v-col> </v-col>
              </v-row>

              <v-row>
                <!-- <v-col cols="4" class="d-flex flex-wrap justify-space-around ga-4"> -->
                <v-col cols="2">
                  <ColorButtonCard title="Buttons" color="surface-variant" variant="outlined" has-tertiary></ColorButtonCard>
                </v-col>
                <v-col cols="2"> </v-col>
                <v-col cols="4"> </v-col>
                <v-col cols="4"> </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-layout>
      </v-card>
    </v-theme-provider>
  </v-dialog>
</template>
<script setup>
  import ColorButtonCard from "@/components/builder/ColorButtonCard.vue";
  import { computed, onMounted, onUnmounted, ref, watch } from "vue";
  import { useTheme, useDisplay } from "vuetify";

  const props = defineProps({
    // previewTheme: Object
    // themeName: String
  });

  const themeName = defineModel("themeName");

  const emit = defineEmits(["click:close", "click:copy"]);

  const navDrawerOpen = ref(false);

  const themeInstance = useTheme();

  const { mobile, smAndUp, mdAndUp, lgAndUp } = useDisplay();

  const themeNames = ref([
    { title: "Light", value: "hct-light" },
    { title: "Dark", value: "hct-dark" }
  ]);

  watch(themeName, (newValue, oldValue) => {
    console.log("ThemePreviewDialog ::: watch themeName");
    console.log("- oldValue: ", oldValue);
    console.log("- newValue: ", newValue);
  });

  const navFakeItems = ref([
    { title: "Foo", value: "foo" },
    { title: "Bar", value: "bar" },
    { title: "Fizz", value: "fizz" },
    { title: "Buzz", value: "buzz" }
  ]);

  const cardVariants = ref([
    { title: "Elevated", value: "elevated" },
    { title: "Flat", value: "flat" },
    { title: "Outlined", value: "outlined" },
    { title: "Plain", value: "plain" },
    { title: "Tonal", value: "tonal" },
    { title: "Text", value: "text" }
  ]);
  const selectedCardVariant = ref("elevated");

  const listItems = ref([
    { text: "My Files", icon: "mdi-folder" },
    { text: "Shared with me", icon: "mdi-account-multiple" },
    { text: "Starred", icon: "mdi-star" },
    { text: "Recent", icon: "mdi-history" },
    { text: "Offline", icon: "mdi-check-circle" },
    { text: "Uploads", icon: "mdi-upload" },
    { text: "Backups", icon: "mdi-cloud-upload" }
  ]);

  const toggleButtonColors = ref([
    { title: "Surface (default)", value: "" },
    { title: "Surface Light", value: "surface-light" },
    // { title: "Surface Variant", value: "surface-variant" },
    { title: "Primary", value: "primary" },
    { title: "Secondary", value: "secondary" },
    { title: "Tertiary", value: "tertiary" },
    { title: "Success", value: "success" },
    { title: "Info", value: "info" },
    { title: "Warning", value: "warning" },
    { title: "Error", value: "error" }
  ]);
  const selectedToggleColor = ref("");

  const xPanelVariants = ref([
    { title: "Default", value: null },
    { title: "Accordion", value: "accordion" },
    { title: "Popout", value: "popout" },
    { title: "Inset", value: "inset" }
  ]);
  const selectedXpanelVariant = ref(null);

  const toggleText = ref("center");
  const toggleExclusive = ref(1);

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("ThemePreviewDialog ::: onMounted");
  });

  onUnmounted(() => {
    console.log("ThemePreviewDialog ::: onUnmounted");
  });

  /**
   * COMPUTED PROPERTIES
   */

  const currentThemeColors = computed(() => {
    // console.log("ThemePreviewDialog ::: computed currentThemeColors");
    // console.log(" - props.themeName: ", themeName.value);
    const theme = themeInstance.themes.value[themeName.value];
    const colors = theme.colors;
    return colors;
  });

  const cardWidth = computed(() => {
    // console.log("ThemePreviewDialog ::: computed cardWidth");
    if (lgAndUp.value) {
      return "460px";
    } else if (mdAndUp.value) {
      return "440px";
    } else if (smAndUp.value) {
      return "420px";
    } else {
      return "100%";
    }
  });

  /**
   * COMPONENT METHODS
   */

  function getHexFor(name) {
    // console.log("ThemePreviewDialog ::: getHexFor");
    const hex = currentThemeColors.value[name];
    return hex;
  }

  /**
   * EVENT HANDLERS
   */

  /**
   * Event handler for the copy button click event.
   *
   * Emits a `click:copy` event with the hex color as the payload.
   *
   * @param {string} hex - the color to copy, in hex format (e.g. #FF0000)
   */
  function copyColorClickHandler(hex) {
    console.log("ThemePreviewDialog ::: copyColorClickHandler");
    emit("click:copy", hex);
  }

  function navSelectedUpdateHandler(item) {
    console.log("ThemePreviewDialog ::: navSelectedUpdateHandler");
    console.log(" - item: ", item);
  }

  /**
   * Handles the close button click event.
   *
   * Emits a `click:close` event
   * to notify the parent component to close the dialog.
   */
  function closeClickHandler() {
    console.log("ThemePreviewDialog ::: closeClickHandler");
    navDrawerOpen.value = false;
    emit("click:close");
  }
</script>

<style lang="scss" scoped>
  code {
    background-color: rgb(var(--v-theme-code));
    color: rgb(var(--v-theme-on-code));
  }

  .text-label-1 {
    font-size: 0.9rem !important;
    font-weight: 400 !important;
    :deep(.v-label) {
      font-size: 0.9rem !important;
      font-weight: 400 !important;
      opacity: 1 !important;
    }
  }

  .text-label-2 {
    font-size: 0.875rem !important;
    font-weight: 400 !important;
    :deep(.v-label) {
      font-size: 0.875rem !important;
      font-weight: 400 !important;
      opacity: 1 !important;
    }
  }
</style>
