<template>
  <v-container class="fill-height align-baseline px-2 px-sm-0 mx-auto">
    <v-responsive class="align-centerfill-height mx-auto" :max-width="mdAndUp ? 960 : '100%'">
      <v-img class="mb-4" height="128" src="@/assets/logo-128.png" />

      <v-spacer class="py-4"></v-spacer>

      <v-row>
        <v-col cols="12" sm="6">
          <v-card
            append-icon="mdi-open-in-new"
            prepend-icon="mdi-text-box-outline"
            title="Documentation"
            subtitle="Learn about all things Vuetify in our documentation."
            class="py-4"
            color="surface-variant"
            variant="text"
            rounded="lg"
            href="https://vuetifyjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card
            append-icon="mdi-open-in-new"
            prepend-icon="mdi-star-circle-outline"
            title="Features"
            subtitle="Explore available framework Features."
            class="py-4"
            color="surface-variant"
            variant="text"
            rounded="lg"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card
            append-icon="mdi-open-in-new"
            prepend-icon="mdi-widgets-outline"
            title="Components"
            subtitle="Discover components in the API Explorer."
            class="py-4"
            color="surface-variant"
            variant="text"
            rounded="lg"
            href="https://vuetifyjs.com/components/all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://discord.vuetifyjs.com"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Connect with Vuetify developers."
            target="_blank"
            title="Community"
            variant="text"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { onMounted } from "vue";
  import { useDisplay } from "vuetify";

  const { mdAndUp } = useDisplay();

  /**
   *
   */
  onMounted(() => {
    console.log("AppView ::: onMounted");
  });
</script>

<style scoped lang="scss">
  //
</style>
