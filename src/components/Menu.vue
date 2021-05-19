<template>
  <ion-menu side="start" menu-id="custom" class="my-custom-menu" content-id="main">
    <ion-header>
      <ion-toolbar color="">
        <ion-title>Menu Navegação</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <router-link style="text-decoration: none" :to="`/bebidas`">
          <ion-item>Bebidas</ion-item>
        </router-link>
        <router-link style="text-decoration: none" to='/lanches'>
          <ion-item>Lanches</ion-item>
        </router-link>
        <router-link style="text-decoration: none" to='/sobremesas'>
          <ion-item>Sobremesas</ion-item>
        </router-link>
        <router-link style="text-decoration: none" to='/Pratos'>
          <ion-item>Pratos</ion-item>
        </router-link>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<style>
.my-custom-menu {
  --width: 300px;
}
</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonTitle, 
  IonToolbar,
  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonTitle, 
    IonToolbar
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    openEnd() {
      menuController.open('end');
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    }
  }
});
</script>