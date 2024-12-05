<template>
  <v-card color="background" style="cursor: default" height="800" rounded="lg" hover>
    <v-img :src="recipeImage" height="200" rounded="lg" cover>
      <v-card-item class="position-absolute right-0 left-0 bottom-0" :style="bgGradientStyle">
        <v-card-title> Chocolate Mousse for Beginners </v-card-title>
      </v-card-item>
    </v-img>

    <v-card-text class="font-weight-light">
      <v-row dense>
        <v-col>
          <v-card-title class="pt-0">Ingredients</v-card-title>
          <v-btn-toggle v-model="selectedServings" color="tertiary" mandatory rounded="xl" density="compact" group>
            <template v-for="(btn, idx) in servingsAmount" :key="`toggle-servings-${idx}`">
              <v-btn class="font-mono text-lowercase" :value="btn.value" size="small">
                <v-icon v-if="btn.value === selectedServings" size="smaller" start> mdi-check </v-icon>
                {{ btn.title }}
              </v-btn>
            </template>
          </v-btn-toggle>
          <v-card-subtitle class="text-caption font-weight-light pt-2"> Original recipe (1x) yields 4 servings </v-card-subtitle>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <!-- [*] INGREDIENT LIST -->
          <v-list lines="one" density="compact" rounded="lg" class="bg-secondary">
            <v-list-item v-for="(item, idx) in ingredients" :key="`ingredient-${idx}`">
              <template v-slot:prepend>
                <v-icon icon="mdi-food"></v-icon>
              </template>
              <v-list-item-title class="font-weight-light">
                <code> {{ item.amount * selectedServings }} {{ item.unit }} </code> {{ item.text }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-card-title class="pt-0">Preparation</v-card-title>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-timeline side="end" truncate-line="both">
            <v-timeline-item v-for="item in recipeDirections" :key="item.id" :dot-color="item.color" :icon="item.icon" fill-dot>
              <v-alert :color="item.color" :value="true" rounded="shaped">
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut.
              </v-alert>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
  import recipeImage from "@/assets/images/recipe/recipe-chocolate-mousse.webp";
  import { computed, onMounted, ref } from "vue";
  import { useTheme } from "vuetify";

  const props = defineProps({
    themeName: String
  });

  const servingsAmount = ref([
    { title: "1x", value: 1 },
    { title: "2x", value: 2 },
    { title: "4x", value: 4 },
    { title: "6x", value: 6 }
  ]);

  const selectedServings = ref(1);

  const readingMode = ref(false);

  const ingredients = ref([
    { amount: 125, unit: "gr", text: "dark chocolate", description: "70% cocoa" },
    { amount: 3, unit: "eggs", text: "(~55g each)", description: "room temperature" },
    { amount: 10, unit: "gr", text: "unsalted butter", description: "room temperature" },
    { amount: 125, unit: "ml", text: "heavy cream", description: "36% milk fat" },
    { amount: 35, unit: "gr", text: "caster sugar", description: "superfine white sugar" }
  ]);

  const recipeDirections = ref([
    {
      id: 1,
      color: "primary",
      icon: "mdi-numeric-1"
    },
    {
      id: 2,
      color: "secondary",
      icon: "mdi-numeric-2"
    },
    {
      id: 3,
      color: "tertiary",
      icon: "mdi-numeric-3"
    }
  ]);

  const bgGradientStyle = computed(() => {
    console.log("RecipeCard ::: computed bgGradientColor");
    console.log(" - props.themeName: ", props.themeName);
    const theme = useTheme();
    const bg = theme.current.value.colors.background;
    console.log(" - current theme: ", theme.current.value);
    console.log(" - theme background: ", bg);
    return `background: linear-gradient(0deg, ${bg}, transparent);`;
  });

  onMounted(() => {
    console.log("RecipeCard ::: onMounted");
  });

  function readingModeUpdateHandler(value) {
    console.log("RecipeCard ::: readingModeUpdateHandler");
    console.log(" - value: ", value);
  }
</script>
<style lang="scss" scoped>
  .v-switch {
    :deep(.v-label) {
      font-size: 0.9rem !important;
    }
  }
</style>
