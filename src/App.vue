<template>
  <v-app>
   <router-view />

     <!-- Overlay Global de Loading
    <v-overlay
      v-model="isLoading"
      class="align-center justify-center"
      persistent
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    -->

    <v-snackbar
      v-model="show"
      :color="color"
      elevation="34"
      :timeout="5000"
    >
    <span>
      {{ message }}
    </span>
    <template v-slot:actions>
      <v-btn variant="text" @click="show = false">Fechar</v-btn>
    </template>
  </v-snackbar>

  </v-app>
</template>

<script lang="ts" setup>
import { useToastStore } from '@/stores/toastStore'
import { useLoadingStore } from '@/stores/loadingStore'
import { storeToRefs } from 'pinia';

const toastStore = useToastStore();
const loadingStore = useLoadingStore();
const { show, message, color } = storeToRefs(toastStore);
const { isLoading } = storeToRefs(loadingStore);

</script>
