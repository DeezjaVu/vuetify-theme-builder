<template>
  <v-dialog fullscreen transition="dialog-top-transition">
    <v-theme-provider :theme="selectedTheme">
      <!-- <v-card color="background" variant="flat" density="compact"> -->
      <v-card color="background" variant="flat">
        <!-- <v-toolbar color="surface-variant" density="comfortable"> -->
        <v-toolbar color="primary">
          <!-- <template #prepend> -->
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <!-- </template> -->
          <v-toolbar-title>Theme Preview</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-select
            label="Theme"
            v-model="selectedTheme"
            :items="themeNames"
            auto-select-first="exact"
            density="compact"
            variant="outlined"
            max-width="120"
            hide-details
          ></v-select>
          <v-toolbar-items>
            <v-btn class="ml-4" color="red" variant="tonal" @click="emit('click:close')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-layout full-height>
          <v-main scrollable>
            <v-container fluid>
              <!-- CARDS ROW -->
              <v-row dense>
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                  <v-card :variant="selectedCardVariant">
                    <v-card-item>
                      <v-card-title>Default Card</v-card-title>
                      <v-card-subtitle>
                        <code class="text-uppercase">{{ getHexFor(`surface`) }}</code>
                      </v-card-subtitle>
                      <template #append>
                        <v-btn icon="mdi-content-copy" size="small" variant="text" @click="copyColorClickHandler(getHexFor(`surface`))" />
                      </template>
                    </v-card-item>
                    <v-card-text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ut tempore eveniet inventore delectus quibusdam.
                    </v-card-text>
                    <v-card-actions>
                      <v-select
                        label="Variant"
                        v-model="selectedCardVariant"
                        :items="cardVariants"
                        auto-select-first="exact"
                        variant="outlined"
                        hide-details
                        density="compact"
                      ></v-select>
                      <v-spacer></v-spacer>
                      <v-btn>Cancel</v-btn>
                      <v-btn>Ok</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <!-- <template v-for="item in previewTheme" :key="item.name"> -->
                <!-- [*] PRIMARY CARD -->
                <v-col cols="12" sm="12" md="6" lg="4" xl="3">
                  <!-- <v-card class="bg-primary" color="primary" :variant="selectedCardVariant"> -->
                  <v-card class="bg-primary" :variant="selectedCardVariant">
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
                              variant="text"
                              @click="copyColorClickHandler(getHexFor(`primary`))"
                            />
                            <!-- <v-btn icon="mdi-tools" v-bind="props" size="small" variant="text" aria-label="Random color"></v-btn> -->
                          </template>
                        </v-tooltip>
                      </template>
                    </v-card-item>
                    <v-card-text class="on-primary">
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
                  <!-- <v-card class="bg-secondary" color="secondary" :variant="selectedCardVariant"> -->
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
                              variant="text"
                              @click="copyColorClickHandler(getHexFor(`secondary`))"
                            />
                            <!-- <v-btn icon="mdi-tools" v-bind="props" size="small" variant="text" aria-label="Random color"></v-btn> -->
                          </template>
                        </v-tooltip>
                      </template>
                    </v-card-item>
                    <v-card-text class="on-secondary">
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
                  <!-- <v-card class="bg-tertiary" color="tertiary" :variant="selectedCardVariant"> -->
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
                              variant="text"
                              @click="copyColorClickHandler(getHexFor(`tertiary`))"
                            />
                            <!-- <v-btn icon="mdi-tools" v-bind="props" size="small" variant="text" aria-label="Random color"></v-btn> -->
                          </template>
                        </v-tooltip>
                      </template>
                    </v-card-item>
                    <v-card-text class="on-tertiary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit nihil, consequuntur fugiat ipsa iste?
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="tertiary" variant="flat">Cancel</v-btn>
                      <v-btn color="tertiary-lighten-1" variant="elevated">Ok</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <!-- </template> -->
              </v-row>
              <!-- ALERTS ROW -->
              <v-row dense>
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <!-- [*] DEFAULT ALERT -->
                  <v-alert title="Default Alert" icon="$vuetify" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <!-- [*] SUCCESS ALERT -->
                  <v-alert title="Success Alert" type="success" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <!-- [*] INFO ALERT -->
                  <v-alert title="Info Alert" type="info" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <!-- [*] WARNING ALERT -->
                  <v-alert title="Warning Alert" type="warning" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl>
                  <!-- [*] ERROR ALERT -->
                  <v-alert title="Error Alert" type="error" :variant="selectedCardVariant">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </v-alert>
                </v-col>
              </v-row>
              <v-divider class="my-4"></v-divider>
              <!-- TOGGLE BUTTONS + LIST + ACCORDION ROW -->
              <v-row dense>
                <!-- [*] BUTTONS -->
                <v-col>
                  <ColorButtonCard title="Buttons" color="surface-variant" variant="outlined"></ColorButtonCard>
                </v-col>
                <!-- [*] TOGGLE BUTTONS -->
                <v-col cols="12" lg="6" xl="4" class="d-flex flex-column ga-4">
                  <v-card title="Toggle Buttons" density="compact" color="surface-light">
                    <v-card-text>
                      <!-- [*] DEFAULT ROW -->
                      <v-row>
                        <v-col>
                          <!-- DEFAULT EXCLUSIVE -->
                          <v-btn-toggle v-model="toggle_exclusive" :color="selectedToggleColor">
                            <v-btn icon="mdi-format-align-left"> </v-btn>
                            <v-btn icon="mdi-format-align-center"> </v-btn>
                            <v-btn icon="mdi-format-align-right"> </v-btn>
                            <v-btn icon="mdi-format-align-justify"> </v-btn>
                          </v-btn-toggle>
                        </v-col>
                        <v-divider class="hidden-sm-and-down" vertical></v-divider>
                        <v-col>
                          <!-- DEFAULT TEXT OPTIONS -->
                          <v-btn-toggle v-model="text" :color="selectedToggleColor" rounded="0" group>
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
                      <v-list :lines="false" density="compact" nav>
                        <v-list-item v-for="(item, i) in listItems" :key="i" :value="item" :color="selectedToggleColor">
                          <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                          </template>
                          <v-list-item-title v-text="item.text"></v-list-item-title>
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
                <v-col cols="1">
                  <ColorButtonCard title="Buttons" color="surface-variant" variant="outlined"></ColorButtonCard>
                </v-col>
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
  import { computed, onMounted, ref, watch } from "vue";

  const props = defineProps({
    previewTheme: Object,
    themeName: String
  });

  const themeNames = ref([
    { title: "Light", value: "hct-light" },
    { title: "Dark", value: "hct-dark" }
  ]);

  const selectedTheme = ref(props.themeName);

  watch(
    () => props.themeName,
    (newValue, oldValue) => {
      console.log("ThemePreviewDialog ::: watch themeName");
      console.log("- newValue: ", newValue);
      console.log("- oldValue: ", oldValue);
      selectedTheme.value = newValue;
    }
  );

  const emit = defineEmits(["click:close", "click:copy"]);

  // const cardVariants = ref(["elevated", "flat", "tonal", "plain"]);
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
    { title: "Primary", value: "primary" },
    { title: "Secondary", value: "secondary" },
    { title: "Tertiary", value: "tertiary" },
    { title: "Success", value: "success" },
    { title: "Info", value: "info" },
    { title: "Warning", value: "warning" },
    { title: "Error", value: "error" }
  ]);
  const selectedToggleColor = ref("");

  const selectedXpanelVariant = ref("");
  const xPanelVariants = ref([
    { title: "Default", value: "" },
    { title: "Accordion", value: "accordion" },
    { title: "Popout", value: "popout" },
    { title: "Inset", value: "inset" }
  ]);

  function darkMode() {
    console.log("ThemePreviewDialog ::: darkMode");
    return props.themeName === "hct-dark";
  }

  /**
   * LIFECYCLE HOOKS
   */

  onMounted(() => {
    console.log("ThemePreviewDialog ::: onMounted");
  });

  /**
   * COMPONENT METHODS
   */

  function getHexFor(name) {
    console.log("ThemePreviewDialog ::: getHexFor");
    console.log(" - name: ", name);
    return props.previewTheme.find((entry) => entry.name === name).hex;
  }

  /**
   * EVENT HANDLERS
   */

  function darkModeUpdateHandler(value) {
    console.log("ThemePreviewDialog ::: darkModeUpdateHandler");
    console.log(" - value: ", value);
    props.themeName = value ? "hct-dark" : "hct-light";
  }

  function copyColorClickHandler(hex) {
    console.log("ThemePreviewDialog ::: copyColorClickHandler");
    emit("click:copy", hex);
  }
</script>
<script>
  export default {
    data() {
      return {
        text: "center",
        toggle_exclusive: 1
      };
    }
  };
</script>
