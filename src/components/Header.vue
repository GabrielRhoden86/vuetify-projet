<template>
   <v-app-bar flat class="border-b elevation-2">
      <v-app-bar-nav-icon @click="$emit('toggleDrawer')" />
      <v-app-bar-title class="text-blue-grey-darken-2">Aplication</v-app-bar-title>
      <template #append>

      <v-btn @click="isDialog = true" icon>
       <v-icon size="28">
        mdi-account-plus
       </v-icon>
       <v-tooltip
        text="Criar usuário"
        activator="parent"
        location="bottom"
       >
      </v-tooltip>
      </v-btn>

      <v-menu>
        <template #activator="{props}">
         <v-btn icon class="mr-4" v-bind="props">
          <v-badge location="top right" color="warning" content="5">
          <v-icon icon="mdi-bell"></v-icon>
         </v-badge>

          <v-tooltip
           text="Notificações"
           activator="parent"
           location="bottom"
           >
          </v-tooltip>

        </v-btn>
       </template>

        <v-list lines="two">
          <v-list-item>
           <v-list-item-title>
            Notificações
           </v-list-item-title>
          </v-list-item>
          <v-divider/>

          <v-list-item
             prepend-icon="mdi-email-open-outline"
            :title="'Item'"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          >
          </v-list-item>
          <v-list-item
             prepend-icon="mdi-email"
             :title="'Item'">
            <p class="font-weight-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </v-list-item>

          <v-list-item
             prepend-icon="mdi-email"
             :title="'Item'">
            <p class="font-weight-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </v-list-item>
        </v-list>

      </v-menu>

      <v-menu>
          <template #activator="{props}">
           <v-avatar v-bind="props">
            <v-img src="https://randomuser.me/api/portraits/men/43.jpg">
            </v-img>
            <v-tooltip
             text="Perfil "
             activator="parent"
             location="bottom"
            />
           </v-avatar>
          </template>

          <v-card min-width="165px" >
          <v-list :list="false" density="compact" nav >
            <v-list-item
              prepend-icon="mdi-account-outline">
             <v-list-item-title>Meu Perfil</v-list-item-title>
            </v-list-item>
            <v-divider color="grey-darken-2" />

            <v-list-item prepend-icon="mdi-heart-outline">
             <v-list-item-title>Favoritos</v-list-item-title>
            </v-list-item>

          </v-list>
         </v-card>
      </v-menu>

      </template>
    </v-app-bar>

    <DialogCreateUser
      v-model="isDialog"
      @createUser="handleCreateUser"
    />
</template>

<script  lang="ts" setup>
  import { ref } from 'vue';
  import DialogCreateUser from '@/components/Dialogs/DialogCreateUser.vue';

  defineEmits(['toggleDrawer']);
  const isDialog = ref(false);
  const handleCreateUser = () => {
    console.log("Evento 'createUser' recebido no componente pai!");
};
</script>
