<template>
  <v-data-table
    :show-select="false"
    :headers="headers"
    :items="items"
    :search="search"
    density="compact"
    hover
  >
  <template #no-data>
    <div class="text-center py-4">
    <v-icon icon="mdi-database-off" class="mr-2" />
      Nenhum dado disponível
    </div>
  </template>

  <template #[`item.carbs`]="{ item }">
      <v-chip
        class="ma-2"
        color="primary"
        variant="outlined"
      >
      <v-icon icon="mdi-account-outline" start></v-icon>
        {{ 'Usuário' }}
      </v-chip>
    </template>

    <template #[`item.actions`]="{ item }">
      <div class="text-end">
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              icon="mdi-dots-vertical"
              variant="text"
              size="small"
              v-bind="props"
            ></v-btn>
          </template>

          <v-list density="compact">
            <v-list-item
              @click="handleAction('edit', item)"
              prepend-icon="mdi-pencil"
              title="Editar"
            />
            <v-divider/>
            <v-list-item
              @click="handleAction('delete', item
              )"
              prepend-icon="mdi-trash-can"
              title="Excluir"
            />
          </v-list>
        </v-menu>
      </div>
    </template>

    <template #top>
      <v-text-field
        v-model="search"
        label="Buscar"
        density="compact"
        class="pb-5"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
      ></v-text-field>
    </template>

  </v-data-table>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

defineProps<{
  headers: Array<any>;
  items: Array<any>;
}>();

const emit = defineEmits(['editItem', 'deleteItem']);
const search = ref('');

const handleAction = (actionCode: string, item: any) => {
  if (actionCode === 'edit') {
    emit('editItem', item);
  } else if (actionCode === 'delete') {
    emit('deleteItem', item);
  }
};
</script>
