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
                    :src="bebida.img"
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
  // IonModal,
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
          name: "Bebida Vegetal de Amêndoa",
          img: "https://livup.imgix.net/website/images/photos-big/leite-vegetal-de-amendoa-integral-1000g-1620144971104.jpg?auto=format",
          valor: "R$10,90",
          descricao: "Se você acha que já tomou leite vegetal de amêndoas e que é tudo igual, é melhor experimentar o da Tal da Castanha. Esse produto, além de delicioso, vai além dos demais porque não leva gomas, espessantes e conservantes, como muitos outros do mercado.Experimente e sinta essa gostosa diferença."
        },
        {
          id: 2,
          name: "Suco Verde",
          img: "https://livup.imgix.net/website/images/photos-big/suco-verde-1l-green-people-1000g-1591904636301.jpg?auto=format",
          valor: "R$9,90",
          descricao: "O suco verde é para aquela pessoa que procura uma bebida natural ao seu alcance. Refresca, traz o docinho da maçã, as fibras da couve e algumas notas de cenoura.",
        },
        {
          id: 3,
          name: "Suco de Abacaxi com Hortelã",
          img: "https://livup.imgix.net/website/images/photos-big/suco-de-abacaxi-com-hortela-green-people-250g-1591904813983.jpg?auto=format",
          valor: "R$11,90",
          descricao: "Um suco refrescante para qualquer ocasião. Abacaxi com hortelã é cítrico, doce e muito equilibrado.Traz o sabor inconfundível da fruta, com a fragrância inigualável do hortelã. "
        },
        {
          id: 4,
          name: "Chá de Hibisco",
          img: "https://livup.imgix.net/website/images/photos-big/cha-hibisco-250ml-green-people-250g-1608580131902.jpg?auto=format",
          valor: "R$6,90",
          descricao: "O hibisco aparece de forma suave com a companhia do gengibre, que tem o sabor bem presente, e do abacaxi, que dá um toque de frescor a esse chá",
        },
        {
          id: 5,
          name: "Suco de Laranja e Mamão",
          img: "https://livup.imgix.net/website/images/photos-big/suco-de-laranja-com-mamao-green-people-250g-1591904532323.jpg?auto=format",
          valor: "R$7,90",
          descricao:"Um suco rico em vitamina C, com a acidez e frescor da laranja, e o lado mais doce e cremoso do mamão. É a combinação perfeita de frutas pra acompanhar suas refeições ou só matar a vontade de algo gostoso.",
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