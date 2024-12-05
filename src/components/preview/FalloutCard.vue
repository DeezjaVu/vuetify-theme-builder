<template>
  <v-card color="background" style="cursor: default" height="800" rounded="lg" hover>
    <v-img :src="falloutImage" height="200" cover>
      <v-card-text class="font-weight-light mx-4">
        <v-row>
          <v-col> </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <span style="font-size: 1rem">Now </span>
            <div class="d-flex flex-row align-center" style="line-height: 1.1">
              <span class="mr-2" style="font-size: 4rem">15° </span>
              <v-img width="64" height="64" src="@/assets/images/day-forecast-hot.svg"></v-img>
            </div>
            <span class="text-subtitle-2 font-weight-light mx-2">High: 17° &mdash; Low: 10°</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <span class="text-subtitle-2 font-weight-light">Sunny</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-img>

    <v-card-text class="font-weight-light mx-4">
      <v-row>
        <v-col>
          <v-btn-toggle v-model="selectedItem" color="surface-light" mandatory rounded="xl" group>
            <template v-for="btn in toggleItems">
              <v-btn :text="btn.title" :value="btn.value"></v-btn>
            </template>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
  import falloutImage from "@/assets/images/fallout/lucy-maclean-ella-462x260.jpg";
  import { onMounted, ref } from "vue";

  const toggleItems = ref([
    { title: "Left", value: "left" },
    { title: "Center", value: "center" },
    { title: "Right", value: "right" },
    { title: "Justify", value: "justify" }
  ]);

  const selectedItem = ref("center");

  const falloutGradient = computed(() =>
    themeName.value === "hct-dark"
      ? "to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.66)"
      : "to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.70)"
  );

  onMounted(() => {
    console.log("FalloutCard ::: onMounted");
  });
</script>
