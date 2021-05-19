<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col
              v-for="sobremesa in sobremesas"
              :key="sobremesa"
              size-md="4"
              size="10"
              class="ion-margin"
            >
              <ion-card @click="selecionado = sobremesa, openModal()">
                <ion-card-header>
                  <ion-card-subtitle>{{ sobremesa.name }}</ion-card-subtitle>
                  <ion-card-title v-if="sobremesa.promo">Promoção!</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-img
                    width="80"
                    height="100"
                    :src="sobremesa.img"
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
      sobremesas: [
        {
          id: 1,
          name: "Pudim de Tapioca",
          img: "https://livup.imgix.net/website/images/photos-big/pudim-de-tapioca-com-manga-e-coco-80g-1615821283893.jpg?auto=format",
          valor: "R$7,90",
          descricao: "Uma releitura tropical de um dos doces mais amados no Brasil, o pudim. Este é feito com creme de manga, leite de coco e coco ralado."
        },
        {
          id: 2,
          name: "Brownie 70% cacau",
          img: "https://livup.imgix.net/website/images/photos-big/brownie-70-cacau-congelado.jpg?auto=format",
          valor: "R$6,90",
          descricao: "Bateu a vontade de comer um doce gostoso? Que tal nosso brownie? Ele é feito com um super chocolate que tem 70% de cacau, que dá um sabor intenso e uma cremosidade sem igual.",
        },
        {
          id: 3,
          name: "Cookie com gotas de chocolate",
          img: "https://livup.imgix.net/website/images/photos-big/cookie-com-gotas-de-chocolate-70-cacau-40g-1594987102604.jpg?auto=format",
          valor: "R$4,90",
          descricao: "Utilizamos chocolate 70% cacau para gotas com sabor intenso de chocolate. Para adoçar, preferimos usar o açúcar de coco que, além de ser bem mais saudável, tem um leve sabor de caramelo."
        },
        {
          id: 4,
          name: "Petit Gateau",
          img: "https://livup.imgix.net/website/images/photos-big/petit-gateau-50g.jpg?auto=format",
          valor: "R$12,90",
          descricao: "Essa versão do clássico petit gateau não tem açúcar, mas tem taaaaaaaaanto chocolate! E tem três texturas bem chocolatudas: a “casca” do bolo é mais sequinha, o miolo é úmido, escuro e bem macio, e então vem a calda - cremosa, acetinada e quentinha!",
        },
        {
          id: 5,
          name: "Cheesecake de frutas vermelhas",
          img: "https://livup.imgix.net/website/images/photos-big/cheesecake-de-frutas-vermelhas-65g.jpg?auto=format",
          valor: "R$11,90",
          descricao:"Uma palavra pra definir esse cheesecake? Delicadeza. Feito com ricota, ele tem uma textura super leve e vai se dissolvendo na boca, adoçando seu paladar.Pra equilibrar, a geleia de frutas vermelhas aparece com frescor e uma acidez deliciosa.",
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