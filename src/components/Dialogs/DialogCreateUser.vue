<template>
  <v-dialog width="600px" :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <v-card>
      <v-card-title class="text-blue-grey-darken-2 mt-1">Adicionar usuário</v-card-title>
      <v-col>
        <v-divider color="grey-darken-2" />
      </v-col>
     <v-form ref="form" @submit.prevent="submitForm">
      <v-card-text class="mt-2">
        <v-row>
          <v-col>
            <v-text-field
              density="compact"
              label="Nome"
              variant="outlined"
              :rules="nameRules"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              density="compact"
              label="Email"
              variant="outlined"
              :rules="emailRules"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-col>
          <v-row class="mt-1">
            <!-- para multiplas seleções adicione: multiple -->
            <v-select
              density="compact"
              variant="outlined"
              label="Cargo"
              :rules="perfilRules"
              :items="['Administrador', 'Usuário']"
            ></v-select>
          </v-row>
        </v-col>
      </v-card-text>
      <v-col>
        <v-divider color="grey-darken-2" />
      </v-col>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('update:modelValue', false)" variant="tonal" color="text">Cancelar</v-btn>
        <v-btn type="submit" variant="tonal" color="primary" >Salvar</v-btn>
      </v-card-actions>
    </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'createUser', value: boolean): void;
}>();

const form = ref<any>(null);

const submitForm = async () => {
    if (!form.value) return;
     const { valid } = await form.value.validate();
    if (valid) {
        emit('createUser', true);
    }
};

const emailRules =[
  value => {
    if (value) return true
       return 'Campo obrigatório.'
     },
  value=> (/.+@.+\..+/.test(value) ? true : 'E-mail deve ser válido.')
];

const nameRules =[
  value => {
    if (value) return true
       return 'Campo obrigatório.'
     },
  value => {
     if (value?.length <= 10) return true
       return 'O nome deve ter no máximo 10 caracteres.'
  },
];
const perfilRules =[
  value => {
    if (value) return true
       return 'Campo obrigatório.'
     },
];
</script>

