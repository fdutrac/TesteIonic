<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col
              v-for="categoria in categorias"
              :key="categoria"
              size-md="4"
              size="10"
              class="ion-margin"
            >
              <router-link v-if="!categoria.promo" :to="categoria.route">
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>{{ categoria.title }}</ion-card-subtitle>
                    <ion-card-title v-if="categoria.promo"
                      >Promoção!</ion-card-title
                    >
                  </ion-card-header>

                  <ion-card-content>
                    <ion-img
                      width="80"
                      height="100"
                      :src="categoria.img"
                    ></ion-img>
                    <ion-text v-if="categoria.promo">{{
                      categoria.promo
                    }}</ion-text>
                  </ion-card-content>
                </ion-card>
              </router-link>
              <ion-card v-if="categoria.promo" @click="selecionado = categoria, openModal()">
                <ion-card-header>
                  <ion-card-subtitle>{{ categoria.title }}</ion-card-subtitle>
                  <ion-card-title v-if="categoria.promo"
                    >Promoção!</ion-card-title
                  >
                </ion-card-header>

                <ion-card-content>
                  <ion-img
                    width="80"
                    height="100"
                    :src="categoria.img"
                  ></ion-img>
                  <ion-text v-if="categoria.promo">{{
                    categoria.promo
                  }}</ion-text>
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
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonText,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import Modal from "./Produtos/ModalDetalhe.vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonText,
    
  },
  data() {
    return {
      selecionado: {},
      categorias: [
        {
          id: 1,
          title: "Bebidas",
          route: "/bebidas",
          img: "https://livup.imgix.net/website/images/photos-big/suco-verde-1l-green-people-1000g-1591904636301.jpg?auto=format",
          // img: '/burgers.jpg',
        },
        {
          id: 2,
          title: "Lanches",
          route: "/lanches",
          img: "https://livup.imgix.net/website/images/photos-big/bolinhas-de-tapioca-com-chia-e-linhaca.jpg?auto=format",
          // img: '/burgers.png',
        },
        {
          id: 3,
          title: "Pratos",
          route: "/pratos",
          img: "https://livup.imgix.net/website/images/photos-big/couscous-marroquino-com-castanha-de-caju-e-passas--mix-de-cogumelos--lascas-de-abobora-com-oleo-de-coco-320g-1591912223513.jpg?auto=format",
        },
        {
          id: 4,
          title: "Sobremesas",
          route: "/sobremesas",
          img: "https://livup.imgix.net/website/images/photos-big/petit-gateau-50g.jpg?auto=format",
        },
        {
          id: 5,
          title: "Prato do Dia",
          name: "Segunda: Avocado, Torta e Sorvete",
          img: "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2021/02/17/cardapio-sem-lactose-768x523.jpg",
          promo: "Entrada, Prato Principal e Sobremesa!",
          descricao: "Saboroso avocado, torta de legumes super temperada e um delicioso sorvete de morango natural, em preço promocional!",
          valor: "R$35,90"
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