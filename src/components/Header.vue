<template>
  <ion-header :translucent="true">
    <ion-toolbar style="display: flex;">
      <ion-buttons slot="start">
        <ion-menu-button>
        </ion-menu-button>
      </ion-buttons>
      <ion-title>Gourmet</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { IonHeader, IonTitle, IonButton, IonMenuButton, IonButtons, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    // IonButton,
    IonMenuButton
  },
  data() {
    return {
      inputs: "",
    }
  },
  methods: {
    }
  });
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
a {
  text-decoration: none;
  color: white
}

</style>