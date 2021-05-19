<template>
  <ion-page>
    <ion-container style="margin-top:25%;" class="ion-text-center">
      <ion-text color="white" >
        <h1>Seja Bem Vindo!</h1>
      </ion-text>
      <router-link to="/home">
        <ion-button class="">Voltar para Home</ion-button>
      </router-link>
    </ion-container>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonText } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Welcome',
  components: {
    IonPage,
    IonText,
  },
});
</script>

<style scoped>

</style>