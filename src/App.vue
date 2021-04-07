<template>
  <ion-app>
    <Header/>
    <Menu></Menu>
    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Header,
    Menu,
  }
});
</script>