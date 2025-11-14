<template>
    <v-navigation-drawer temporary >
    <v-app-bar-nav-icon
      @click="$emit('update:modelValue', false)"
      class="mt-2 ml-1"
    />
    <v-list>
      <v-list-item
       title="Home"
       class="cursor-pointer"
       prepend-icon="mdi-home"
       :to="{name: 'home'}"
       exact
      />
      <v-list-item
        title="Usuários"
        class="cursor-pointer"
        prepend-icon="mdi-account"
        :to="{name: 'usuarios'}"
      />

      <v-list-group value="Clientes">
        <template #activator="{props}">
          <v-list-item
           v-bind="props"
           prepend-icon="mdi-account-circle"
           title="Clientes"
          >
          </v-list-item>
        </template>
       <v-list-item
        class="cursor-pointer"
        prepend-icon="mdi-currency-usd"
        title="Vendas"
        />
       <v-list-item
        class="cursor-pointer"
        prepend-icon="mdi-chart-line"
        title="Relatório"
        />
      </v-list-group>
    </v-list>
   </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();
const emit = defineEmits(['update:modelValue']);

watch(
  () => route.fullPath,
  () => {
    emit('update:modelValue', false);
  }
);
</script>
