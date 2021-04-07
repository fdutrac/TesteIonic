<template>
  <ion-page>
    <ion-container style="margin-top:25%;" class="ion-text-center">
      <ion-item>
        <ion-label>Qual a nota que este trabalho merece?</ion-label>
        <ion-badge color="primary">10</ion-badge>
      </ion-item>
      <ion-item>
        <ion-label>Qual a nota que esta materia merece?</ion-label>
        <ion-badge color="secondary">10!</ion-badge>
      </ion-item>
    </ion-container>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonBadge } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Badges',
  components: {
    IonPage,
    IonBadge,
  },
});
</script>

<style scoped>

</style>