<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size-md="4" size="10" class="ion-margin">
              <ion-list>
                <ion-item v-for="fruta in frutas" :key="fruta">
                  <ion-label @click="openToast(fruta)">{{ fruta }}</ion-label>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, toastController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
  },
  data() {
    return {
      frutas: ["Maçã","Banana","Pera","Mamão","Lichia"],
      data: {}
    }
  },
  methods: {
    async openToast(listItem: string) {
      const toast = await toastController
        .create({
          message: `Você selecionou a opção ${listItem}!`,
          duration: 2000
        })
      return toast.present();
    },
  },
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

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>