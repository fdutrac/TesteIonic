<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    {{ produto.img }}
    {{ produto.valor }}
  </ion-content>
  <ion-footer>
    <ion-button @click="fecharModal" color="primary">X</ion-button>
  </ion-footer>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { modalController } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" },
    produto: {
      img: "",
      valor: "",
      // descricao: { type: String },
    },
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  methods: {
    fecharModal() {
      modalController.dismiss();
    }
  }
});
</script>