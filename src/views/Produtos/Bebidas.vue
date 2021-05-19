<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col
              v-for="bebida in bebidas"
              :key="bebida"
              size-md="4"
              size="10"
              class="ion-margin"
            >
              <ion-card @click="selecionado = bebida, openModal()">
                <ion-card-header>
                  <ion-card-subtitle>{{ bebida.name }}</ion-card-subtitle>
                  <ion-card-title v-if="bebida.promo">Promoção!</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-img
                    width="80"
                    height="100"
                    :src="`./assets/img/${bebida.img}`"
                  ></ion-img>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonImg,
  IonModal,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import Modal from "./ModalDetalhe.vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    IonImg,
    // IonModal,
    // Modal,
  },
  data() {
    return {
      selecionado: {},
      bebidas: [
        {
          id: 1,
          name: "Chopp 500ml",
          img: "colorful-soda-drinks-macro-shot.jpg",
          valor: "R$10,90",
        },
        {
          id: 2,
          name: "Guaraná",
          img: "front-view-woman-eating-meat-burgers.jpg",
          valor: "R$10,90",
        },
        {
          id: 3,
          name: "Suco de Laranja",
          img:
            "stir-fried-chili-paste-with-chicken-in-white-plates-on-a-wooden-floor.jpg",
          valor: "R$10,90",
        },
        {
          id: 4,
          name: "Energético",
          img: "close-up-delicious-ice-cream-with-syrup.jpg",
          valor: "R$10,90",
        },
        {
          id: 5,
          name: "Agua",
          img: "/colorful-soda-drinks-macro-shot.jpg",
          valor: "R$10,90",
        },
      ],
    };
  },

  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: Modal,
        cssClass: "my-custom-class",
        componentProps: {
          title: "New Title",
          produto: this.selecionado,
        },
      });
      return modal.present();
    },
  },
});
</script>

<style scoped>
</style>