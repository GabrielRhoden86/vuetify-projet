<template>
  <v-container>
    <v-row>
      <v-col>
      <v-card class="pa-5 mt-4">
          <div class="d-flex align-center justify-space-between pa-4">
            <h2 class="text-blue-grey-darken-2 pb-2">Usuários</h2>
          </div>
          <Table
          :headers="headers"
          :items="desserts"
          @editItem="handleEdit"
          @deleteItem="handleDelete"
        />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import Table from '@/components/Table.vue';

const search = ref('')
const loading = ref(false)

const headers = [
  {
    align: 'start',
    key: 'name',
    sortable: false,
    title: 'Dessert (100g serving)',
  },
  { key: 'calories', title: 'Calories' },
  { key: 'fat', title: 'Fat (g)' },
  { key: 'carbs', title: 'Carbs (g)' },
  { key: 'protein', title: 'Protein (g)' },
  { key: 'iron', title: 'Iron (%)' },
  { key: 'actions', title: 'Ações', sortable: false, align: 'end' },
]

const desserts = [
  { name: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4, iron: 1 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3, iron: 1 },
  { name: 'Eclair', calories: 262, fat: 16, carbs: 23, protein: 6, iron: 7 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: 8 },
  { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9, iron: 16 },
  { name: 'Jelly bean', calories: 375, fat: 0, carbs: 94, protein: 0, iron: 0 },
  { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: 2 },
  { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: 45 },
  { name: 'Donut', calories: 452, fat: 25, carbs: 51, protein: 4.9, iron: 22 },
  { name: 'KitKat', calories: 518, fat: 26, carbs: 65, protein: 7, iron: 6 },
  { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9, iron: 16 },
  { name: 'Jelly bean', calories: 375, fat: 0, carbs: 94, protein: 0, iron: 0 },
  { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: 2 },
  { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: 45 },
  { name: 'Donut', calories: 452, fat: 25, carbs: 51, protein: 4.9, iron: 22 },
  { name: 'KitKat', calories: 518, fat: 26, carbs: 65, protein: 7, iron: 6 },
]

const handleEdit = (item) => {
  console.log(`Editando item com nome: ${item.name}`);
};

const handleDelete = (item) => {
  console.log(`Deletando item com nome: ${item.name}`);
};
</script>

<style>
th{
  background-color: #f0efef;
}

</style>
