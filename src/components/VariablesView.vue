<template>
  <v-container class="fill-height" grid-list-xs>
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="text-center">
        <!-- <v-icon icon="mdi-account-box"></v-icon> -->
        <v-icon icon="$vuetify"></v-icon>
        <h1 class="text-h2 font-weight-bold code">Theme Builder Variables</h1>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup></script>

<style scoped lang="scss">
  .code {
    background-color: rgb(var(--v-theme-code));
    color: rgb(var(--v-theme-on-code));
  }
</style>
