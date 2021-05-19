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
              <router-link :to="categoria.route">
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>{{ categoria.name }}</ion-card-subtitle>
                    <ion-card-title v-if="categoria.promo"
                      >Promoção!</ion-card-title
                    >
                  </ion-card-header>

                  <ion-card-content>
                    <ion-img
                      width="80"
                      height="100"
                      :src="`./assets/img/${categoria.img}`"
                    ></ion-img>
                    <ion-text v-if="categoria.promo">{{
                      categoria.promo
                    }}</ion-text>
                  </ion-card-content>
                </ion-card>
              </router-link>
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
} from "@ionic/vue";
import { defineComponent } from "vue";

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
      categorias: [
        {
          id: 1,
          name: "Bebidas",
          route: "/bebidas",
          img: "colorful-soda-drinks-macro-shot.jpg",
          // img: '/burgers.jpg',
        },
        {
          id: 2,
          name: "Lanches",
          route: "/lanches",
          img: "front-view-woman-eating-meat-burgers.jpg",
          // img: '/burgers.png',
        },
        {
          id: 3,
          name: "Pratos",
          route: "/pratos",
          img:
            "stir-fried-chili-paste-with-chicken-in-white-plates-on-a-wooden-floor.jpg",
        },
        {
          id: 4,
          name: "Sobremesas",
          route: "/sobremesas",
          img: "close-up-delicious-ice-cream-with-syrup.jpg",
        },
        {
          id: 5,
          name: "Prato do Dia",
          route: "/prato-do-dia",
          img: "/colorful-soda-drinks-macro-shot.jpg",
          promo: "Entrada, Prato Principal e Sobremesa!",
        },
      ],
    };
  },
});
</script>

<style scoped>
/* #container {
  text-align: center;
  margin-top: 40px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #5e5e5e;

  margin: 0;
}

#container a {
  text-decoration: none;

} */
</style>