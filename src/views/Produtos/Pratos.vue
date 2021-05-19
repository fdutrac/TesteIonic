<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col
              v-for="prato in pratos"
              :key="prato"
              size-md="4"
              size="10"
              class="ion-margin"
            >
              <ion-card @click="selecionado = prato, openModal()">
                <ion-card-header>
                  <ion-card-subtitle>{{ prato.name }}</ion-card-subtitle>
                  <ion-card-title v-if="prato.promo">Promoção!</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-img
                    width="80"
                    height="100"
                    :src="prato.img"
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
      pratos: [
        {
          id: 1,
          name: "Camarão ao Leite de Coco e Curry",
          img: "https://livup.imgix.net/website/images/photos-big/camarao-ao-leite-de-coco-e-curry-110g-1591913484448.jpg?auto=format",
          valor: "R$27,90",
          descricao: "O camarão ao leite de coco e curry é uma receita muito saborosa e inspirada na cozinha tailandesa. É quente, cheia de tempero e super saudável."
        },
        {
          id: 2,
          name: "Moqueca de Peixe",
          img: "https://livup.imgix.net/website/images/photos-big/moqueca-de-peixe.jpg?auto=format",
          valor: "R$25,90",
          descricao: "A moqueca é uma receita tradicional brasileira que leva legumes, leite de coco, azeite de dendê e filé de peixe.",
        },
        {
          id: 3,
          name: "Nhoque de Mandioquinha",
          img: "https://livup.imgix.net/website/images/photos-big/nhoque-de-mandioquinha--molho-de-tomate-240g-1591911576597.jpg?auto=format",
          valor: "R$18,90",
          descricao: "Nhoque de mandioquinha, massa toda natural feita com somente com a mandioquinha, conhecida por ai como batata baroa."
        },
        {
          id: 4,
          name: "Ravioli de Gorgonzola ao molho de tomate",
          img: "https://livup.imgix.net/website/images/photos-big/ravioli-de-gorgonzola-pera-e-nozes-com-molho-de-tomate-260g.jpg?auto=format",
          valor: "R$19,90",
          descricao: "Um ravioli rosa com um molho vermelho não é só mais um pratinho bonito: é, também, uma opção muito gostosa. O molho de tomate é uma boa pedida pra quem quer deixar o prato mais leve e natural.",
        },
        {
          id: 5,
          name: "Couscous com castanha de caju",
          img: "https://livup.imgix.net/website/images/photos-big/couscous-marroquino-com-castanha-de-caju-e-passas--mix-de-cogumelos--lascas-de-abobora-com-oleo-de-coco-320g-1591912223513.jpg?auto=format",
          valor: "R$27,90",
          descricao:"Explosão de sabor num prato totalmente vegetariano! Vem uma porção do couscous, prato de origem marroquina, que é ótimo para substituir o arroz de uma maneira bem gostosa. Junto, vem dois acompanhamentos que estão longe de serem meros coadjuvantes.Vem uma porção dos nossos cogumelos fresquinhos refogados no azeite e uma porção de abóbora japonesa em lascas assada com óleo de coco.",
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