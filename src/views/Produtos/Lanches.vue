<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col
              v-for="lanche in lanches"
              :key="lanche"
              size-md="4"
              size="10"
              class="ion-margin"
            >
              <ion-card @click="selecionado = lanche, openModal()">
                <ion-card-header>
                  <ion-card-subtitle>{{ lanche.name }}</ion-card-subtitle>
                  <ion-card-title v-if="lanche.promo">Promoção!</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-img
                    width="80"
                    height="100"
                    :src="lanche.img"
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
  name: "Lanches",
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
      lanches: [
        {
          id: 1,
          name: "Croissant",
          img: "https://livup.imgix.net/website/images/photos-big/croissant-70g-1591903582147.jpg?auto=format",
          valor: "R$7,90",
          descricao: "Macio na medida, e uma delícia com diferentes recheios, como manteiga, creme de avelã ou nossas pastas, por exemplo. E não tem erro: ainda combina com café, chá, suco..."
        },
        {
          id: 2,
          name: "Pão de Queijo com linhaça",
          img: "https://livup.imgix.net/website/images/photos-big/mini-pao-de-queijo-funcional-congelado.jpg?auto=format",
          valor: "R$5,90",
          descricao: "Clássico e saborosíssimo pão de queijo, receitinha minera que é motivo de paixão e orgulho nacional, ganha um toque super especial com as sementes de chia e linhaça orgânicas.",
        },
        {
          id: 3,
          name: "Crepioca com queijo",
          img: "https://livup.imgix.net/website/images/photos-big/crepioca-com-queijo-branco-80g.jpg?auto=format",
          valor: "R$8,90",
          descricao: "Como mata a fome e é bem nutritiva, a crepioca vai vem no café, lanche ou até mesmo no jantar."
        },
        {
          id: 4,
          name: "Panqueca de aveia, banana e canela",
          img: "https://livup.imgix.net/website/images/photos-big/pancake-congelada.jpg?auto=format",
          valor: "R$9,90",
          descricao: "Nossa panqueca de banana é baseada na receita americana - aquela panqueca mais alta e doce, comida no café da manhã ou sobremesa. ",
        },
        {
          id: 5,
          name: "Quiche de frango",
          img: "https://livup.imgix.net/website/images/photos-big/quiche-low-carb-de-frango-100g.jpg?auto=format",
          valor: "R$7,90",
          descricao:"O recheio de frango leva extrato de tomate, que dá um sabor especial e deixa o prato mais colorido. Tomilho, salsinha e outros temperos naturais dão as caras, mas de um jeito suave, para deixar um gostinho de quero mais sem roubar a cena do ingrediente principal..",
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
